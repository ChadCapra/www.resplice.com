/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Session } from '$types/session'
import { returnPromise } from './utils'

const session: Session = {
  uuid: 'mockUUID',
  user_uuid: null,
  remember_me: true,
  email: 'marcusvirg345@gmail.com',
  phone: '2185910657',
  email_verified_at: null,
  phone_verified_at: null,
  expiry: new Date('2023-10-22T00:16:19.301Z')
}

const sessionVerifiedEmail: Session = {
  ...session,
  email_verified_at: new Date('2021-10-22T00:16:19.301Z')
}

const sessionVerifiedBoth: Session = {
  ...session,
  email_verified_at: new Date('2021-10-22T00:16:19.301Z'),
  phone_verified_at: new Date('2021-10-22T00:16:19.301Z')
}

const authenticatedSession: Session = {
  ...sessionVerifiedBoth,
  user_uuid: 'bastilla-shan'
}

const sessionsApi = {
  createSession: (_email: string, _phone: string, _rememberMe: boolean) =>
    returnPromise({ session, confirmation_hash: 'confirming' }),
  getSession: () => returnPromise(sessionVerifiedBoth),
  getSessions: (_since: Date) =>
    returnPromise({
      requested_at: new Date('2021-10-22T00:16:19.301Z'),
      sessions: [session]
    }),
  verifyEmail: (_token: string) => returnPromise(sessionVerifiedEmail),
  verifyPhone: (_token: string) => returnPromise(sessionVerifiedBoth),
  expireSession: (_uuid: string) => returnPromise(session)
}

export default sessionsApi
