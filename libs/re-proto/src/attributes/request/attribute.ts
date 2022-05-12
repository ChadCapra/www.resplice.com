/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  AttributeType,
  attributeTypeFromJSON,
  attributeTypeToJSON
} from '../../attributes/attribute_type'
import { AttributeValue } from '../../attributes/attribute_value'

export interface Create {
  name: string
  type: AttributeType
  value: AttributeValue | undefined
}

export interface EditName {
  attributeId: number
  name: string
}

export interface EditValue {
  attributeId: number
  type: AttributeType
  value: AttributeValue | undefined
}

export interface Sort {
  attributeId: number
  groupId: number
  newPosition: number
}

export interface SendVerification {
  attributeId: number
}

export interface Verify {
  attributeId: number
  verificationToken: number
}

export interface Delete {
  attributeId: number
}

function createBaseCreate(): Create {
  return { name: '', type: 0, value: undefined }
}

export const Create = {
  encode(
    message: Create,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type)
    }
    if (message.value !== undefined) {
      AttributeValue.encode(message.value, writer.uint32(26).fork()).ldelim()
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
          message.type = reader.int32() as any
          break
        case 3:
          message.value = AttributeValue.decode(reader, reader.uint32())
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
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
      value: isSet(object.value)
        ? AttributeValue.fromJSON(object.value)
        : undefined
    }
  },

  toJSON(message: Create): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    message.value !== undefined &&
      (obj.value = message.value
        ? AttributeValue.toJSON(message.value)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Create>, I>>(object: I): Create {
    const message = createBaseCreate()
    message.name = object.name ?? ''
    message.type = object.type ?? 0
    message.value =
      object.value !== undefined && object.value !== null
        ? AttributeValue.fromPartial(object.value)
        : undefined
    return message
  }
}

function createBaseEditName(): EditName {
  return { attributeId: 0, name: '' }
}

export const EditName = {
  encode(
    message: EditName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attributeId !== 0) {
      writer.uint32(8).uint32(message.attributeId)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditName()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.attributeId = reader.uint32()
          break
        case 2:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EditName {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      name: isSet(object.name) ? String(object.name) : ''
    }
  },

  toJSON(message: EditName): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditName>, I>>(object: I): EditName {
    const message = createBaseEditName()
    message.attributeId = object.attributeId ?? 0
    message.name = object.name ?? ''
    return message
  }
}

function createBaseEditValue(): EditValue {
  return { attributeId: 0, type: 0, value: undefined }
}

export const EditValue = {
  encode(
    message: EditValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attributeId !== 0) {
      writer.uint32(8).uint32(message.attributeId)
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type)
    }
    if (message.value !== undefined) {
      AttributeValue.encode(message.value, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditValue()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.attributeId = reader.uint32()
          break
        case 2:
          message.type = reader.int32() as any
          break
        case 3:
          message.value = AttributeValue.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EditValue {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
      value: isSet(object.value)
        ? AttributeValue.fromJSON(object.value)
        : undefined
    }
  },

  toJSON(message: EditValue): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    message.value !== undefined &&
      (obj.value = message.value
        ? AttributeValue.toJSON(message.value)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditValue>, I>>(
    object: I
  ): EditValue {
    const message = createBaseEditValue()
    message.attributeId = object.attributeId ?? 0
    message.type = object.type ?? 0
    message.value =
      object.value !== undefined && object.value !== null
        ? AttributeValue.fromPartial(object.value)
        : undefined
    return message
  }
}

function createBaseSort(): Sort {
  return { attributeId: 0, groupId: 0, newPosition: 0 }
}

export const Sort = {
  encode(message: Sort, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attributeId !== 0) {
      writer.uint32(8).uint32(message.attributeId)
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId)
    }
    if (message.newPosition !== 0) {
      writer.uint32(24).uint32(message.newPosition)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sort {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSort()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.attributeId = reader.uint32()
          break
        case 2:
          message.groupId = reader.uint32()
          break
        case 3:
          message.newPosition = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Sort {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      newPosition: isSet(object.newPosition) ? Number(object.newPosition) : 0
    }
  },

  toJSON(message: Sort): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId))
    message.newPosition !== undefined &&
      (obj.newPosition = Math.round(message.newPosition))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Sort>, I>>(object: I): Sort {
    const message = createBaseSort()
    message.attributeId = object.attributeId ?? 0
    message.groupId = object.groupId ?? 0
    message.newPosition = object.newPosition ?? 0
    return message
  }
}

function createBaseSendVerification(): SendVerification {
  return { attributeId: 0 }
}

export const SendVerification = {
  encode(
    message: SendVerification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attributeId !== 0) {
      writer.uint32(8).uint32(message.attributeId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendVerification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSendVerification()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.attributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SendVerification {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: SendVerification): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SendVerification>, I>>(
    object: I
  ): SendVerification {
    const message = createBaseSendVerification()
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseVerify(): Verify {
  return { attributeId: 0, verificationToken: 0 }
}

export const Verify = {
  encode(
    message: Verify,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attributeId !== 0) {
      writer.uint32(8).uint32(message.attributeId)
    }
    if (message.verificationToken !== 0) {
      writer.uint32(16).uint32(message.verificationToken)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Verify {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseVerify()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.attributeId = reader.uint32()
          break
        case 2:
          message.verificationToken = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Verify {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      verificationToken: isSet(object.verificationToken)
        ? Number(object.verificationToken)
        : 0
    }
  },

  toJSON(message: Verify): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    message.verificationToken !== undefined &&
      (obj.verificationToken = Math.round(message.verificationToken))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Verify>, I>>(object: I): Verify {
    const message = createBaseVerify()
    message.attributeId = object.attributeId ?? 0
    message.verificationToken = object.verificationToken ?? 0
    return message
  }
}

function createBaseDelete(): Delete {
  return { attributeId: 0 }
}

export const Delete = {
  encode(
    message: Delete,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attributeId !== 0) {
      writer.uint32(8).uint32(message.attributeId)
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
          message.attributeId = reader.uint32()
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
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: Delete): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Delete>, I>>(object: I): Delete {
    const message = createBaseDelete()
    message.attributeId = object.attributeId ?? 0
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
