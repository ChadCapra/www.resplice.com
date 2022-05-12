/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface QrInviteAttribute {
  id: number
  inviteId: number
  attributeId: number
}

export interface QrInviteAttributeState {
  qrInviteAttributes: QrInviteAttribute[]
  expiredIds: number[]
}

function createBaseQrInviteAttribute(): QrInviteAttribute {
  return { id: 0, inviteId: 0, attributeId: 0 }
}

export const QrInviteAttribute = {
  encode(
    message: QrInviteAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.inviteId !== 0) {
      writer.uint32(16).uint32(message.inviteId)
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
          message.inviteId = reader.uint32()
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
      inviteId: isSet(object.inviteId) ? Number(object.inviteId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: QrInviteAttribute): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.inviteId !== undefined &&
      (obj.inviteId = Math.round(message.inviteId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QrInviteAttribute>, I>>(
    object: I
  ): QrInviteAttribute {
    const message = createBaseQrInviteAttribute()
    message.id = object.id ?? 0
    message.inviteId = object.inviteId ?? 0
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseQrInviteAttributeState(): QrInviteAttributeState {
  return { qrInviteAttributes: [], expiredIds: [] }
}

export const QrInviteAttributeState = {
  encode(
    message: QrInviteAttributeState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.qrInviteAttributes) {
      QrInviteAttribute.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QrInviteAttributeState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQrInviteAttributeState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.qrInviteAttributes.push(
            QrInviteAttribute.decode(reader, reader.uint32())
          )
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredIds.push(reader.uint32())
            }
          } else {
            message.expiredIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QrInviteAttributeState {
    return {
      qrInviteAttributes: Array.isArray(object?.qrInviteAttributes)
        ? object.qrInviteAttributes.map((e: any) =>
            QrInviteAttribute.fromJSON(e)
          )
        : [],
      expiredIds: Array.isArray(object?.expiredIds)
        ? object.expiredIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: QrInviteAttributeState): unknown {
    const obj: any = {}
    if (message.qrInviteAttributes) {
      obj.qrInviteAttributes = message.qrInviteAttributes.map((e) =>
        e ? QrInviteAttribute.toJSON(e) : undefined
      )
    } else {
      obj.qrInviteAttributes = []
    }
    if (message.expiredIds) {
      obj.expiredIds = message.expiredIds.map((e) => Math.round(e))
    } else {
      obj.expiredIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QrInviteAttributeState>, I>>(
    object: I
  ): QrInviteAttributeState {
    const message = createBaseQrInviteAttributeState()
    message.qrInviteAttributes =
      object.qrInviteAttributes?.map((e) => QrInviteAttribute.fromPartial(e)) ||
      []
    message.expiredIds = object.expiredIds?.map((e) => e) || []
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
