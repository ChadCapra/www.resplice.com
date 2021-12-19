import { encrypt, decrypt, sign, verify } from '$services/crypto'
import { encode, decode } from '$services/proto'
import type { Message } from '$services/proto'
import proto from '$services/resplice-pb'

enum Command {
  OPEN = 'OPEN',
  SEND = 'SEND',
  CLOSE = 'CLOSE'
}
interface OpenCommand {
  type: Command.OPEN
  url: string | URL
  handshake: any
}
interface SendCommand {
  type: Command.SEND
  message: Message
}
interface CloseCommand {
  type: Command.CLOSE
  statusCode?: number
  reason?: string
}
type ConnCommand = OpenCommand | SendCommand | CloseCommand

enum ConnMessageType {
  CLOSED = 'CLOSED',
  ERROR = 'ERROR',
  RECEIVED = 'RECEIVED',
  OPENED = 'OPENED',
  SENT = 'SENT'
}
interface ClosedMessage {
  type: ConnMessageType.CLOSED
  reason?: string
}
interface ErrorMessage {
  type: ConnMessageType.ERROR
  error: Error
}
interface ReceivedMessage {
  type: ConnMessageType.RECEIVED
  message: any
}
interface OpenedMessage {
  type: ConnMessageType.OPENED
}
interface SentMessage {
  type: ConnMessageType.SENT
  requestId: number
}
type ConnMessage =
  | ClosedMessage
  | ErrorMessage
  | ReceivedMessage
  | OpenedMessage
  | SentMessage

interface ConnWorker extends Worker {
  onmessage: (this: Worker, ev: MessageEvent<ConnCommand>) => void
  postMessage: {
    (message: ConnMessage, transfer: Transferable[]): void
    (message: ConnMessage, options?: StructuredSerializeOptions): void
  }
}

const ctx: ConnWorker = self as any
let socket: WebSocket | null = null
let requestId = 1

type Authentication = {
  sessionUUID: string
  keys: {
    aes: CryptoKey
    hmac: CryptoKey
  }
}
let auth: Authentication | null = null

// TODO: Type ev
async function onMessage(ev: MessageEvent<any>) {
  console.log(ev)
  const serverPush = proto.resplice.util.ServerPush.decode(ev.data)
  // TODO: Do I need to encode server message back to verify the hmac from server
  const serverMessageBuffer = proto.resplice.util.ServerMessage.encode(
    serverPush.message
  ).finish().buffer

  // TODO: convert messageHmac into arraybuffer so I can verify it
  const isValid = verify(
    auth.keys.hmac,
    serverPush.messageHmac as any,
    serverMessageBuffer
  )
  if (!isValid) throw new Error('Message from server was not valid')

  const decryptedMessage = await decrypt(
    auth.keys.aes,
    serverPush.message.encryptedPayload
  )
  const message = decode({
    type: serverPush.message.messageType,
    data: decryptedMessage
  })
  // TODO: Should probably just send the plain JS object,
  // not protobuf class
  ctx.postMessage({ type: ConnMessageType.RECEIVED, message })
}

function open(url: string | URL, handshake: any) {
  socket = new WebSocket(url)
  socket.binaryType = 'arraybuffer'

  socket.onopen = () => {
    console.log('Connected to Server!')
    auth = null
    requestId = 1
    const handshakeMessage =
      proto.resplice.session.HandshakeMessage.create(handshake)
    const handshakeMessageBuffer =
      proto.resplice.session.HandshakeMessage.encode(handshakeMessage).finish()
        .buffer
    socket.send(handshakeMessageBuffer)
  }
  socket.onerror = (ev) => {
    console.log(ev)
    const error = new Error('Something went wrong')
    ctx.postMessage({ type: ConnMessageType.ERROR, error })
  }
  socket.onmessage = onMessage
  socket.onclose = (ev) => {
    console.log('Closing')
    console.log(ev)
    auth = null
    requestId = 1
    ctx.postMessage({ type: ConnMessageType.CLOSED, reason: ev.reason })
  }
}

async function send(message: Message) {
  if (!socket)
    return ctx.postMessage({
      type: ConnMessageType.ERROR,
      error: new Error('Socket does not exist')
    })
  if (!auth)
    return ctx.postMessage({
      type: ConnMessageType.ERROR,
      error: new Error('Socket has not been authenticated')
    })

  // TODO: Should we sign before we encrypt
  const encodedMessage = encode(message)
  const encryptedMessage = await encrypt(auth.keys.aes, encodedMessage)
  const clientMessage = proto.resplice.util.ClientMessage.create({
    messageType: message.type,
    requestId,
    encryptedPayload: encryptedMessage
  })
  const clientMessageBuffer =
    proto.resplice.util.ClientMessage.encode(clientMessage).finish().buffer

  // TODO: Convert this messageHmac to string from arraybuffer
  const messageHmac: any = await sign(auth.keys.hmac, clientMessageBuffer)
  const clientRequest = proto.resplice.util.ClientRequest.create({
    messageHmac,
    message: clientMessage
  })
  const clientRequestBuffer =
    proto.resplice.util.ClientRequest.encode(clientRequest).finish().buffer

  socket.send(clientRequestBuffer)
  ctx.postMessage({ type: ConnMessageType.SENT, requestId })
}

function close(statusCode = 1000, reason?: string) {
  auth = null
  requestId = 1
  if (!socket) return ctx.postMessage({ type: ConnMessageType.CLOSED, reason })
  socket.close(statusCode, reason)
  ctx.postMessage({ type: ConnMessageType.CLOSED, reason })
}

ctx.onmessage = ({ data: cmd }) => {
  switch (cmd.type) {
    case Command.OPEN:
      open(cmd.url, cmd.handshake)
      break
    case Command.SEND:
      send(cmd.message)
      break
    case Command.CLOSE:
      close(cmd.statusCode, cmd.reason)
      break
    default:
      throw new Error('Invalid command for Web Socket worker')
  }
}
