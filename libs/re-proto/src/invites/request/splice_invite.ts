/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Phone } from '../../attributes/attribute_value'

export interface ViaHandle {
  handle: string
  spliceId: number
}

export interface ViaPhone {
  name: string
  phone: Phone | undefined
  spliceId: number
}

export interface ViaEmail {
  name: string
  email: string
  spliceId: number
}

export interface ViaMembership {
  membershipId: number
  spliceId: number
}

export interface Delete {
  inviteId: number
}

function createBaseViaHandle(): ViaHandle {
  return { handle: '', spliceId: 0 }
}

export const ViaHandle = {
  encode(
    message: ViaHandle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.handle !== '') {
      writer.uint32(10).string(message.handle)
    }
    if (message.spliceId !== 0) {
      writer.uint32(16).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ViaHandle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseViaHandle()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.handle = reader.string()
          break
        case 2:
          message.spliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ViaHandle {
    return {
      handle: isSet(object.handle) ? String(object.handle) : '',
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: ViaHandle): unknown {
    const obj: any = {}
    message.handle !== undefined && (obj.handle = message.handle)
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ViaHandle>, I>>(
    object: I
  ): ViaHandle {
    const message = createBaseViaHandle()
    message.handle = object.handle ?? ''
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseViaPhone(): ViaPhone {
  return { name: '', phone: undefined, spliceId: 0 }
}

export const ViaPhone = {
  encode(
    message: ViaPhone,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(18).fork()).ldelim()
    }
    if (message.spliceId !== 0) {
      writer.uint32(24).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ViaPhone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseViaPhone()
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
          message.spliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ViaPhone {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: ViaPhone): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ViaPhone>, I>>(object: I): ViaPhone {
    const message = createBaseViaPhone()
    message.name = object.name ?? ''
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseViaEmail(): ViaEmail {
  return { name: '', email: '', spliceId: 0 }
}

export const ViaEmail = {
  encode(
    message: ViaEmail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.email !== '') {
      writer.uint32(18).string(message.email)
    }
    if (message.spliceId !== 0) {
      writer.uint32(24).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ViaEmail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseViaEmail()
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
          message.spliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ViaEmail {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      email: isSet(object.email) ? String(object.email) : '',
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: ViaEmail): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.email !== undefined && (obj.email = message.email)
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ViaEmail>, I>>(object: I): ViaEmail {
    const message = createBaseViaEmail()
    message.name = object.name ?? ''
    message.email = object.email ?? ''
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseViaMembership(): ViaMembership {
  return { membershipId: 0, spliceId: 0 }
}

export const ViaMembership = {
  encode(
    message: ViaMembership,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.membershipId !== 0) {
      writer.uint32(8).uint32(message.membershipId)
    }
    if (message.spliceId !== 0) {
      writer.uint32(16).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ViaMembership {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseViaMembership()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.membershipId = reader.uint32()
          break
        case 2:
          message.spliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ViaMembership {
    return {
      membershipId: isSet(object.membershipId)
        ? Number(object.membershipId)
        : 0,
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: ViaMembership): unknown {
    const obj: any = {}
    message.membershipId !== undefined &&
      (obj.membershipId = Math.round(message.membershipId))
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ViaMembership>, I>>(
    object: I
  ): ViaMembership {
    const message = createBaseViaMembership()
    message.membershipId = object.membershipId ?? 0
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseDelete(): Delete {
  return { inviteId: 0 }
}

export const Delete = {
  encode(
    message: Delete,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId)
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
          message.inviteId = reader.uint32()
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
      inviteId: isSet(object.inviteId) ? Number(object.inviteId) : 0
    }
  },

  toJSON(message: Delete): unknown {
    const obj: any = {}
    message.inviteId !== undefined &&
      (obj.inviteId = Math.round(message.inviteId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Delete>, I>>(object: I): Delete {
    const message = createBaseDelete()
    message.inviteId = object.inviteId ?? 0
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
