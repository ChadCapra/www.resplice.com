import * as reproto from '@resplice/proto'
import { ConnStatus } from '$stores/events'
import { ConnCommandType } from '$services/commuters/connCommuter'
import attributesClientFactory from '$services/api/attributes'
import contactsClientFactory from '$services/api/contacts'
import invitesClientFactory from '$services/api/invites'
import profileClientFactory from '$services/api/profile'

import {
  ConnMessageType,
  type ConnCommuter
} from '$services/commuters/connCommuter'
import type { Api } from '$services/api/http'
import type { AttributesClient } from '$services/api/attributes'
// import type { ChatClient } from '$services/api/chat'
import type { ContactsClient } from '$services/api/contacts'
import type { InvitesClient } from '$services/api/invites'
import type { ProfileClient } from '$services/api/profile'
import type { DB } from '$services/db'
import type { ReCrypto } from '$services/crypto'
import type { Stores } from '$stores/index'

const ClientMessageType = reproto.client_request.ClientRequestType

class AppClient {
  attributes: AttributesClient
  // chat: ChatClient
  contacts: ContactsClient
  invites: InvitesClient
  profile: ProfileClient

  #crypto: ReCrypto

  constructor(
    wsEndpoint: string,
    connCommuter: ConnCommuter,
    api: Api,
    cache: DB,
    stores: Stores
  ) {
    // Subscribes, sets crypto, then unsubscribes
    stores.auth.subscribe((val) => (this.#crypto = val.crypto))()

    // Set state in app as connecting
    stores.events.set({
      connStatus: ConnStatus.CONNECTING,
      error: null,
      events: []
    })

    // Subscribe to conn worker events
    connCommuter.messages$.subscribe((m) => {
      switch (m.type) {
        case ConnMessageType.OPENED:
          stores.events.update(() => ({
            connStatus: ConnStatus.CONNECTED,
            error: null,
            events: [m]
          }))
          break
        // TODO: Move to toasts store
        case ConnMessageType.ERRORED:
          stores.events.update((state) => ({
            connStatus: state.connStatus,
            error: m.error,
            events: [...state.events, m]
          }))
          break
        case ConnMessageType.CLOSED:
          stores.events.update((state) => ({
            connStatus: ConnStatus.DISCONNECTED,
            error: null,
            // Might reset messages in this case
            events: [...state.events, m]
          }))
          break
        default:
          // TODO: Remove expired stuff across stores using new server time
          stores.events.update((state) => ({
            connStatus: state.connStatus,
            error: null,
            events: [...state.events, m]
          }))
      }
    })

    // initialize clients
    this.attributes = attributesClientFactory(
      connCommuter,
      cache,
      stores.attributes
    )
    this.contacts = contactsClientFactory({
      crypto: this.#crypto,
      commuter: connCommuter,
      api,
      cache,
      store: stores.contacts
    })
    this.invites = invitesClientFactory({
      crypto: this.#crypto,
      commuter: connCommuter,
      api,
      cache,
      store: stores.invites
    })
    this.profile = profileClientFactory(connCommuter, cache, stores.profile)

    // Get latest dates for cache stores and build handshake message
    const handshake = {
      type: ClientMessageType.SOCKET_AUTHORIZE,
      counter: 0,
      data: {
        // TODO: Pull these from cache
        authenticated_at: 0,
        user_attributes_since: 0,
        user_attribute_groups_since: 0,
        contacts_since: 0,
        contact_attributes_since: 0,
        contact_shares_since: 0,
        splices_since: 0,
        splice_members_since: 0,
        splice_shares_since: 0
      }
    }

    // Send open command
    connCommuter.postMessage({
      type: ConnCommandType.OPEN,
      wsEndpoint,
      crypto: this.#crypto,
      handshake
    })
  }
}

export const contextKey = 'Client'

export default AppClient
