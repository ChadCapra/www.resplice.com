import { writable } from 'svelte/store'
import type { Session, OtherSession } from '$types/session'

import {
  authenticatedSession as mockSession,
  otherSessions as mockOtherSessions
} from '$services/mocks/state/sessions'

const activeSession = writable<Session | null>(mockSession)
const sessions = writable<OtherSession[] | null>(mockOtherSessions)

const sessionStores = {
  activeSession,
  sessions
}

export type SessionStore = typeof sessionStores

export default sessionStores
