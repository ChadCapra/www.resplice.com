/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export enum ServerErrorType {
  INVALID_REQUEST = 0,
  SERVER_ERROR = 1,
  INVALID_SESSION = 2,
  ACTION_UNKNOWN = 3,
  ACTION_NOT_ALLOWED_ON_PROTOCOL = 4,
  INVALID_INPUT = 5,
  MISSING_ENTITY = 6,
  ACTION_NOT_ALLOWED_ON_ENTITY = 7,
  UNRECOGNIZED = -1
}

export function serverErrorTypeFromJSON(object: any): ServerErrorType {
  switch (object) {
    case 0:
    case 'INVALID_REQUEST':
      return ServerErrorType.INVALID_REQUEST
    case 1:
    case 'SERVER_ERROR':
      return ServerErrorType.SERVER_ERROR
    case 2:
    case 'INVALID_SESSION':
      return ServerErrorType.INVALID_SESSION
    case 3:
    case 'ACTION_UNKNOWN':
      return ServerErrorType.ACTION_UNKNOWN
    case 4:
    case 'ACTION_NOT_ALLOWED_ON_PROTOCOL':
      return ServerErrorType.ACTION_NOT_ALLOWED_ON_PROTOCOL
    case 5:
    case 'INVALID_INPUT':
      return ServerErrorType.INVALID_INPUT
    case 6:
    case 'MISSING_ENTITY':
      return ServerErrorType.MISSING_ENTITY
    case 7:
    case 'ACTION_NOT_ALLOWED_ON_ENTITY':
      return ServerErrorType.ACTION_NOT_ALLOWED_ON_ENTITY
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ServerErrorType.UNRECOGNIZED
  }
}

export function serverErrorTypeToJSON(object: ServerErrorType): string {
  switch (object) {
    case ServerErrorType.INVALID_REQUEST:
      return 'INVALID_REQUEST'
    case ServerErrorType.SERVER_ERROR:
      return 'SERVER_ERROR'
    case ServerErrorType.INVALID_SESSION:
      return 'INVALID_SESSION'
    case ServerErrorType.ACTION_UNKNOWN:
      return 'ACTION_UNKNOWN'
    case ServerErrorType.ACTION_NOT_ALLOWED_ON_PROTOCOL:
      return 'ACTION_NOT_ALLOWED_ON_PROTOCOL'
    case ServerErrorType.INVALID_INPUT:
      return 'INVALID_INPUT'
    case ServerErrorType.MISSING_ENTITY:
      return 'MISSING_ENTITY'
    case ServerErrorType.ACTION_NOT_ALLOWED_ON_ENTITY:
      return 'ACTION_NOT_ALLOWED_ON_ENTITY'
    default:
      return 'UNKNOWN'
  }
}

export interface ServerError {
  errorType: ServerErrorType
  errorDetails: string
}

function createBaseServerError(): ServerError {
  return { errorType: 0, errorDetails: '' }
}

export const ServerError = {
  encode(
    message: ServerError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.errorType !== 0) {
      writer.uint32(8).int32(message.errorType)
    }
    if (message.errorDetails !== '') {
      writer.uint32(18).string(message.errorDetails)
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
          message.errorType = reader.int32() as any
          break
        case 2:
          message.errorDetails = reader.string()
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
      errorType: isSet(object.errorType)
        ? serverErrorTypeFromJSON(object.errorType)
        : 0,
      errorDetails: isSet(object.errorDetails)
        ? String(object.errorDetails)
        : ''
    }
  },

  toJSON(message: ServerError): unknown {
    const obj: any = {}
    message.errorType !== undefined &&
      (obj.errorType = serverErrorTypeToJSON(message.errorType))
    message.errorDetails !== undefined &&
      (obj.errorDetails = message.errorDetails)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ServerError>, I>>(
    object: I
  ): ServerError {
    const message = createBaseServerError()
    message.errorType = object.errorType ?? 0
    message.errorDetails = object.errorDetails ?? ''
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
