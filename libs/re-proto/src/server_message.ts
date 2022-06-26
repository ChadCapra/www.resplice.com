/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export enum ServerMessageType {
  SESSION = 0,
  USER_PROFILE = 1,
  ATTRIBUTE_STATE = 2,
  CONTACT_STATE = 3,
  SPLICE_STATE = 4,
  INVITE_STATE = 5,
  PENDING_STATE = 6,
  QR_INVITE = 7,
  QR_SPLICE_INVITE = 8,
  SESSION_DETAILS = 9,
  ERROR = 127,
  UNRECOGNIZED = -1
}

export function serverMessageTypeFromJSON(object: any): ServerMessageType {
  switch (object) {
    case 0:
    case 'SESSION':
      return ServerMessageType.SESSION
    case 1:
    case 'USER_PROFILE':
      return ServerMessageType.USER_PROFILE
    case 2:
    case 'ATTRIBUTE_STATE':
      return ServerMessageType.ATTRIBUTE_STATE
    case 3:
    case 'CONTACT_STATE':
      return ServerMessageType.CONTACT_STATE
    case 4:
    case 'SPLICE_STATE':
      return ServerMessageType.SPLICE_STATE
    case 5:
    case 'INVITE_STATE':
      return ServerMessageType.INVITE_STATE
    case 6:
    case 'PENDING_STATE':
      return ServerMessageType.PENDING_STATE
    case 7:
    case 'QR_INVITE':
      return ServerMessageType.QR_INVITE
    case 8:
    case 'QR_SPLICE_INVITE':
      return ServerMessageType.QR_SPLICE_INVITE
    case 9:
    case 'SESSION_DETAILS':
      return ServerMessageType.SESSION_DETAILS
    case 127:
    case 'ERROR':
      return ServerMessageType.ERROR
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ServerMessageType.UNRECOGNIZED
  }
}

export function serverMessageTypeToJSON(object: ServerMessageType): string {
  switch (object) {
    case ServerMessageType.SESSION:
      return 'SESSION'
    case ServerMessageType.USER_PROFILE:
      return 'USER_PROFILE'
    case ServerMessageType.ATTRIBUTE_STATE:
      return 'ATTRIBUTE_STATE'
    case ServerMessageType.CONTACT_STATE:
      return 'CONTACT_STATE'
    case ServerMessageType.SPLICE_STATE:
      return 'SPLICE_STATE'
    case ServerMessageType.INVITE_STATE:
      return 'INVITE_STATE'
    case ServerMessageType.PENDING_STATE:
      return 'PENDING_STATE'
    case ServerMessageType.QR_INVITE:
      return 'QR_INVITE'
    case ServerMessageType.QR_SPLICE_INVITE:
      return 'QR_SPLICE_INVITE'
    case ServerMessageType.SESSION_DETAILS:
      return 'SESSION_DETAILS'
    case ServerMessageType.ERROR:
      return 'ERROR'
    default:
      return 'UNKNOWN'
  }
}

export interface ServerMessage {
  messageType: ServerMessageType
  /** used to clear expired entities on client side */
  serverTime: number
  encodedPayload: Uint8Array
}

function createBaseServerMessage(): ServerMessage {
  return { messageType: 0, serverTime: 0, encodedPayload: new Uint8Array() }
}

export const ServerMessage = {
  encode(
    message: ServerMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType)
    }
    if (message.serverTime !== 0) {
      writer.uint32(16).uint32(message.serverTime)
    }
    if (message.encodedPayload.length !== 0) {
      writer.uint32(26).bytes(message.encodedPayload)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseServerMessage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.messageType = reader.int32() as any
          break
        case 2:
          message.serverTime = reader.uint32()
          break
        case 3:
          message.encodedPayload = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ServerMessage {
    return {
      messageType: isSet(object.messageType)
        ? serverMessageTypeFromJSON(object.messageType)
        : 0,
      serverTime: isSet(object.serverTime) ? Number(object.serverTime) : 0,
      encodedPayload: isSet(object.encodedPayload)
        ? bytesFromBase64(object.encodedPayload)
        : new Uint8Array()
    }
  },

  toJSON(message: ServerMessage): unknown {
    const obj: any = {}
    message.messageType !== undefined &&
      (obj.messageType = serverMessageTypeToJSON(message.messageType))
    message.serverTime !== undefined &&
      (obj.serverTime = Math.round(message.serverTime))
    message.encodedPayload !== undefined &&
      (obj.encodedPayload = base64FromBytes(
        message.encodedPayload !== undefined
          ? message.encodedPayload
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ServerMessage>, I>>(
    object: I
  ): ServerMessage {
    const message = createBaseServerMessage()
    message.messageType = object.messageType ?? 0
    message.serverTime = object.serverTime ?? 0
    message.encodedPayload = object.encodedPayload ?? new Uint8Array()
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
declare var global: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte))
  })
  return btoa(bin.join(''))
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, '$case'>]?: DeepPartial<T[K]> } & {
      $case: T['$case']
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
