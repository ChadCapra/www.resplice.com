import type {
  Attribute as BaseAttribute,
  Share as BaseShare
} from './attribute'
import type { Chat as BaseChat } from './chat'

export type Splice = {
  id: number
  name: string
  members: Member[]
  latest_message: Chat
  latest_attribute: Attribute
  missed_chats: number
}

// TODO: Complete member, can I join type with Contact type
export type Member = {
  id: number
  name: string
}

export type Attribute = BaseAttribute & {
  spliceId: number
  sharedOn: number
}

export type Share = BaseShare & {
  spliceId: number
}

export type Chat = BaseChat & {
  spliceId: number
}

// export type Plan = {
//   id: number
// }
