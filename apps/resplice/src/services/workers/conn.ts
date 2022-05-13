import { filter, first, fromEvent, pluck } from 'rxjs'
import { webSocket, type WebSocketSubject } from 'rxjs/webSocket'
import {
  serializeClientMessage,
  deserializeServerMessage
} from '$services/serde'
import {
  ConnCommandType,
  type ConnCommand,
  ConnMessageType,
  type ConnMessage,
  type ClientMessage
} from '$services/commuters/connCommuter'
import type { ReCrypto } from '$services/crypto'

interface ConnWorker extends Worker {
  socket$: WebSocketSubject<Uint8Array> | null
  crypto: ReCrypto
  postMessage: {
    (message: ConnMessage, transfer: Transferable[]): void
    (message: ConnMessage, options?: StructuredSerializeOptions): void
  }
}

const ctx: ConnWorker = self as any
const commands$ = fromEvent<MessageEvent<ConnCommand>>(ctx, 'message').pipe(
  pluck('data')
)

// Subscribe to first open command
// Might change this to allow for multiple open commands eventually
commands$
  .pipe(first((cmd) => cmd.type === ConnCommandType.OPEN))
  .subscribe((cmd: Extract<ConnCommand, { type: ConnCommandType.OPEN }>) =>
    initializeSocket(cmd.wsEndpoint, cmd.crypto, cmd.handshake)
  )

commands$
  .pipe(filter((cmd) => cmd.type === ConnCommandType.SEND))
  .subscribe((cmd: Extract<ConnCommand, { type: ConnCommandType.SEND }>) =>
    send(cmd.message)
  )

async function initializeSocket(
  wsEndpoint: string,
  crypto: ReCrypto,
  handshake: ClientMessage
) {
  ctx.crypto = crypto
  ctx.socket$ = webSocket({
    url: wsEndpoint,
    serializer: (m) => m,
    deserializer: (m) => m.data,
    binaryType: 'arraybuffer'
  })
  ctx.socket$.subscribe({
    next: handleMessage,
    error: handleError,
    complete: handleClose
  })

  return send(handshake)
}

async function handleMessage(bytes: Uint8Array) {
  const serverMessage = await deserializeServerMessage(bytes, ctx.crypto)
  ctx.postMessage({ type: ConnMessageType.RECEIVED, message: serverMessage })
}

function handleError(error: Error) {
  ctx.postMessage({ type: ConnMessageType.ERRORED, error })
}

function handleClose() {
  ctx.postMessage({ type: ConnMessageType.CLOSED })
}

async function send(message: ClientMessage) {
  ctx.socket$.next(await serializeClientMessage(message, ctx.crypto))
}
