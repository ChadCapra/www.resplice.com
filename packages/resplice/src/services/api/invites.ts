import type { Invite } from '$types/invite'

export interface InvitesClient {
  create: (
    attributeUUIDs: string[],
    invite: Pick<Invite, 'name' | 'value'>
  ) => void
  update: (inviteUUID: string, invite: Pick<Invite, 'name'>) => void
  accept: (inviteUUID: string, attributeUUIDs: string[]) => void
  delete: (inviteUUID: string) => void
  addAttribute: (inviteUUID: string, attributeUUID: string) => void
  removeAttribute: (inviteUUID: string, attributeUUID: string) => void
  generateQrCode: () => void
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function invitesClientFactory(api: any, cache: any): InvitesClient {
  return {
    create: (attributeUUIDs, invite) =>
      api.createInvite(attributeUUIDs, {
        name: invite.name,
        value: invite.value
      }),
    update: (inviteUUID, invite) =>
      api.updateInvite(inviteUUID, { name: invite.name }),
    accept: (inviteUUID, attributeUUIDs) =>
      api.acceptInvite(inviteUUID, attributeUUIDs),
    delete: (inviteUUID) => api.deleteInvite(inviteUUID),
    addAttribute: (inviteUUID, attributeUUID) =>
      api.add_invite_attribute(inviteUUID, attributeUUID),
    removeAttribute: (inviteUUID, attributeUUID) =>
      api.remove_invite_attribute(inviteUUID, attributeUUID),
    generateQrCode: () => api.generate_qr_invite()
  }
}

export default invitesClientFactory
