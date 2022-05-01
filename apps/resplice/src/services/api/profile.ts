import * as reproto from '@resplice/proto'
import {
  ConnCommandType,
  onlyRecievedMessages
} from '$services/commuters/connCommuter'

import type { ConnCommuter } from '$services/commuters/connCommuter'
import type { AppCache } from '$services/cache'
import type { ProfileStore } from '$stores/profile'
import type { Profile } from '$types/user'

const ServerMessageType = reproto.server_message.ServerMessageType
const ClientMessageType = reproto.client_request.ClientRequestType

export interface ProfileClient {
  editName: (name: Profile['name']) => void
  editHandle: (handle: Profile['handle']) => void
  editAvatar: (avatar: Blob) => void
  deleteAccount: (handle: Profile['handle'], removeAllData: boolean) => void
}

function profileClientFactory(
  commuter: ConnCommuter,
  cache: AppCache,
  store: ProfileStore
): ProfileClient {
  commuter.messages$.pipe(onlyRecievedMessages()).subscribe((m) => {
    switch (m.type) {
      case ServerMessageType.USER_PROFILE:
        cache.addUser(m.data)
        store.update((state) => ({ ...state, ...m.data }))
        break
      case ServerMessageType.USER_SESSIONS: // TODO
    }
  })

  return {
    editName: (name) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.USER_PROFILE_EDIT_NAME,
          data: { name }
        }
      })
    },
    editHandle: (handle) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.USER_PROFILE_EDIT_HANDLE,
          data: { handle }
        }
      })
    },
    editAvatar: (avatar) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.USER_PROFILE_EDIT_HANDLE,
          data: { avatar }
        }
      })
    },
    deleteAccount: (handle, removeAllData) => {
      commuter.postMessage({
        type: ConnCommandType.SEND,
        message: {
          type: ClientMessageType.ACCOUNT_DELETE,
          data: { handle, removeAllData }
        }
      })
    }
  }
}

export default profileClientFactory
