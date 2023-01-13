import { derived, writable } from 'svelte/store'
import { type EventState, ConnStatus } from '$modules/app-event/app-event.types.js'

const eventStore = writable<EventState>({
	connStatus: ConnStatus.DISCONNECTED,
	error: null,
	events: []
})

export const isOnline = derived<typeof eventStore, boolean>(eventStore, ($c, set) => {
	if ($c.connStatus === ConnStatus.DISCONNECTED) set(false)
	else set(true)
})

export type EventStore = typeof eventStore

export default eventStore
