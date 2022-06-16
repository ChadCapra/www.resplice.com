/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  InviteType,
  inviteTypeFromJSON,
  inviteTypeToJSON
} from '../invites/invite_type'
import { Phone } from '../attributes/attribute_value'

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
