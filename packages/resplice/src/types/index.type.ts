// Data Types
// Attributes
export type AttributeActionType =
  | 'calendar'
  | 'call'
  | 'copy'
  | 'email'
  | 'link'
  | 'locate'
  | 'map'
  | 'navigate'
  | 'sms'

export type AttributeAction = {
  iconName: string
  action: string
}

export type Attribute = {
  uuid: string
  contact_uuid: string
  type: AttributeType
  name: string
  collection: string
  value: string
  sort_order: number
}

export type AttributeType =
  | 'phone'
  | 'email'
  | 'address'
  | 'coordinates'
  | 'location'
  | 'social'

export type AttributeTypeConfig = {
  type: AttributeType
  name: string
  valueMap: Record<string, number>
  actions: AttributeAction[]
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
