import { SessionStatus, type Session, type SessionItem } from '$types/session'

export const session: Session = {
  id: 12345,
  status: SessionStatus.PENDING_EMAIL_VERIFICATION,
  email: 'marcusvirg345@gmail.com',
  phone: {
    number: 12185910657,
    smsEnabled: true
  },
  rememberMe: true,
  expiry: 1697933779
}

export const sessionVerifiedEmail: Session = {
  ...session,
  status: SessionStatus.PENDING_PHONE_VERIFICATION
}

export const sessionVerifiedBoth: Session = {
  ...session,
  status: SessionStatus.PENDING_USER_REGISRATION
}

export const authenticatedSession: Session = {
  ...session,
  status: SessionStatus.AUTHENTICATED
}

export const expiredSession: Session = {
  ...session,
  status: SessionStatus.EXPIRED,
  expiry: 0
}

export const sessions: SessionItem[] = [
  {
    id: 1,
    device: 'Apple iOS',
    lastLocation: 'Mos Eisley'
  },
  {
    id: 2,
    device: 'Apple iOS',
    lastLocation: 'Coruscant Jedi Temple'
  }
]
