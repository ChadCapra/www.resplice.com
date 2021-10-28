import contactsClientFactory from './contacts'
import type { ContactsClient } from './contacts'
// import invitesClientFactory, { InvitesClient } from './invites'
import sessionsClientFactory from './sessions'
import type { SessionsClient } from './sessions'
import userClientFactory from './user'
import type { UserClient } from './user'

export interface RespliceClient {
  contacts: ContactsClient
  // invites: InvitesClient
  sessions: SessionsClient
  user: UserClient
}

// TODO: Add caching later to respliceClient
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unused-vars
function respliceClientFactory(api: any, cache: any): RespliceClient {
  const contacts = contactsClientFactory(api, cache)
  // const invites = invitesClientFactory(api, cache)
  const sessions = sessionsClientFactory(api, cache)
  const user = userClientFactory(api, cache)

  return {
    contacts,
    // invites,
    sessions,
    user
  }
}

export const contextKey = { name: 'RespliceClient' }

export default respliceClientFactory
