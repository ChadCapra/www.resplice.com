import type { UserStore } from '$stores/user'
import type { Attribute, Invite, Message, User } from '$types/user'
import { MessageType } from '$types/user'

type CreateParams = {
  name: string
  avatar?: Blob
}

export interface UserClient {
  handleMessage: (message: Message) => void
  create: (params: CreateParams) => Promise<User>
  get: () => Promise<User>
  updateName: (user: Pick<User, 'name'>) => Promise<User>
  updateHandle: ({ handle }) => Promise<User>
  updateAvatar: (user: Pick<User, 'avatar'>) => Promise<User>
  delete: (user: Pick<User, 'name'>) => Promise<void>
  addAttribute: (attribute: Attribute) => Promise<Attribute>
  getAttribute: (attributeUUID: string) => Promise<Attribute>
  getAllAttributes: () => Promise<Attribute[]>
  updateAttribute: (attribute: Attribute) => Promise<Attribute>
  verifyAttribute: (attributeUUID: string, code: string) => Promise<void>
  resendAttributeVerification: (attributeUUID: string) => Promise<void>
  deleteAttribute: (attributeUUID: string) => Promise<void>
  generateQrInvite: () => Promise<Invite>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function userClientFactory(
  api: any,
  _cache: any,
  store: UserStore
): UserClient {
  return {
    handleMessage: (message) => {
      switch (message.type) {
        case MessageType.UPDATE_NAME:
          store.update((state) => ({ ...state, name: message.data }))
      }
    },
    create: ({ name, avatar }) => api.createUser(name, avatar),
    get: () => api.getProfile(),
    updateName: ({ name }) => api.editName(name),
    updateHandle: ({ handle }) => api.editHandle(handle),
    updateAvatar: ({ avatar }) => api.editAvatar(avatar),
    delete: ({ name }) => api.deleteUser(name),
    addAttribute: (attribute) => api.addAttribute(attribute),
    getAttribute: (attributeUUID) => api.getAttribute(attributeUUID),
    getAllAttributes: () => api.getAttributes(),
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
