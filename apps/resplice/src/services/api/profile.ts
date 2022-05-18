import * as reproto from '@resplice/proto'
import {
  ConnCommandType,
  onlyRecievedMessages
} from '$services/commuters/connCommuter'

import type { ConnCommuter } from '$services/commuters/connCommuter'
import type { DB } from '$services/db'
import type { ProfileStore } from '$stores/profile'
import type { Profile } from '$types/user'

const ServerMessageType = reproto.server_message.ServerMessageType
const ClientMessageType = reproto.client_request.ClientRequestType

export interface ProfileClient {
  editName: (name: Profile['name']) => Promise<void>
  editHandle: (handle: Profile['handle']) => Promise<void>
  editAvatar: (avatar: Blob) => Promise<void>
  deleteAccount: (
    handle: Profile['handle'],
    removeAllData: boolean
  ) => Promise<void>
}

function profileClientFactory(
  commuter: ConnCommuter,
  cache: DB,
  store: ProfileStore
): ProfileClient {
  commuter.messages$.pipe(onlyRecievedMessages()).subscribe((m) => {
    switch (m.type) {
      case ServerMessageType.USER_PROFILE:
        store.update((state) => ({ ...state, ...m.data }))
        break
      case ServerMessageType.USER_SESSIONS: // TODO
    }
  })

  return {
    editName: async (name) => {
      const message = {
        type: ClientMessageType.PROFILE_EDIT_NAME,
        data: { name }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    editHandle: async (handle) => {
      const message = {
        type: ClientMessageType.PROFILE_EDIT_HANDLE,
        data: { handle }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    editAvatar: async (avatar) => {
      const message = {
        type: ClientMessageType.PROFILE_EDIT_AVATAR,
        data: { avatar }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    },
    deleteAccount: async (handle, removeAllData) => {
      const message = {
        type: ClientMessageType.ACCOUNT_DELETE,
        data: { handle, removeAllData }
      }
      const [counter] = await cache.insert('events', message)
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: { ...message, counter }
      })
    }
  }
}

export default profileClientFactory
