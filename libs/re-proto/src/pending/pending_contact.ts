/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  InviteType,
  inviteTypeFromJSON,
  inviteTypeToJSON
} from '../invites/invite_type'
import { Phone } from '../attributes/attribute_value'

export interface PendingContact {
  id: number
  name: string
  avatarUrl: string
  inviteType: InviteType
  handle: string
  phone: Phone | undefined
  email: string
  commonSplice: string
  expiry: number
}

function createBasePendingContact(): PendingContact {
  return {
    id: 0,
    name: '',
    avatarUrl: '',
    inviteType: 0,
    handle: '',
    phone: undefined,
    email: '',
    commonSplice: '',
    expiry: 0
  }
}

export const PendingContact = {
  encode(
    message: PendingContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.avatarUrl !== '') {
      writer.uint32(26).string(message.avatarUrl)
    }
    if (message.inviteType !== 0) {
      writer.uint32(32).int32(message.inviteType)
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
    if (message.commonSplice !== '') {
      writer.uint32(66).string(message.commonSplice)
    }
    if (message.expiry !== 0) {
      writer.uint32(72).uint32(message.expiry)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePendingContact()
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
          message.avatarUrl = reader.string()
          break
        case 4:
          message.inviteType = reader.int32() as any
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
          message.commonSplice = reader.string()
          break
        case 9:
          message.expiry = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PendingContact {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : '',
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

  toJSON(message: PendingContact): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.name !== undefined && (obj.name = message.name)
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl)
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

  fromPartial<I extends Exact<DeepPartial<PendingContact>, I>>(
    object: I
  ): PendingContact {
    const message = createBasePendingContact()
    message.id = object.id ?? 0
    message.name = object.name ?? ''
    message.avatarUrl = object.avatarUrl ?? ''
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
