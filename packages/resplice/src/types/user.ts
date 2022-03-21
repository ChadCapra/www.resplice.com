import type { Attribute as BaseAttribute } from './attribute'
import type { Chat as BaseChat } from './chat'

export type User = {
  uuid: string
  name: string
  avatar: string | null
  handle: string | null
  user_registered_at: Date
}

export type Attribute = BaseAttribute

export type Chat = BaseChat

export type Invite = string
