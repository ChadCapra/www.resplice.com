import type { Attribute as BaseAttribute } from './attribute'
import type { Chat as BaseChat } from './chat'
import type { Invite as BaseInvite } from './invite'

export type Profile = {
  uuid: string
  name: string
  avatar: string | null
  handle: string | null
  userRegisteredAt: number
}

export type Attribute = BaseAttribute & {
  groupId: number | null
  verifiedAt: number | null
  verifyExpiry: number | null
}

export type Chat = BaseChat

export type Invite = BaseInvite
