/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Phone } from '../attributes'

export interface InviteViaHandle {
  handle: string
  attributeIds: number[]
}

export interface InviteViaPhone {
  name: string
  phone: Phone | undefined
  attributeIds: number[]
}

export interface InviteViaEmail {
  name: string
  email: string
  attributeIds: number[]
}

export interface InviteViaMembership {
  membershipId: number
  attributeIds: number[]
}

export interface DeleteInvite {
  inviteId: number
}

export interface AddInviteAttribute {
  inviteId: number
  attributeId: number
}

export interface RemoveInviteAttribute {
  inviteAttributeId: number
}

export interface CreateQrInvite {}

export interface DeleteQrInvite {
  qrInviteId: number
}

export interface OpenQrInvite {
  qrInviteId: number
  accessCode: number
}

export interface AddQrInviteAttribute {
  qrInviteId: number
  attributeId: number
}

export interface RemoveQrInviteAttribute {
  qrInviteAttributeId: number
}

function createBaseInviteViaHandle(): InviteViaHandle {
  return { handle: '', attributeIds: [] }
}

export const InviteViaHandle = {
  encode(
    message: InviteViaHandle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.handle !== '') {
      writer.uint32(10).string(message.handle)
    }
    writer.uint32(18).fork()
    for (const v of message.attributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteViaHandle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseInviteViaHandle()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.handle = reader.string()
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.attributeIds.push(reader.uint32())
            }
          } else {
            message.attributeIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): InviteViaHandle {
    return {
      handle: isSet(object.handle) ? String(object.handle) : '',
      attributeIds: Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: InviteViaHandle): unknown {
    const obj: any = {}
    message.handle !== undefined && (obj.handle = message.handle)
    if (message.attributeIds) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e))
    } else {
      obj.attributeIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<InviteViaHandle>, I>>(
    object: I
  ): InviteViaHandle {
    const message = createBaseInviteViaHandle()
    message.handle = object.handle ?? ''
    message.attributeIds = object.attributeIds?.map((e) => e) || []
    return message
  }
}

function createBaseInviteViaPhone(): InviteViaPhone {
  return { name: '', phone: undefined, attributeIds: [] }
}

export const InviteViaPhone = {
  encode(
    message: InviteViaPhone,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(18).fork()).ldelim()
    }
    writer.uint32(26).fork()
    for (const v of message.attributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteViaPhone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseInviteViaPhone()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.phone = Phone.decode(reader, reader.uint32())
          break
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.attributeIds.push(reader.uint32())
            }
          } else {
            message.attributeIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): InviteViaPhone {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      attributeIds: Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: InviteViaPhone): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    if (message.attributeIds) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e))
    } else {
      obj.attributeIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<InviteViaPhone>, I>>(
    object: I
  ): InviteViaPhone {
    const message = createBaseInviteViaPhone()
    message.name = object.name ?? ''
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined
    message.attributeIds = object.attributeIds?.map((e) => e) || []
    return message
  }
}

function createBaseInviteViaEmail(): InviteViaEmail {
  return { name: '', email: '', attributeIds: [] }
}

export const InviteViaEmail = {
  encode(
    message: InviteViaEmail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.email !== '') {
      writer.uint32(18).string(message.email)
    }
    writer.uint32(26).fork()
    for (const v of message.attributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteViaEmail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseInviteViaEmail()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.email = reader.string()
          break
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.attributeIds.push(reader.uint32())
            }
          } else {
            message.attributeIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): InviteViaEmail {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      email: isSet(object.email) ? String(object.email) : '',
      attributeIds: Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: InviteViaEmail): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.email !== undefined && (obj.email = message.email)
    if (message.attributeIds) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e))
    } else {
      obj.attributeIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<InviteViaEmail>, I>>(
    object: I
  ): InviteViaEmail {
    const message = createBaseInviteViaEmail()
    message.name = object.name ?? ''
    message.email = object.email ?? ''
    message.attributeIds = object.attributeIds?.map((e) => e) || []
    return message
  }
}

function createBaseInviteViaMembership(): InviteViaMembership {
  return { membershipId: 0, attributeIds: [] }
}

export const InviteViaMembership = {
  encode(
    message: InviteViaMembership,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.membershipId !== 0) {
      writer.uint32(8).uint32(message.membershipId)
    }
    writer.uint32(18).fork()
    for (const v of message.attributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteViaMembership {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseInviteViaMembership()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.membershipId = reader.uint32()
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.attributeIds.push(reader.uint32())
            }
          } else {
            message.attributeIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): InviteViaMembership {
    return {
      membershipId: isSet(object.membershipId)
        ? Number(object.membershipId)
        : 0,
      attributeIds: Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: InviteViaMembership): unknown {
    const obj: any = {}
    message.membershipId !== undefined &&
      (obj.membershipId = Math.round(message.membershipId))
    if (message.attributeIds) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e))
    } else {
      obj.attributeIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<InviteViaMembership>, I>>(
    object: I
  ): InviteViaMembership {
    const message = createBaseInviteViaMembership()
    message.membershipId = object.membershipId ?? 0
    message.attributeIds = object.attributeIds?.map((e) => e) || []
    return message
  }
}

function createBaseDeleteInvite(): DeleteInvite {
  return { inviteId: 0 }
}

export const DeleteInvite = {
  encode(
    message: DeleteInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeleteInvite()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.inviteId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DeleteInvite {
    return {
      inviteId: isSet(object.inviteId) ? Number(object.inviteId) : 0
    }
  },

  toJSON(message: DeleteInvite): unknown {
    const obj: any = {}
    message.inviteId !== undefined &&
      (obj.inviteId = Math.round(message.inviteId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DeleteInvite>, I>>(
    object: I
  ): DeleteInvite {
    const message = createBaseDeleteInvite()
    message.inviteId = object.inviteId ?? 0
    return message
  }
}

function createBaseAddInviteAttribute(): AddInviteAttribute {
  return { inviteId: 0, attributeId: 0 }
}

export const AddInviteAttribute = {
  encode(
    message: AddInviteAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId)
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddInviteAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAddInviteAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.inviteId = reader.uint32()
          break
        case 2:
          message.attributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AddInviteAttribute {
    return {
      inviteId: isSet(object.inviteId) ? Number(object.inviteId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: AddInviteAttribute): unknown {
    const obj: any = {}
    message.inviteId !== undefined &&
      (obj.inviteId = Math.round(message.inviteId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AddInviteAttribute>, I>>(
    object: I
  ): AddInviteAttribute {
    const message = createBaseAddInviteAttribute()
    message.inviteId = object.inviteId ?? 0
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseRemoveInviteAttribute(): RemoveInviteAttribute {
  return { inviteAttributeId: 0 }
}

export const RemoveInviteAttribute = {
  encode(
    message: RemoveInviteAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inviteAttributeId !== 0) {
      writer.uint32(8).uint32(message.inviteAttributeId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveInviteAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoveInviteAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.inviteAttributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoveInviteAttribute {
    return {
      inviteAttributeId: isSet(object.inviteAttributeId)
        ? Number(object.inviteAttributeId)
        : 0
    }
  },

  toJSON(message: RemoveInviteAttribute): unknown {
    const obj: any = {}
    message.inviteAttributeId !== undefined &&
      (obj.inviteAttributeId = Math.round(message.inviteAttributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoveInviteAttribute>, I>>(
    object: I
  ): RemoveInviteAttribute {
    const message = createBaseRemoveInviteAttribute()
    message.inviteAttributeId = object.inviteAttributeId ?? 0
    return message
  }
}

function createBaseCreateQrInvite(): CreateQrInvite {
  return {}
}

export const CreateQrInvite = {
  encode(
    _: CreateQrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateQrInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreateQrInvite()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): CreateQrInvite {
    return {}
  },

  toJSON(_: CreateQrInvite): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CreateQrInvite>, I>>(
    _: I
  ): CreateQrInvite {
    const message = createBaseCreateQrInvite()
    return message
  }
}

function createBaseDeleteQrInvite(): DeleteQrInvite {
  return { qrInviteId: 0 }
}

export const DeleteQrInvite = {
  encode(
    message: DeleteQrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.qrInviteId !== 0) {
      writer.uint32(8).uint32(message.qrInviteId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteQrInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeleteQrInvite()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.qrInviteId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DeleteQrInvite {
    return {
      qrInviteId: isSet(object.qrInviteId) ? Number(object.qrInviteId) : 0
    }
  },

  toJSON(message: DeleteQrInvite): unknown {
    const obj: any = {}
    message.qrInviteId !== undefined &&
      (obj.qrInviteId = Math.round(message.qrInviteId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DeleteQrInvite>, I>>(
    object: I
  ): DeleteQrInvite {
    const message = createBaseDeleteQrInvite()
    message.qrInviteId = object.qrInviteId ?? 0
    return message
  }
}

function createBaseOpenQrInvite(): OpenQrInvite {
  return { qrInviteId: 0, accessCode: 0 }
}

export const OpenQrInvite = {
  encode(
    message: OpenQrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.qrInviteId !== 0) {
      writer.uint32(8).uint32(message.qrInviteId)
    }
    if (message.accessCode !== 0) {
      writer.uint32(16).uint64(message.accessCode)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenQrInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseOpenQrInvite()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.qrInviteId = reader.uint32()
          break
        case 2:
          message.accessCode = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): OpenQrInvite {
    return {
      qrInviteId: isSet(object.qrInviteId) ? Number(object.qrInviteId) : 0,
      accessCode: isSet(object.accessCode) ? Number(object.accessCode) : 0
    }
  },

  toJSON(message: OpenQrInvite): unknown {
    const obj: any = {}
    message.qrInviteId !== undefined &&
      (obj.qrInviteId = Math.round(message.qrInviteId))
    message.accessCode !== undefined &&
      (obj.accessCode = Math.round(message.accessCode))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<OpenQrInvite>, I>>(
    object: I
  ): OpenQrInvite {
    const message = createBaseOpenQrInvite()
    message.qrInviteId = object.qrInviteId ?? 0
    message.accessCode = object.accessCode ?? 0
    return message
  }
}

function createBaseAddQrInviteAttribute(): AddQrInviteAttribute {
  return { qrInviteId: 0, attributeId: 0 }
}

export const AddQrInviteAttribute = {
  encode(
    message: AddQrInviteAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.qrInviteId !== 0) {
      writer.uint32(8).uint32(message.qrInviteId)
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddQrInviteAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAddQrInviteAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.qrInviteId = reader.uint32()
          break
        case 2:
          message.attributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AddQrInviteAttribute {
    return {
      qrInviteId: isSet(object.qrInviteId) ? Number(object.qrInviteId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: AddQrInviteAttribute): unknown {
    const obj: any = {}
    message.qrInviteId !== undefined &&
      (obj.qrInviteId = Math.round(message.qrInviteId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AddQrInviteAttribute>, I>>(
    object: I
  ): AddQrInviteAttribute {
    const message = createBaseAddQrInviteAttribute()
    message.qrInviteId = object.qrInviteId ?? 0
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseRemoveQrInviteAttribute(): RemoveQrInviteAttribute {
  return { qrInviteAttributeId: 0 }
}

export const RemoveQrInviteAttribute = {
  encode(
    message: RemoveQrInviteAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.qrInviteAttributeId !== 0) {
      writer.uint32(8).uint32(message.qrInviteAttributeId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveQrInviteAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoveQrInviteAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.qrInviteAttributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoveQrInviteAttribute {
    return {
      qrInviteAttributeId: isSet(object.qrInviteAttributeId)
        ? Number(object.qrInviteAttributeId)
        : 0
    }
  },

  toJSON(message: RemoveQrInviteAttribute): unknown {
    const obj: any = {}
    message.qrInviteAttributeId !== undefined &&
      (obj.qrInviteAttributeId = Math.round(message.qrInviteAttributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoveQrInviteAttribute>, I>>(
    object: I
  ): RemoveQrInviteAttribute {
    const message = createBaseRemoveQrInviteAttribute()
    message.qrInviteAttributeId = object.qrInviteAttributeId ?? 0
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
