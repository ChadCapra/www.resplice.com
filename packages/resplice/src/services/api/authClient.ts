import type { Api } from './http'
import type { Session } from '$types/session'
import type { User } from '$types/user'
import type { Contact } from '$types/contact'

type CreateSessionRequest = {
  phone: { value: string; countryCallingCode: string }
  email: string
  rememberMe: boolean
}

type CreateUserRequest = {
  name: string
  avatar: Blob | null
}

type VerifyRequest = {
  code: string
}

export interface AuthClient {
  createSession: (params: CreateSessionRequest) => Promise<Session>
  createUser: (params: CreateUserRequest) => Promise<User>
  getActiveSession: () => Promise<Session | null>
  verifyEmail: (params: VerifyRequest) => Promise<Session>
  verifyPhone: (params: VerifyRequest) => Promise<Session>
  getPendingContacts: () => Promise<Contact[]>
}

function authClientFactory(api: Api): AuthClient {
  return {
    createSession: (params) => api.post('/session/create', params),
    createUser: (params) => api.post('/user/create', params),
    getActiveSession: () => api.get('/session/active'),
    verifyEmail: (params) => api.post('/session/verify-email', params),
    verifyPhone: (params) => api.post('/session/verify-phone', params),
    getPendingContacts: () => api.get('/contacts/pending')
  }
}

export const contextKey = 'AuthClient'

export default authClientFactory
