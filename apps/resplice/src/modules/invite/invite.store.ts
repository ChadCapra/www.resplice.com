import { writable, derived, type Writable } from 'svelte/store'
import type { Invite, Attribute, Share } from '$modules/invite/invite.types'

import {
	invites as mockInvites,
	inviteAttributes as mockInviteAttributes,
	inviteShares as mockInviteShares
} from '$modules/invite/invite.mocks'

type InviteRecord = Map<Invite['id'], Invite>
const invites = writable<InviteRecord | null>(mockInvites)

type InviteAttributeRecord = Map<Attribute['id'], Attribute>
const inviteAttributes = writable<InviteAttributeRecord | null>(mockInviteAttributes)

type InviteAttributesRecord = Record<Attribute['inviteId'], Attribute[]>
const inviteAttributesDict = derived<
	Writable<InviteAttributeRecord | null>,
	InviteAttributesRecord
>(inviteAttributes, ($ia, set) => {
	if (!$ia) return

	const dict: InviteAttributesRecord = {}
	$ia.forEach((ia) => {
		if (dict[ia.inviteId]) {
			dict[ia.inviteId].push(ia)
		} else {
			dict[ia.inviteId] = [ia]
		}
	})
	set(dict)
})

type InviteShareRecord = Map<Share['id'], Share>
const inviteShares = writable<InviteShareRecord | null>(mockInviteShares)

const inviteStores = {
	invites,
	inviteAttributes,
	inviteAttributesDict,
	inviteShares
}

export type InviteStore = typeof inviteStores

export default inviteStores
