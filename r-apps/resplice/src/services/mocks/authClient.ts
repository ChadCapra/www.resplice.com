import type { AuthClient } from '$lib/auth/authClient'
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
    getActiveSession: () =>
      returnPromise({
        data: session,
        rejectPromise: true
      }),
    createSession: async (_params) =>
      returnPromise({ data: session, timeout: 1000 }),
    verifyEmail: (_params) => returnPromise({ data: sessionVerifiedEmail }),
    verifyPhone: (_params) => returnPromise({ data: sessionVerifiedBoth }),
    createAccount: (_params) => returnPromise({ data: authenticatedSession })
  }
}

export default mockAuthClientFactory
