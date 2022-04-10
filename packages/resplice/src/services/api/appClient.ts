import { ConnStatus } from '$stores/conn'
import attributesClientFactory from './attributes'
// import chatClientFactory from './chat'
import contactsClientFactory from './contacts'
import invitesClientFactory from './invites'
import profileClientFactory from './profile'

import type { Stores } from '$stores/index'
import type { AppCache } from '$services/cache'
import type { AttributesClient } from './attributes'
// import type { ChatClient } from './chat'
import type { ContactsClient } from './contacts'
import type { InvitesClient } from './invites'
import type { ProfileClient } from './profile'

export interface AppClient {
  attributes: AttributesClient
  // chat: ChatClient
  contacts: ContactsClient
  invites: InvitesClient
  profile: ProfileClient
}

export enum ConnCommand {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  SEND = 'SEND'
}
enum ConnMessageType {
  CLOSED = 'CLOSED',
  ERRORED = 'ERRORED',
  RECEIVED = 'RECEIVED',
  OPENED = 'OPENED',
  SENT = 'SENT'
}

async function clientFactory(
  wsEndpoint: string,
  conn: Worker,
  cache: AppCache,
  stores: Stores
): Promise<AppClient> {
  const attributes = attributesClientFactory(conn, cache, stores.attributes)
  // const chat = chatClientFactory(conn, cache, stores.chat)
  const contacts = contactsClientFactory(conn, cache, stores.contacts)
  const invites = invitesClientFactory(conn, cache, stores.invites)
  const profile = profileClientFactory(conn, cache, {
    profile: stores.profile,
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
      switch (cmd.type as ConnMessageType) {
        case ConnMessageType.OPENED:
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
            attributes,
            // chat,
            contacts,
            invites,
            profile
          })
          break
        case ConnMessageType.CLOSED:
          stores.conn.update((state) => ({
            ...state,
            status: ConnStatus.DISCONNECTED,
            error: null
          }))
          break
        case ConnMessageType.ERRORED:
          stores.conn.update((state) => ({
            ...state,
            status: ConnStatus.DISCONNECTED,
            error: cmd.reason
          }))
          // This will only actually reject if the promise
          // was not resolved previously by a successful connection
          reject(cmd.reason)
          break
        case ConnMessageType.RECEIVED:
          // This can be moved if we can have multiple
          // events listeners on the worker `onmessage` event
          attributes.handleMessage(cmd.data)
          // chat.handleMessage(cmd.data)
          contacts.handleMessage(cmd.data)
          invites.handleMessage(cmd.data)
          profile.handleMessage(cmd.data)
          break
      }
    }

    conn.postMessage({ type: ConnCommand.OPEN, wsEndpoint })
  })
}

export const contextKey = 'Client'

export default clientFactory
