import type { Contact } from '$types/contact'

export interface ContactsClient {
  get: (contactUUID: string) => void
  getAll: () => Contact[]
  update: (
    contactUUID: string,
    contact: Pick<Contact, 'alias' | 'description'>
  ) => void
  delete: (contactUUID: string) => void
  getAttributes: (contactUUID: string) => void
  getAllAttributes: () => void
  addShare: (attributeUUID: string) => void
  getShare: (contactUUID: string, shareUUID: string) => void
  getShares: (contactUUID: string) => void
  getAllShares: () => void
  expireShare: (shareUUID: string, expiry: Date) => void
  removeShare: (shareUUID: string) => void
  createInvite: (attributeUUIDs: string[]) => void
  addInviteAttribute: (inviteUUID: string, attributeUUID: string) => void
  removedInviteAttribute: (inviteUUID: string, attributeUUID: string) => void
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function contactsClientFactory(api: any, _cache: any): ContactsClient {
  return {
    get: async (contactUUID) => {
      // make api request
      // sync cache
      const data = await api.getContact(contactUUID)
      return data
    },
    getAll: () => api.getAllContacts(),
    update: (contactUUID, contact) =>
      api.updateContact(contactUUID, {
        alias: contact.alias,
        description: contact.description
      }),
    delete: (contactUUID) => api.deleteContact(contactUUID),
    getAllAttributes: () => api.getAttributes(),
    getAttributes: (contactUUID) => api.getAttributes(contactUUID),
    addShare: (attributeUUID) => api.addContactShare(attributeUUID),
    getShare: (contactUUID, shareUUID) =>
      api.getContactShare(contactUUID, shareUUID),
    getShares: (contactUUID) => api.getContactShares(contactUUID),
    getAllShares: () => api.getAllContactShares(),
    expireShare: (shareUUID, expiry) =>
      api.expireContactShare(shareUUID, expiry),
    removeShare: (shareUUID) => api.removeContactShare(shareUUID),
    createInvite: (attributeUUID) => api.createInvite(attributeUUID),
    addInviteAttribute: (inviteUUID, attributeUUID) =>
      api.addInviteAttribute(inviteUUID, attributeUUID),
    removedInviteAttribute: (inviteUUID, attributeUUID) =>
      api.removeInviteAttribute(inviteUUID, attributeUUID)
  }
}

export default contactsClientFactory
