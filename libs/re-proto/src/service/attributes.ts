/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  AttributeType,
  AttributeValue,
  attributeTypeFromJSON,
  attributeTypeToJSON
} from '../attributes'

export interface CreateAttribute {
  name: string
  type: AttributeType
  value: AttributeValue | undefined
}

export interface EditAttributeName {
  attributeId: number
  name: string
}

export interface EditAttributeValue {
  attributeId: number
  type: AttributeType
  value: AttributeValue | undefined
}

export interface SortAttribute {
  attributeId: number
  groupId: number
  newPosition: number
}

export interface SendAttributeVerification {
  attributeId: number
}

export interface VerifyAttribute {
  attributeId: number
  verificationToken: number
}

export interface DeleteAttribute {
  attributeId: number
}

export interface CreateGroup {
  name: string
}

export interface EditGroupName {
  id: number
  name: string
}

export interface SortGroup {
  id: number
  newPosition: number
}

export interface DeleteGroup {
  id: number
}

function createBaseCreateAttribute(): CreateAttribute {
  return { name: '', type: 0, value: undefined }
}

export const CreateAttribute = {
  encode(
    message: CreateAttribute,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreateAttribute()
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

  fromJSON(object: any): CreateAttribute {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
      value: isSet(object.value)
        ? AttributeValue.fromJSON(object.value)
        : undefined
    }
  },

  toJSON(message: CreateAttribute): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    message.value !== undefined &&
      (obj.value = message.value
        ? AttributeValue.toJSON(message.value)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CreateAttribute>, I>>(
    object: I
  ): CreateAttribute {
    const message = createBaseCreateAttribute()
    message.name = object.name ?? ''
    message.type = object.type ?? 0
    message.value =
      object.value !== undefined && object.value !== null
        ? AttributeValue.fromPartial(object.value)
        : undefined
    return message
  }
}

function createBaseEditAttributeName(): EditAttributeName {
  return { attributeId: 0, name: '' }
}

export const EditAttributeName = {
  encode(
    message: EditAttributeName,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EditAttributeName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditAttributeName()
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

  fromJSON(object: any): EditAttributeName {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      name: isSet(object.name) ? String(object.name) : ''
    }
  },

  toJSON(message: EditAttributeName): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditAttributeName>, I>>(
    object: I
  ): EditAttributeName {
    const message = createBaseEditAttributeName()
    message.attributeId = object.attributeId ?? 0
    message.name = object.name ?? ''
    return message
  }
}

function createBaseEditAttributeValue(): EditAttributeValue {
  return { attributeId: 0, type: 0, value: undefined }
}

export const EditAttributeValue = {
  encode(
    message: EditAttributeValue,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EditAttributeValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditAttributeValue()
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

  fromJSON(object: any): EditAttributeValue {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
      value: isSet(object.value)
        ? AttributeValue.fromJSON(object.value)
        : undefined
    }
  },

  toJSON(message: EditAttributeValue): unknown {
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

  fromPartial<I extends Exact<DeepPartial<EditAttributeValue>, I>>(
    object: I
  ): EditAttributeValue {
    const message = createBaseEditAttributeValue()
    message.attributeId = object.attributeId ?? 0
    message.type = object.type ?? 0
    message.value =
      object.value !== undefined && object.value !== null
        ? AttributeValue.fromPartial(object.value)
        : undefined
    return message
  }
}

function createBaseSortAttribute(): SortAttribute {
  return { attributeId: 0, groupId: 0, newPosition: 0 }
}

export const SortAttribute = {
  encode(
    message: SortAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SortAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSortAttribute()
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

  fromJSON(object: any): SortAttribute {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      newPosition: isSet(object.newPosition) ? Number(object.newPosition) : 0
    }
  },

  toJSON(message: SortAttribute): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId))
    message.newPosition !== undefined &&
      (obj.newPosition = Math.round(message.newPosition))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SortAttribute>, I>>(
    object: I
  ): SortAttribute {
    const message = createBaseSortAttribute()
    message.attributeId = object.attributeId ?? 0
    message.groupId = object.groupId ?? 0
    message.newPosition = object.newPosition ?? 0
    return message
  }
}

function createBaseSendAttributeVerification(): SendAttributeVerification {
  return { attributeId: 0 }
}

export const SendAttributeVerification = {
  encode(
    message: SendAttributeVerification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attributeId !== 0) {
      writer.uint32(8).uint32(message.attributeId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SendAttributeVerification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSendAttributeVerification()
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

  fromJSON(object: any): SendAttributeVerification {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: SendAttributeVerification): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SendAttributeVerification>, I>>(
    object: I
  ): SendAttributeVerification {
    const message = createBaseSendAttributeVerification()
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseVerifyAttribute(): VerifyAttribute {
  return { attributeId: 0, verificationToken: 0 }
}

export const VerifyAttribute = {
  encode(
    message: VerifyAttribute,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseVerifyAttribute()
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

  fromJSON(object: any): VerifyAttribute {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      verificationToken: isSet(object.verificationToken)
        ? Number(object.verificationToken)
        : 0
    }
  },

  toJSON(message: VerifyAttribute): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    message.verificationToken !== undefined &&
      (obj.verificationToken = Math.round(message.verificationToken))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<VerifyAttribute>, I>>(
    object: I
  ): VerifyAttribute {
    const message = createBaseVerifyAttribute()
    message.attributeId = object.attributeId ?? 0
    message.verificationToken = object.verificationToken ?? 0
    return message
  }
}

function createBaseDeleteAttribute(): DeleteAttribute {
  return { attributeId: 0 }
}

export const DeleteAttribute = {
  encode(
    message: DeleteAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attributeId !== 0) {
      writer.uint32(8).uint32(message.attributeId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeleteAttribute()
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

  fromJSON(object: any): DeleteAttribute {
    return {
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: DeleteAttribute): unknown {
    const obj: any = {}
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAttribute>, I>>(
    object: I
  ): DeleteAttribute {
    const message = createBaseDeleteAttribute()
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseCreateGroup(): CreateGroup {
  return { name: '' }
}

export const CreateGroup = {
  encode(
    message: CreateGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreateGroup()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CreateGroup {
    return {
      name: isSet(object.name) ? String(object.name) : ''
    }
  },

  toJSON(message: CreateGroup): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CreateGroup>, I>>(
    object: I
  ): CreateGroup {
    const message = createBaseCreateGroup()
    message.name = object.name ?? ''
    return message
  }
}

function createBaseEditGroupName(): EditGroupName {
  return { id: 0, name: '' }
}

export const EditGroupName = {
  encode(
    message: EditGroupName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditGroupName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditGroupName()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
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

  fromJSON(object: any): EditGroupName {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : ''
    }
  },

  toJSON(message: EditGroupName): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditGroupName>, I>>(
    object: I
  ): EditGroupName {
    const message = createBaseEditGroupName()
    message.id = object.id ?? 0
    message.name = object.name ?? ''
    return message
  }
}

function createBaseSortGroup(): SortGroup {
  return { id: 0, newPosition: 0 }
}

export const SortGroup = {
  encode(
    message: SortGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.newPosition !== 0) {
      writer.uint32(16).uint32(message.newPosition)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SortGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSortGroup()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.newPosition = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SortGroup {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      newPosition: isSet(object.newPosition) ? Number(object.newPosition) : 0
    }
  },

  toJSON(message: SortGroup): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.newPosition !== undefined &&
      (obj.newPosition = Math.round(message.newPosition))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SortGroup>, I>>(
    object: I
  ): SortGroup {
    const message = createBaseSortGroup()
    message.id = object.id ?? 0
    message.newPosition = object.newPosition ?? 0
    return message
  }
}

function createBaseDeleteGroup(): DeleteGroup {
  return { id: 0 }
}

export const DeleteGroup = {
  encode(
    message: DeleteGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeleteGroup()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DeleteGroup {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    }
  },

  toJSON(message: DeleteGroup): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DeleteGroup>, I>>(
    object: I
  ): DeleteGroup {
    const message = createBaseDeleteGroup()
    message.id = object.id ?? 0
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
