import type { Session } from '$types'

type CreateParams = {
  phone: string
  email: string
  rememberMe: boolean
  aesKey: string
}
type VerifyEmailParams = {
  email: string
  code: string
}
type VerifyPhoneParams = {
  phone: string
  code: string
}

export interface SessionsClient {
  create: (params: CreateParams) => Promise<{
    session: Session
    access_token: string
    phone_hash: string
    email_hash: string
  }>
  get: () => Promise<Session>
  getAll: () => Promise<
    Pick<Session, 'authenticated_at' | 'user_agent' | 'location'>[]
  >
  expire: (sessionUUID: string) => Promise<void>
  verifyEmail: (params: VerifyEmailParams) => Promise<Session>
  verifyPhone: (params: VerifyPhoneParams) => Promise<Session>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function sessionsClientFactory(api: any): SessionsClient {
  return {
    create: ({ phone, email, rememberMe, aesKey }) =>
      api.createSession(phone, email, rememberMe, aesKey),
    get: () => api.getSession(),
    getAll: () => api.getAllSessions(),
    expire: (sessionUUID) => api.expireSession(sessionUUID),
    verifyEmail: ({ email, code }) => api.verifySessionEmail(email, code),
    verifyPhone: ({ phone, code }) => api.verifySessionPhone(phone, code)
  }
}

export default sessionsClientFactory
