import type { Session } from '$types/session'

type CreateParams = {
  phone: { value: string; countryCallingCode: string }
  email: string
  rememberMe: boolean
}
type VerifyParams = {
  code: string
}
type SinceParams = {
  since: Date
}

export interface SessionsClient {
  create: (params: CreateParams) => Promise<{
    session: Session
    confirmation_hash: string
  }>
  getActive: () => Promise<Session | null>
  getAll: (since: SinceParams) => Promise<Session[]>
  expire: (sessionUUID: string) => Promise<void>
  verifyEmail: (params: VerifyParams) => Promise<Session>
  verifyPhone: (params: VerifyParams) => Promise<Session>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function sessionsClientFactory(api: any, _cache: any): SessionsClient {
  return {
    create: ({ email, phone, rememberMe }) =>
      api.createSession(email, phone, rememberMe),
    getActive: () => api.getSession(),
    getAll: ({ since }) => api.getSessions(since),
    expire: (sessionUUID) => api.expireSession(sessionUUID),
    verifyEmail: ({ code }) => api.verifyEmail(code),
    verifyPhone: ({ code }) => api.verifyPhone(code)
  }
}

export default sessionsClientFactory
