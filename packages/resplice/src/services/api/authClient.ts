import type { Api } from './http'
import type { Session } from '$types/session'
import type { User } from '$types/user'
import mockAuthClientFactory from '$services/mocks/authClient'
import { importPublicKey } from '$services/crypto'

type AuthMessage = {
  session_uuid: string
  request_id: number
  access_token_hash: string
  payload_hmac: string
  encrypted_payload: ArrayBuffer
}

type CreateSessionRequest = {
  phone: string
  email: string
  remember_me: boolean
  recaptcha_token: string
  aes_key: string
  hmac_key: string
}

type CreateUserRequest = {
  name: string
  avatar: Blob | null
}

type VerifyRequest = {
  verification_token: string
}

export interface AuthClient {
  submitRecaptchaToken: (token: string) => Promise<boolean>
  createSession: (params: CreateSessionRequest) => Promise<Session>
  createUser: (params: CreateUserRequest) => Promise<User>
  getActiveSession: () => Promise<Session | null>
  verifyEmail: (params: VerifyRequest) => Promise<Session>
  verifyPhone: (params: VerifyRequest) => Promise<Session>
}

function authClientFactory(api: Api, returnMock = false): AuthClient {
  if (returnMock) return mockAuthClientFactory()
  return {
    submitRecaptchaToken: (token) =>
      api.post('/session/recaptcha-token', token),
    createSession: async (params) => {
      const publicKey = await fetchServerPublicKey(api)

      return await api.post('/session/create', params)
    },
    createUser: (params) => api.post('/user/create', params),
    getActiveSession: () => api.get('/session/active'),
    verifyEmail: (params) => api.post('/session/verify-email', params),
    verifyPhone: (params) => api.post('/session/verify-phone', params)
  }
}

async function fetchServerPublicKey(api: Api) {
  const key: ArrayBuffer = await api.get('/pub-key')
  return importPublicKey(key)
}

export const contextKey = 'AuthClient'

export default authClientFactory
