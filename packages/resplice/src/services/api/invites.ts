import * as reproto from '$lib/reproto'
import processRecords from '$stores/utils'
import type { AppCache } from '$services/cache'
import type { InviteStore } from '$stores/invites'
import type { Invite } from '$types/invite'
import type {
  EmailValue,
  PhoneValue,
  Attribute as UserAttribute
} from '$types/attribute'
import type { Contact } from '$types/contact'

const ServerMessageType = reproto.api_response.ResponseType
export type ServerMessage = {
  type: reproto.api_response.ResponseType
  data: any
}
const ClientMessageType = reproto.api_request.RequestType

export interface InvitesClient {
  handleMessage: (message: ServerMessage) => void
  inviteViaHandle: (handle: Contact['handle']) => void
  inviteViaPhone: (phone: PhoneValue) => void
  inviteViaEmail: (email: EmailValue) => void
  delete: (id: Invite['id']) => void
  addAttribute: (id: Invite['id'], attributeId: UserAttribute['id']) => void
  removeAttribute: (id: Invite['id'], attributeId: UserAttribute['id']) => void
  addShare: (id: Contact['id'], attributeId: UserAttribute['id']) => void
  removeShare: (id: Contact['id'], attributeId: UserAttribute['id']) => void
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
        case ServerMessageType.CONTACT_SHARES:
          store.shares.update((state) =>
            processRecords(
              state,
              'id',
              message.data.contactShares,
              message.data.expiredIds
            )
          )
          break
      }
    },
    inviteViaHandle: (handle) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_VIA_HANDLE,
          data: { handle }
        }
      })
    },
    inviteViaPhone: (phone) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_VIA_PHONE,
          data: { phone }
        }
      })
    },
    inviteViaEmail: (email) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_VIA_EMAIL,
          data: { email }
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
    addAttribute: (id, attributeId) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_ADD_ATTRIBUTE,
          data: { id, attributeId }
        }
      })
    },
    removeAttribute: (id, attributeId) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_INVITE_REMOVE_ATTRIBUTE,
          data: { id, attributeId }
        }
      })
    },
    addShare: (id, attributeId) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_ADD_SHARE,
          data: { id, attributeId }
        }
      })
    },
    removeShare: (id, attributeId) => {
      conn.postMessage({
        type: 'SEND',
        message: {
          type: ClientMessageType.CONTACT_REMOVE_SHARE,
          data: { id, attributeId }
        }
      })
    }
  }
}

export default invitesClientFactory
