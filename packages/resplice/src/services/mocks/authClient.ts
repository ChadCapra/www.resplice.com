import type { AuthClient } from '$services/api/authClient'
import { returnPromise } from '$services/mocks/utils'
import {
  session,
  sessionVerifiedEmail,
  sessionVerifiedBoth,
  authenticatedSession
} from '$services/mocks/state/sessions'

function mockAuthClientFactory(..._args: any): AuthClient {
  return {
    submitRecaptchaToken: (_token) => returnPromise({ data: false }),
    createSession: async (_params) =>
      returnPromise({ data: session, timeout: 1000 }),
    createAccount: (_params) => returnPromise({ data: authenticatedSession }),
    getActiveSession: () =>
      returnPromise({
        data: session,
        rejectPromise: false
      }),
    verifyEmail: (_params) => returnPromise({ data: sessionVerifiedEmail }),
    verifyPhone: (_params) => returnPromise({ data: sessionVerifiedBoth })
  }
}

export default mockAuthClientFactory
