import type { AuthClient } from '$services/api/authClient'
import { returnPromise } from '$services/mocks/utils'
import {
  session,
  sessionVerifiedEmail,
  sessionVerifiedBoth,
  authenticatedSession
} from '$services/mocks/state/sessions'
import { user } from '$services/mocks/state/user'

function mockAuthClientFactory(..._args: any): AuthClient {
  return {
    createSession: (_params) => returnPromise({ data: session }),
    createUser: (_params) => returnPromise({ data: user }),
    getActiveSession: () =>
      returnPromise({
        data: authenticatedSession,
        rejectPromise: true
      }),
    verifyEmail: (_params) => returnPromise({ data: sessionVerifiedEmail }),
    verifyPhone: (_params) => returnPromise({ data: sessionVerifiedBoth })
  }
}

export default mockAuthClientFactory
