import * as reproto from '@resplice/proto'
import {
  ConnCommandType,
  onlyRecievedMessages
} from '$services/commuters/connCommuter'
import {
  deserializeServerMessage,
  serializeClientMessage
} from '$services/serde'
import processRecords from '$stores/utils'

import type { ReCrypto } from '$services/crypto'
import type { ConnCommuter } from '$services/commuters/connCommuter'
import type { Api } from '$services/api/http'
import type { DB } from '$services/db'
import type { ContactStore } from '$stores/contacts'
import type { Contact, PendingContact } from '$types/contact'
import type { Attribute as UserAttribute } from '$types/user'

const ServerMessageType = reproto.server_message.ServerMessageType
const ClientMessageType = reproto.client_request.ClientRequestType

export interface ContactsClient {
  editAlias: (params: Pick<Contact, 'id' | 'alias'>) => Promise<void>
  editDescription: (
    params: Pick<Contact, 'id' | 'description'>
  ) => Promise<void>
  favor: (id: Contact['id']) => Promise<void>
  unfavor: (id: Contact['id']) => Promise<void>
  // mute: (id: Contact['id']) => Promise<void>
  // unmute: (id: Contact['id']) => Promise<void>
  // archive: (id: Contact['id']) => Promise<void>
  // unarchive: (id: Contact['id']) => Promise<void>
  delete: (id: Contact['id']) => Promise<void>
  addShare: (
    id: Contact['id'],
    attributeId: UserAttribute['id']
  ) => Promise<void>
  removeShare: (
    id: Contact['id'],
    attributeId: UserAttribute['id']
  ) => Promise<void>
  acceptPending: (id: PendingContact['id']) => Promise<Contact>
  declinePending: (id: PendingContact['id']) => Promise<void>
}

type FactoryParams = {
  crypto: ReCrypto
  commuter: ConnCommuter
  api: Api
  cache: DB
  store: ContactStore
}
function contactsClientFactory({
  crypto,
  commuter,
  api,
  cache,
  store
}: FactoryParams): ContactsClient {
  commuter.messages$.pipe(onlyRecievedMessages()).subscribe((m) => {
    switch (m.type) {
      case ServerMessageType.CONTACT_STATE:
        if (m.data.contacts) {
          store.contacts.update((state) =>
            processRecords(
              state,
              'id',
              m.data.contacts,
              m.data.expiredContactIds
            )
          )
        }

        if (m.data.contactAttributes) {
          store.contactAttributes.update((state) =>
            processRecords(
              state,
              'id',
              m.data.contactAttributes,
              m.data.expiredContactAttributeIds
            )
          )
        }

        if (m.data.contactShares) {
          store.contactShares.update((state) =>
            processRecords(
              state,
              'id',
              m.data.contactShares,
              m.data.expiredContactShareIds
            )
          )
        }
        break
    }
  })

  return {
    editAlias: async (params) => {
      const message = {
        type: ClientMessageType.CONTACT_EDIT_ALIAS,
        data: params
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    editDescription: async (params) => {
      const message = {
        type: ClientMessageType.CONTACT_EDIT_DESCRIPTION,
        data: params
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    favor: async (id) => {
      const message = {
        type: ClientMessageType.CONTACT_FAVOR,
        data: { id }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    unfavor: async (id) => {
      const message = {
        type: ClientMessageType.CONTACT_UNFAVOR,
        data: { id }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    delete: async (id) => {
      const message = {
        type: ClientMessageType.CONTACT_DELETE,
        data: { id }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    addShare: async (id, attributeId) => {
      const message = {
        type: ClientMessageType.CONTACT_SHARE_ADD,
        data: { id, attributeId }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    removeShare: async (id, attributeId) => {
      const message = {
        type: ClientMessageType.CONTACT_SHARE_REMOVE,
        data: { id, attributeId }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    acceptPending: async (id) => {
      const message = {
        type: ClientMessageType.PENDING_CONTACT_ACCEPT,
        data: { id }
      }
      const [counter] = await cache.insert('events', message)
      const clientMessageBytes = await serializeClientMessage(
        { ...message, counter },
        crypto
      )
      const resBuffer: ArrayBuffer = await api.post({
        endpoint: '/do',
        data: clientMessageBytes
      })
      const contact: Contact = await deserializeServerMessage(
        new Uint8Array(resBuffer),
        crypto
      )

      return contact
    },
    declinePending: async (id) => {
      const message = {
        type: ClientMessageType.PENDING_CONTACT_DECLINE,
        data: { id }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    }
  }
}

export default contactsClientFactory
