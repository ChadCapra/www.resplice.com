/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Phone } from './attributes'

export enum SessionStatus {
  AUTHENTICATED = 0,
  PENDING_EMAIL_VERIFICATION = 1,
  PENDING_PHONE_VERIFICATION = 2,
  PENDING_USER_REGISRATION = 3,
  PENDING_ADDITIONAL_AUTHENTICATION = 4,
  UNRECOGNIZED = -1
}

export function sessionStatusFromJSON(object: any): SessionStatus {
  switch (object) {
    case 0:
    case 'AUTHENTICATED':
      return SessionStatus.AUTHENTICATED
    case 1:
    case 'PENDING_EMAIL_VERIFICATION':
      return SessionStatus.PENDING_EMAIL_VERIFICATION
    case 2:
    case 'PENDING_PHONE_VERIFICATION':
      return SessionStatus.PENDING_PHONE_VERIFICATION
    case 3:
    case 'PENDING_USER_REGISRATION':
      return SessionStatus.PENDING_USER_REGISRATION
    case 4:
    case 'PENDING_ADDITIONAL_AUTHENTICATION':
      return SessionStatus.PENDING_ADDITIONAL_AUTHENTICATION
    case -1:
    case 'UNRECOGNIZED':
    default:
      return SessionStatus.UNRECOGNIZED
  }
}

export function sessionStatusToJSON(object: SessionStatus): string {
  switch (object) {
    case SessionStatus.AUTHENTICATED:
      return 'AUTHENTICATED'
    case SessionStatus.PENDING_EMAIL_VERIFICATION:
      return 'PENDING_EMAIL_VERIFICATION'
    case SessionStatus.PENDING_PHONE_VERIFICATION:
      return 'PENDING_PHONE_VERIFICATION'
    case SessionStatus.PENDING_USER_REGISRATION:
      return 'PENDING_USER_REGISRATION'
    case SessionStatus.PENDING_ADDITIONAL_AUTHENTICATION:
      return 'PENDING_ADDITIONAL_AUTHENTICATION'
    default:
      return 'UNKNOWN'
  }
}

export interface Session {
  id: number
  status: SessionStatus
  createdAt: number
  rememberMe: boolean
}

export interface SessionDetail {
  id: number
  email: string
  phone: Phone | undefined
  authenticatedAt: number
  expiry: number
}

export interface SessionDetails {
  details: SessionDetail[]
  expiredSessionIds: number[]
}

function createBaseSession(): Session {
  return { id: 0, status: 0, createdAt: 0, rememberMe: false }
}

export const Session = {
  encode(
    message: Session,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status)
    }
    if (message.createdAt !== 0) {
      writer.uint32(24).uint32(message.createdAt)
    }
    if (message.rememberMe === true) {
      writer.uint32(32).bool(message.rememberMe)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Session {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSession()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.status = reader.int32() as any
          break
        case 3:
          message.createdAt = reader.uint32()
          break
        case 4:
          message.rememberMe = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Session {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      status: isSet(object.status) ? sessionStatusFromJSON(object.status) : 0,
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      rememberMe: isSet(object.rememberMe) ? Boolean(object.rememberMe) : false
    }
  },

  toJSON(message: Session): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.status !== undefined &&
      (obj.status = sessionStatusToJSON(message.status))
    message.createdAt !== undefined &&
      (obj.createdAt = Math.round(message.createdAt))
    message.rememberMe !== undefined && (obj.rememberMe = message.rememberMe)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Session>, I>>(object: I): Session {
    const message = createBaseSession()
    message.id = object.id ?? 0
    message.status = object.status ?? 0
    message.createdAt = object.createdAt ?? 0
    message.rememberMe = object.rememberMe ?? false
    return message
  }
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
  return { details: [], expiredSessionIds: [] }
}

export const SessionDetails = {
  encode(
    message: SessionDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.details) {
      SessionDetail.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredSessionIds) {
      writer.uint32(v)
    }
    writer.ldelim()
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
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredSessionIds.push(reader.uint32())
            }
          } else {
            message.expiredSessionIds.push(reader.uint32())
          }
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
        : [],
      expiredSessionIds: Array.isArray(object?.expiredSessionIds)
        ? object.expiredSessionIds.map((e: any) => Number(e))
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
    if (message.expiredSessionIds) {
      obj.expiredSessionIds = message.expiredSessionIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredSessionIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SessionDetails>, I>>(
    object: I
  ): SessionDetails {
    const message = createBaseSessionDetails()
    message.details =
      object.details?.map((e) => SessionDetail.fromPartial(e)) || []
    message.expiredSessionIds = object.expiredSessionIds?.map((e) => e) || []
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
