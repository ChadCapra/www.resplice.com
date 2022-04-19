import * as reproto from '@resplice/proto'
import { ConnCommand } from '$services/api/appClient'
import processRecords from '$stores/utils'

import type { AppCache } from '$services/cache'
import type { AttributeStore } from '$stores/attributes'
import type { Attribute } from '$types/user'

const ServerMessageType = reproto.server_message.ServerMessageType
// TODO: Type data based on ResponseType
export type ServerMessage = {
  type: reproto.server_message.ServerMessageType
  data: any
}
const ClientMessageType = reproto.client_request.ClientRequestType

export interface AttributesClient {
  handleMessage: (message: ServerMessage) => void
  addAttribute: (attribute: Pick<Attribute, 'name' | 'type' | 'value'>) => void
  editAttributeName: (params: Pick<Attribute, 'id' | 'name'>) => void
  editAttributeValue: (params: Pick<Attribute, 'id' | 'value'>) => void
  editAttributeSort: (params: Pick<Attribute, 'id' | 'sortOrder'>) => void
  sendAttributeVerification: (attributeID: Attribute['id']) => void
  verifyAttribute: (attributeID: Attribute['id'], code: string) => void
  deleteAttribute: (attributeID: Attribute['id']) => void
}

function attributesClientFactory(
  conn: Worker,
  _cache: AppCache, // TODO: Implement cache
  store: AttributeStore
): AttributesClient {
  return {
    handleMessage: (message) => {
      switch (message.type) {
        case ServerMessageType.USER_ATTRIBUTES:
          store.update((state) =>
            processRecords(
              state,
              'id',
              message.data.attributes,
              message.data.expiredIds
            )
          )
          break
        case ServerMessageType.USER_ATTRIBUTE_GROUPS: // TODO
        default:
          console.log(message.type, message.data)
      }
    },
    addAttribute: (attribute) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_CREATE,
          data: { attribute }
        }
      })
    },
    editAttributeName: (params) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_EDIT_NAME,
          data: params
        }
      })
    },
    editAttributeValue: (params) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_EDIT_VALUE,
          data: params
        }
      })
    },
    editAttributeSort: (params) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_SORT,
          data: params
        }
      })
    },
    sendAttributeVerification: (attributeID) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_SEND_VERIFICATION,
          data: { attributeID }
        }
      })
    },
    verifyAttribute: (attributeID, code) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_VERIFY,
          data: { attributeID, code }
        }
      })
    },
    deleteAttribute: (attributeID) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_DELETE,
          data: { attributeID }
        }
      })
    }
  }
}

export default attributesClientFactory
