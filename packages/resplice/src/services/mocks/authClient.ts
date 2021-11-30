import type { AuthClient } from '$services/api/authClient'
import { returnPromise } from '$services/mocks/utils'
import type { Contact } from '$types/contact'
import type { Session } from '$types/session'
import type { User } from '$types/user'

const mockSession = {} as Session
const mockUser = {} as User
const mockContacts = [] as Contact[]

function mockAuthClientFactory(..._args: any): AuthClient {
  return {
    createSession: (_params) => returnPromise<Session>(mockSession),
    createUser: (_params) => returnPromise<User>(mockUser),
    getActiveSession: () => returnPromise<Session>(mockSession),
    verifyEmail: (_params) => returnPromise<Session>(mockSession),
    verifyPhone: (_params) => returnPromise<Session>(mockSession),
    getPendingContacts: () => returnPromise<Contact[]>(mockContacts)
  }
}

export default mockAuthClientFactory
