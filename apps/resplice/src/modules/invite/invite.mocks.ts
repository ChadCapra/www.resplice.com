import {
	type Invite,
	type Attribute,
	type Share,
	type QrInvite,
	InviteType
} from '$modules/invite/invite.types'

export const invites = new Map<number, Invite>([
	[
		1,
		{
			id: 1,
			type: InviteType.HANDLE,
			name: 'Darth Revan',
			expiry: 0
		}
	],
	[
		2,
		{
			id: 2,
			type: InviteType.EMAIL,
			name: 'Kanan',
			email: { email: 'Kanan@undercity.com' },
			expiry: 0
		}
	]
])

export const inviteAttributes = new Map<number, Attribute>()

export const inviteShares = new Map<number, Share>()

export const activeQrInvite: QrInvite = {
	id: 123,
	accessCode: 457345,
	expiry: 45634,
	attributeIds: [
		{
			id: 1,
			qrInviteId: 123,
			attributeId: 1
		},
		{
			id: 2,
			qrInviteId: 123,
			attributeId: 2
		}
	]
}
