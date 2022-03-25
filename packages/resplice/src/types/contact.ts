import type {
  Attribute as BaseAttribute,
  EmailValue,
  PhoneValue
} from './attribute'
import type { Chat as BaseChat } from './chat'

type BaseContact = {
  id: number
  name: string
  avatarUrl?: string
  handle: string
}

export type Contact = BaseContact & {
  alias?: string
  description?: string
  isFavored: boolean
  isMuted: boolean
  isArchived: boolean
  connectedAt: number
}

enum InviteType {
  NOT_SET = 'NOT_SET',
  HANDLE = 'HANDLE',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  COMMON_SPLICE = 'COMMON_SPLICE',
  QR_INVITE = 'QR_INVITE'
}

export type PendingContact = BaseContact & {
  inviteType: InviteType
  phone: PhoneValue // Should these be in the pending attributes instead?
  email: EmailValue // Should these be in the pending attributes instead?
  commonSplice?: string // Does this make sense here?
  expiry: Date
}

export type Attribute = BaseAttribute & {
  contactId: string
  sharedOn: number
}

// TODO: Compare to proto file
export type PendingAttribute = BaseAttribute & {
  pendingContactId: number
}

export type Chat = BaseChat & {
  contactID: string
}
