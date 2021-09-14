import type { Invite } from '$types/invite'

export interface InvitesClient {
  create: (
    attributeUUIDs: string[],
    invite: Pick<Invite, 'name' | 'value'>
  ) => Promise<Invite>
  update: (inviteUUID: string, invite: Pick<Invite, 'name'>) => Promise<Invite>
  accept: (inviteUUID: string, attributeUUIDs: string[]) => Promise<Invite>
  delete: (inviteUUID: string) => Promise<void>
  addAttribute: (inviteUUID: string, attributeUUID: string) => Promise<Invite>
  removeAttribute: (
    inviteUUID: string,
    attributeUUID: string
  ) => Promise<Invite>
  generateQrCode: () => Promise<Invite>
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
