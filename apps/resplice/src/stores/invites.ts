import { writable, derived } from 'svelte/store'
import type { Invite, QrInvite, Attribute, Share } from '$types/invite'

import {
  invites as mockInvites,
  inviteAttributes as mockInviteAttributes,
  inviteShares as mockInviteShares
} from '$services/mocks/state/invites'

type InviteRecord = Map<number, Invite>
const invites = writable<InviteRecord | null>(mockInvites)

const activeQrInvite = writable<QrInvite | null>(null)

type InviteAttributeRecord = Map<number, Attribute>
const inviteAttributes = writable<InviteAttributeRecord | null>(
  mockInviteAttributes
)
const inviteAttributesDict = derived(inviteAttributes, ($ia, set) => {
  const dict = {}
  $ia.forEach((ia) => {
    if (dict[ia.inviteId]) {
      dict[ia.inviteId].push(ia)
    } else {
      dict[ia.inviteId] = [ia]
    }
  })
  set(dict)
})

type InviteShareRecord = Map<number, Share>
const inviteShares = writable<InviteShareRecord | null>(mockInviteShares)

const inviteStores = {
  invites,
  activeQrInvite,
  inviteAttributes,
  inviteAttributesDict,
  inviteShares
}

export type InviteStore = typeof inviteStores

export default inviteStores
