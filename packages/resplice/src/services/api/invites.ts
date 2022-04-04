import * as reproto from '$lib/reproto'
import processRecords from '$stores/utils'
import type { AppCache } from '$services/cache'
import type { InviteStore } from '$stores/invites'
import type { Invite, QrInvite } from '$types/invite'
import type {
  EmailValue,
  PhoneValue,
  Attribute as UserAttribute
} from '$types/attribute'
import type { Contact } from '$types/contact'
import type { Attribute } from '$types/user'

const ServerMessageType = reproto.server_message.ServerMessageType
export type ServerMessage = {
  type: reproto.server_message.ServerMessageType
  data: any
}
const ClientMessageType = reproto.client_request.ClientRequestType

export interface InvitesClient {
  handleMessage: (message: ServerMessage) => void
  inviteViaHandle: (
    name: string,
    handle: Contact['handle'],
    attributeIds: Attribute['id'][]
  ) => void
  inviteViaPhone: (
    name: string,
    phone: PhoneValue,
    attributeIds: Attribute['id'][]
  ) => void
  inviteViaEmail: (
    name: string,
    email: EmailValue,
    attributeIds: Attribute['id'][]
  ) => void
  delete: (id: Invite['id']) => void
  createQr: () => void
  deleteQr: (id: QrInvite['id']) => void
  addShare: (id: Invite['id'], attributeId: UserAttribute['id']) => void
  removeShare: (id: Invite['id'], attributeId: UserAttribute['id']) => void
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function invitesClientFactory(
  conn: Worker,
  _cache: AppCache,
  store: InviteStore
): InvitesClient {
  return {
    // TODO: Implement cache
    handleMessage: (message) => {
      switch (message.type) {
        case ServerMessageType.CONTACT_INVITES:
          store.invites.update((state) =>
            processRecords(
              state,
              'id',
              message.data.contactInvites,
              message.data.expiredIds
            )
          )
          break
        case ServerMessageType.CONTACT_INVITE_ATTRIBUTES:
          store.inviteAttributes.update((state) =>
            processRecords(
              state,
              'id',
              message.data.inviteAttributes,
              message.data.expiredIds
            )
          )
          break
        case ServerMessageType.QR_INVITES:
          store.activeQrInvite.set(message.data)
          break
      }
    },
    inviteViaHandle: (name, handle, attributeIds) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_VIA_HANDLE,
          data: { name, handle, attributeIds }
        }
      })
    },
    inviteViaPhone: (name, phone, attributeIds) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_VIA_PHONE,
          data: { name, phone, attributeIds }
        }
      })
    },
    inviteViaEmail: (name, email, attributeIds) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_VIA_EMAIL,
          data: { name, email, attributeIds }
        }
      })
    },
    delete: (id) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_DELETE,
          data: { id }
        }
      })
    },
    createQr: () => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.QR_CONTACT_INVITE_CREATE,
          data: {}
        }
      })
    },
    deleteQr: (id) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.QR_CONTACT_INVITE_DELETE,
          data: { id }
        }
      })
    },
    addShare: (id, attributeId) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_ADD_ATTRIBUTE,
          data: { id, attributeId }
        }
      })
    },
    removeShare: (id, attributeId) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_REMOVE_ATTRIBUTE,
          data: { id, attributeId }
        }
      })
    }
  }
}

export default invitesClientFactory
