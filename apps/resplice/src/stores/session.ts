import { writable } from 'svelte/store'
import type { SessionItem } from '$types/session'

import { sessions as mockSessions } from '$services/mocks/state/sessions'

const sessions = writable<SessionItem[] | null>(mockSessions)

export type SessionStore = typeof sessions

export default sessions
