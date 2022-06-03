/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface QrInvite {
  id: number
  accessCode: number
  expiry: number
  attributes: QrInviteAttribute[]
}

export interface QrInviteAttribute {
  id: number
  qrInviteId: number
  attributeId: number
}

function createBaseQrInvite(): QrInvite {
  return { id: 0, accessCode: 0, expiry: 0, attributes: [] }
}

export const QrInvite = {
  encode(
    message: QrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.accessCode !== 0) {
      writer.uint32(16).uint64(message.accessCode)
    }
    if (message.expiry !== 0) {
      writer.uint32(24).uint32(message.expiry)
    }
    for (const v of message.attributes) {
      QrInviteAttribute.encode(v!, writer.uint32(34).fork()).ldelim()
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
          message.accessCode = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.expiry = reader.uint32()
          break
        case 4:
          message.attributes.push(
            QrInviteAttribute.decode(reader, reader.uint32())
          )
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
      accessCode: isSet(object.accessCode) ? Number(object.accessCode) : 0,
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0,
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => QrInviteAttribute.fromJSON(e))
        : []
    }
  },

  toJSON(message: QrInvite): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.accessCode !== undefined &&
      (obj.accessCode = Math.round(message.accessCode))
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry))
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? QrInviteAttribute.toJSON(e) : undefined
      )
    } else {
      obj.attributes = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QrInvite>, I>>(object: I): QrInvite {
    const message = createBaseQrInvite()
    message.id = object.id ?? 0
    message.accessCode = object.accessCode ?? 0
    message.expiry = object.expiry ?? 0
    message.attributes =
      object.attributes?.map((e) => QrInviteAttribute.fromPartial(e)) || []
    return message
  }
}

function createBaseQrInviteAttribute(): QrInviteAttribute {
  return { id: 0, qrInviteId: 0, attributeId: 0 }
}

export const QrInviteAttribute = {
  encode(
    message: QrInviteAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.qrInviteId !== 0) {
      writer.uint32(16).uint32(message.qrInviteId)
    }
    if (message.attributeId !== 0) {
      writer.uint32(24).uint32(message.attributeId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QrInviteAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQrInviteAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.qrInviteId = reader.uint32()
          break
        case 3:
          message.attributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QrInviteAttribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      qrInviteId: isSet(object.qrInviteId) ? Number(object.qrInviteId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: QrInviteAttribute): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.qrInviteId !== undefined &&
      (obj.qrInviteId = Math.round(message.qrInviteId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QrInviteAttribute>, I>>(
    object: I
  ): QrInviteAttribute {
    const message = createBaseQrInviteAttribute()
    message.id = object.id ?? 0
    message.qrInviteId = object.qrInviteId ?? 0
    message.attributeId = object.attributeId ?? 0
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
