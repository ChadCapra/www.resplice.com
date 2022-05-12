import { derived, writable } from 'svelte/store'

export enum ConnStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED'
}
type EventState = {
  connStatus: ConnStatus
  error: Error | null
  events: any[]
}

const eventStore = writable<EventState>({
  connStatus: ConnStatus.DISCONNECTED,
  error: null,
  events: []
})

export const isOnline = derived<typeof eventStore, boolean>(
  eventStore,
  ($c, set) => {
    if ($c.connStatus === ConnStatus.DISCONNECTED) set(false)
    else set(true)
  }
)

export type EventStore = typeof eventStore

export default eventStore
