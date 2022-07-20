/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export enum ServerErrorType {
  INVALID_SESSION = 0,
  INVALID_REQUEST = 1,
  INVALID_STATE = 2,
  INVALID_USER_INPUT = 3,
  ACCESS_DENIED = 4,
  UNKNOWN_ERROR = 5,
  UNRECOGNIZED = -1
}

export function serverErrorTypeFromJSON(object: any): ServerErrorType {
  switch (object) {
    case 0:
    case 'INVALID_SESSION':
      return ServerErrorType.INVALID_SESSION
    case 1:
    case 'INVALID_REQUEST':
      return ServerErrorType.INVALID_REQUEST
    case 2:
    case 'INVALID_STATE':
      return ServerErrorType.INVALID_STATE
    case 3:
    case 'INVALID_USER_INPUT':
      return ServerErrorType.INVALID_USER_INPUT
    case 4:
    case 'ACCESS_DENIED':
      return ServerErrorType.ACCESS_DENIED
    case 5:
    case 'UNKNOWN_ERROR':
      return ServerErrorType.UNKNOWN_ERROR
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ServerErrorType.UNRECOGNIZED
  }
}

export function serverErrorTypeToJSON(object: ServerErrorType): string {
  switch (object) {
    case ServerErrorType.INVALID_SESSION:
      return 'INVALID_SESSION'
    case ServerErrorType.INVALID_REQUEST:
      return 'INVALID_REQUEST'
    case ServerErrorType.INVALID_STATE:
      return 'INVALID_STATE'
    case ServerErrorType.INVALID_USER_INPUT:
      return 'INVALID_USER_INPUT'
    case ServerErrorType.ACCESS_DENIED:
      return 'ACCESS_DENIED'
    case ServerErrorType.UNKNOWN_ERROR:
      return 'UNKNOWN_ERROR'
    default:
      return 'UNKNOWN'
  }
}

export interface ServerError {
  type: ServerErrorType
  details: string
}

function createBaseServerError(): ServerError {
  return { type: 0, details: '' }
}

export const ServerError = {
  encode(
    message: ServerError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type)
    }
    if (message.details !== '') {
      writer.uint32(18).string(message.details)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseServerError()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any
          break
        case 2:
          message.details = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ServerError {
    return {
      type: isSet(object.type) ? serverErrorTypeFromJSON(object.type) : 0,
      details: isSet(object.details) ? String(object.details) : ''
    }
  },

  toJSON(message: ServerError): unknown {
    const obj: any = {}
    message.type !== undefined &&
      (obj.type = serverErrorTypeToJSON(message.type))
    message.details !== undefined && (obj.details = message.details)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ServerError>, I>>(
    object: I
  ): ServerError {
    const message = createBaseServerError()
    message.type = object.type ?? 0
    message.details = object.details ?? ''
    return message
  }
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
