import { derived, writable } from 'svelte/store'

export enum ConnStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED'
}
type ConnState = {
  status: ConnStatus
  error: Error | null
  messages: any[]
}

const connStore = writable<ConnState>({
  status: ConnStatus.DISCONNECTED,
  error: null,
  messages: []
})

export const isOnline = derived<typeof connStore, boolean>(
  connStore,
  ($c, set) => {
    if ($c.status === ConnStatus.DISCONNECTED) set(false)
    else set(true)
  }
)

export type ConnStore = typeof connStore

export default connStore
