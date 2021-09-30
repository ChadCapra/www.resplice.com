import type { Session } from '$types/session'
import type { AuthStore } from '$stores/auth'

type CreateParams = {
  phone: string
  email: string
  rememberMe: boolean
}
type VerifyParams = {
  code: string
}

export interface SessionsClient {
  create: (params: CreateParams) => Promise<{
    session: Session
    confirmation_hash: string
  }>
  get: () => Promise<Session>
  getAll: () => Promise<
    Pick<Session, 'authenticated_at' | 'user_agent' | 'location'>[]
  >
  expire: (sessionUUID: string) => Promise<void>
  verifyEmail: (params: VerifyParams) => Promise<Session>
  verifyPhone: (params: VerifyParams) => Promise<Session>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function sessionsClientFactory(api: any, cache: any): SessionsClient {
  return {
    create: async ({ phone, email, rememberMe }) =>
      api.createSession(phone, email, rememberMe),
    get: () => api.getSession(),
    getAll: () => api.getAllSessions(),
    expire: (sessionUUID) => api.expireSession(sessionUUID),
    verifyEmail: ({ code }) => api.verifySessionEmail(code),
    verifyPhone: ({ code }) => api.verifySessionPhone(code)
  }
}

export default sessionsClientFactory
