/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Session } from '$types/session'
import { returnPromise } from './utils'

const session: Session = {
  uuid: 'mockUUID',
  access_token: 'asdlnm234k232sad3k4',
  expiry: '2021-09-30T02:01:18.359Z',
  authenticated_at: '2021-09-30T02:01:18.359Z',
  user_agent: 'iOS',
  location: 'Minneapolis, MN',
  remember_me: true,
  public_key: {},
  private_key: {}
}

const sessionsApi = {
  createSession: (
    _phone: string,
    _email: string,
    _rememberMe: boolean
  ): Promise<Session> => returnPromise(session),
  getSession: () => returnPromise(session)
}

export default sessionsApi
