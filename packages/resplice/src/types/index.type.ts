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
