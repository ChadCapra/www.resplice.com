import { filter, map, pipe } from 'rxjs'
import workerCommuterFactory, {
  type Commuter
} from '$services/commuters/workerCommuter'
// import ConnWorker from '$workers/conn?worker'
// import ConnWorker from '$services/mocks/conn?worker'

import type * as reproto from '@resplice/proto'
import type { ReCrypto } from '$services/crypto'

// TODO: Type data based on ResponseType
export type ServerMessage = {
  type: reproto.server_message.ServerMessageType
  data: any
}

// TODO: Type data based on ResponseType
export type ClientMessage = {
  type: reproto.client_request.ClientRequestType
  counter: number
  data: any
}

export enum ConnCommandType {
  OPEN = 'OPEN',
  SEND = 'SEND',
  CLOSE = 'CLOSE'
}
type OpenCommand = {
  type: ConnCommandType.OPEN
  wsEndpoint: string
  crypto: ReCrypto
  handshake: ClientMessage
}
type SendCommand = {
  type: ConnCommandType.SEND
  message: ClientMessage
}
type CloseCommand = {
  type: ConnCommandType.CLOSE
  statusCode?: number
  reason?: string
}
export type ConnCommand = OpenCommand | SendCommand | CloseCommand

export enum ConnMessageType {
  OPENED = 'OPENED',
  RECEIVED = 'RECEIVED',
  SENT = 'SENT',
  ERRORED = 'ERRORED',
  CLOSED = 'CLOSED'
}
type OpenedMessage = {
  type: ConnMessageType.OPENED
}
type ReceivedMessage = {
  type: ConnMessageType.RECEIVED
  message: ServerMessage
}
type SentMessage = {
  type: ConnMessageType.SENT
  requestId: number
}
type ErroredMessage = {
  type: ConnMessageType.ERRORED
  error: Error
}
type ClosedMessage = {
  type: ConnMessageType.CLOSED
  reason?: string
}
export type ConnMessage =
  | OpenedMessage
  | ReceivedMessage
  | SentMessage
  | ErroredMessage
  | ClosedMessage

export function onlyRecievedMessages() {
  return pipe(
    filter((m: ConnMessage) => m.type === ConnMessageType.RECEIVED),
    map((m: ReceivedMessage) => m.message)
  )
}

export type ConnCommuter = Commuter<ConnMessage, ConnCommand>

function startCommuter(useMock = false) {
  let connWorker: Worker

  if (useMock) {
    connWorker = new Worker(
      new URL('../../services/mocks/conn', import.meta.url),
      { type: 'module' }
    )
  } else {
    connWorker = new Worker(
      new URL('../../services/mocks/conn', import.meta.url),
      { type: 'module' }
    )
  }

  return workerCommuterFactory<ConnMessage, ConnCommand>(connWorker)
}

export default startCommuter
