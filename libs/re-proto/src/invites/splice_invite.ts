/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  InviteType,
  inviteTypeFromJSON,
  inviteTypeToJSON
} from '../invites/invite_type'
import { Phone } from '../attributes/attribute_value'

export interface SpliceInvite {
  id: number
  /** optional per UI and/or invite type */
  name: string
  inviteType: InviteType
  handle: string
  phone: Phone | undefined
  email: string
  commonSplice: string
  expiry: number
}

export interface SpliceInviteState {
  spliceInvites: SpliceInvite[]
  expiredIds: number[]
}

function createBaseSpliceInvite(): SpliceInvite {
  return {
    id: 0,
    name: '',
    inviteType: 0,
    handle: '',
    phone: undefined,
    email: '',
    commonSplice: '',
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
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.inviteType !== 0) {
      writer.uint32(24).int32(message.inviteType)
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
    if (message.commonSplice !== '') {
      writer.uint32(58).string(message.commonSplice)
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
          message.name = reader.string()
          break
        case 3:
          message.inviteType = reader.int32() as any
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
          message.commonSplice = reader.string()
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
      name: isSet(object.name) ? String(object.name) : '',
      inviteType: isSet(object.inviteType)
        ? inviteTypeFromJSON(object.inviteType)
        : 0,
      handle: isSet(object.handle) ? String(object.handle) : '',
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      email: isSet(object.email) ? String(object.email) : '',
      commonSplice: isSet(object.commonSplice)
        ? String(object.commonSplice)
        : '',
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0
    }
  },

  toJSON(message: SpliceInvite): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.name !== undefined && (obj.name = message.name)
    message.inviteType !== undefined &&
      (obj.inviteType = inviteTypeToJSON(message.inviteType))
    message.handle !== undefined && (obj.handle = message.handle)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.email !== undefined && (obj.email = message.email)
    message.commonSplice !== undefined &&
      (obj.commonSplice = message.commonSplice)
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SpliceInvite>, I>>(
    object: I
  ): SpliceInvite {
    const message = createBaseSpliceInvite()
    message.id = object.id ?? 0
    message.name = object.name ?? ''
    message.inviteType = object.inviteType ?? 0
    message.handle = object.handle ?? ''
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined
    message.email = object.email ?? ''
    message.commonSplice = object.commonSplice ?? ''
    message.expiry = object.expiry ?? 0
    return message
  }
}

function createBaseSpliceInviteState(): SpliceInviteState {
  return { spliceInvites: [], expiredIds: [] }
}

export const SpliceInviteState = {
  encode(
    message: SpliceInviteState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.spliceInvites) {
      SpliceInvite.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpliceInviteState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSpliceInviteState()
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

  fromJSON(object: any): SpliceInviteState {
    return {
      spliceInvites: Array.isArray(object?.spliceInvites)
        ? object.spliceInvites.map((e: any) => SpliceInvite.fromJSON(e))
        : [],
      expiredIds: Array.isArray(object?.expiredIds)
        ? object.expiredIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: SpliceInviteState): unknown {
    const obj: any = {}
    if (message.spliceInvites) {
      obj.spliceInvites = message.spliceInvites.map((e) =>
        e ? SpliceInvite.toJSON(e) : undefined
      )
    } else {
      obj.spliceInvites = []
    }
    if (message.expiredIds) {
      obj.expiredIds = message.expiredIds.map((e) => Math.round(e))
    } else {
      obj.expiredIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SpliceInviteState>, I>>(
    object: I
  ): SpliceInviteState {
    const message = createBaseSpliceInviteState()
    message.spliceInvites =
      object.spliceInvites?.map((e) => SpliceInvite.fromPartial(e)) || []
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