// Data Types
export type Attribute = {
  uuid: string
  contact_uuid: string
  type: string
  name: string
  collection: string
  value: string
}

export type Contact = {
  uuid: string
  name: string
  tags: string[]
}

export type ContactDetail = Contact & {
  attributes: Attribute[]
  common_splices: string[]
  messages: Message[]
  pending: boolean
}

export type Message = {
  uuid: string
  entity_uuid: string
  entity_name: string
  timestamp: string
  content: string
}

export type Session = null | {
  uuid: string
  access_token: string
  expiry: string
  authenticated_at: string
  user_agent: string
  location: string
  remember_me: boolean
  public_key: Record<string, string>
  private_key: Record<string, string>
}
