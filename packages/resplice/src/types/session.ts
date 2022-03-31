export type Session = {
  uuid: string // TODO: Is this an id: number or uuid: string
  user_uuid: string | null
  remember_me: boolean
  email: string
  phone: string
  email_verified_at: Date | null
  phone_verified_at: Date | null
  expiry: Date
}

// TODO: Come up with better name
export type OtherSession = {
  id: number
  device: string
  lastLocation: string
}
