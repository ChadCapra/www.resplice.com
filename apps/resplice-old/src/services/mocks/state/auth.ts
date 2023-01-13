import { authenticatedSession } from '$services/mocks/state/sessions'
import type { Auth } from '$types/auth'

export const auth: Auth = {
  session: authenticatedSession,
  crypto: {
    key: {} as CryptoKey,
    rawKey: new Uint8Array(),
    baseIV: new Uint8Array()
  }
}
