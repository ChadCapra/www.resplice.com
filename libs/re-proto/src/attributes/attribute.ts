/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  AttributeType,
  attributeTypeFromJSON,
  attributeTypeToJSON
} from '../attributes/attribute_type'
import { AttributeValue } from '../attributes/attribute_value'

export interface Attribute {
  id: number
  name: string
  type: AttributeType
  value: AttributeValue | undefined
  groupId: number
  sortOrder: number
  verifiedAt: number
  verifyExpiry: number
}

function createBaseAttribute(): Attribute {
  return {
    id: 0,
    name: '',
    type: 0,
    value: undefined,
    groupId: 0,
    sortOrder: 0,
    verifiedAt: 0,
    verifyExpiry: 0
  }
}

export const Attribute = {
  encode(
    message: Attribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type)
    }
    if (message.value !== undefined) {
      AttributeValue.encode(message.value, writer.uint32(34).fork()).ldelim()
    }
    if (message.groupId !== 0) {
      writer.uint32(48).uint32(message.groupId)
    }
    if (message.sortOrder !== 0) {
      writer.uint32(56).uint32(message.sortOrder)
    }
    if (message.verifiedAt !== 0) {
      writer.uint32(64).uint32(message.verifiedAt)
    }
    if (message.verifyExpiry !== 0) {
      writer.uint32(72).uint32(message.verifyExpiry)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.type = reader.int32() as any
          break
        case 4:
          message.value = AttributeValue.decode(reader, reader.uint32())
          break
        case 6:
          message.groupId = reader.uint32()
          break
        case 7:
          message.sortOrder = reader.uint32()
          break
        case 8:
          message.verifiedAt = reader.uint32()
          break
        case 9:
          message.verifyExpiry = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Attribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
      value: isSet(object.value)
        ? AttributeValue.fromJSON(object.value)
        : undefined,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      sortOrder: isSet(object.sortOrder) ? Number(object.sortOrder) : 0,
      verifiedAt: isSet(object.verifiedAt) ? Number(object.verifiedAt) : 0,
      verifyExpiry: isSet(object.verifyExpiry) ? Number(object.verifyExpiry) : 0
    }
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.name !== undefined && (obj.name = message.name)
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    message.value !== undefined &&
      (obj.value = message.value
        ? AttributeValue.toJSON(message.value)
        : undefined)
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId))
    message.sortOrder !== undefined &&
      (obj.sortOrder = Math.round(message.sortOrder))
    message.verifiedAt !== undefined &&
      (obj.verifiedAt = Math.round(message.verifiedAt))
    message.verifyExpiry !== undefined &&
      (obj.verifyExpiry = Math.round(message.verifyExpiry))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(
    object: I
  ): Attribute {
    const message = createBaseAttribute()
    message.id = object.id ?? 0
    message.name = object.name ?? ''
    message.type = object.type ?? 0
    message.value =
      object.value !== undefined && object.value !== null
        ? AttributeValue.fromPartial(object.value)
        : undefined
    message.groupId = object.groupId ?? 0
    message.sortOrder = object.sortOrder ?? 0
    message.verifiedAt = object.verifiedAt ?? 0
    message.verifyExpiry = object.verifyExpiry ?? 0
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
