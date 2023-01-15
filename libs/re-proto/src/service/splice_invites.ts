/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Phone } from '../attributes'

export interface InviteViaHandle {
  handle: string
  spliceId: number
}

export interface InviteViaContact {
  contactId: number
  spliceId: number
}

export interface InviteViaPhone {
  name: string
  phone: Phone | undefined
  spliceId: number
}

export interface InviteViaEmail {
  name: string
  email: string
  spliceId: number
}

export interface InviteViaMembership {
  membershipId: number
  spliceId: number
}

export interface DeleteInvite {
  inviteId: number
}

export interface CreateQrInvite {
  spliceId: number
}

export interface DeleteQrInvite {
  spliceQrInviteId: number
}

export interface OpenQrInvite {
  spliceQrInviteId: Uint8Array
}

function createBaseInviteViaHandle(): InviteViaHandle {
  return { handle: '', spliceId: 0 }
}

export const InviteViaHandle = {
  encode(
    message: InviteViaHandle,
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: InviteViaHandle): unknown {
    const obj: any = {}
    message.handle !== undefined && (obj.handle = message.handle)
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<InviteViaHandle>, I>>(
    object: I
  ): InviteViaHandle {
    const message = createBaseInviteViaHandle()
    message.handle = object.handle ?? ''
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseInviteViaContact(): InviteViaContact {
  return { contactId: 0, spliceId: 0 }
}

export const InviteViaContact = {
  encode(
    message: InviteViaContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    if (message.spliceId !== 0) {
      writer.uint32(16).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteViaContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseInviteViaContact()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
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

  fromJSON(object: any): InviteViaContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: InviteViaContact): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<InviteViaContact>, I>>(
    object: I
  ): InviteViaContact {
    const message = createBaseInviteViaContact()
    message.contactId = object.contactId ?? 0
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseInviteViaPhone(): InviteViaPhone {
  return { name: '', phone: undefined, spliceId: 0 }
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
    if (message.spliceId !== 0) {
      writer.uint32(24).uint32(message.spliceId)
    }
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: InviteViaPhone): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
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
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseInviteViaEmail(): InviteViaEmail {
  return { name: '', email: '', spliceId: 0 }
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
    if (message.spliceId !== 0) {
      writer.uint32(24).uint32(message.spliceId)
    }
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: InviteViaEmail): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.email !== undefined && (obj.email = message.email)
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<InviteViaEmail>, I>>(
    object: I
  ): InviteViaEmail {
    const message = createBaseInviteViaEmail()
    message.name = object.name ?? ''
    message.email = object.email ?? ''
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseInviteViaMembership(): InviteViaMembership {
  return { membershipId: 0, spliceId: 0 }
}

export const InviteViaMembership = {
  encode(
    message: InviteViaMembership,
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: InviteViaMembership): unknown {
    const obj: any = {}
    message.membershipId !== undefined &&
      (obj.membershipId = Math.round(message.membershipId))
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<InviteViaMembership>, I>>(
    object: I
  ): InviteViaMembership {
    const message = createBaseInviteViaMembership()
    message.membershipId = object.membershipId ?? 0
    message.spliceId = object.spliceId ?? 0
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

function createBaseCreateQrInvite(): CreateQrInvite {
  return { spliceId: 0 }
}

export const CreateQrInvite = {
  encode(
    message: CreateQrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateQrInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreateQrInvite()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CreateQrInvite {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: CreateQrInvite): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CreateQrInvite>, I>>(
    object: I
  ): CreateQrInvite {
    const message = createBaseCreateQrInvite()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseDeleteQrInvite(): DeleteQrInvite {
  return { spliceQrInviteId: 0 }
}

export const DeleteQrInvite = {
  encode(
    message: DeleteQrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceQrInviteId !== 0) {
      writer.uint32(8).uint32(message.spliceQrInviteId)
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
          message.spliceQrInviteId = reader.uint32()
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
      spliceQrInviteId: isSet(object.spliceQrInviteId)
        ? Number(object.spliceQrInviteId)
        : 0
    }
  },

  toJSON(message: DeleteQrInvite): unknown {
    const obj: any = {}
    message.spliceQrInviteId !== undefined &&
      (obj.spliceQrInviteId = Math.round(message.spliceQrInviteId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DeleteQrInvite>, I>>(
    object: I
  ): DeleteQrInvite {
    const message = createBaseDeleteQrInvite()
    message.spliceQrInviteId = object.spliceQrInviteId ?? 0
    return message
  }
}

function createBaseOpenQrInvite(): OpenQrInvite {
  return { spliceQrInviteId: new Uint8Array() }
}

export const OpenQrInvite = {
  encode(
    message: OpenQrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceQrInviteId.length !== 0) {
      writer.uint32(10).bytes(message.spliceQrInviteId)
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
          message.spliceQrInviteId = reader.bytes()
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
      spliceQrInviteId: isSet(object.spliceQrInviteId)
        ? bytesFromBase64(object.spliceQrInviteId)
        : new Uint8Array()
    }
  },

  toJSON(message: OpenQrInvite): unknown {
    const obj: any = {}
    message.spliceQrInviteId !== undefined &&
      (obj.spliceQrInviteId = base64FromBytes(
        message.spliceQrInviteId !== undefined
          ? message.spliceQrInviteId
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<OpenQrInvite>, I>>(
    object: I
  ): OpenQrInvite {
    const message = createBaseOpenQrInvite()
    message.spliceQrInviteId = object.spliceQrInviteId ?? new Uint8Array()
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte))
  })
  return btoa(bin.join(''))
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
