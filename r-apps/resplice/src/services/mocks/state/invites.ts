import type { Invite, Attribute, Share } from '$types/invite'

export const invites = new Map<number, Invite>()

export const inviteAttributes = new Map<number, Attribute>()

export const inviteShares = new Map<number, Share>()
