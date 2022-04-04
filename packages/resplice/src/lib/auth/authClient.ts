import * as reproto from '$lib/reproto'
import {
  encode,
  decode,
  encodeClientMessageWrapper,
  decodeServerMessageWrapper
} from '$services/proto'
import {
  generateAesKey,
  importPublicKey,
  encrypt,
  decrypt,
  publicKeyEncrypt
} from '$services/crypto'
import mockAuthClientFactory from '$services/mocks/authClient'

import type { Api } from '$services/api/http'
import type { Session } from '$types/session'

const ServerMessageType = reproto.server_message.ServerMessageType
const ClientMessageType = reproto.client_request.ClientRequestType

type CreateSessionRequest = {
  phone: string
  email: string
  remember_me: boolean
}

type CreateAccountRequest = {
  name: string
  avatar: Blob | null
  handle: string
}

type VerifyRequest = {
  verification_token: string
}

export interface AuthClient {
  submitRecaptchaToken: (token: string) => Promise<boolean>
  getActiveSession: () => Promise<Session | null>
  createSession: (params: CreateSessionRequest) => Promise<Session>
  verifyEmail: (params: VerifyRequest) => Promise<Session>
  verifyPhone: (params: VerifyRequest) => Promise<Session>
  createAccount: (params: CreateAccountRequest) => Promise<Session>
}

// TODO: There is a lot of repeated code, could be cleaned up
function authClientFactory(api: Api, returnMock = false): AuthClient {
  if (returnMock) return mockAuthClientFactory()

  let aesKey: CryptoKey | null = null
  let latestTransactionId = 0

  return {
    submitRecaptchaToken: (token) =>
      api.post({
        endpoint: '/session/recaptcha-token',
        data: token,
        useBinary: false
      }),
    createAccount: async (params) => {
      checkAesKey(aesKey)
      const createAccountBytes = encode({
        type: ClientMessageType.ACCOUNT_CREATE,
        data: params
      })
      const encryptedMessage = await encrypt(aesKey, createAccountBytes)
      const clientMessage: reproto.client_request.ClientRequest = {
        requestType: ClientMessageType.ACCOUNT_CREATE,
        requestId: latestTransactionId,
        // TODO: Fix encrypted payload
        encryptedPayload: encryptedMessage.cipherText + encryptedMessage.iv
      }
      const clientMessageBytes = encodeClientMessageWrapper(clientMessage)

      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/user/create',
        data: clientMessageBytes
      })

      const serverMessage = decodeServerMessageWrapper(
        new Uint8Array(resBuffer)
      )
      latestTransactionId = serverMessage.serverTime

      const sessionDecrypted = await decrypt(
        aesKey,
        serverMessage.iv,
        serverMessage.encryptedPayload
      )

      const session: Session = decode({
        type: ServerMessageType.CURRENT_SESSION,
        data: sessionDecrypted
      })

      return session
    },
    createSession: async (params) => {
      const publicKey = await fetchServerPublicKey(api)
      const { key: aesCryptoKey, raw: aesKeyRaw } = await generateAesKey()
      aesKey = aesCryptoKey

      const createSessionBytes = encode({
        type: ClientMessageType.SESSION_CREATE,
        data: { ...params, aesKey: aesKeyRaw }
      })

      const encryptedMessage = await publicKeyEncrypt(
        publicKey,
        createSessionBytes
      )

      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/session/create',
        data: encryptedMessage
      })

      const serverMessage = decodeServerMessageWrapper(
        new Uint8Array(resBuffer)
      )
      latestTransactionId = serverMessage.serverTime

      const sessionDecrypted = await decrypt(
        aesKey,
        serverMessage.iv,
        serverMessage.encryptedPayload
      )

      const session: Session = decode({
        type: ServerMessageType.CURRENT_SESSION,
        data: sessionDecrypted
      })

      return session
    },
    getActiveSession: async () => {
      checkAesKey(aesKey)
      const resBuffer: ArrayBuffer = await api.get({
        endpoint: '/session/active'
      })

      const serverMessage = decodeServerMessageWrapper(
        new Uint8Array(resBuffer)
      )
      latestTransactionId = serverMessage.serverTime

      const sessionDecrypted = await decrypt(
        aesKey,
        serverMessage.iv,
        serverMessage.encryptedPayload
      )

      const session: Session = decode({
        type: ServerMessageType.CURRENT_SESSION,
        data: sessionDecrypted
      })

      return session
    },
    verifyEmail: async (params) => {
      checkAesKey(aesKey)
      const verifyEmailBytes = encode({
        type: ClientMessageType.SESSION_VERIFY_EMAIL,
        data: params
      })
      const encryptedMessage = await encrypt(aesKey, verifyEmailBytes)
      const clientMessage: reproto.client_request.ClientRequest = {
        requestType: ClientMessageType.SESSION_VERIFY_EMAIL,
        requestId: latestTransactionId,
        // TODO: Fix encrypted payload
        encryptedPayload: encryptedMessage.cipherText + encryptedMessage.iv
      }
      const clientMessageBytes = encodeClientMessageWrapper(clientMessage)
      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/session/verify-email',
        data: clientMessageBytes
      })

      const serverMessage = decodeServerMessageWrapper(
        new Uint8Array(resBuffer)
      )
      latestTransactionId = serverMessage.serverTime

      const sessionDecrypted = await decrypt(
        aesKey,
        serverMessage.iv,
        serverMessage.encryptedPayload
      )

      const session: Session = decode({
        type: ServerMessageType.CURRENT_SESSION,
        data: sessionDecrypted
      })

      return session
    },
    verifyPhone: async (params) => {
      checkAesKey(aesKey)
      const verifyEmailBytes = encode({
        type: ClientMessageType.SESSION_VERIFY_PHONE,
        data: params
      })
      const encryptedMessage = await encrypt(aesKey, verifyEmailBytes)
      const clientMessage: reproto.client_request.ClientRequest = {
        requestType: ClientMessageType.SESSION_VERIFY_PHONE,
        requestId: latestTransactionId,
        // TODO: Fix encrypted payload
        encryptedPayload: encryptedMessage.cipherText + encryptedMessage.iv
      }
      const clientMessageBytes = encodeClientMessageWrapper(clientMessage)
      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/session/verify-phone',
        data: clientMessageBytes
      })

      const serverMessage = decodeServerMessageWrapper(
        new Uint8Array(resBuffer)
      )
      latestTransactionId = serverMessage.serverTime

      const sessionDecrypted = await decrypt(
        aesKey,
        serverMessage.iv,
        serverMessage.encryptedPayload
      )

      const session: Session = decode({
        type: ServerMessageType.CURRENT_SESSION,
        data: sessionDecrypted
      })

      return session
    }
  }
}

function checkAesKey(aesKey: CryptoKey | null) {
  if (!aesKey) throw new Error('Invalid AES Key')
}

async function fetchServerPublicKey(api: Api) {
  const key: ArrayBuffer = await api.get({ endpoint: '/pub-key' })
  return importPublicKey(new Uint8Array(key))
}

export const contextKey = 'AuthClient'

export default authClientFactory
