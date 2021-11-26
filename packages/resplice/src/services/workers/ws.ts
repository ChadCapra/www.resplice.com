// Export an empty object to satisfy the isolated modules TS requirement.
export {}

enum Command {
  OPEN = 'OPEN',
  SEND = 'SEND',
  CLOSE = 'CLOSE'
}
interface OpenCommand {
  type: Command.OPEN
  url: string | URL
}
interface SendCommand {
  type: Command.SEND
  data: ArrayBufferLike
}
interface CloseCommand {
  type: Command.CLOSE
  statusCode?: number
  reason?: string
}
type WorkerCommand = OpenCommand | SendCommand | CloseCommand

interface WebSocketWorker extends Worker {
  onmessage: (this: Worker, ev: MessageEvent<WorkerCommand>) => void
}

const ERROR = 'ERROR'
const MESSAGE = 'MESSAGE'
const ctx: WebSocketWorker = self as any
let socket: WebSocket

function open(url: string | URL) {
  socket = new WebSocket(url)
  // Change binary type from "blob" to "arraybuffer"
  socket.binaryType = 'arraybuffer'

  socket.onopen = () => {
    console.log('Connected to Server!')
    ctx.postMessage({ type: Command.OPEN })
  }
  socket.onerror = (ev) => {
    console.log(ev)
    ctx.postMessage({ type: ERROR, reason: ev })
  }
  socket.onmessage = (ev) => {
    console.log(ev)
    ctx.postMessage({ type: MESSAGE, data: ev.data })
  }
  socket.onclose = () => {
    ctx.postMessage({ type: Command.CLOSE })
  }
}

function send(data: ArrayBufferLike) {
  if (!socket)
    return ctx.postMessage({
      type: ERROR,
      reason: 'Connection not established'
    })

  socket.send(data)
}

function close(statusCode = 1000, reason?: string) {
  if (!socket) return ctx.postMessage({ type: Command.CLOSE })
  socket.close(statusCode, reason)
}

ctx.onmessage = ({ data: cmd }) => {
  switch (cmd.type) {
    case Command.OPEN:
      open(cmd.url)
      break
    case Command.SEND:
      send(cmd.data)
      break
    case Command.CLOSE:
      close(cmd.statusCode, cmd.reason)
      break
    default:
      throw new Error('Invalid command for Web Socket worker')
  }
}
