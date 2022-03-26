import * as reproto from '$lib/reproto'
import processRecords from '$stores/utils'
import type { AppCache } from '$services/cache'
import type { ContactStore } from '$stores/contacts'
import type { Contact, Invite } from '$types/contact'

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
  // requestAttributeType: (id: Contact['id']) => void
  // removeAttribute: (id: Contact['id']) => void
  createPending: () => void // TODO: Talk about what this is
  acceptPending: (id: Invite['id']) => void
  declinePending: (id: Invite['id']) => void
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function contactsClientFactory(
  conn: Worker,
  _cache: AppCache,
  store: ContactStore
): ContactsClient {
  return {
    // TODO: Implement cache
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
        case ServerMessageType.PENDING_CONTACTS:
          store.invites.update((state) =>
            processRecords(
              state,
              'id',
              message.data.pendingContacts,
              message.data.expiredIds
            )
          )
          break
        case ServerMessageType.PENDING_CONTACT_ATTRIBUTES:
          store.inviteAttributes.update((state) =>
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
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_EDIT_ALIAS,
          data: params
        }
      })
    },
    editDescription: (params) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_EDIT_DESCRIPTION,
          data: params
        }
      })
    },
    favor: (id) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_FAVOR,
          data: { id }
        }
      })
    },
    unfavor: (id) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_UNFAVOR,
          data: { id }
        }
      })
    },
    delete: (id) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_DELETE,
          data: { id }
        }
      })
    },
    createPending: () => {
      // TODO
      // conn.postMessage({
      //   type: 'SEND',
      //   message: {
      //     type: ClientMessageType.PENDING_CONTACT_CREATE_VIA_QR,
      //     data: { id }
      //   }
      // })
    },
    acceptPending: (id) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.PENDING_CONTACT_ACCEPT,
          data: { id }
        }
      })
    },
    declinePending: (id) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.PENDING_CONTACT_DECLINE,
          data: { id }
        }
      })
    }
  }
}

export default contactsClientFactory
