import type {
	Attribute as BaseAttribute,
	Share as BaseShare
} from '$modules/attribute/attribute.types'
import type { Chat as BaseChat } from '$modules/chat/chat.types'
import type { Invite as BaseInvite } from '$modules/invite/invite.types'

export type Contact = {
	id: number
	name: string
	handle: string
	avatarUrl: string | null
	alias: string | null
	description: string | null
	isFavored: boolean
	isMuted: boolean
	isArchived: boolean
	connectedAt: number
}

export type Attribute = BaseAttribute & {
	contactId: number
	sharedOn: number
}

export type Share = BaseShare & {
	contactId: number
}

export type PendingContact = BaseInvite & {
	avatarUrl: string | null
}

export type PendingContactAttribute = {
	id: BaseAttribute['id']
	pendingContactId: number
	type: BaseAttribute['type']
	name: BaseAttribute['name']
}

export type Chat = BaseChat & {
	contactID: string
}
