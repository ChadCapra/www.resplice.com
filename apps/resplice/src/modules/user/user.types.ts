import type { Attribute as BaseAttribute } from '$modules/attribute/attribute.types'
import type { Chat as BaseChat } from '$modules/chat/chat.types'
import type { Invite as BaseInvite } from '$modules/invite/invite.types'

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
