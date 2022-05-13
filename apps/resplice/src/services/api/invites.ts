import * as reproto from '@resplice/proto'
import {
  ConnCommandType,
  onlyRecievedMessages
} from '$services/commuters/connCommuter'
import processRecords from '$stores/utils'

import type { ConnCommuter } from '$services/commuters/connCommuter'
import type { DB } from '$services/db'
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
  ) => Promise<void>
  inviteViaPhone: (
    name: string,
    phone: PhoneValue,
    attributeIds: Attribute['id'][]
  ) => Promise<void>
  inviteViaEmail: (
    name: string,
    email: EmailValue,
    attributeIds: Attribute['id'][]
  ) => Promise<void>
  delete: (id: Invite['id']) => Promise<void>
  createQr: () => Promise<void>
  deleteQr: (id: QrInvite['id']) => Promise<void>
  addShare: (
    id: Invite['id'],
    attributeId: UserAttribute['id']
  ) => Promise<void>
  removeShare: (
    id: Invite['id'],
    attributeId: UserAttribute['id']
  ) => Promise<void>
}

function invitesClientFactory(
  commuter: ConnCommuter,
  cache: DB,
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
    inviteViaHandle: async (name, handle, attributeIds) => {
      const message = {
        type: ClientMessageType.INVITE_VIA_EMAIL,
        data: { name, handle, attributeIds }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    inviteViaPhone: async (name, phone, attributeIds) => {
      const message = {
        type: ClientMessageType.INVITE_VIA_PHONE,
        data: { name, phone, attributeIds }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    inviteViaEmail: async (name, email, attributeIds) => {
      const message = {
        type: ClientMessageType.INVITE_VIA_EMAIL,
        data: { name, email, attributeIds }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    delete: async (id) => {
      const message = {
        type: ClientMessageType.INVITE_DELETE,
        data: { id }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    createQr: async () => {
      const message = {
        type: ClientMessageType.QR_INVITE_CREATE,
        data: {}
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    deleteQr: async (id) => {
      const message = {
        type: ClientMessageType.QR_INVITE_DELETE,
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
        type: ClientMessageType.INVITE_ATTRIBUTE_ADD,
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
        type: ClientMessageType.INVITE_ATTRIBUTE_REMOVE,
        data: { id, attributeId }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    }
  }
}

export default invitesClientFactory
