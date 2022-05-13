/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface QrInvite {
  id: number
  uuid: Uint8Array
  expiry: number
}

function createBaseQrInvite(): QrInvite {
  return { id: 0, uuid: new Uint8Array(), expiry: 0 }
}

export const QrInvite = {
  encode(
    message: QrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.uuid.length !== 0) {
      writer.uint32(18).bytes(message.uuid)
    }
    if (message.expiry !== 0) {
      writer.uint32(24).uint32(message.expiry)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QrInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQrInvite()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.uuid = reader.bytes()
          break
        case 3:
          message.expiry = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QrInvite {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      uuid: isSet(object.uuid)
        ? bytesFromBase64(object.uuid)
        : new Uint8Array(),
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0
    }
  },

  toJSON(message: QrInvite): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.uuid !== undefined &&
      (obj.uuid = base64FromBytes(
        message.uuid !== undefined ? message.uuid : new Uint8Array()
      ))
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QrInvite>, I>>(object: I): QrInvite {
    const message = createBaseQrInvite()
    message.id = object.id ?? 0
    message.uuid = object.uuid ?? new Uint8Array()
    message.expiry = object.expiry ?? 0
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
