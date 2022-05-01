import * as reproto from '@resplice/proto'
import type {
  CreateSession,
  VerifySessionEmail,
  VerifySessionPhone
} from '@resplice/proto/dist/auth/request/session'
import type { CreateAccount } from '@resplice/proto/dist/user/request/account'
import {
  encode,
  decode,
  encodeClientMessageWrapper,
  decodeServerMessageWrapper
} from '$services/proto'
import {
  ReCrypto,
  importPublicKey,
  encrypt,
  decrypt,
  calculateClientIV,
  calculateServerIV,
  publicKeyEncrypt,
  combineBufferArrays
} from '$services/crypto'
import mockAuthClientFactory from '$services/mocks/authClient'

import type { Api } from '$services/api/http'
import type { Session } from '$types/session'
import type { PhoneValue, EmailValue } from '$types/attribute'

const ServerMessageType = reproto.server_message.ServerMessageType
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
  getActiveSession: () => Promise<Session | null>
  createSession: (params: CreateSessionRequest) => Promise<Session>
  verifyEmail: (params: VerifyRequest) => Promise<Session>
  verifyPhone: (params: VerifyRequest) => Promise<Session>
  createAccount: (params: CreateAccountRequest) => Promise<Session>
}

function authClientFactory(api: Api, returnMock = false): AuthClient {
  if (returnMock) return mockAuthClientFactory()

  let recrypto: ReCrypto | null = null

  return {
    submitRecaptchaToken: (token) =>
      api.post({
        endpoint: '/session/recaptcha-token',
        data: token,
        useBinary: false
      }),
    // TODO: This can probably go away
    getActiveSession: async () => {
      try {
        checkAesKey(recrypto)
        const resBuffer: ArrayBuffer = await api.get({
          endpoint: '/session/active'
        })
        return handleServerMessage({
          recrypto,
          messageType: ServerMessageType.CURRENT_SESSION,
          data: new Uint8Array(resBuffer)
        })
      } catch {
        return null
      }
    },
    createSession: async (params) => {
      const publicKey = await fetchServerPublicKey(api)
      recrypto = await ReCrypto.generateAesKey()

      const createSessionMessage: CreateSession = {
        email: params.email.email,
        phone: { ...params.phone, extension: params.phone.extension || 0 },
        rememberMe: params.rememberMe,
        aesKeyIvBase: combineBufferArrays(recrypto.baseIV, recrypto.rawKey)
      }

      const createSessionBytes = encode({
        type: ClientMessageType.SESSION_CREATE,
        msg: createSessionMessage
      })

      const encryptedMessage = await publicKeyEncrypt(
        publicKey,
        createSessionBytes
      )

      const clientMessage: reproto.client_request.ClientRequest = {
        requestId: recrypto.counter,
        requestType: ClientMessageType.SESSION_CREATE,
        encryptedPayload: encryptedMessage
      }
      const clientMessageBytes =
        reproto.client_request.ClientRequest.encode(clientMessage).finish()

      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/do',
        data: clientMessageBytes
      })

      return handleServerMessage({
        recrypto,
        messageType: ServerMessageType.CURRENT_SESSION,
        data: new Uint8Array(resBuffer)
      })
    },
    verifyEmail: async (params) => {
      checkAesKey(recrypto)

      const msg: VerifySessionEmail = {
        verificationToken: params.verificationToken
      }
      const clientMessageBytes = await prepareClientMessage({
        recrypto,
        messageType: ClientMessageType.SESSION_VERIFY_EMAIL,
        msg
      })

      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/do',
        data: clientMessageBytes
      })

      return handleServerMessage({
        recrypto,
        messageType: ServerMessageType.CURRENT_SESSION,
        data: new Uint8Array(resBuffer)
      })
    },
    verifyPhone: async (params) => {
      checkAesKey(recrypto)

      const msg: VerifySessionPhone = {
        verificationToken: params.verificationToken
      }
      const clientMessageBytes = await prepareClientMessage({
        recrypto,
        messageType: ClientMessageType.SESSION_VERIFY_PHONE,
        msg
      })

      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/do',
        data: clientMessageBytes
      })

      return handleServerMessage({
        recrypto,
        messageType: ServerMessageType.CURRENT_SESSION,
        data: new Uint8Array(resBuffer)
      })
    },
    createAccount: async (params) => {
      checkAesKey(recrypto)

      const msg: CreateAccount = {
        name: params.name,
        handle: params.handle,
        avatar: new Uint8Array(await params.avatar.arrayBuffer())
      }
      const clientMessageBytes = await prepareClientMessage({
        recrypto,
        messageType: ClientMessageType.ACCOUNT_CREATE,
        msg
      })

      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/do',
        data: clientMessageBytes
      })

      return handleServerMessage({
        recrypto,
        messageType: ServerMessageType.CURRENT_SESSION,
        data: new Uint8Array(resBuffer)
      })
    }
  }
}

type PrepareParams = {
  recrypto: ReCrypto
  messageType: reproto.client_request.ClientRequestType
  msg: unknown
}
async function prepareClientMessage({
  recrypto,
  messageType,
  msg
}: PrepareParams) {
  const counter = recrypto.counter
  const msgBytes = encode({
    type: messageType,
    msg
  })
  const clientIV = calculateClientIV(recrypto.baseIV, counter)
  const encryptedPayload = await encrypt(recrypto.key, clientIV, msgBytes)
  const clientMessage: reproto.client_request.ClientRequest = {
    requestId: counter,
    requestType: messageType,
    encryptedPayload
  }
  return encodeClientMessageWrapper(clientMessage)
}

type HandleParams = {
  recrypto: ReCrypto
  messageType: reproto.server_message.ServerMessageType
  data: Uint8Array
}
async function handleServerMessage({
  recrypto,
  messageType,
  data
}: HandleParams) {
  const serverMessage = decodeServerMessageWrapper(data)
  const serverIV = calculateServerIV(recrypto.baseIV, serverMessage.messageId)
  const decryptedMessage = await decrypt(
    recrypto.key,
    serverIV,
    serverMessage.encryptedPayload
  )
  return decode({
    type: messageType,
    data: decryptedMessage
  })
}

function checkAesKey(recrypto: ReCrypto | null) {
  if (!recrypto) throw new Error('Invalid AES Key')
}

async function fetchServerPublicKey(api: Api) {
  const key: ArrayBuffer = await api.get({ endpoint: '/pub-key' })
  return importPublicKey(new Uint8Array(key))
}

export const contextKey = 'AuthClient'

export default authClientFactory
