import { writable } from 'svelte/store'
import type { Invite, InviteAttribute, Share } from '$types/invite'

type InviteRecord = Map<number, Invite>
const invites = writable<InviteRecord | null>(null)

type InviteAttributeRecord = Map<number, InviteAttribute>
const inviteAttributes = writable<InviteAttributeRecord | null>(null)

type ShareRecord = Map<number, Share>
const shares = writable<ShareRecord | null>(null)

const inviteStores = {
  invites,
  inviteAttributes,
  shares
}

export type InviteStore = typeof inviteStores

export default inviteStores
