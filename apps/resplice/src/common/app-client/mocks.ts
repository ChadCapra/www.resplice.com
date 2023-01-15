import type { AttributesClient } from '$modules/attribute/attribute.client'
// import type { ChatClient } from '$services/api/chat'
import type { ContactsClient } from '$modules/contact/contact.client'
import type { InvitesClient } from '$modules/invite/invite.client'
import type { ProfileClient } from '$modules/user/profile.client'
import { activeQrInvite } from '$modules/invite/invite.mocks'
import { pendingContacts, pendingContactNowContact } from '$modules/contact/contact.mocks'

export function mockPromise<T>({
	data,
	timeout = 300,
	rejectPromise = false
}: {
	data: T
	timeout?: number
	rejectPromise?: boolean
}): Promise<T> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (rejectPromise) {
				reject(new Error('Network Error'))
				return
			}
			console.info(data)
			resolve(data)
		}, timeout)
	})
}

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
			acceptPending: (_: any) => mockPromise({ data: pendingContactNowContact }),
			declinePending: (_: any) => mockPromise({ data: undefined })
		}
		this.invites = {
			inviteViaHandle: (_: any) => mockPromise({ data: undefined }),
			inviteViaPhone: (_: any) => mockPromise({ data: undefined }),
			inviteViaEmail: (_: any) => mockPromise({ data: undefined }),
			delete: (_: any) => mockPromise({ data: undefined }),
			createQr: () => mockPromise({ data: activeQrInvite }),
			deleteQr: (_: any) => mockPromise({ data: undefined }),
			openQr: (_: any) => mockPromise({ data: pendingContacts.get(1) }),
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
