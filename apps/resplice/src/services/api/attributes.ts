import * as reproto from '@resplice/proto'
import {
  ConnCommandType,
  onlyRecievedMessages
} from '$services/commuters/connCommuter'
import processRecords from '$stores/utils'

import type { ConnCommuter } from '$services/commuters/connCommuter'
import type { DB } from '$services/db'
import type { AttributeStore } from '$stores/attributes'
import type { Attribute } from '$types/user'

const ServerMessageType = reproto.server_message.ServerMessageType
const ClientMessageType = reproto.client_request.ClientRequestType

export interface AttributesClient {
  addAttribute: (
    attribute: Pick<Attribute, 'name' | 'type' | 'value'>
  ) => Promise<void>
  editAttributeName: (params: Pick<Attribute, 'id' | 'name'>) => Promise<void>
  editAttributeValue: (params: Pick<Attribute, 'id' | 'value'>) => Promise<void>
  editAttributeSort: (
    params: Pick<Attribute, 'id' | 'sortOrder'>
  ) => Promise<void>
  sendAttributeVerification: (attributeID: Attribute['id']) => Promise<void>
  verifyAttribute: (attributeID: Attribute['id'], code: number) => Promise<void>
  deleteAttribute: (attributeID: Attribute['id']) => Promise<void>
}

function attributesClientFactory(
  commuter: ConnCommuter,
  cache: DB,
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

  // TODO: We should do optimistic updates
  return {
    addAttribute: async (attribute) => {
      const message = {
        type: ClientMessageType.ATTRIBUTE_CREATE,
        data: { attribute }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    editAttributeName: async (params) => {
      const message = {
        type: ClientMessageType.ATTRIBUTE_EDIT_NAME,
        data: params
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    editAttributeValue: async (params) => {
      const message = {
        type: ClientMessageType.ATTRIBUTE_EDIT_VALUE,
        counter: 0,
        data: params
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    editAttributeSort: async (params) => {
      const message = {
        type: ClientMessageType.ATTRIBUTE_SORT,
        data: params
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    sendAttributeVerification: async (attributeID) => {
      const message = {
        type: ClientMessageType.ATTRIBUTE_SEND_VERIFICATION,
        data: { attributeID }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    verifyAttribute: async (attributeID, code) => {
      const message = {
        type: ClientMessageType.ATTRIBUTE_VERIFY,
        data: { attributeID, code }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    deleteAttribute: async (attributeID) => {
      const message = {
        type: ClientMessageType.ATTRIBUTE_DELETE,
        data: { attributeID }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    }
  }
}

export default attributesClientFactory
