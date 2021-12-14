import type { Contact } from './contact'
import type { Attribute as BaseAttribute } from './attribute'
import type { Chat as BaseChat } from './chat'

export type Splice = {
  uuid: string
  name: string
  members: Contact[]
  latest_message: Chat
  latest_attribute: Attribute
  missed_chats: number
}

export type SpliceDetail = Splice & {
  chats: Chat[]
  attributes: Attribute[]
}

export type Attribute = BaseAttribute & {
  splice_uuid: string
}

export type Chat = BaseChat & {
  splice_uuid: string
}

export type Plan = {
  uuid: string
}
