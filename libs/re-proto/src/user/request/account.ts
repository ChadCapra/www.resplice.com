/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface Create {
  name: string
  handle: string
  avatar: Uint8Array
}

export interface Delete {
  handle: string
  removeAllExistingData: boolean
}

function createBaseCreate(): Create {
  return { name: '', handle: '', avatar: new Uint8Array() }
}

export const Create = {
  encode(
    message: Create,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.handle !== '') {
      writer.uint32(18).string(message.handle)
    }
    if (message.avatar.length !== 0) {
      writer.uint32(26).bytes(message.avatar)
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
          message.name = reader.string()
          break
        case 2:
          message.handle = reader.string()
          break
        case 3:
          message.avatar = reader.bytes()
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
      name: isSet(object.name) ? String(object.name) : '',
      handle: isSet(object.handle) ? String(object.handle) : '',
      avatar: isSet(object.avatar)
        ? bytesFromBase64(object.avatar)
        : new Uint8Array()
    }
  },

  toJSON(message: Create): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.handle !== undefined && (obj.handle = message.handle)
    message.avatar !== undefined &&
      (obj.avatar = base64FromBytes(
        message.avatar !== undefined ? message.avatar : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Create>, I>>(object: I): Create {
    const message = createBaseCreate()
    message.name = object.name ?? ''
    message.handle = object.handle ?? ''
    message.avatar = object.avatar ?? new Uint8Array()
    return message
  }
}

function createBaseDelete(): Delete {
  return { handle: '', removeAllExistingData: false }
}

export const Delete = {
  encode(
    message: Delete,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.handle !== '') {
      writer.uint32(10).string(message.handle)
    }
    if (message.removeAllExistingData === true) {
      writer.uint32(16).bool(message.removeAllExistingData)
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
          message.handle = reader.string()
          break
        case 2:
          message.removeAllExistingData = reader.bool()
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
      handle: isSet(object.handle) ? String(object.handle) : '',
      removeAllExistingData: isSet(object.removeAllExistingData)
        ? Boolean(object.removeAllExistingData)
        : false
    }
  },

  toJSON(message: Delete): unknown {
    const obj: any = {}
    message.handle !== undefined && (obj.handle = message.handle)
    message.removeAllExistingData !== undefined &&
      (obj.removeAllExistingData = message.removeAllExistingData)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Delete>, I>>(object: I): Delete {
    const message = createBaseDelete()
    message.handle = object.handle ?? ''
    message.removeAllExistingData = object.removeAllExistingData ?? false
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
