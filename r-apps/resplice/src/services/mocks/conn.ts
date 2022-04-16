enum Command {
  OPEN = 'OPEN',
  SEND = 'SEND',
  CLOSE = 'CLOSE'
}
enum ConnMessageType {
  CLOSED = 'CLOSED',
  ERROR = 'ERROR',
  RECEIVED = 'RECEIVED',
  OPENED = 'OPENED',
  SENT = 'SENT'
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
    case Command.OPEN:
      ctx.postMessage({ type: ConnMessageType.OPENED })
      break
    // case Command.SEND:
    //   send(cmd.message)
    //   break
    // case Command.CLOSE:
    //   close(cmd.statusCode, cmd.reason)
    //   break
    default:
      console.log(cmd)
  }
}
export {}
