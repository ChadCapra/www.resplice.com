/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  AttributeType,
  attributeTypeFromJSON,
  attributeTypeToJSON
} from '../attributes/attribute_type'
import { AttributeValue } from '../attributes/attribute_value'

export interface ContactAttribute {
  id: number
  contactId: number
  name: string
  type: AttributeType
  value: AttributeValue | undefined
  sharedOn: number
}

export interface ContactAttributeState {
  contactAttributes: ContactAttribute[]
  expiredIds: number[]
}

function createBaseContactAttribute(): ContactAttribute {
  return {
    id: 0,
    contactId: 0,
    name: '',
    type: 0,
    value: undefined,
    sharedOn: 0
  }
}

export const ContactAttribute = {
  encode(
    message: ContactAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.contactId !== 0) {
      writer.uint32(16).uint32(message.contactId)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type)
    }
    if (message.value !== undefined) {
      AttributeValue.encode(message.value, writer.uint32(42).fork()).ldelim()
    }
    if (message.sharedOn !== 0) {
      writer.uint32(48).uint32(message.sharedOn)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseContactAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.contactId = reader.uint32()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.type = reader.int32() as any
          break
        case 5:
          message.value = AttributeValue.decode(reader, reader.uint32())
          break
        case 6:
          message.sharedOn = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ContactAttribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
      value: isSet(object.value)
        ? AttributeValue.fromJSON(object.value)
        : undefined,
      sharedOn: isSet(object.sharedOn) ? Number(object.sharedOn) : 0
    }
  },

  toJSON(message: ContactAttribute): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.name !== undefined && (obj.name = message.name)
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    message.value !== undefined &&
      (obj.value = message.value
        ? AttributeValue.toJSON(message.value)
        : undefined)
    message.sharedOn !== undefined &&
      (obj.sharedOn = Math.round(message.sharedOn))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ContactAttribute>, I>>(
    object: I
  ): ContactAttribute {
    const message = createBaseContactAttribute()
    message.id = object.id ?? 0
    message.contactId = object.contactId ?? 0
    message.name = object.name ?? ''
    message.type = object.type ?? 0
    message.value =
      object.value !== undefined && object.value !== null
        ? AttributeValue.fromPartial(object.value)
        : undefined
    message.sharedOn = object.sharedOn ?? 0
    return message
  }
}

function createBaseContactAttributeState(): ContactAttributeState {
  return { contactAttributes: [], expiredIds: [] }
}

export const ContactAttributeState = {
  encode(
    message: ContactAttributeState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.contactAttributes) {
      ContactAttribute.encode(v!, writer.uint32(10).fork()).ldelim()
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
  ): ContactAttributeState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseContactAttributeState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactAttributes.push(
            ContactAttribute.decode(reader, reader.uint32())
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

  fromJSON(object: any): ContactAttributeState {
    return {
      contactAttributes: Array.isArray(object?.contactAttributes)
        ? object.contactAttributes.map((e: any) => ContactAttribute.fromJSON(e))
        : [],
      expiredIds: Array.isArray(object?.expiredIds)
        ? object.expiredIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: ContactAttributeState): unknown {
    const obj: any = {}
    if (message.contactAttributes) {
      obj.contactAttributes = message.contactAttributes.map((e) =>
        e ? ContactAttribute.toJSON(e) : undefined
      )
    } else {
      obj.contactAttributes = []
    }
    if (message.expiredIds) {
      obj.expiredIds = message.expiredIds.map((e) => Math.round(e))
    } else {
      obj.expiredIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ContactAttributeState>, I>>(
    object: I
  ): ContactAttributeState {
    const message = createBaseContactAttributeState()
    message.contactAttributes =
      object.contactAttributes?.map((e) => ContactAttribute.fromPartial(e)) ||
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
