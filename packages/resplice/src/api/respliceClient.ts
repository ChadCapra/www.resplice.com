import contactsClientFactory, { ContactsClient } from './contacts'
import invitesClientFactory, { InvitesClient } from './invites'
import sessionsClientFactory, { SessionsClient } from './sessions'

export interface RespliceClient {
  contacts: ContactsClient
  invites: InvitesClient
  sessions: SessionsClient
}

// TODO: Add caching later to respliceClient
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unused-vars
function respliceClientFactory(api: any, _cache: any): RespliceClient {
  const contacts = contactsClientFactory(api)
  const invites = invitesClientFactory(api)
  const sessions = sessionsClientFactory(api)

  return {
    contacts,
    invites,
    sessions
  }
}

export default respliceClientFactory
