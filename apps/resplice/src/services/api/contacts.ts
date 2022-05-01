import * as reproto from '@resplice/proto'
import {
  ConnCommandType,
  onlyRecievedMessages
} from '$services/commuters/connCommuter'
import processRecords from '$stores/utils'

import type { ConnCommuter } from '$services/commuters/connCommuter'
import type { AppCache } from '$services/cache'
import type { ContactStore } from '$stores/contacts'
import type { Contact, PendingContact } from '$types/contact'
import type { Attribute as UserAttribute } from '$types/user'

const ServerMessageType = reproto.server_message.ServerMessageType
const ClientMessageType = reproto.client_request.ClientRequestType

export interface ContactsClient {
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
  commuter: ConnCommuter,
  _cache: AppCache, // TODO: Implement cache
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
    editAlias: (params) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_EDIT_ALIAS,
          data: params
        }
      })
    },
    editDescription: (params) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_EDIT_DESCRIPTION,
          data: params
        }
      })
    },
    favor: (id) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_FAVOR,
          data: { id }
        }
      })
    },
    unfavor: (id) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_UNFAVOR,
          data: { id }
        }
      })
    },
    delete: (id) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_DELETE,
          data: { id }
        }
      })
    },
    addShare: (id, attributeId) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_ADD_SHARE,
          data: { id, attributeId }
        }
      })
    },
    removeShare: (id, attributeId) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_REMOVE_SHARE,
          data: { id, attributeId }
        }
      })
    },
    acceptPending: (id) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.PENDING_CONTACT_ACCEPT,
          data: { id }
        }
      })
    },
    declinePending: (id) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.PENDING_CONTACT_DECLINE,
          data: { id }
        }
      })
    }
  }
}

export default contactsClientFactory
