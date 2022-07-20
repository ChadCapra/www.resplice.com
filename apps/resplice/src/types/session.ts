import type { EmailValue, PhoneValue } from '$types/attribute'

export enum SessionStatus {
  EXPIRED = 0,
  PENDING_EMAIL_VERIFICATION = 1,
  PENDING_PHONE_VERIFICATION = 2,
  PENDING_USER_REGISRATION = 3,
  PENDING_ADDITIONAL_AUTHENTICATION = 4,
  AUTHENTICATED = 5,
  UNRECOGNIZED = -1
}

export type Session = {
  id: number
  status: SessionStatus
  email: EmailValue
  phone: PhoneValue
  rememberMe: boolean
  expiry: number
}

export type SessionItem = {
  id: number
  device: string
  lastLocation: string
}
