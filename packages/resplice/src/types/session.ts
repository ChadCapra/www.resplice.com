export type Session = {
  uuid: string
  access_token: string
  expiry: Date
  authenticated_at: string
  user_agent: string
  location: string
  remember_me: boolean
  public_key: Record<string, string>
  private_key: Record<string, string>
}
