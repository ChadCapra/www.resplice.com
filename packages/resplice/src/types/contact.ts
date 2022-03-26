import type { Attribute as BaseAttribute } from './attribute'
import type { Chat as BaseChat } from './chat'
import type { Invite as BaseInvite } from './invite'

export type Contact = {
  id: number
  name: string
  avatarUrl?: string
  handle: string
  alias?: string
  description?: string
  isFavored: boolean
  isMuted: boolean
  isArchived: boolean
  connectedAt: number
}

export type Attribute = BaseAttribute & {
  contactId: string
  sharedOn: number
}

export type Chat = BaseChat & {
  contactID: string
}

export type Invite = BaseInvite & {
  avatarUrl: string
}

export type InviteAttribute = {
  id: BaseAttribute['id']
  pendingContactId: number
  name: BaseAttribute['name']
  type: BaseAttribute['type']
}
