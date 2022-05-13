import type { Session, OtherSession } from '$types/session'

export const session: Session = {
  id: 12345,
  rememberMe: true,
  email: 'marcusvirg345@gmail.com',
  phone: '2185910657',
  emailVerifiedAt: null,
  phoneVerifiedAt: null,
  authenticatedAt: null,
  expiry: 1697933779
}

export const sessionVerifiedEmail: Session = {
  ...session,
  emailVerifiedAt: 1634861779
}

export const sessionVerifiedBoth: Session = {
  ...session,
  emailVerifiedAt: 1634861779,
  phoneVerifiedAt: 1634861779
}

export const authenticatedSession: Session = {
  ...sessionVerifiedBoth,
  authenticatedAt: 1634861779
}

export const otherSessions: OtherSession[] = [
  {
    id: 2,
    device: 'Apple iOS',
    lastLocation: 'Coruscant Jedi Temple'
  }
]
