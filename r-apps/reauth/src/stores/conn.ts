import { writable } from 'svelte/store'

export enum ConnStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED'
}
type ConnState = {
  status: ConnStatus
  error: null
  messages: any[]
}

const connStore = writable<ConnState>({
  status: ConnStatus.DISCONNECTED,
  error: null,
  messages: []
})

export type ConnStore = typeof connStore

export default connStore
