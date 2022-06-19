import type { PhoneValue } from '$types/attribute'

export enum SessionStatus {
  NOT_SET = 0,
  PENDING_EMAIL_VERIFICATION = 1,
  PENDING_PHONE_VERIFICATION = 2,
  PENDING_USER_REGISRATION = 3,
  PENDING_ADDITIONAL_AUTHENTICATION = 4,
  AUTHENTICATED = 5,
  EXPIRED = 6,
  UNRECOGNIZED = -1
}

export type Session = {
  id: number
  status: SessionStatus
  email: string
  phone: PhoneValue
  rememberMe: boolean
  expiry: number
}

export type SessionItem = {
  id: number
  device: string
  lastLocation: string
}
