import { writable } from 'svelte/store'
import type { ReCrypto } from '$services/crypto'
import type { Session, OtherSession } from '$types/session'

import {
  authenticatedSession as mockSession,
  otherSessions as mockOtherSessions
} from '$services/mocks/state/sessions'

type ActiveSessionStore = {
  session: Session
  crypto: ReCrypto
}

const activeSession = writable<ActiveSessionStore | null>({
  session: mockSession,
  crypto: {
    key: {} as CryptoKey,
    rawKey: new Uint8Array(),
    baseIV: new Uint8Array()
  }
})
const sessions = writable<OtherSession[] | null>(mockOtherSessions)

const sessionStores = {
  activeSession,
  sessions
}

export type SessionStore = typeof sessionStores

export default sessionStores
