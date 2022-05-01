import * as reproto from '@resplice/proto'
import {
  ConnCommandType,
  onlyRecievedMessages
} from '$services/commuters/connCommuter'
import processRecords from '$stores/utils'

import type { ConnCommuter } from '$services/commuters/connCommuter'
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
const ClientMessageType = reproto.client_request.ClientRequestType

export interface InvitesClient {
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

function invitesClientFactory(
  commuter: ConnCommuter,
  _cache: AppCache,
  store: InviteStore
): InvitesClient {
  commuter.messages$.pipe(onlyRecievedMessages()).subscribe((m) => {
    switch (m.type) {
      case ServerMessageType.CONTACT_INVITES:
        store.invites.update((state) =>
          processRecords(state, 'id', m.data.contactInvites, m.data.expiredIds)
        )
        break
      case ServerMessageType.CONTACT_INVITE_ATTRIBUTES:
        store.inviteAttributes.update((state) =>
          processRecords(
            state,
            'id',
            m.data.inviteAttributes,
            m.data.expiredIds
          )
        )
        break
      case ServerMessageType.QR_CONTACT_INVITES:
        store.activeQrInvite.set(m.data)
        break
    }
  })

  return {
    inviteViaHandle: (name, handle, attributeIds) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_INVITE_VIA_HANDLE,
          data: { name, handle, attributeIds }
        }
      })
    },
    inviteViaPhone: (name, phone, attributeIds) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_INVITE_VIA_PHONE,
          data: { name, phone, attributeIds }
        }
      })
    },
    inviteViaEmail: (name, email, attributeIds) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_INVITE_VIA_EMAIL,
          data: { name, email, attributeIds }
        }
      })
    },
    delete: (id) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_INVITE_DELETE,
          data: { id }
        }
      })
    },
    createQr: () => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.QR_CONTACT_INVITE_CREATE,
          data: {}
        }
      })
    },
    deleteQr: (id) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.QR_CONTACT_INVITE_DELETE,
          data: { id }
        }
      })
    },
    addShare: (id, attributeId) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_INVITE_ADD_ATTRIBUTE,
          data: { id, attributeId }
        }
      })
    },
    removeShare: (id, attributeId) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.CONTACT_INVITE_REMOVE_ATTRIBUTE,
          data: { id, attributeId }
        }
      })
    }
  }
}

export default invitesClientFactory
