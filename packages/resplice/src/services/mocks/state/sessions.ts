import type { Session } from '$types/session'

export const session: Session = {
  uuid: 'mockUUID',
  user_uuid: null,
  remember_me: true,
  email: 'marcusvirg345@gmail.com',
  phone: '2185910657',
  email_verified_at: null,
  phone_verified_at: null,
  expiry: new Date('2023-10-22T00:16:19.301Z')
}

export const sessionVerifiedEmail: Session = {
  ...session,
  email_verified_at: new Date('2021-10-22T00:16:19.301Z')
}

export const sessionVerifiedBoth: Session = {
  ...session,
  email_verified_at: new Date('2021-10-22T00:16:19.301Z'),
  phone_verified_at: new Date('2021-10-22T00:16:19.301Z')
}

export const authenticatedSession: Session = {
  ...sessionVerifiedBoth,
  user_uuid: 'bastilla-shan'
}
