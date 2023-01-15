/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { InviteType, inviteTypeFromJSON, inviteTypeToJSON } from './invites'
import { Phone } from './attributes'

export interface SpliceInvite {
  id: number
  spliceName: string
  inviteType: InviteType
  /** optional per UI and/or invite type */
  name: string
  handle: string
  phone: Phone | undefined
  email: string
  expiry: number
}

export interface QrSpliceInvite {
  id: number
  spliceId: number
  unlockCode: number
  expiry: number
}

export interface State {
  spliceInvites: SpliceInvite[]
  expiredSpliceInviteIds: number[]
}

function createBaseSpliceInvite(): SpliceInvite {
  return {
    id: 0,
    spliceName: '',
    inviteType: 0,
    name: '',
    handle: '',
    phone: undefined,
    email: '',
    expiry: 0
  }
}

export const SpliceInvite = {
  encode(
    message: SpliceInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.spliceName !== '') {
      writer.uint32(18).string(message.spliceName)
    }
    if (message.inviteType !== 0) {
      writer.uint32(24).int32(message.inviteType)
    }
    if (message.name !== '') {
      writer.uint32(34).string(message.name)
    }
    if (message.handle !== '') {
      writer.uint32(42).string(message.handle)
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(50).fork()).ldelim()
    }
    if (message.email !== '') {
      writer.uint32(58).string(message.email)
    }
    if (message.expiry !== 0) {
      writer.uint32(64).uint32(message.expiry)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpliceInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSpliceInvite()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.spliceName = reader.string()
          break
        case 3:
          message.inviteType = reader.int32() as any
          break
        case 4:
          message.name = reader.string()
          break
        case 5:
          message.handle = reader.string()
          break
        case 6:
          message.phone = Phone.decode(reader, reader.uint32())
          break
        case 7:
          message.email = reader.string()
          break
        case 8:
          message.expiry = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SpliceInvite {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      spliceName: isSet(object.spliceName) ? String(object.spliceName) : '',
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

  toJSON(message: SpliceInvite): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.spliceName !== undefined && (obj.spliceName = message.spliceName)
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

  fromPartial<I extends Exact<DeepPartial<SpliceInvite>, I>>(
    object: I
  ): SpliceInvite {
    const message = createBaseSpliceInvite()
    message.id = object.id ?? 0
    message.spliceName = object.spliceName ?? ''
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

function createBaseQrSpliceInvite(): QrSpliceInvite {
  return { id: 0, spliceId: 0, unlockCode: 0, expiry: 0 }
}

export const QrSpliceInvite = {
  encode(
    message: QrSpliceInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.spliceId !== 0) {
      writer.uint32(16).uint32(message.spliceId)
    }
    if (message.unlockCode !== 0) {
      writer.uint32(24).uint32(message.unlockCode)
    }
    if (message.expiry !== 0) {
      writer.uint32(32).uint32(message.expiry)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QrSpliceInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQrSpliceInvite()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.spliceId = reader.uint32()
          break
        case 3:
          message.unlockCode = reader.uint32()
          break
        case 4:
          message.expiry = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QrSpliceInvite {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
      unlockCode: isSet(object.unlockCode) ? Number(object.unlockCode) : 0,
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0
    }
  },

  toJSON(message: QrSpliceInvite): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    message.unlockCode !== undefined &&
      (obj.unlockCode = Math.round(message.unlockCode))
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QrSpliceInvite>, I>>(
    object: I
  ): QrSpliceInvite {
    const message = createBaseQrSpliceInvite()
    message.id = object.id ?? 0
    message.spliceId = object.spliceId ?? 0
    message.unlockCode = object.unlockCode ?? 0
    message.expiry = object.expiry ?? 0
    return message
  }
}

function createBaseState(): State {
  return { spliceInvites: [], expiredSpliceInviteIds: [] }
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spliceInvites) {
      SpliceInvite.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredSpliceInviteIds) {
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
          message.spliceInvites.push(
            SpliceInvite.decode(reader, reader.uint32())
          )
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredSpliceInviteIds.push(reader.uint32())
            }
          } else {
            message.expiredSpliceInviteIds.push(reader.uint32())
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
      spliceInvites: Array.isArray(object?.spliceInvites)
        ? object.spliceInvites.map((e: any) => SpliceInvite.fromJSON(e))
        : [],
      expiredSpliceInviteIds: Array.isArray(object?.expiredSpliceInviteIds)
        ? object.expiredSpliceInviteIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: State): unknown {
    const obj: any = {}
    if (message.spliceInvites) {
      obj.spliceInvites = message.spliceInvites.map((e) =>
        e ? SpliceInvite.toJSON(e) : undefined
      )
    } else {
      obj.spliceInvites = []
    }
    if (message.expiredSpliceInviteIds) {
      obj.expiredSpliceInviteIds = message.expiredSpliceInviteIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredSpliceInviteIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState()
    message.spliceInvites =
      object.spliceInvites?.map((e) => SpliceInvite.fromPartial(e)) || []
    message.expiredSpliceInviteIds =
      object.expiredSpliceInviteIds?.map((e) => e) || []
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
