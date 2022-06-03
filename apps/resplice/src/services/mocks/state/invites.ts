import type { Invite, Attribute, Share, QrInvite } from '$types/invite'

export const invites = new Map<number, Invite>()

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
