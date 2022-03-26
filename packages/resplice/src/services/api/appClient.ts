import { ConnStatus } from '$stores/conn'
import type { Stores } from '$stores/index'
import type { AppCache } from '$services/cache'
// import chatClientFactory from './chat'
// import type { ChatClient } from './chat'
import contactsClientFactory from './contacts'
import type { ContactsClient } from './contacts'
import invitesClientFactory from './invites'
import type { InvitesClient } from './invites'
import userClientFactory from './user'
import type { UserClient } from './user'

export interface AppClient {
  // chat: ChatClient
  contacts: ContactsClient
  invites: InvitesClient
  user: UserClient
}

enum MessageType {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  MESSAGE = 'MESSAGE',
  ERROR = 'ERROR'
}

async function clientFactory(
  ws_endpoint: string,
  conn: Worker,
  cache: AppCache,
  stores: Stores
): Promise<AppClient> {
  // const chat = chatClientFactory(conn, cache as any, stores.chat)
  const contacts = contactsClientFactory(conn, cache, stores.contacts)
  const invites = invitesClientFactory(conn, cache, stores.invites)
  const user = userClientFactory(conn, cache, {
    user: stores.user,
    attributes: stores.attributes
  })

  return new Promise<AppClient>((resolve, reject) => {
    stores.conn.set({
      status: ConnStatus.CONNECTING,
      error: null,
      messages: []
    })

    conn.onmessage = ({ data: cmd }) => {
      stores.conn.update((state) => ({
        ...state,
        messages: [...state.messages, cmd]
      }))
      switch (cmd.type as MessageType) {
        case MessageType.OPEN:
          stores.conn.update((state) => ({
            ...state,
            status: ConnStatus.CONNECTED,
            error: null
          }))
          // conn.postMessage({ type: '', data: {} }) // Need to send a handshake here.
          // This feels weird because resolve may be called multiple times
          // if the socket connects, disconnects, then connects again.
          // This might be okay because only the first resolve is processed
          // subsequent calls are basically ignored.
          resolve({
            // chat,
            contacts,
            invites,
            user
          })
          break
        case MessageType.CLOSE:
          stores.conn.update((state) => ({
            ...state,
            status: ConnStatus.DISCONNECTED,
            error: null
          }))
          break
        case MessageType.ERROR:
          stores.conn.update((state) => ({
            ...state,
            status: ConnStatus.DISCONNECTED,
            error: cmd.reason
          }))
          // This will only actually reject if the promise
          // was not resolved previously by a successful connection
          reject(cmd.reason)
          break
        case MessageType.MESSAGE:
          // chat.handleMessage(cmd.data)
          contacts.handleMessage(cmd.data)
          invites.handleMessage(cmd.data)
          user.handleMessage(cmd.data)
          break
      }
    }

    conn.postMessage({ type: MessageType.OPEN, ws_endpoint })
  })
}

export const contextKey = 'Client'

export default clientFactory
