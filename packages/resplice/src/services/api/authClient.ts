import type { Api } from './http'
import type { Session } from '$types/session'
import type { User } from '$types/user'
import mockAuthClientFactory from '$services/mocks/authClient'

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
  bot_score: number
  aes_key: string
  hmac_token: string
}

type CreateUserRequest = {
  name: string
  avatar: Blob | null
}

type VerifyRequest = {
  verification_token: string
}

export interface AuthClient {
  createSession: (params: CreateSessionRequest) => Promise<Session>
  createUser: (params: CreateUserRequest) => Promise<User>
  getActiveSession: () => Promise<Session | null>
  verifyEmail: (params: VerifyRequest) => Promise<Session>
  verifyPhone: (params: VerifyRequest) => Promise<Session>
}

function authClientFactory(api: Api, returnMock = false): AuthClient {
  if (returnMock) return mockAuthClientFactory()
  return {
    createSession: (params) => api.post('/session/create', params),
    createUser: (params) => api.post('/user/create', params),
    getActiveSession: () => api.get('/session/active'),
    verifyEmail: (params) => api.post('/session/verify-email', params),
    verifyPhone: (params) => api.post('/session/verify-phone', params)
  }
}

export const contextKey = 'AuthClient'

export default authClientFactory
