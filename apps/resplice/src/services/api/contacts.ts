import * as reproto from '@resplice/proto'
import {
  ConnCommandType,
  onlyRecievedMessages
} from '$services/commuters/connCommuter'
import processRecords from '$stores/utils'

import type { ConnCommuter } from '$services/commuters/connCommuter'
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
  acceptPending: (id: PendingContact['id']) => Promise<void>
  declinePending: (id: PendingContact['id']) => Promise<void>
}

function contactsClientFactory(
  commuter: ConnCommuter,
  cache: DB,
  store: ContactStore
): ContactsClient {
  commuter.messages$.pipe(onlyRecievedMessages()).subscribe((m) => {
    switch (m.type) {
      case ServerMessageType.CONTACTS:
        store.contacts.update((state) =>
          processRecords(state, 'id', m.data.contacts, m.data.expiredIds)
        )
        break
      case ServerMessageType.CONTACT_ATTRIBUTES:
        store.contactAttributes.update((state) =>
          processRecords(
            state,
            'id',
            m.data.contactAttributes,
            m.data.expiredIds
          )
        )
        break
      case ServerMessageType.CONTACT_SHARES:
        store.contactShares.update((state) =>
          processRecords(state, 'id', m.data.contactShares, m.data.expiredIds)
        )
        break
      case ServerMessageType.PENDING_CONTACTS:
        store.pendingContacts.update((state) =>
          processRecords(state, 'id', m.data.pendingContacts, m.data.expiredIds)
        )
        break
      case ServerMessageType.PENDING_CONTACT_ATTRIBUTES:
        store.pendingContactAttributes.update((state) =>
          processRecords(
            state,
            'id',
            m.data.pendingContactAttributes,
            m.data.expiredIds
          )
        )
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
        type: ClientMessageType.CONTACT_ADD_SHARE,
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
        type: ClientMessageType.CONTACT_REMOVE_SHARE,
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
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
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
