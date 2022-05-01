import * as reproto from '@resplice/proto'
import {
  ConnCommandType,
  onlyRecievedMessages
} from '$services/commuters/connCommuter'
import processRecords from '$stores/utils'

import type { ConnCommuter } from '$services/commuters/connCommuter'
import type { AppCache } from '$services/cache'
import type { AttributeStore } from '$stores/attributes'
import type { Attribute } from '$types/user'

const ServerMessageType = reproto.server_message.ServerMessageType
const ClientMessageType = reproto.client_request.ClientRequestType

export interface AttributesClient {
  addAttribute: (attribute: Pick<Attribute, 'name' | 'type' | 'value'>) => void
  editAttributeName: (params: Pick<Attribute, 'id' | 'name'>) => void
  editAttributeValue: (params: Pick<Attribute, 'id' | 'value'>) => void
  editAttributeSort: (params: Pick<Attribute, 'id' | 'sortOrder'>) => void
  sendAttributeVerification: (attributeID: Attribute['id']) => void
  verifyAttribute: (attributeID: Attribute['id'], code: string) => void
  deleteAttribute: (attributeID: Attribute['id']) => void
}

function attributesClientFactory(
  commuter: ConnCommuter,
  _cache: AppCache,
  store: AttributeStore
): AttributesClient {
  commuter.messages$.pipe(onlyRecievedMessages()).subscribe((m) => {
    switch (m.type) {
      case ServerMessageType.USER_ATTRIBUTES:
        store.update((state) =>
          processRecords(state, 'id', m.data.attributes, m.data.expiredIds)
        )
        break
      case ServerMessageType.USER_ATTRIBUTE_GROUPS: // TODO
    }
  })

  return {
    addAttribute: (attribute) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_CREATE,
          data: { attribute }
        }
      })
    },
    editAttributeName: (params) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_EDIT_NAME,
          data: params
        }
      })
    },
    editAttributeValue: (params) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_EDIT_VALUE,
          data: params
        }
      })
    },
    editAttributeSort: (params) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_SORT,
          data: params
        }
      })
    },
    sendAttributeVerification: (attributeID) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_SEND_VERIFICATION,
          data: { attributeID }
        }
      })
    },
    verifyAttribute: (attributeID, code) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_VERIFY,
          data: { attributeID, code }
        }
      })
    },
    deleteAttribute: (attributeID) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.USER_ATTRIBUTE_DELETE,
          data: { attributeID }
        }
      })
    }
  }
}

export default attributesClientFactory
