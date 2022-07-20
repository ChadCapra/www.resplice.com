/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Session } from './auth/session'
import { Profile } from './user/profile'
import { State } from './attributes/state'
import { State as State1 } from './contacts/state'
import { State as State2 } from './splices/state'
import { State as State3 } from './invites/state'
import { SessionDetails } from './auth/session_detail'

export enum ServerMessageType {
  SERVER_STATE = 0,
  CURRENT_SESSION = 1,
  USER_PROFILE = 2,
  ATTRIBUTE_STATE = 3,
  CONTACT_STATE = 4,
  SPLICE_STATE = 5,
  INVITE_STATE = 6,
  SESSION_DETAILS = 7,
  QR_INVITE = 8,
  QR_SPLICE_INVITE = 9,
  ERROR = 127,
  UNRECOGNIZED = -1
}

export function serverMessageTypeFromJSON(object: any): ServerMessageType {
  switch (object) {
    case 0:
    case 'SERVER_STATE':
      return ServerMessageType.SERVER_STATE
    case 1:
    case 'CURRENT_SESSION':
      return ServerMessageType.CURRENT_SESSION
    case 2:
    case 'USER_PROFILE':
      return ServerMessageType.USER_PROFILE
    case 3:
    case 'ATTRIBUTE_STATE':
      return ServerMessageType.ATTRIBUTE_STATE
    case 4:
    case 'CONTACT_STATE':
      return ServerMessageType.CONTACT_STATE
    case 5:
    case 'SPLICE_STATE':
      return ServerMessageType.SPLICE_STATE
    case 6:
    case 'INVITE_STATE':
      return ServerMessageType.INVITE_STATE
    case 7:
    case 'SESSION_DETAILS':
      return ServerMessageType.SESSION_DETAILS
    case 8:
    case 'QR_INVITE':
      return ServerMessageType.QR_INVITE
    case 9:
    case 'QR_SPLICE_INVITE':
      return ServerMessageType.QR_SPLICE_INVITE
    case 127:
    case 'ERROR':
      return ServerMessageType.ERROR
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ServerMessageType.UNRECOGNIZED
  }
}

export function serverMessageTypeToJSON(object: ServerMessageType): string {
  switch (object) {
    case ServerMessageType.SERVER_STATE:
      return 'SERVER_STATE'
    case ServerMessageType.CURRENT_SESSION:
      return 'CURRENT_SESSION'
    case ServerMessageType.USER_PROFILE:
      return 'USER_PROFILE'
    case ServerMessageType.ATTRIBUTE_STATE:
      return 'ATTRIBUTE_STATE'
    case ServerMessageType.CONTACT_STATE:
      return 'CONTACT_STATE'
    case ServerMessageType.SPLICE_STATE:
      return 'SPLICE_STATE'
    case ServerMessageType.INVITE_STATE:
      return 'INVITE_STATE'
    case ServerMessageType.SESSION_DETAILS:
      return 'SESSION_DETAILS'
    case ServerMessageType.QR_INVITE:
      return 'QR_INVITE'
    case ServerMessageType.QR_SPLICE_INVITE:
      return 'QR_SPLICE_INVITE'
    case ServerMessageType.ERROR:
      return 'ERROR'
    default:
      return 'UNKNOWN'
  }
}

export interface ServerMessage {
  messageType: ServerMessageType
  /** used to clear expired entities on client side */
  serverTime: number
  encodedPayload: Uint8Array
}

export interface ServerState {
  currentSession: Session | undefined
  userProfile: Profile | undefined
  attributeState: State | undefined
  contactState: State1 | undefined
  spliceState: State2 | undefined
  inviteState: State3 | undefined
  sessionDetails: SessionDetails | undefined
}

function createBaseServerMessage(): ServerMessage {
  return { messageType: 0, serverTime: 0, encodedPayload: new Uint8Array() }
}

export const ServerMessage = {
  encode(
    message: ServerMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType)
    }
    if (message.serverTime !== 0) {
      writer.uint32(16).uint32(message.serverTime)
    }
    if (message.encodedPayload.length !== 0) {
      writer.uint32(26).bytes(message.encodedPayload)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseServerMessage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.messageType = reader.int32() as any
          break
        case 2:
          message.serverTime = reader.uint32()
          break
        case 3:
          message.encodedPayload = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ServerMessage {
    return {
      messageType: isSet(object.messageType)
        ? serverMessageTypeFromJSON(object.messageType)
        : 0,
      serverTime: isSet(object.serverTime) ? Number(object.serverTime) : 0,
      encodedPayload: isSet(object.encodedPayload)
        ? bytesFromBase64(object.encodedPayload)
        : new Uint8Array()
    }
  },

  toJSON(message: ServerMessage): unknown {
    const obj: any = {}
    message.messageType !== undefined &&
      (obj.messageType = serverMessageTypeToJSON(message.messageType))
    message.serverTime !== undefined &&
      (obj.serverTime = Math.round(message.serverTime))
    message.encodedPayload !== undefined &&
      (obj.encodedPayload = base64FromBytes(
        message.encodedPayload !== undefined
          ? message.encodedPayload
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ServerMessage>, I>>(
    object: I
  ): ServerMessage {
    const message = createBaseServerMessage()
    message.messageType = object.messageType ?? 0
    message.serverTime = object.serverTime ?? 0
    message.encodedPayload = object.encodedPayload ?? new Uint8Array()
    return message
  }
}

function createBaseServerState(): ServerState {
  return {
    currentSession: undefined,
    userProfile: undefined,
    attributeState: undefined,
    contactState: undefined,
    spliceState: undefined,
    inviteState: undefined,
    sessionDetails: undefined
  }
}

export const ServerState = {
  encode(
    message: ServerState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.currentSession !== undefined) {
      Session.encode(message.currentSession, writer.uint32(10).fork()).ldelim()
    }
    if (message.userProfile !== undefined) {
      Profile.encode(message.userProfile, writer.uint32(18).fork()).ldelim()
    }
    if (message.attributeState !== undefined) {
      State.encode(message.attributeState, writer.uint32(26).fork()).ldelim()
    }
    if (message.contactState !== undefined) {
      State1.encode(message.contactState, writer.uint32(34).fork()).ldelim()
    }
    if (message.spliceState !== undefined) {
      State2.encode(message.spliceState, writer.uint32(42).fork()).ldelim()
    }
    if (message.inviteState !== undefined) {
      State3.encode(message.inviteState, writer.uint32(50).fork()).ldelim()
    }
    if (message.sessionDetails !== undefined) {
      SessionDetails.encode(
        message.sessionDetails,
        writer.uint32(58).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseServerState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.currentSession = Session.decode(reader, reader.uint32())
          break
        case 2:
          message.userProfile = Profile.decode(reader, reader.uint32())
          break
        case 3:
          message.attributeState = State.decode(reader, reader.uint32())
          break
        case 4:
          message.contactState = State1.decode(reader, reader.uint32())
          break
        case 5:
          message.spliceState = State2.decode(reader, reader.uint32())
          break
        case 6:
          message.inviteState = State3.decode(reader, reader.uint32())
          break
        case 7:
          message.sessionDetails = SessionDetails.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ServerState {
    return {
      currentSession: isSet(object.currentSession)
        ? Session.fromJSON(object.currentSession)
        : undefined,
      userProfile: isSet(object.userProfile)
        ? Profile.fromJSON(object.userProfile)
        : undefined,
      attributeState: isSet(object.attributeState)
        ? State.fromJSON(object.attributeState)
        : undefined,
      contactState: isSet(object.contactState)
        ? State1.fromJSON(object.contactState)
        : undefined,
      spliceState: isSet(object.spliceState)
        ? State2.fromJSON(object.spliceState)
        : undefined,
      inviteState: isSet(object.inviteState)
        ? State3.fromJSON(object.inviteState)
        : undefined,
      sessionDetails: isSet(object.sessionDetails)
        ? SessionDetails.fromJSON(object.sessionDetails)
        : undefined
    }
  },

  toJSON(message: ServerState): unknown {
    const obj: any = {}
    message.currentSession !== undefined &&
      (obj.currentSession = message.currentSession
        ? Session.toJSON(message.currentSession)
        : undefined)
    message.userProfile !== undefined &&
      (obj.userProfile = message.userProfile
        ? Profile.toJSON(message.userProfile)
        : undefined)
    message.attributeState !== undefined &&
      (obj.attributeState = message.attributeState
        ? State.toJSON(message.attributeState)
        : undefined)
    message.contactState !== undefined &&
      (obj.contactState = message.contactState
        ? State1.toJSON(message.contactState)
        : undefined)
    message.spliceState !== undefined &&
      (obj.spliceState = message.spliceState
        ? State2.toJSON(message.spliceState)
        : undefined)
    message.inviteState !== undefined &&
      (obj.inviteState = message.inviteState
        ? State3.toJSON(message.inviteState)
        : undefined)
    message.sessionDetails !== undefined &&
      (obj.sessionDetails = message.sessionDetails
        ? SessionDetails.toJSON(message.sessionDetails)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ServerState>, I>>(
    object: I
  ): ServerState {
    const message = createBaseServerState()
    message.currentSession =
      object.currentSession !== undefined && object.currentSession !== null
        ? Session.fromPartial(object.currentSession)
        : undefined
    message.userProfile =
      object.userProfile !== undefined && object.userProfile !== null
        ? Profile.fromPartial(object.userProfile)
        : undefined
    message.attributeState =
      object.attributeState !== undefined && object.attributeState !== null
        ? State.fromPartial(object.attributeState)
        : undefined
    message.contactState =
      object.contactState !== undefined && object.contactState !== null
        ? State1.fromPartial(object.contactState)
        : undefined
    message.spliceState =
      object.spliceState !== undefined && object.spliceState !== null
        ? State2.fromPartial(object.spliceState)
        : undefined
    message.inviteState =
      object.inviteState !== undefined && object.inviteState !== null
        ? State3.fromPartial(object.inviteState)
        : undefined
    message.sessionDetails =
      object.sessionDetails !== undefined && object.sessionDetails !== null
        ? SessionDetails.fromPartial(object.sessionDetails)
        : undefined
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
