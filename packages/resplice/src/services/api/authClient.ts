import type { Api } from './http'
import type { Session } from '$types/session'

export interface AuthClient {
  getActiveSession: () => Promise<Session>
}

function authClientFactory(api: Api) {
  return {
    getActiveSession: () => api.get('/session/active')
  }
}

export const contextKey = 'AuthClient'

export default authClientFactory
