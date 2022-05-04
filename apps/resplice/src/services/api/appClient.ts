import { ConnStatus } from '$stores/conn'
import { ConnCommandType } from '$services/commuters/connCommuter'
import attributesClientFactory from '$services/api/attributes'
import contactsClientFactory from '$services/api/contacts'
import invitesClientFactory from '$services/api/invites'
import profileClientFactory from '$services/api/profile'

import {
  ConnMessageType,
  type ConnCommuter
} from '$services/commuters/connCommuter'
import type { AttributesClient } from '$services/api/attributes'
// import type { ChatClient } from '$services/api/chat'
import type { ContactsClient } from '$services/api/contacts'
import type { InvitesClient } from '$services/api/invites'
import type { ProfileClient } from '$services/api/profile'
import type { AppCache } from '$services/cache'
import type { Stores } from '$stores/index'

class AppClient {
  attributes: AttributesClient
  // chat: ChatClient
  contacts: ContactsClient
  invites: InvitesClient
  profile: ProfileClient

  constructor(
    wsEndpoint: string,
    connCommuter: ConnCommuter,
    cache: AppCache,
    stores: Stores
  ) {
    // Set state in app as connecting
    stores.conn.set({
      status: ConnStatus.CONNECTING,
      error: null,
      messages: []
    })

    // Subscribe to conn worker events
    connCommuter.messages$.subscribe((m) => {
      switch (m.type) {
        case ConnMessageType.OPENED:
          stores.conn.update(() => ({
            status: ConnStatus.CONNECTED,
            error: null,
            messages: [m]
          }))
          break
        // TODO: Move to toasts store
        case ConnMessageType.ERRORED:
          stores.conn.update((state) => ({
            status: state.status,
            error: m.error,
            messages: [...state.messages, m]
          }))
          break
        case ConnMessageType.CLOSED:
          stores.conn.update((state) => ({
            status: ConnStatus.DISCONNECTED,
            error: null,
            // Might reset messages in this case
            messages: [...state.messages, m]
          }))
          break
        default:
          stores.conn.update((state) => ({
            status: state.status,
            error: null,
            messages: [...state.messages, m]
          }))
      }
    })

    // initialize clients
    this.attributes = attributesClientFactory(
      connCommuter,
      cache,
      stores.attributes
    )
    this.contacts = contactsClientFactory(connCommuter, cache, stores.contacts)
    this.invites = invitesClientFactory(connCommuter, cache, stores.invites)
    this.profile = profileClientFactory(connCommuter, cache, stores.profile)

    // Send open command
    connCommuter.postMessage({
      type: ConnCommandType.OPEN,
      wsEndpoint,
      // TODO: Pass real reCrypto class
      reCrypto: {} as any,
      handshake: {}
    })
  }
}

export const contextKey = 'Client'

export default AppClient
