export type Session = {
  uuid: string
  user_uuid: string | null
  remember_me: boolean
  email: string
  phone: string
  email_verified_at: Date | null
  phone_verified_at: Date | null
  expiry: Date
}
