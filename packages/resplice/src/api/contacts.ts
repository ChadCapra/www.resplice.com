import type { Attribute, Contact } from '$types'

export interface ContactsClient {
  get: (contactUUID: string) => Promise<Contact>
  getAll: () => Contact[]
  update: (
    contactUUID: string,
    contact: Pick<Contact, 'nickName' | 'description' | 'tags'>
  ) => Promise<Contact>
  delete: (contactUUID: string) => Promise<void>
  getAttribute: (
    contactUUID: string,
    attributeUUID: string
  ) => Promise<Attribute>
  getAttributes: (contactUUID: string) => Promise<Attribute[]>
  getAllAttributes: () => Promise<Attribute[]>
  addShare: (attributeUUID: string) => Promise<any>
  getShare: (contactUUID: string, shareUUID: string) => Promise<any>
  getShares: (contactUUID: string) => Promise<any>
  getAllShares: () => Promise<any>
  expireShare: (shareUUID: string, expiry: Date) => Promise<void>
  removeShare: (shareUUID: string) => Promise<void>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function contactsClientFactory(api: any): ContactsClient {
  return {
    get: (contactUUID) => api.getContact(contactUUID),
    getAll: () => api.getAllContacts(),
    update: (contactUUID, contact) =>
      api.updateContact(contactUUID, {
        nickName: contact.nickName,
        description: contact.description,
        tags: contact.tags
      }),
    delete: (contactUUID) => api.deleteContact(contactUUID),
    getAttribute: (contactUUID, attributeUUID) =>
      api.getContactAttribute(contactUUID, attributeUUID),
    getAllAttributes: () => api.getAllAttributes(),
    getAttributes: (contactUUID) => api.getAttributes(contactUUID),
    addShare: (attributeUUID) => api.addContactShare(attributeUUID),
    getShare: (contactUUID, shareUUID) =>
      api.getContactShare(contactUUID, shareUUID),
    getShares: (contactUUID) => api.getContactShares(contactUUID),
    getAllShares: () => api.getAllContactShares(),
    expireShare: (shareUUID, expiry) =>
      api.expireContactShare(shareUUID, expiry),
    removeShare: (shareUUID) => api.removeContactShare(shareUUID)
  }
}

export default contactsClientFactory
