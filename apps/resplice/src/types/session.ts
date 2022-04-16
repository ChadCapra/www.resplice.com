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

// TODO: Come up with better name
export type OtherSession = {
  id: number
  device: string
  lastLocation: string
}
