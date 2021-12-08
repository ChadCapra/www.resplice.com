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
  connected_at: Date
}

export type PendingContact = {
  uuid: string
  type: ContactType
  name: string
  avatar_url?: string
  handle?: string
  expiry: Date
}

export type ContactDetail = {
  uuid: string
  attributes: Attribute[]
  pending_attributes: PendingAttribute[]
  common_splices: string[]
  chats: Chat[]
}

export type Attribute = BaseAttribute & {
  contact_uuid: string
}

// TODO: Create pending attribute
export type PendingAttribute = {
  expiry: Date
  required_share_uuids: string[]
}

export type Chat = BaseChat & {
  contact_uuid: string
}
