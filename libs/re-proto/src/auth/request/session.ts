/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Phone } from '../../attributes/attribute_value'

export interface Create {
  email: string
  phone: Phone | undefined
  rememberMe: boolean
  /** iv_base is last 8 bytes */
  aesKeyIvBase: Uint8Array
}

/** Returns: Encrypted Session */
export interface VerifyEmail {
  verificationToken: number
}

export interface VerifyPhone {
  verificationToken: number
}

/** If currentSession, returns session w/ expiry set to 0 */
export interface Delete {
  sessionId: number
}

/**
 * wss://
 * Returns: All User Data
 * authenticated_at ensures at least one value, and simulates a PIN
 * The following always returned (in full) after socket is authorized:
 * profile & sessions
 * invites / pending contacts / pending attributes
 */
export interface AuthorizeSocket {
  authenticatedAt: number
  userAttributesSince: number
  userAttributeGroupsSince: number
  contactsSince: number
  contactAttributesSince: number
  contactSharesSince: number
  splicesSince: number
  spliceMembersSince: number
  spliceSharesSince: number
}

function createBaseCreate(): Create {
  return {
    email: '',
    phone: undefined,
    rememberMe: false,
    aesKeyIvBase: new Uint8Array()
  }
}

export const Create = {
  encode(
    message: Create,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== '') {
      writer.uint32(10).string(message.email)
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(18).fork()).ldelim()
    }
    if (message.rememberMe === true) {
      writer.uint32(24).bool(message.rememberMe)
    }
    if (message.aesKeyIvBase.length !== 0) {
      writer.uint32(34).bytes(message.aesKeyIvBase)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Create {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreate()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string()
          break
        case 2:
          message.phone = Phone.decode(reader, reader.uint32())
          break
        case 3:
          message.rememberMe = reader.bool()
          break
        case 4:
          message.aesKeyIvBase = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Create {
    return {
      email: isSet(object.email) ? String(object.email) : '',
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      rememberMe: isSet(object.rememberMe) ? Boolean(object.rememberMe) : false,
      aesKeyIvBase: isSet(object.aesKeyIvBase)
        ? bytesFromBase64(object.aesKeyIvBase)
        : new Uint8Array()
    }
  },

  toJSON(message: Create): unknown {
    const obj: any = {}
    message.email !== undefined && (obj.email = message.email)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.rememberMe !== undefined && (obj.rememberMe = message.rememberMe)
    message.aesKeyIvBase !== undefined &&
      (obj.aesKeyIvBase = base64FromBytes(
        message.aesKeyIvBase !== undefined
          ? message.aesKeyIvBase
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Create>, I>>(object: I): Create {
    const message = createBaseCreate()
    message.email = object.email ?? ''
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined
    message.rememberMe = object.rememberMe ?? false
    message.aesKeyIvBase = object.aesKeyIvBase ?? new Uint8Array()
    return message
  }
}

function createBaseVerifyEmail(): VerifyEmail {
  return { verificationToken: 0 }
}

export const VerifyEmail = {
  encode(
    message: VerifyEmail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.verificationToken !== 0) {
      writer.uint32(8).uint32(message.verificationToken)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyEmail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseVerifyEmail()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.verificationToken = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): VerifyEmail {
    return {
      verificationToken: isSet(object.verificationToken)
        ? Number(object.verificationToken)
        : 0
    }
  },

  toJSON(message: VerifyEmail): unknown {
    const obj: any = {}
    message.verificationToken !== undefined &&
      (obj.verificationToken = Math.round(message.verificationToken))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<VerifyEmail>, I>>(
    object: I
  ): VerifyEmail {
    const message = createBaseVerifyEmail()
    message.verificationToken = object.verificationToken ?? 0
    return message
  }
}

function createBaseVerifyPhone(): VerifyPhone {
  return { verificationToken: 0 }
}

export const VerifyPhone = {
  encode(
    message: VerifyPhone,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.verificationToken !== 0) {
      writer.uint32(8).uint32(message.verificationToken)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPhone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseVerifyPhone()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.verificationToken = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): VerifyPhone {
    return {
      verificationToken: isSet(object.verificationToken)
        ? Number(object.verificationToken)
        : 0
    }
  },

  toJSON(message: VerifyPhone): unknown {
    const obj: any = {}
    message.verificationToken !== undefined &&
      (obj.verificationToken = Math.round(message.verificationToken))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<VerifyPhone>, I>>(
    object: I
  ): VerifyPhone {
    const message = createBaseVerifyPhone()
    message.verificationToken = object.verificationToken ?? 0
    return message
  }
}

function createBaseDelete(): Delete {
  return { sessionId: 0 }
}

export const Delete = {
  encode(
    message: Delete,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sessionId !== 0) {
      writer.uint32(8).uint32(message.sessionId)
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
          message.sessionId = reader.uint32()
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
      sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0
    }
  },

  toJSON(message: Delete): unknown {
    const obj: any = {}
    message.sessionId !== undefined &&
      (obj.sessionId = Math.round(message.sessionId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Delete>, I>>(object: I): Delete {
    const message = createBaseDelete()
    message.sessionId = object.sessionId ?? 0
    return message
  }
}

function createBaseAuthorizeSocket(): AuthorizeSocket {
  return {
    authenticatedAt: 0,
    userAttributesSince: 0,
    userAttributeGroupsSince: 0,
    contactsSince: 0,
    contactAttributesSince: 0,
    contactSharesSince: 0,
    splicesSince: 0,
    spliceMembersSince: 0,
    spliceSharesSince: 0
  }
}

export const AuthorizeSocket = {
  encode(
    message: AuthorizeSocket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authenticatedAt !== 0) {
      writer.uint32(8).uint32(message.authenticatedAt)
    }
    if (message.userAttributesSince !== 0) {
      writer.uint32(16).uint32(message.userAttributesSince)
    }
    if (message.userAttributeGroupsSince !== 0) {
      writer.uint32(24).uint32(message.userAttributeGroupsSince)
    }
    if (message.contactsSince !== 0) {
      writer.uint32(32).uint32(message.contactsSince)
    }
    if (message.contactAttributesSince !== 0) {
      writer.uint32(40).uint32(message.contactAttributesSince)
    }
    if (message.contactSharesSince !== 0) {
      writer.uint32(48).uint32(message.contactSharesSince)
    }
    if (message.splicesSince !== 0) {
      writer.uint32(56).uint32(message.splicesSince)
    }
    if (message.spliceMembersSince !== 0) {
      writer.uint32(64).uint32(message.spliceMembersSince)
    }
    if (message.spliceSharesSince !== 0) {
      writer.uint32(72).uint32(message.spliceSharesSince)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizeSocket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAuthorizeSocket()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.authenticatedAt = reader.uint32()
          break
        case 2:
          message.userAttributesSince = reader.uint32()
          break
        case 3:
          message.userAttributeGroupsSince = reader.uint32()
          break
        case 4:
          message.contactsSince = reader.uint32()
          break
        case 5:
          message.contactAttributesSince = reader.uint32()
          break
        case 6:
          message.contactSharesSince = reader.uint32()
          break
        case 7:
          message.splicesSince = reader.uint32()
          break
        case 8:
          message.spliceMembersSince = reader.uint32()
          break
        case 9:
          message.spliceSharesSince = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AuthorizeSocket {
    return {
      authenticatedAt: isSet(object.authenticatedAt)
        ? Number(object.authenticatedAt)
        : 0,
      userAttributesSince: isSet(object.userAttributesSince)
        ? Number(object.userAttributesSince)
        : 0,
      userAttributeGroupsSince: isSet(object.userAttributeGroupsSince)
        ? Number(object.userAttributeGroupsSince)
        : 0,
      contactsSince: isSet(object.contactsSince)
        ? Number(object.contactsSince)
        : 0,
      contactAttributesSince: isSet(object.contactAttributesSince)
        ? Number(object.contactAttributesSince)
        : 0,
      contactSharesSince: isSet(object.contactSharesSince)
        ? Number(object.contactSharesSince)
        : 0,
      splicesSince: isSet(object.splicesSince)
        ? Number(object.splicesSince)
        : 0,
      spliceMembersSince: isSet(object.spliceMembersSince)
        ? Number(object.spliceMembersSince)
        : 0,
      spliceSharesSince: isSet(object.spliceSharesSince)
        ? Number(object.spliceSharesSince)
        : 0
    }
  },

  toJSON(message: AuthorizeSocket): unknown {
    const obj: any = {}
    message.authenticatedAt !== undefined &&
      (obj.authenticatedAt = Math.round(message.authenticatedAt))
    message.userAttributesSince !== undefined &&
      (obj.userAttributesSince = Math.round(message.userAttributesSince))
    message.userAttributeGroupsSince !== undefined &&
      (obj.userAttributeGroupsSince = Math.round(
        message.userAttributeGroupsSince
      ))
    message.contactsSince !== undefined &&
      (obj.contactsSince = Math.round(message.contactsSince))
    message.contactAttributesSince !== undefined &&
      (obj.contactAttributesSince = Math.round(message.contactAttributesSince))
    message.contactSharesSince !== undefined &&
      (obj.contactSharesSince = Math.round(message.contactSharesSince))
    message.splicesSince !== undefined &&
      (obj.splicesSince = Math.round(message.splicesSince))
    message.spliceMembersSince !== undefined &&
      (obj.spliceMembersSince = Math.round(message.spliceMembersSince))
    message.spliceSharesSince !== undefined &&
      (obj.spliceSharesSince = Math.round(message.spliceSharesSince))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AuthorizeSocket>, I>>(
    object: I
  ): AuthorizeSocket {
    const message = createBaseAuthorizeSocket()
    message.authenticatedAt = object.authenticatedAt ?? 0
    message.userAttributesSince = object.userAttributesSince ?? 0
    message.userAttributeGroupsSince = object.userAttributeGroupsSince ?? 0
    message.contactsSince = object.contactsSince ?? 0
    message.contactAttributesSince = object.contactAttributesSince ?? 0
    message.contactSharesSince = object.contactSharesSince ?? 0
    message.splicesSince = object.splicesSince ?? 0
    message.spliceMembersSince = object.spliceMembersSince ?? 0
    message.spliceSharesSince = object.spliceSharesSince ?? 0
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
