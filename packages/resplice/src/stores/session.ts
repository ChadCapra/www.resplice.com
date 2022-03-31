import { writable } from 'svelte/store'
import type { Session, OtherSession } from '$types/session'

const activeSession = writable<Session | null>(null)
const sessions = writable<OtherSession[] | null>(null)

const sessionStores = {
  activeSession,
  sessions
}

export type SessionStore = typeof sessionStores

export default sessionStores
