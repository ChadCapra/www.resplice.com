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
  add: (attribute: Pick<Attribute, 'name' | 'type' | 'value'>) => Promise<void>
  editName: (params: Pick<Attribute, 'id' | 'name'>) => Promise<void>
  editValue: (params: Pick<Attribute, 'id' | 'value'>) => Promise<void>
  editSort: (params: Pick<Attribute, 'id' | 'sortOrder'>) => Promise<void>
  sendVerification: (attributeID: Attribute['id']) => Promise<void>
  verify: (attributeID: Attribute['id'], code: number) => Promise<void>
  delete: (attributeID: Attribute['id']) => Promise<void>
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
    add: async (attribute) => {
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
    editName: async (params) => {
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
    editValue: async (params) => {
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
    editSort: async (params) => {
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
    sendVerification: async (attributeID) => {
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
    verify: async (attributeID, code) => {
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
    delete: async (attributeID) => {
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
