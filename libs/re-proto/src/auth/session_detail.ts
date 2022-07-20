/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Phone } from '../attributes/attribute_value'

export interface SessionDetail {
  id: number
  email: string
  phone: Phone | undefined
  authenticatedAt: number
  expiry: number
}

export interface SessionDetails {
  details: SessionDetail[]
}

function createBaseSessionDetail(): SessionDetail {
  return { id: 0, email: '', phone: undefined, authenticatedAt: 0, expiry: 0 }
}

export const SessionDetail = {
  encode(
    message: SessionDetail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.email !== '') {
      writer.uint32(18).string(message.email)
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(26).fork()).ldelim()
    }
    if (message.authenticatedAt !== 0) {
      writer.uint32(32).uint32(message.authenticatedAt)
    }
    if (message.expiry !== 0) {
      writer.uint32(40).uint32(message.expiry)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSessionDetail()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.email = reader.string()
          break
        case 3:
          message.phone = Phone.decode(reader, reader.uint32())
          break
        case 4:
          message.authenticatedAt = reader.uint32()
          break
        case 5:
          message.expiry = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SessionDetail {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      email: isSet(object.email) ? String(object.email) : '',
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      authenticatedAt: isSet(object.authenticatedAt)
        ? Number(object.authenticatedAt)
        : 0,
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0
    }
  },

  toJSON(message: SessionDetail): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.email !== undefined && (obj.email = message.email)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.authenticatedAt !== undefined &&
      (obj.authenticatedAt = Math.round(message.authenticatedAt))
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SessionDetail>, I>>(
    object: I
  ): SessionDetail {
    const message = createBaseSessionDetail()
    message.id = object.id ?? 0
    message.email = object.email ?? ''
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined
    message.authenticatedAt = object.authenticatedAt ?? 0
    message.expiry = object.expiry ?? 0
    return message
  }
}

function createBaseSessionDetails(): SessionDetails {
  return { details: [] }
}

export const SessionDetails = {
  encode(
    message: SessionDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.details) {
      SessionDetail.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSessionDetails()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.details.push(SessionDetail.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SessionDetails {
    return {
      details: Array.isArray(object?.details)
        ? object.details.map((e: any) => SessionDetail.fromJSON(e))
        : []
    }
  },

  toJSON(message: SessionDetails): unknown {
    const obj: any = {}
    if (message.details) {
      obj.details = message.details.map((e) =>
        e ? SessionDetail.toJSON(e) : undefined
      )
    } else {
      obj.details = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SessionDetails>, I>>(
    object: I
  ): SessionDetails {
    const message = createBaseSessionDetails()
    message.details =
      object.details?.map((e) => SessionDetail.fromPartial(e)) || []
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
