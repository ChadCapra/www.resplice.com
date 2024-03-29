import type {
	EmailValue,
	PhoneValue,
	Share as BaseShare,
	Attribute as BaseAttribute
} from '$modules/attribute/attribute.types'

export enum InviteType {
	HANDLE = 'HANDLE',
	PHONE = 'PHONE',
	EMAIL = 'EMAIL',
	DIRECT = 'DIRECT'
}

interface BaseInvite {
	id: number
	type: InviteType
	name: string
	expiry: number
}

interface HandleInvite extends BaseInvite {
	type: InviteType.HANDLE
}

interface PhoneInvite extends BaseInvite {
	type: InviteType.PHONE
	phone: PhoneValue
}

interface EmailInvite extends BaseInvite {
	type: InviteType.EMAIL
	email: EmailValue
}

interface DirectInvite extends BaseInvite {
	type: InviteType.DIRECT
}

export type Invite = HandleInvite | PhoneInvite | EmailInvite | DirectInvite

export type QrInvite = {
	id: number
	accessCode: number
	expiry: number
	attributeIds: {
		id: number
		qrInviteId: number
		attributeId: number
	}[]
}

export type Attribute = BaseAttribute & {
	inviteId: number
	sharedOn: number
}

export type Share = BaseShare & {
	inviteId: number
}
