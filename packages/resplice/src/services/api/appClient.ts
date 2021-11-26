import { ConnStatus } from '$stores/conn'
import type { Stores } from '$stores/index'
import contactsClientFactory from './contacts'
import type { ContactsClient } from './contacts'
import invitesClientFactory from './invites'
import type { InvitesClient } from './invites'
import sessionsClientFactory from './sessions'
import type { SessionsClient } from './sessions'
import userClientFactory from './user'
import type { UserClient } from './user'

export interface AppClient {
  contacts: ContactsClient
  invites: InvitesClient
  sessions: SessionsClient
  user: UserClient
}

enum MessageType {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  MESSAGE = 'MESSAGE',
  ERROR = 'ERROR'
}

async function clientFactory(
  url: string,
  conn: Worker,
  cache: Worker,
  stores: Stores
): Promise<AppClient> {
  const contacts = contactsClientFactory(conn, cache)
  const invites = invitesClientFactory(conn, cache)
  const sessions = sessionsClientFactory(conn, cache, stores.auth)
  const user = userClientFactory(conn, cache)

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
          // This feels weird because resolve may be called multiple times
          // if the socket connects, disconnects, then connects again.
          // This might be okay because only the first resolve is processed
          // subsequent calls are basically ignored.
          resolve({
            contacts,
            invites,
            sessions,
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
          sessions.handleMessage(cmd.data)
          break
      }
    }

    conn.postMessage({ type: MessageType.OPEN, url })
  })
}

export const contextKey = 'Client'

export default clientFactory
