/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  AttributeType,
  attributeTypeFromJSON,
  attributeTypeToJSON
} from '../../attributes/attribute_type'

export interface RequestNew {
  contactId: number
  type: AttributeType
}

export interface Remove {
  contactAttributeId: number
}

function createBaseRequestNew(): RequestNew {
  return { contactId: 0, type: 0 }
}

export const RequestNew = {
  encode(
    message: RequestNew,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestNew {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRequestNew()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        case 2:
          message.type = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RequestNew {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0
    }
  },

  toJSON(message: RequestNew): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RequestNew>, I>>(
    object: I
  ): RequestNew {
    const message = createBaseRequestNew()
    message.contactId = object.contactId ?? 0
    message.type = object.type ?? 0
    return message
  }
}

function createBaseRemove(): Remove {
  return { contactAttributeId: 0 }
}

export const Remove = {
  encode(
    message: Remove,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactAttributeId !== 0) {
      writer.uint32(8).uint32(message.contactAttributeId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Remove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemove()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactAttributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Remove {
    return {
      contactAttributeId: isSet(object.contactAttributeId)
        ? Number(object.contactAttributeId)
        : 0
    }
  },

  toJSON(message: Remove): unknown {
    const obj: any = {}
    message.contactAttributeId !== undefined &&
      (obj.contactAttributeId = Math.round(message.contactAttributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Remove>, I>>(object: I): Remove {
    const message = createBaseRemove()
    message.contactAttributeId = object.contactAttributeId ?? 0
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