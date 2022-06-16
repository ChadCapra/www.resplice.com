/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Invite } from '../invites/invite'
import { InviteAttribute } from '../invites/invite_attribute'
import { SpliceInvite } from '../invites/splice_invite'

export interface State {
  invites: Invite[]
  expiredInviteIds: number[]
  inviteAttributes: InviteAttribute[]
  expiredInviteAttributeIds: number[]
  spliceInvites: SpliceInvite[]
  expiredSpliceInviteIds: number[]
}

function createBaseState(): State {
  return {
    invites: [],
    expiredInviteIds: [],
    inviteAttributes: [],
    expiredInviteAttributeIds: [],
    spliceInvites: [],
    expiredSpliceInviteIds: []
  }
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.invites) {
      Invite.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredInviteIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.inviteAttributes) {
      InviteAttribute.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    writer.uint32(34).fork()
    for (const v of message.expiredInviteAttributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.spliceInvites) {
      SpliceInvite.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    writer.uint32(50).fork()
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
          message.invites.push(Invite.decode(reader, reader.uint32()))
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredInviteIds.push(reader.uint32())
            }
          } else {
            message.expiredInviteIds.push(reader.uint32())
          }
          break
        case 3:
          message.inviteAttributes.push(
            InviteAttribute.decode(reader, reader.uint32())
          )
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredInviteAttributeIds.push(reader.uint32())
            }
          } else {
            message.expiredInviteAttributeIds.push(reader.uint32())
          }
          break
        case 5:
          message.spliceInvites.push(
            SpliceInvite.decode(reader, reader.uint32())
          )
          break
        case 6:
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
      invites: Array.isArray(object?.invites)
        ? object.invites.map((e: any) => Invite.fromJSON(e))
        : [],
      expiredInviteIds: Array.isArray(object?.expiredInviteIds)
        ? object.expiredInviteIds.map((e: any) => Number(e))
        : [],
      inviteAttributes: Array.isArray(object?.inviteAttributes)
        ? object.inviteAttributes.map((e: any) => InviteAttribute.fromJSON(e))
        : [],
      expiredInviteAttributeIds: Array.isArray(
        object?.expiredInviteAttributeIds
      )
        ? object.expiredInviteAttributeIds.map((e: any) => Number(e))
        : [],
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
    if (message.invites) {
      obj.invites = message.invites.map((e) =>
        e ? Invite.toJSON(e) : undefined
      )
    } else {
      obj.invites = []
    }
    if (message.expiredInviteIds) {
      obj.expiredInviteIds = message.expiredInviteIds.map((e) => Math.round(e))
    } else {
      obj.expiredInviteIds = []
    }
    if (message.inviteAttributes) {
      obj.inviteAttributes = message.inviteAttributes.map((e) =>
        e ? InviteAttribute.toJSON(e) : undefined
      )
    } else {
      obj.inviteAttributes = []
    }
    if (message.expiredInviteAttributeIds) {
      obj.expiredInviteAttributeIds = message.expiredInviteAttributeIds.map(
        (e) => Math.round(e)
      )
    } else {
      obj.expiredInviteAttributeIds = []
    }
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
    message.invites = object.invites?.map((e) => Invite.fromPartial(e)) || []
    message.expiredInviteIds = object.expiredInviteIds?.map((e) => e) || []
    message.inviteAttributes =
      object.inviteAttributes?.map((e) => InviteAttribute.fromPartial(e)) || []
    message.expiredInviteAttributeIds =
      object.expiredInviteAttributeIds?.map((e) => e) || []
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
