import { mockPromise } from '$services/mocks/utils'
import {
  session,
  sessionVerifiedEmail,
  sessionVerifiedBoth,
  authenticatedSession
} from '$services/mocks/state/sessions'
import { buildReCrypto } from '$services/crypto'

class MockAuthClient {
  submitRecaptchaToken(_token) {
    return mockPromise({ data: false })
  }

  async createSession(_params) {
    return mockPromise({
      data: { session, crypto: await buildReCrypto() },
      timeout: 1000
    })
  }

  verifyEmail(_params) {
    return mockPromise({ data: sessionVerifiedEmail })
  }

  verifyPhone(_params) {
    return mockPromise({ data: sessionVerifiedBoth })
  }

  createAccount(_params) {
    return mockPromise({ data: authenticatedSession })
  }
}

export default MockAuthClient
