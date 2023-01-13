export enum ConnStatus {
	DISCONNECTED = 'DISCONNECTED',
	CONNECTING = 'CONNECTING',
	CONNECTED = 'CONNECTED'
}
export type EventState = {
	connStatus: ConnStatus
	error: Error | null
	events: any[]
}
