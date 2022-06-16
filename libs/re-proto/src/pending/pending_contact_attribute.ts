/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  AttributeType,
  attributeTypeFromJSON,
  attributeTypeToJSON
} from '../attributes/attribute_type'

export interface PendingContactAttribute {
  id: number
  pendingContactId: number
  name: string
  type: AttributeType
}

function createBasePendingContactAttribute(): PendingContactAttribute {
  return { id: 0, pendingContactId: 0, name: '', type: 0 }
}

export const PendingContactAttribute = {
  encode(
    message: PendingContactAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.pendingContactId !== 0) {
      writer.uint32(16).uint32(message.pendingContactId)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PendingContactAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePendingContactAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.pendingContactId = reader.uint32()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.type = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PendingContactAttribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      pendingContactId: isSet(object.pendingContactId)
        ? Number(object.pendingContactId)
        : 0,
      name: isSet(object.name) ? String(object.name) : '',
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0
    }
  },

  toJSON(message: PendingContactAttribute): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.pendingContactId !== undefined &&
      (obj.pendingContactId = Math.round(message.pendingContactId))
    message.name !== undefined && (obj.name = message.name)
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PendingContactAttribute>, I>>(
    object: I
  ): PendingContactAttribute {
    const message = createBasePendingContactAttribute()
    message.id = object.id ?? 0
    message.pendingContactId = object.pendingContactId ?? 0
    message.name = object.name ?? ''
    message.type = object.type ?? 0
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
