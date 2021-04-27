// Data Types
// Attributes
export type Attribute = {
  uuid: string
  contact_uuid: string
  type: AttributeTypeEnum
  name: string
  collection: string
  value: string
  sort_order: number
}
export type AttributeAction =
  | 'calendar'
  | 'call'
  | 'copy'
  | 'email'
  | 'link'
  | 'locate'
  | 'navigate'
  | 'sms'

export type AttributeTypeEnum =
  | 'phone'
  | 'email'
  | 'address'
  | 'coordinates'
  | 'location'
  | 'social'

export type AttributeType = {
  type: AttributeTypeEnum
  name: string
  valueMap: Record<string, number>
  actions: AttributeAction[]
}
export type Coordinate = {
  lon: number
  lat: number
}

// Contacts
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

// Messaging
export type Message = {
  uuid: string
  entity_uuid: string
  entity_name: string
  timestamp: string
  content: string
}

// Sessions
export type Session = {
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

// User
export type User = {
  uuid: string
  name: string
  avatar: string | null
  attributes: Attribute[]
}
