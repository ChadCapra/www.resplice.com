import type { AppCache } from '$services/cache'
import type { UserStore } from '$stores/user'
import type { Attribute, User } from '$types/user'
import proto from '$services/resplice-pb'

const MessageType = proto.resplice.util.ServerMessageType
export type Message = {
  type: proto.resplice.util.ServerMessageType
  data: any
}

export interface UserClient {
  handleMessage: (message: Message) => void
  updateName: (user: Pick<User, 'name'>) => void
  updateHandle: ({ handle }) => void
  updateAvatar: (user: Pick<User, 'avatar'>) => void
  delete: (user: Pick<User, 'name'>) => void
  addAttribute: (attribute: Attribute) => void
  getAttribute: (attributeUUID: string) => void
  getAllAttributes: () => void
  updateAttribute: (attribute: Attribute) => void
  verifyAttribute: (attributeUUID: string, code: string) => void
  resendAttributeVerification: (attributeUUID: string) => void
  deleteAttribute: (attributeUUID: string) => void
  generateQrInvite: () => void
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function userClientFactory(
  conn: Worker,
  cache: AppCache,
  store: UserStore
): UserClient {
  return {
    handleMessage: (message) => {
      switch (message.type) {
        case MessageType.USER:
          cache.addUser(message.data)
          store.update((state) => ({ ...state, ...message.data }))
          break
      }
    },
    updateName: ({ name }) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: proto.resplice.util.ClientMessageType.EDIT_ATTRIBUTE_NAME,
          data: { name }
        }
      })
    },
    updateHandle: ({ handle }) => 0,
    updateAvatar: ({ avatar }) => 0,
    delete: ({ name }) => 0,
    addAttribute: (attribute) => 0,
    getAttribute: (attributeUUID) => 0,
    getAllAttributes: () => 0,
    updateAttribute: (attribute) => 0,
    verifyAttribute: (attributeUUID, code) => 0,
    resendAttributeVerification: (attributeUUID) => 0,
    deleteAttribute: (attributeUUID) => 0,
    generateQrInvite: () => 0
  }
}

export default userClientFactory
