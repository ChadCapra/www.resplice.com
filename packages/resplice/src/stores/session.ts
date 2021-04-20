import { writable } from 'svelte/store'
import type { Session } from '$types'

const session = writable<Session>(null)

export default session
