/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Phone } from './attributes'

export enum InviteType {
  NOT_SET = 0,
  HANDLE = 1,
  PHONE = 2,
  EMAIL = 3,
  DIRECT = 4,
  QR_INVITE = 5,
  UNRECOGNIZED = -1
}

export function inviteTypeFromJSON(object: any): InviteType {
  switch (object) {
    case 0:
    case 'NOT_SET':
      return InviteType.NOT_SET
    case 1:
    case 'HANDLE':
      return InviteType.HANDLE
    case 2:
    case 'PHONE':
      return InviteType.PHONE
    case 3:
    case 'EMAIL':
      return InviteType.EMAIL
    case 4:
    case 'DIRECT':
      return InviteType.DIRECT
    case 5:
    case 'QR_INVITE':
      return InviteType.QR_INVITE
    case -1:
    case 'UNRECOGNIZED':
    default:
      return InviteType.UNRECOGNIZED
  }
}

export function inviteTypeToJSON(object: InviteType): string {
  switch (object) {
    case InviteType.NOT_SET:
      return 'NOT_SET'
    case InviteType.HANDLE:
      return 'HANDLE'
    case InviteType.PHONE:
      return 'PHONE'
    case InviteType.EMAIL:
      return 'EMAIL'
    case InviteType.DIRECT:
      return 'DIRECT'
    case InviteType.QR_INVITE:
      return 'QR_INVITE'
    default:
      return 'UNKNOWN'
  }
}

export interface Invite {
  id: number
  inviteType: InviteType
  /** optional per UI and/or invite type */
  name: string
  handle: string
  phone: Phone | undefined
  email: string
  expiry: number
}

export interface InviteAttribute {
  id: number
  inviteId: number
  attributeId: number
}

export interface QrInvite {
  id: number
  accessCode: number
  expiry: number
  attributes: QrInviteAttribute[]
}

export interface QrInviteAttribute {
  id: number
  qrInviteId: number
  attributeId: number
}

export interface State {
  invites: Invite[]
  expiredInviteIds: number[]
  inviteAttributes: InviteAttribute[]
  expiredInviteAttributeIds: number[]
}

function createBaseInvite(): Invite {
  return {
    id: 0,
    inviteType: 0,
    name: '',
    handle: '',
    phone: undefined,
    email: '',
    expiry: 0
  }
}

export const Invite = {
  encode(
    message: Invite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.inviteType !== 0) {
      writer.uint32(16).int32(message.inviteType)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.handle !== '') {
      writer.uint32(34).string(message.handle)
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(42).fork()).ldelim()
    }
    if (message.email !== '') {
      writer.uint32(50).string(message.email)
    }
    if (message.expiry !== 0) {
      writer.uint32(56).uint32(message.expiry)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Invite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseInvite()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.inviteType = reader.int32() as any
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.handle = reader.string()
          break
        case 5:
          message.phone = Phone.decode(reader, reader.uint32())
          break
        case 6:
          message.email = reader.string()
          break
        case 7:
          message.expiry = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Invite {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      inviteType: isSet(object.inviteType)
        ? inviteTypeFromJSON(object.inviteType)
        : 0,
      name: isSet(object.name) ? String(object.name) : '',
      handle: isSet(object.handle) ? String(object.handle) : '',
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      email: isSet(object.email) ? String(object.email) : '',
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0
    }
  },

  toJSON(message: Invite): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.inviteType !== undefined &&
      (obj.inviteType = inviteTypeToJSON(message.inviteType))
    message.name !== undefined && (obj.name = message.name)
    message.handle !== undefined && (obj.handle = message.handle)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.email !== undefined && (obj.email = message.email)
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Invite>, I>>(object: I): Invite {
    const message = createBaseInvite()
    message.id = object.id ?? 0
    message.inviteType = object.inviteType ?? 0
    message.name = object.name ?? ''
    message.handle = object.handle ?? ''
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined
    message.email = object.email ?? ''
    message.expiry = object.expiry ?? 0
    return message
  }
}

function createBaseInviteAttribute(): InviteAttribute {
  return { id: 0, inviteId: 0, attributeId: 0 }
}

export const InviteAttribute = {
  encode(
    message: InviteAttribute,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseInviteAttribute()
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

  fromJSON(object: any): InviteAttribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      inviteId: isSet(object.inviteId) ? Number(object.inviteId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: InviteAttribute): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.inviteId !== undefined &&
      (obj.inviteId = Math.round(message.inviteId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<InviteAttribute>, I>>(
    object: I
  ): InviteAttribute {
    const message = createBaseInviteAttribute()
    message.id = object.id ?? 0
    message.inviteId = object.inviteId ?? 0
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseQrInvite(): QrInvite {
  return { id: 0, accessCode: 0, expiry: 0, attributes: [] }
}

export const QrInvite = {
  encode(
    message: QrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.accessCode !== 0) {
      writer.uint32(16).uint64(message.accessCode)
    }
    if (message.expiry !== 0) {
      writer.uint32(24).uint32(message.expiry)
    }
    for (const v of message.attributes) {
      QrInviteAttribute.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QrInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQrInvite()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.accessCode = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.expiry = reader.uint32()
          break
        case 4:
          message.attributes.push(
            QrInviteAttribute.decode(reader, reader.uint32())
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QrInvite {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      accessCode: isSet(object.accessCode) ? Number(object.accessCode) : 0,
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0,
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => QrInviteAttribute.fromJSON(e))
        : []
    }
  },

  toJSON(message: QrInvite): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.accessCode !== undefined &&
      (obj.accessCode = Math.round(message.accessCode))
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry))
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? QrInviteAttribute.toJSON(e) : undefined
      )
    } else {
      obj.attributes = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QrInvite>, I>>(object: I): QrInvite {
    const message = createBaseQrInvite()
    message.id = object.id ?? 0
    message.accessCode = object.accessCode ?? 0
    message.expiry = object.expiry ?? 0
    message.attributes =
      object.attributes?.map((e) => QrInviteAttribute.fromPartial(e)) || []
    return message
  }
}

function createBaseQrInviteAttribute(): QrInviteAttribute {
  return { id: 0, qrInviteId: 0, attributeId: 0 }
}

export const QrInviteAttribute = {
  encode(
    message: QrInviteAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.qrInviteId !== 0) {
      writer.uint32(16).uint32(message.qrInviteId)
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
          message.qrInviteId = reader.uint32()
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
      qrInviteId: isSet(object.qrInviteId) ? Number(object.qrInviteId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: QrInviteAttribute): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.qrInviteId !== undefined &&
      (obj.qrInviteId = Math.round(message.qrInviteId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QrInviteAttribute>, I>>(
    object: I
  ): QrInviteAttribute {
    const message = createBaseQrInviteAttribute()
    message.id = object.id ?? 0
    message.qrInviteId = object.qrInviteId ?? 0
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseState(): State {
  return {
    invites: [],
    expiredInviteIds: [],
    inviteAttributes: [],
    expiredInviteAttributeIds: []
  }
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.invites) {
      Invite.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredInviteIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.inviteAttributes) {
      InviteAttribute.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    writer.uint32(34).fork()
    for (const v of message.expiredInviteAttributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.invites.push(Invite.decode(reader, reader.uint32()))
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredInviteIds.push(reader.uint32())
            }
          } else {
            message.expiredInviteIds.push(reader.uint32())
          }
          break
        case 3:
          message.inviteAttributes.push(
            InviteAttribute.decode(reader, reader.uint32())
          )
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredInviteAttributeIds.push(reader.uint32())
            }
          } else {
            message.expiredInviteAttributeIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): State {
    return {
      invites: Array.isArray(object?.invites)
        ? object.invites.map((e: any) => Invite.fromJSON(e))
        : [],
      expiredInviteIds: Array.isArray(object?.expiredInviteIds)
        ? object.expiredInviteIds.map((e: any) => Number(e))
        : [],
      inviteAttributes: Array.isArray(object?.inviteAttributes)
        ? object.inviteAttributes.map((e: any) => InviteAttribute.fromJSON(e))
        : [],
      expiredInviteAttributeIds: Array.isArray(
        object?.expiredInviteAttributeIds
      )
        ? object.expiredInviteAttributeIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: State): unknown {
    const obj: any = {}
    if (message.invites) {
      obj.invites = message.invites.map((e) =>
        e ? Invite.toJSON(e) : undefined
      )
    } else {
      obj.invites = []
    }
    if (message.expiredInviteIds) {
      obj.expiredInviteIds = message.expiredInviteIds.map((e) => Math.round(e))
    } else {
      obj.expiredInviteIds = []
    }
    if (message.inviteAttributes) {
      obj.inviteAttributes = message.inviteAttributes.map((e) =>
        e ? InviteAttribute.toJSON(e) : undefined
      )
    } else {
      obj.inviteAttributes = []
    }
    if (message.expiredInviteAttributeIds) {
      obj.expiredInviteAttributeIds = message.expiredInviteAttributeIds.map(
        (e) => Math.round(e)
      )
    } else {
      obj.expiredInviteAttributeIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState()
    message.invites = object.invites?.map((e) => Invite.fromPartial(e)) || []
    message.expiredInviteIds = object.expiredInviteIds?.map((e) => e) || []
    message.inviteAttributes =
      object.inviteAttributes?.map((e) => InviteAttribute.fromPartial(e)) || []
    message.expiredInviteAttributeIds =
      object.expiredInviteAttributeIds?.map((e) => e) || []
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
