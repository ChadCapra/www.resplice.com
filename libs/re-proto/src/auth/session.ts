/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  SessionStatus,
  sessionStatusFromJSON,
  sessionStatusToJSON
} from '../auth/session_status'

export interface Session {
  id: number
  status: SessionStatus
  createdAt: number
  rememberMe: boolean
}

function createBaseSession(): Session {
  return { id: 0, status: 0, createdAt: 0, rememberMe: false }
}

export const Session = {
  encode(
    message: Session,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status)
    }
    if (message.createdAt !== 0) {
      writer.uint32(24).uint32(message.createdAt)
    }
    if (message.rememberMe === true) {
      writer.uint32(32).bool(message.rememberMe)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Session {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSession()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.status = reader.int32() as any
          break
        case 3:
          message.createdAt = reader.uint32()
          break
        case 4:
          message.rememberMe = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Session {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      status: isSet(object.status) ? sessionStatusFromJSON(object.status) : 0,
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      rememberMe: isSet(object.rememberMe) ? Boolean(object.rememberMe) : false
    }
  },

  toJSON(message: Session): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.status !== undefined &&
      (obj.status = sessionStatusToJSON(message.status))
    message.createdAt !== undefined &&
      (obj.createdAt = Math.round(message.createdAt))
    message.rememberMe !== undefined && (obj.rememberMe = message.rememberMe)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Session>, I>>(object: I): Session {
    const message = createBaseSession()
    message.id = object.id ?? 0
    message.status = object.status ?? 0
    message.createdAt = object.createdAt ?? 0
    message.rememberMe = object.rememberMe ?? false
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
