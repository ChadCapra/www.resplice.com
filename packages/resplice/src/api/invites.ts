import type { Invite } from '$types'

export interface InvitesClient {
  create: (
    attributeUUIDs: string[],
    invite: Pick<Invite, 'name' | 'value'>
  ) => Promise<Invite>
  update: (inviteUUID: string, invite: Pick<Invite, 'name'>) => Promise<Invite>
  accept: (inviteUUID: string, attributeUUIDs: string[]) => Promise<Invite>
  delete: (inviteUUID: string) => Promise<void>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function invitesClientFactory(api: any): InvitesClient {
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
    delete: (inviteUUID) => api.deleteInvite(inviteUUID)
  }
}

export default invitesClientFactory
