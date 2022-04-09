export type Session = {
  id: number
  email: string
  phone: string
  email_verified_at: number | null
  phone_verified_at: number | null
  authenticated_at: number | null
  remember_me: boolean
  expiry: number
}

// TODO: Come up with better name
export type OtherSession = {
  id: number
  device: string
  lastLocation: string
}
