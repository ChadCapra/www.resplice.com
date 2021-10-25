import type { Attribute as BaseAttribute } from './attribute'
import type { Message as BaseMessage } from './message'

export enum ContactType {
  CONTACT = 'CONTACT',
  PENDING = 'PENDING'
}
export type Contact = {
  uuid: string
  type: ContactType
  name: string
  avatar_url?: string
  handle: string
  alias: string
  description?: string
  isFavored: boolean
  expiry?: Date
}

export type ContactDetail = Contact & {
  attributes: Attribute[]
  common_splices: string[]
  messages: Message[]
  pending: boolean
}

export type Attribute = BaseAttribute & {
  contact_uuid: string
}

export type Message = BaseMessage & {
  contact_uuid: string
}
