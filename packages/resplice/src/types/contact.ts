import type { Attribute as BaseAttribute } from './attribute'
import type { Chat as BaseChat } from './chat'

export enum ContactType {
  CONTACT = 'CONTACT',
  PENDING = 'PENDING'
}
export type Contact = {
  uuid: string
  type: ContactType
  name: string
  avatar_url?: string
  handle?: string
  alias?: string
  description?: string
  isFavored: boolean
  expiry?: Date
}

export type ContactDetail = Contact & {
  attributes: Attribute[]
  common_splices: string[]
  chats: Chat[]
  pending: boolean
}

export type Attribute = BaseAttribute & {
  contact_uuid: string
}

export type Chat = BaseChat & {
  contact_uuid: string
}
