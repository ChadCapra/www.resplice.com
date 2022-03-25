import type { AppCache } from '$services/cache'
import type { ContactStore } from '$stores/contacts'
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
function invitesClientFactory(
  conn: Worker,
  cache: AppCache,
  store: ContactStore
): InvitesClient {
  return {
    create: (attributeUUIDs, invite) =>
      conn.createInvite(attributeUUIDs, {
        name: invite.name,
        value: invite.value
      }),
    update: (inviteUUID, invite) =>
      conn.updateInvite(inviteUUID, { name: invite.name }),
    accept: (inviteUUID, attributeUUIDs) =>
      conn.acceptInvite(inviteUUID, attributeUUIDs),
    delete: (inviteUUID) => conn.deleteInvite(inviteUUID),
    addAttribute: (inviteUUID, attributeUUID) =>
      conn.add_invite_attribute(inviteUUID, attributeUUID),
    removeAttribute: (inviteUUID, attributeUUID) =>
      conn.remove_invite_attribute(inviteUUID, attributeUUID),
    generateQrCode: () => conn.generate_qr_invite()
  }
}

export default invitesClientFactory
