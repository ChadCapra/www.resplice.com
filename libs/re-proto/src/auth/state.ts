/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Session } from '../auth/session'
import { Profile } from '../user/profile'

export interface State {
  currentSession: Session | undefined
  currentUser: Profile | undefined
  otherSessions: Session[]
  expiredSessionIds: number[]
}

function createBaseState(): State {
  return {
    currentSession: undefined,
    currentUser: undefined,
    otherSessions: [],
    expiredSessionIds: []
  }
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentSession !== undefined) {
      Session.encode(message.currentSession, writer.uint32(10).fork()).ldelim()
    }
    if (message.currentUser !== undefined) {
      Profile.encode(message.currentUser, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.otherSessions) {
      Session.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    writer.uint32(34).fork()
    for (const v of message.expiredSessionIds) {
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
          message.currentSession = Session.decode(reader, reader.uint32())
          break
        case 2:
          message.currentUser = Profile.decode(reader, reader.uint32())
          break
        case 3:
          message.otherSessions.push(Session.decode(reader, reader.uint32()))
          break
        case 4:
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

  fromJSON(object: any): State {
    return {
      currentSession: isSet(object.currentSession)
        ? Session.fromJSON(object.currentSession)
        : undefined,
      currentUser: isSet(object.currentUser)
        ? Profile.fromJSON(object.currentUser)
        : undefined,
      otherSessions: Array.isArray(object?.otherSessions)
        ? object.otherSessions.map((e: any) => Session.fromJSON(e))
        : [],
      expiredSessionIds: Array.isArray(object?.expiredSessionIds)
        ? object.expiredSessionIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: State): unknown {
    const obj: any = {}
    message.currentSession !== undefined &&
      (obj.currentSession = message.currentSession
        ? Session.toJSON(message.currentSession)
        : undefined)
    message.currentUser !== undefined &&
      (obj.currentUser = message.currentUser
        ? Profile.toJSON(message.currentUser)
        : undefined)
    if (message.otherSessions) {
      obj.otherSessions = message.otherSessions.map((e) =>
        e ? Session.toJSON(e) : undefined
      )
    } else {
      obj.otherSessions = []
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

  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState()
    message.currentSession =
      object.currentSession !== undefined && object.currentSession !== null
        ? Session.fromPartial(object.currentSession)
        : undefined
    message.currentUser =
      object.currentUser !== undefined && object.currentUser !== null
        ? Profile.fromPartial(object.currentUser)
        : undefined
    message.otherSessions =
      object.otherSessions?.map((e) => Session.fromPartial(e)) || []
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
