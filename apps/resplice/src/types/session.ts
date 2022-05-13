export type Session = {
  id: number
  email: string
  phone: string
  emailVerifiedAt: number | null
  phoneVerifiedAt: number | null
  authenticatedAt: number | null
  rememberMe: boolean
  expiry: number
}

export type SessionItem = {
  id: number
  device: string
  lastLocation: string
}
