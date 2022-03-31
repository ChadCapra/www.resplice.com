import type { AppCache } from '$services/cache'
import type { ProfileStore } from '$stores/profile'
import type { AttributeStore } from '$stores/attributes'
import processRecords from '$stores/utils'
import type { Attribute } from '$types/attribute'
import type { Profile } from '$types/profile'
import * as reproto from '$lib/reproto'

const ServerMessageType = reproto.api_response.ResponseType
// TODO: Type data based on ResponseType
export type ServerMessage = {
  type: reproto.api_response.ResponseType
  data: any
}
const ClientMessageType = reproto.api_request.RequestType

export interface ProfileClient {
  handleMessage: (message: ServerMessage) => void
  editName: (name: Profile['name']) => void
  editHandle: (handle: Profile['handle']) => void
  editAvatar: (avatar: Blob) => void
  deleteAccount: (handle: Profile['handle'], removeAllData: boolean) => void
  addAttribute: (attribute: Omit<Attribute, 'id'>) => void
  editAttributeName: (params: Pick<Attribute, 'id' | 'name'>) => void
  editAttributeValue: (params: Pick<Attribute, 'id' | 'value'>) => void
  editAttributeSort: (params: Pick<Attribute, 'id' | 'sortOrder'>) => void
  sendAttributeVerification: (attributeID: Attribute['id']) => void
  verifyAttribute: (attributeID: Attribute['id'], code: string) => void
  deleteAttribute: (attributeID: Attribute['id']) => void
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function profileClientFactory(
  conn: Worker,
  cache: AppCache,
  stores: { profile: ProfileStore; attributes: AttributeStore }
): ProfileClient {
  return {
    handleMessage: (message) => {
      switch (message.type) {
        case ServerMessageType.USER_PROFILE:
          cache.addUser(message.data)
          stores.profile.update((state) => ({ ...state, ...message.data }))
          break
        case ServerMessageType.USER_ATTRIBUTES:
          stores.attributes.update((state) =>
            processRecords(
              state,
              'id',
              message.data.contacts,
              message.data.expiredIds
            )
          )
          break
        case ServerMessageType.USER_ATTRIBUTE_GROUPS: // TODO
        case ServerMessageType.USER_SESSIONS: // TODO
        default:
          console.log(message.type, message.data)
      }
    },
    editName: (name) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.USER_PROFILE_EDIT_NAME,
          data: { name }
        }
      })
    },
    editHandle: (handle) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.USER_PROFILE_EDIT_HANDLE,
          data: { handle }
        }
      })
    },
    editAvatar: (avatar) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.USER_PROFILE_EDIT_HANDLE,
          data: { avatar }
        }
      })
    },
    deleteAccount: (handle, removeAllData) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.ACCOUNT_DELETE,
          data: { handle, removeAllData }
        }
      })
    },
    addAttribute: (attribute) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_CREATE,
          data: { attribute }
        }
      })
    },
    editAttributeName: (params) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_EDIT_NAME,
          data: params
        }
      })
    },
    editAttributeValue: (params) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_EDIT_VALUE,
          data: params
        }
      })
    },
    editAttributeSort: (params) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_SORT,
          data: params
        }
      })
    },
    sendAttributeVerification: (attributeID) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_SEND_VERIFICATION,
          data: { attributeID }
        }
      })
    },
    verifyAttribute: (attributeID, code) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_VERIFY,
          data: { attributeID, code }
        }
      })
    },
    deleteAttribute: (attributeID) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_DELETE,
          data: { attributeID }
        }
      })
    }
  }
}

export default profileClientFactory
