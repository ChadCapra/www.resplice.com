import * as reproto from '@resplice/proto'
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

const ClientMessageType = reproto.client_request.ClientRequestType

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
    initializeSocket(cmd.wsEndpoint, cmd.reCrypto)
  )

commands$
  .pipe(filter((cmd) => cmd.type === ConnCommandType.SEND))
  .subscribe((cmd: Extract<ConnCommand, { type: ConnCommandType.SEND }>) =>
    send(cmd.message)
  )

async function initializeSocket(wsEndpoint: string, reCrypto: ReCrypto) {
  ctx.crypto = reCrypto
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

  ctx.socket$.next(await createHandshake())
}

async function createHandshake(): Promise<Uint8Array> {
  const handshakeMessage = {
    type: ClientMessageType.SOCKET_AUTHORIZE,
    data: {
      // TODO: Pull these from cache
      authenticated_at: 1,
      user_attributes_since: 2,
      user_attribute_groups_since: 3,
      contacts_since: 4,
      contact_attributes_since: 5,
      contact_shares_since: 6,
      splices_since: 7,
      splice_members_since: 8,
      splice_shares_since: 9
    }
  }

  return serializeClientMessage(handshakeMessage, ctx.crypto)
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
