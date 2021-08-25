import type { Attribute, Invite, User } from '$types'

type CreateParams = {
  name: string
  avatar: Blob
}

export interface UserClient {
  create: (params: CreateParams) => Promise<User>
  get: () => Promise<User>
  update: (user: Pick<User, 'name' | 'avatar'>) => Promise<User>
  delete: (user: Pick<User, 'name'>) => Promise<void>
  addAttribute: (attribute: Attribute) => Promise<Attribute>
  getAttribute: (attributeUUID: string) => Promise<Attribute>
  updateAttribute: (attribute: Attribute) => Promise<Attribute>
  verifyAttribute: (attributeUUID: string, code: string) => Promise<void>
  resendAttributeVerification: (attributeUUID: string) => Promise<void>
  deleteAttribute: (attributeUUID: string) => Promise<void>
  generateQrInvite: () => Promise<Invite>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function userClientFactory(api: any, _cache: any): UserClient {
  return {
    create: ({ name, avatar }) => api.createUser(name, avatar),
    get: () => api.getUser(),
    update: ({ name, avatar }) => api.updateUser(name, avatar),
    delete: ({ name }) => api.deleteUser(name),
    addAttribute: (attribute) => api.addAttribute(attribute),
    getAttribute: (attributeUUID) => api.getAttribute(attributeUUID),
    updateAttribute: (attribute) => api.updateAttribute(attribute),
    verifyAttribute: (attributeUUID, code) =>
      api.verifyAttribute(attributeUUID, code),
    resendAttributeVerification: (attributeUUID) =>
      api.resendVerification(attributeUUID),
    deleteAttribute: (attributeUUID) => api.deleteAttribute(attributeUUID),
    generateQrInvite: () => api.generateQRInvite()
  }
}

export default userClientFactory
