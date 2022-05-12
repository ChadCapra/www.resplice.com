import * as reproto from '@resplice/proto'
import type {
  CreateSession,
  VerifySessionEmail,
  VerifySessionPhone
} from '@resplice/proto/dist/auth/request/session'
import type { CreateAccount } from '@resplice/proto/dist/user/request/account'
import { encode, encodeClientMessageWrapper } from '$services/proto'
import {
  buildReCrypto,
  importPublicKey,
  publicKeyEncrypt,
  combineBufferArrays,
  type ReCrypto
} from '$services/crypto'
import {
  deserializeServerMessage,
  serializeClientMessage
} from '$services/serde'
import mockAuthClientFactory from '$services/mocks/authClient'

import type { Api } from '$services/api/http'
import type { DB } from '$services/db'
import type { Session } from '$types/session'
import type { PhoneValue, EmailValue } from '$types/attribute'

const ClientMessageType = reproto.client_request.ClientRequestType

type CreateSessionRequest = {
  phone: PhoneValue
  email: EmailValue
  rememberMe: boolean
}

type CreateAccountRequest = {
  name: string
  avatar: Blob | null
  handle: string
}

type VerifyRequest = {
  verificationToken: number
}

export interface AuthClient {
  submitRecaptchaToken: (token: string) => Promise<boolean>
  createSession: (params: CreateSessionRequest) => Promise<Session>
  verifyEmail: (params: VerifyRequest) => Promise<Session>
  verifyPhone: (params: VerifyRequest) => Promise<Session>
  createAccount: (params: CreateAccountRequest) => Promise<Session>
}

function authClientFactory(api: Api, db: DB, returnMock = false): AuthClient {
  if (returnMock) return mockAuthClientFactory()

  let recrypto: ReCrypto | null = null

  return {
    submitRecaptchaToken: (token) =>
      api.post({
        endpoint: '/session/recaptcha-token',
        data: token,
        useBinary: false
      }),
    createSession: async (params) => {
      const publicKey = await fetchServerPublicKey(api)
      recrypto = await buildReCrypto()

      const createSessionMessage: CreateSession = {
        email: params.email.email,
        phone: { ...params.phone, extension: params.phone.extension || 0 },
        rememberMe: params.rememberMe,
        aesKeyIvBase: combineBufferArrays(recrypto.baseIV, recrypto.rawKey)
      }

      const [counter] = await db.insert('events', createSessionMessage)

      const createSessionBytes = encode({
        type: ClientMessageType.SESSION_CREATE,
        data: createSessionMessage
      })

      const encryptedMessage = await publicKeyEncrypt(
        publicKey,
        createSessionBytes
      )

      const clientMessage: reproto.client_request.ClientRequest = {
        requestId: counter,
        requestType: ClientMessageType.SESSION_CREATE,
        encryptedPayload: encryptedMessage
      }
      const clientMessageBytes = encodeClientMessageWrapper(clientMessage)

      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/do',
        data: clientMessageBytes
      })

      return deserializeServerMessage(new Uint8Array(resBuffer), recrypto)
    },
    verifyEmail: async (params) => {
      checkAesKey(recrypto)

      const msg: VerifySessionEmail = {
        verificationToken: params.verificationToken
      }
      const [counter] = await db.insert('events', msg)
      const clientMessageBytes = await serializeClientMessage(
        {
          type: ClientMessageType.SESSION_VERIFY_EMAIL,
          data: msg
        },
        counter,
        recrypto
      )

      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/do',
        data: clientMessageBytes
      })

      return deserializeServerMessage(new Uint8Array(resBuffer), recrypto)
    },
    verifyPhone: async (params) => {
      checkAesKey(recrypto)

      const msg: VerifySessionPhone = {
        verificationToken: params.verificationToken
      }
      const [counter] = await db.insert('events', msg)
      const clientMessageBytes = await serializeClientMessage(
        {
          type: ClientMessageType.SESSION_VERIFY_PHONE,
          data: msg
        },
        counter,
        recrypto
      )

      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/do',
        data: clientMessageBytes
      })

      return deserializeServerMessage(new Uint8Array(resBuffer), recrypto)
    },
    createAccount: async (params) => {
      checkAesKey(recrypto)

      const msg: CreateAccount = {
        name: params.name,
        handle: params.handle,
        avatar: new Uint8Array(await params.avatar.arrayBuffer())
      }
      const [counter] = await db.insert('events', msg)
      const clientMessageBytes = await serializeClientMessage(
        {
          type: ClientMessageType.ACCOUNT_CREATE,
          data: msg
        },
        counter,
        recrypto
      )

      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/do',
        data: clientMessageBytes
      })

      return deserializeServerMessage(new Uint8Array(resBuffer), recrypto)
    }
  }
}

function checkAesKey(recrypto: ReCrypto | null) {
  if (!recrypto) throw new Error('Invalid AES Key')
}

async function fetchServerPublicKey(api: Api) {
  const key: ArrayBuffer = await api.get({ endpoint: '/pub-key' })
  return importPublicKey(key)
}

export const contextKey = 'AuthClient'

export default authClientFactory
