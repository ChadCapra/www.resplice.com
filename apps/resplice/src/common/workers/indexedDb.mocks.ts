enum Command {
	CONNECT = 'CONNECT',
	READ_CACHE = 'READ_CACHE',
	ADD_TO_STORE = 'ADD_TO_STORE',
	READ_STORE = 'READ_STORE',
	UPDATE_STORE = 'UPDATE_STORE',
	REMOVE_FROM_STORE = 'REMOVE_FROM_STORE'
}

interface MockWorker extends Worker {
	onmessage: (this: Worker, ev: MessageEvent<any>) => void
	postMessage: {
		(message: any, transfer: Transferable[]): void
		(message: any, options?: StructuredSerializeOptions): void
	}
}

const ctx: MockWorker = self as any
ctx.onmessage = ({ data: cmd }) => {
	switch (cmd.type) {
		case Command.CONNECT:
			ctx.postMessage({ type: Command.CONNECT, data: true })
			break
		// case Command.READ_CACHE:
		//   readCache()
		//   break
		// case Command.READ_STORE:
		//   readStore(cmd.store, cmd.key)
		//   break
		// case Command.ADD_TO_STORE:
		//   addToStore(cmd.store, cmd.key, cmd.data)
		//   break
		// case Command.UPDATE_STORE:
		//   updateStore(cmd.store, cmd.key, cmd.data)
		//   break
		// case Command.REMOVE_FROM_STORE:
		//   removeFromStore(cmd.store, cmd.key)
		//   break
		default:
			console.log(cmd)
	}
}
export {}
