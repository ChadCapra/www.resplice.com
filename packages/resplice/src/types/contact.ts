import type {
  Attribute as BaseAttribute,
  Share as BaseShare
} from './attribute'
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

export type Share = BaseShare & {
  contactId: number
}

export type PendingContact = BaseInvite & {
  avatarUrl: string
}

export type PendingContactAttribute = {
  id: BaseAttribute['id']
  pendingContactId: number
  name: BaseAttribute['name']
  type: BaseAttribute['type']
}

export type Chat = BaseChat & {
  contactID: string
}
