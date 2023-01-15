/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Phone } from '../attributes'

export interface CreateSession {
  email: string
  phone: Phone | undefined
  rememberMe: boolean
  aesKey: Uint8Array
  ivBase: Uint8Array
}

export interface VerifySessionEmail {
  verificationToken: number
}

export interface VerifySessionPhone {
  verificationToken: number
}

export interface CreateAccount {
  name: string
  handle: string
  avatar: Uint8Array
}

export interface DeleteAccount {
  handle: string
  removeAllExistingData: boolean
}

export interface DeleteSession {
  sessionId: number
}

export interface GetSessionDetails {
  sessionsSince: number
}

/**
 * wss://
 * Returns: All User Data
 * The following always returned (in full) after socket is authorized:
 * current_session (first), invites, pending contacts, pending attributes
 */
export interface AuthorizeSocket {
  userProfileSince: number
  attributeStateSince: number
  contactStateSince: number
  spliceStateSince: number
  inviteStateSince: number
  pendingStateSince: number
  qrInviteSince: number
  qrSpliceInviteSince: number
  sessionDetailsSince: number
}

function createBaseCreateSession(): CreateSession {
  return {
    email: '',
    phone: undefined,
    rememberMe: false,
    aesKey: new Uint8Array(),
    ivBase: new Uint8Array()
  }
}

export const CreateSession = {
  encode(
    message: CreateSession,
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
    if (message.aesKey.length !== 0) {
      writer.uint32(34).bytes(message.aesKey)
    }
    if (message.ivBase.length !== 0) {
      writer.uint32(42).bytes(message.ivBase)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreateSession()
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
          message.aesKey = reader.bytes()
          break
        case 5:
          message.ivBase = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CreateSession {
    return {
      email: isSet(object.email) ? String(object.email) : '',
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      rememberMe: isSet(object.rememberMe) ? Boolean(object.rememberMe) : false,
      aesKey: isSet(object.aesKey)
        ? bytesFromBase64(object.aesKey)
        : new Uint8Array(),
      ivBase: isSet(object.ivBase)
        ? bytesFromBase64(object.ivBase)
        : new Uint8Array()
    }
  },

  toJSON(message: CreateSession): unknown {
    const obj: any = {}
    message.email !== undefined && (obj.email = message.email)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.rememberMe !== undefined && (obj.rememberMe = message.rememberMe)
    message.aesKey !== undefined &&
      (obj.aesKey = base64FromBytes(
        message.aesKey !== undefined ? message.aesKey : new Uint8Array()
      ))
    message.ivBase !== undefined &&
      (obj.ivBase = base64FromBytes(
        message.ivBase !== undefined ? message.ivBase : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CreateSession>, I>>(
    object: I
  ): CreateSession {
    const message = createBaseCreateSession()
    message.email = object.email ?? ''
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined
    message.rememberMe = object.rememberMe ?? false
    message.aesKey = object.aesKey ?? new Uint8Array()
    message.ivBase = object.ivBase ?? new Uint8Array()
    return message
  }
}

function createBaseVerifySessionEmail(): VerifySessionEmail {
  return { verificationToken: 0 }
}

export const VerifySessionEmail = {
  encode(
    message: VerifySessionEmail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.verificationToken !== 0) {
      writer.uint32(8).uint32(message.verificationToken)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifySessionEmail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseVerifySessionEmail()
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

  fromJSON(object: any): VerifySessionEmail {
    return {
      verificationToken: isSet(object.verificationToken)
        ? Number(object.verificationToken)
        : 0
    }
  },

  toJSON(message: VerifySessionEmail): unknown {
    const obj: any = {}
    message.verificationToken !== undefined &&
      (obj.verificationToken = Math.round(message.verificationToken))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<VerifySessionEmail>, I>>(
    object: I
  ): VerifySessionEmail {
    const message = createBaseVerifySessionEmail()
    message.verificationToken = object.verificationToken ?? 0
    return message
  }
}

function createBaseVerifySessionPhone(): VerifySessionPhone {
  return { verificationToken: 0 }
}

export const VerifySessionPhone = {
  encode(
    message: VerifySessionPhone,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.verificationToken !== 0) {
      writer.uint32(8).uint32(message.verificationToken)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifySessionPhone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseVerifySessionPhone()
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

  fromJSON(object: any): VerifySessionPhone {
    return {
      verificationToken: isSet(object.verificationToken)
        ? Number(object.verificationToken)
        : 0
    }
  },

  toJSON(message: VerifySessionPhone): unknown {
    const obj: any = {}
    message.verificationToken !== undefined &&
      (obj.verificationToken = Math.round(message.verificationToken))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<VerifySessionPhone>, I>>(
    object: I
  ): VerifySessionPhone {
    const message = createBaseVerifySessionPhone()
    message.verificationToken = object.verificationToken ?? 0
    return message
  }
}

function createBaseCreateAccount(): CreateAccount {
  return { name: '', handle: '', avatar: new Uint8Array() }
}

export const CreateAccount = {
  encode(
    message: CreateAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.handle !== '') {
      writer.uint32(18).string(message.handle)
    }
    if (message.avatar.length !== 0) {
      writer.uint32(26).bytes(message.avatar)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreateAccount()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.handle = reader.string()
          break
        case 3:
          message.avatar = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CreateAccount {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      handle: isSet(object.handle) ? String(object.handle) : '',
      avatar: isSet(object.avatar)
        ? bytesFromBase64(object.avatar)
        : new Uint8Array()
    }
  },

  toJSON(message: CreateAccount): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.handle !== undefined && (obj.handle = message.handle)
    message.avatar !== undefined &&
      (obj.avatar = base64FromBytes(
        message.avatar !== undefined ? message.avatar : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CreateAccount>, I>>(
    object: I
  ): CreateAccount {
    const message = createBaseCreateAccount()
    message.name = object.name ?? ''
    message.handle = object.handle ?? ''
    message.avatar = object.avatar ?? new Uint8Array()
    return message
  }
}

function createBaseDeleteAccount(): DeleteAccount {
  return { handle: '', removeAllExistingData: false }
}

export const DeleteAccount = {
  encode(
    message: DeleteAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.handle !== '') {
      writer.uint32(10).string(message.handle)
    }
    if (message.removeAllExistingData === true) {
      writer.uint32(16).bool(message.removeAllExistingData)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeleteAccount()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.handle = reader.string()
          break
        case 2:
          message.removeAllExistingData = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DeleteAccount {
    return {
      handle: isSet(object.handle) ? String(object.handle) : '',
      removeAllExistingData: isSet(object.removeAllExistingData)
        ? Boolean(object.removeAllExistingData)
        : false
    }
  },

  toJSON(message: DeleteAccount): unknown {
    const obj: any = {}
    message.handle !== undefined && (obj.handle = message.handle)
    message.removeAllExistingData !== undefined &&
      (obj.removeAllExistingData = message.removeAllExistingData)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAccount>, I>>(
    object: I
  ): DeleteAccount {
    const message = createBaseDeleteAccount()
    message.handle = object.handle ?? ''
    message.removeAllExistingData = object.removeAllExistingData ?? false
    return message
  }
}

function createBaseDeleteSession(): DeleteSession {
  return { sessionId: 0 }
}

export const DeleteSession = {
  encode(
    message: DeleteSession,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sessionId !== 0) {
      writer.uint32(8).uint32(message.sessionId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeleteSession()
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

  fromJSON(object: any): DeleteSession {
    return {
      sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0
    }
  },

  toJSON(message: DeleteSession): unknown {
    const obj: any = {}
    message.sessionId !== undefined &&
      (obj.sessionId = Math.round(message.sessionId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSession>, I>>(
    object: I
  ): DeleteSession {
    const message = createBaseDeleteSession()
    message.sessionId = object.sessionId ?? 0
    return message
  }
}

function createBaseGetSessionDetails(): GetSessionDetails {
  return { sessionsSince: 0 }
}

export const GetSessionDetails = {
  encode(
    message: GetSessionDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sessionsSince !== 0) {
      writer.uint32(8).uint32(message.sessionsSince)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGetSessionDetails()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sessionsSince = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GetSessionDetails {
    return {
      sessionsSince: isSet(object.sessionsSince)
        ? Number(object.sessionsSince)
        : 0
    }
  },

  toJSON(message: GetSessionDetails): unknown {
    const obj: any = {}
    message.sessionsSince !== undefined &&
      (obj.sessionsSince = Math.round(message.sessionsSince))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<GetSessionDetails>, I>>(
    object: I
  ): GetSessionDetails {
    const message = createBaseGetSessionDetails()
    message.sessionsSince = object.sessionsSince ?? 0
    return message
  }
}

function createBaseAuthorizeSocket(): AuthorizeSocket {
  return {
    userProfileSince: 0,
    attributeStateSince: 0,
    contactStateSince: 0,
    spliceStateSince: 0,
    inviteStateSince: 0,
    pendingStateSince: 0,
    qrInviteSince: 0,
    qrSpliceInviteSince: 0,
    sessionDetailsSince: 0
  }
}

export const AuthorizeSocket = {
  encode(
    message: AuthorizeSocket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userProfileSince !== 0) {
      writer.uint32(8).uint32(message.userProfileSince)
    }
    if (message.attributeStateSince !== 0) {
      writer.uint32(16).uint32(message.attributeStateSince)
    }
    if (message.contactStateSince !== 0) {
      writer.uint32(24).uint32(message.contactStateSince)
    }
    if (message.spliceStateSince !== 0) {
      writer.uint32(32).uint32(message.spliceStateSince)
    }
    if (message.inviteStateSince !== 0) {
      writer.uint32(40).uint32(message.inviteStateSince)
    }
    if (message.pendingStateSince !== 0) {
      writer.uint32(48).uint32(message.pendingStateSince)
    }
    if (message.qrInviteSince !== 0) {
      writer.uint32(56).uint32(message.qrInviteSince)
    }
    if (message.qrSpliceInviteSince !== 0) {
      writer.uint32(64).uint32(message.qrSpliceInviteSince)
    }
    if (message.sessionDetailsSince !== 0) {
      writer.uint32(72).uint32(message.sessionDetailsSince)
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
          message.userProfileSince = reader.uint32()
          break
        case 2:
          message.attributeStateSince = reader.uint32()
          break
        case 3:
          message.contactStateSince = reader.uint32()
          break
        case 4:
          message.spliceStateSince = reader.uint32()
          break
        case 5:
          message.inviteStateSince = reader.uint32()
          break
        case 6:
          message.pendingStateSince = reader.uint32()
          break
        case 7:
          message.qrInviteSince = reader.uint32()
          break
        case 8:
          message.qrSpliceInviteSince = reader.uint32()
          break
        case 9:
          message.sessionDetailsSince = reader.uint32()
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
      userProfileSince: isSet(object.userProfileSince)
        ? Number(object.userProfileSince)
        : 0,
      attributeStateSince: isSet(object.attributeStateSince)
        ? Number(object.attributeStateSince)
        : 0,
      contactStateSince: isSet(object.contactStateSince)
        ? Number(object.contactStateSince)
        : 0,
      spliceStateSince: isSet(object.spliceStateSince)
        ? Number(object.spliceStateSince)
        : 0,
      inviteStateSince: isSet(object.inviteStateSince)
        ? Number(object.inviteStateSince)
        : 0,
      pendingStateSince: isSet(object.pendingStateSince)
        ? Number(object.pendingStateSince)
        : 0,
      qrInviteSince: isSet(object.qrInviteSince)
        ? Number(object.qrInviteSince)
        : 0,
      qrSpliceInviteSince: isSet(object.qrSpliceInviteSince)
        ? Number(object.qrSpliceInviteSince)
        : 0,
      sessionDetailsSince: isSet(object.sessionDetailsSince)
        ? Number(object.sessionDetailsSince)
        : 0
    }
  },

  toJSON(message: AuthorizeSocket): unknown {
    const obj: any = {}
    message.userProfileSince !== undefined &&
      (obj.userProfileSince = Math.round(message.userProfileSince))
    message.attributeStateSince !== undefined &&
      (obj.attributeStateSince = Math.round(message.attributeStateSince))
    message.contactStateSince !== undefined &&
      (obj.contactStateSince = Math.round(message.contactStateSince))
    message.spliceStateSince !== undefined &&
      (obj.spliceStateSince = Math.round(message.spliceStateSince))
    message.inviteStateSince !== undefined &&
      (obj.inviteStateSince = Math.round(message.inviteStateSince))
    message.pendingStateSince !== undefined &&
      (obj.pendingStateSince = Math.round(message.pendingStateSince))
    message.qrInviteSince !== undefined &&
      (obj.qrInviteSince = Math.round(message.qrInviteSince))
    message.qrSpliceInviteSince !== undefined &&
      (obj.qrSpliceInviteSince = Math.round(message.qrSpliceInviteSince))
    message.sessionDetailsSince !== undefined &&
      (obj.sessionDetailsSince = Math.round(message.sessionDetailsSince))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AuthorizeSocket>, I>>(
    object: I
  ): AuthorizeSocket {
    const message = createBaseAuthorizeSocket()
    message.userProfileSince = object.userProfileSince ?? 0
    message.attributeStateSince = object.attributeStateSince ?? 0
    message.contactStateSince = object.contactStateSince ?? 0
    message.spliceStateSince = object.spliceStateSince ?? 0
    message.inviteStateSince = object.inviteStateSince ?? 0
    message.pendingStateSince = object.pendingStateSince ?? 0
    message.qrInviteSince = object.qrInviteSince ?? 0
    message.qrSpliceInviteSince = object.qrSpliceInviteSince ?? 0
    message.sessionDetailsSince = object.sessionDetailsSince ?? 0
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
