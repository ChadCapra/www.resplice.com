import type { Attribute as BaseAttribute } from './attribute'
import type { Chat as BaseChat } from './chat'

export type User = {
  uuid: string
  name: string
  avatar: string | null
  handle: string | null
  user_registered_at: Date
}

export type Attribute = BaseAttribute & {
  groupId: number
  verifiedAt: number
  verifyExpiry: number
}

export type Chat = BaseChat

export type Invite = string
