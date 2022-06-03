import type { AttributesClient } from '$services/api/attributes'
// import type { ChatClient } from '$services/api/chat'
import type { ContactsClient } from '$services/api/contacts'
import type { InvitesClient } from '$services/api/invites'
import type { ProfileClient } from '$services/api/profile'
import { mockPromise } from '$services/mocks/utils'
import { activeQrInvite } from '$services/mocks/state/invites'

class MockAppClient {
  attributes: AttributesClient
  // chat: ChatClient
  contacts: ContactsClient
  invites: InvitesClient
  profile: ProfileClient

  constructor() {
    this.attributes = {
      add: (_: any) => mockPromise({ data: undefined }),
      editName: (_: any) => mockPromise({ data: undefined }),
      editValue: (_: any) => mockPromise({ data: undefined }),
      editSort: (_: any) => mockPromise({ data: undefined }),
      sendVerification: (_: any) => mockPromise({ data: undefined }),
      verify: (_: any) => mockPromise({ data: undefined }),
      delete: (_: any) => mockPromise({ data: undefined })
    }
    this.contacts = {
      editAlias: (_: any) => mockPromise({ data: undefined }),
      editDescription: (_: any) => mockPromise({ data: undefined }),
      favor: (_: any) => mockPromise({ data: undefined }),
      unfavor: (_: any) => mockPromise({ data: undefined }),
      delete: (_: any) => mockPromise({ data: undefined }),
      addShare: (_: any) => mockPromise({ data: undefined }),
      removeShare: (_: any) => mockPromise({ data: undefined }),
      acceptPending: (_: any) => mockPromise({ data: undefined }),
      declinePending: (_: any) => mockPromise({ data: undefined })
    }
    this.invites = {
      inviteViaHandle: (_: any) => mockPromise({ data: undefined }),
      inviteViaPhone: (_: any) => mockPromise({ data: undefined }),
      inviteViaEmail: (_: any) => mockPromise({ data: undefined }),
      delete: (_: any) => mockPromise({ data: undefined }),
      createQr: () => mockPromise({ data: activeQrInvite }),
      deleteQr: (_: any) => mockPromise({ data: undefined }),
      openQr: (_: any) => mockPromise({ data: undefined }),
      addShare: (_: any) => mockPromise({ data: undefined }),
      removeShare: (_: any) => mockPromise({ data: undefined })
    }
    this.profile = {
      editName: (_: any) => mockPromise({ data: undefined }),
      editHandle: (_: any) => mockPromise({ data: undefined }),
      editAvatar: (_: any) => mockPromise({ data: undefined }),
      deleteAccount: (_: any) => mockPromise({ data: undefined })
    }
  }
}

export default MockAppClient
