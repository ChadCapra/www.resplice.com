/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface Create {
  spliceId: number
}

export interface Delete {
  spliceQrInviteId: number
}

export interface Open {
  spliceQrInviteId: Uint8Array
}

function createBaseCreate(): Create {
  return { spliceId: 0 }
}

export const Create = {
  encode(
    message: Create,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Create {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreate()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Create {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: Create): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Create>, I>>(object: I): Create {
    const message = createBaseCreate()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseDelete(): Delete {
  return { spliceQrInviteId: 0 }
}

export const Delete = {
  encode(
    message: Delete,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceQrInviteId !== 0) {
      writer.uint32(8).uint32(message.spliceQrInviteId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDelete()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceQrInviteId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Delete {
    return {
      spliceQrInviteId: isSet(object.spliceQrInviteId)
        ? Number(object.spliceQrInviteId)
        : 0
    }
  },

  toJSON(message: Delete): unknown {
    const obj: any = {}
    message.spliceQrInviteId !== undefined &&
      (obj.spliceQrInviteId = Math.round(message.spliceQrInviteId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Delete>, I>>(object: I): Delete {
    const message = createBaseDelete()
    message.spliceQrInviteId = object.spliceQrInviteId ?? 0
    return message
  }
}

function createBaseOpen(): Open {
  return { spliceQrInviteId: new Uint8Array() }
}

export const Open = {
  encode(message: Open, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spliceQrInviteId.length !== 0) {
      writer.uint32(10).bytes(message.spliceQrInviteId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Open {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseOpen()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceQrInviteId = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Open {
    return {
      spliceQrInviteId: isSet(object.spliceQrInviteId)
        ? bytesFromBase64(object.spliceQrInviteId)
        : new Uint8Array()
    }
  },

  toJSON(message: Open): unknown {
    const obj: any = {}
    message.spliceQrInviteId !== undefined &&
      (obj.spliceQrInviteId = base64FromBytes(
        message.spliceQrInviteId !== undefined
          ? message.spliceQrInviteId
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Open>, I>>(object: I): Open {
    const message = createBaseOpen()
    message.spliceQrInviteId = object.spliceQrInviteId ?? new Uint8Array()
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
