import contactsClientFactory from './contacts'
import type { ContactsClient } from './contacts'
// import invitesClientFactory, { InvitesClient } from './invites'
import sessionsClientFactory from './sessions'
import type { SessionsClient } from './sessions'
import type { Stores } from '$stores/index'

export interface RespliceClient {
  contacts: ContactsClient
  // invites: InvitesClient
  sessions: SessionsClient
}

// TODO: Add caching later to respliceClient
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unused-vars
function respliceClientFactory(
  api: any,
  cache: any,
  stores: Stores
): RespliceClient {
  const contacts = contactsClientFactory(api, cache)
  // const invites = invitesClientFactory(api, cache)
  const sessions = sessionsClientFactory(api, cache, stores.auth)

  return {
    contacts,
    // invites,
    sessions
  }
}

export const contextKey = { name: 'RespliceClient' }

export default respliceClientFactory
