import * as reproto from '$lib/reproto'
import { ConnCommand } from '$services/api/appClient'
import processRecords from '$stores/utils'

import type { AppCache } from '$services/cache'
import type { ContactStore } from '$stores/contacts'
import type { Contact, PendingContact } from '$types/contact'
import type { Attribute as UserAttribute } from '$types/user'

const ServerMessageType = reproto.api_response.ResponseType
export type ServerMessage = {
  type: reproto.api_response.ResponseType
  data: any
}
const ClientMessageType = reproto.api_request.RequestType

export interface ContactsClient {
  handleMessage: (message: ServerMessage) => void
  editAlias: (params: Pick<Contact, 'id' | 'alias'>) => void
  editDescription: (params: Pick<Contact, 'id' | 'description'>) => void
  favor: (id: Contact['id']) => void
  unfavor: (id: Contact['id']) => void
  // mute: (id: Contact['id']) => void
  // unmute: (id: Contact['id']) => void
  // archive: (id: Contact['id']) => void
  // unarchive: (id: Contact['id']) => void
  delete: (id: Contact['id']) => void
  addShare: (id: Contact['id'], attributeId: UserAttribute['id']) => void
  removeShare: (id: Contact['id'], attributeId: UserAttribute['id']) => void
  acceptPending: (id: PendingContact['id']) => void
  declinePending: (id: PendingContact['id']) => void
}

function contactsClientFactory(
  conn: Worker,
  _cache: AppCache, // TODO: Implement cache
  store: ContactStore
): ContactsClient {
  return {
    handleMessage: (message) => {
      switch (message.type) {
        case ServerMessageType.CONTACTS:
          store.contacts.update((state) =>
            processRecords(
              state,
              'id',
              message.data.contacts,
              message.data.expiredIds
            )
          )
          break
        case ServerMessageType.CONTACT_ATTRIBUTES:
          store.contactAttributes.update((state) =>
            processRecords(
              state,
              'id',
              message.data.contactAttributes,
              message.data.expiredIds
            )
          )
          break
        case ServerMessageType.CONTACT_SHARES:
          store.contactShares.update((state) =>
            processRecords(
              state,
              'id',
              message.data.contactShares,
              message.data.expiredIds
            )
          )
          break
        case ServerMessageType.PENDING_CONTACTS:
          store.pendingContacts.update((state) =>
            processRecords(
              state,
              'id',
              message.data.pendingContacts,
              message.data.expiredIds
            )
          )
          break
        case ServerMessageType.PENDING_CONTACT_ATTRIBUTES:
          store.pendingContactAttributes.update((state) =>
            processRecords(
              state,
              'id',
              message.data.pendingContactAttributes,
              message.data.expiredIds
            )
          )
          break
      }
    },
    editAlias: (params) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.CONTACT_EDIT_ALIAS,
          data: params
        }
      })
    },
    editDescription: (params) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.CONTACT_EDIT_DESCRIPTION,
          data: params
        }
      })
    },
    favor: (id) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.CONTACT_FAVOR,
          data: { id }
        }
      })
    },
    unfavor: (id) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.CONTACT_UNFAVOR,
          data: { id }
        }
      })
    },
    delete: (id) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.CONTACT_DELETE,
          data: { id }
        }
      })
    },
    addShare: (id, attributeId) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.CONTACT_ADD_SHARE,
          data: { id, attributeId }
        }
      })
    },
    removeShare: (id, attributeId) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.CONTACT_REMOVE_SHARE,
          data: { id, attributeId }
        }
      })
    },
    acceptPending: (id) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.PENDING_CONTACT_ACCEPT,
          data: { id }
        }
      })
    },
    declinePending: (id) => {
      conn.postMessage({
        type: ConnCommand.SEND,
        message: {
          type: ClientMessageType.PENDING_CONTACT_DECLINE,
          data: { id }
        }
      })
    }
  }
}

export default contactsClientFactory
