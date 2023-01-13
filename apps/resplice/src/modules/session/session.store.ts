import { writable } from 'svelte/store'
import {
	currentSession as mockCurrentSession,
	sessions as mockSessions
} from '$modules/session/session.mocks'
import type { SessionState } from '$modules/session/session.types'

const sessionStore = writable<SessionState | null>({
	currentSession: mockCurrentSession,
	sessions: mockSessions
})

export type SessionStore = typeof sessionStore

export default sessionStore
