/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Splice } from '../splices/splice'
import { SpliceMember } from '../splices/splice_member'
import { SpliceShare } from '../splices/splice_share'

export interface SpliceState {
  splices: Splice[]
  expiredSpliceIds: number[]
  spliceMembers: SpliceMember[]
  expiredMemberIds: number[]
  spliceShares: SpliceShare[]
  expiredShareIds: number[]
}

function createBaseSpliceState(): SpliceState {
  return {
    splices: [],
    expiredSpliceIds: [],
    spliceMembers: [],
    expiredMemberIds: [],
    spliceShares: [],
    expiredShareIds: []
  }
}

export const SpliceState = {
  encode(
    message: SpliceState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.splices) {
      Splice.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredSpliceIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.spliceMembers) {
      SpliceMember.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    writer.uint32(34).fork()
    for (const v of message.expiredMemberIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.spliceShares) {
      SpliceShare.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    writer.uint32(50).fork()
    for (const v of message.expiredShareIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpliceState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSpliceState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.splices.push(Splice.decode(reader, reader.uint32()))
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredSpliceIds.push(reader.uint32())
            }
          } else {
            message.expiredSpliceIds.push(reader.uint32())
          }
          break
        case 3:
          message.spliceMembers.push(
            SpliceMember.decode(reader, reader.uint32())
          )
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredMemberIds.push(reader.uint32())
            }
          } else {
            message.expiredMemberIds.push(reader.uint32())
          }
          break
        case 5:
          message.spliceShares.push(SpliceShare.decode(reader, reader.uint32()))
          break
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredShareIds.push(reader.uint32())
            }
          } else {
            message.expiredShareIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SpliceState {
    return {
      splices: Array.isArray(object?.splices)
        ? object.splices.map((e: any) => Splice.fromJSON(e))
        : [],
      expiredSpliceIds: Array.isArray(object?.expiredSpliceIds)
        ? object.expiredSpliceIds.map((e: any) => Number(e))
        : [],
      spliceMembers: Array.isArray(object?.spliceMembers)
        ? object.spliceMembers.map((e: any) => SpliceMember.fromJSON(e))
        : [],
      expiredMemberIds: Array.isArray(object?.expiredMemberIds)
        ? object.expiredMemberIds.map((e: any) => Number(e))
        : [],
      spliceShares: Array.isArray(object?.spliceShares)
        ? object.spliceShares.map((e: any) => SpliceShare.fromJSON(e))
        : [],
      expiredShareIds: Array.isArray(object?.expiredShareIds)
        ? object.expiredShareIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: SpliceState): unknown {
    const obj: any = {}
    if (message.splices) {
      obj.splices = message.splices.map((e) =>
        e ? Splice.toJSON(e) : undefined
      )
    } else {
      obj.splices = []
    }
    if (message.expiredSpliceIds) {
      obj.expiredSpliceIds = message.expiredSpliceIds.map((e) => Math.round(e))
    } else {
      obj.expiredSpliceIds = []
    }
    if (message.spliceMembers) {
      obj.spliceMembers = message.spliceMembers.map((e) =>
        e ? SpliceMember.toJSON(e) : undefined
      )
    } else {
      obj.spliceMembers = []
    }
    if (message.expiredMemberIds) {
      obj.expiredMemberIds = message.expiredMemberIds.map((e) => Math.round(e))
    } else {
      obj.expiredMemberIds = []
    }
    if (message.spliceShares) {
      obj.spliceShares = message.spliceShares.map((e) =>
        e ? SpliceShare.toJSON(e) : undefined
      )
    } else {
      obj.spliceShares = []
    }
    if (message.expiredShareIds) {
      obj.expiredShareIds = message.expiredShareIds.map((e) => Math.round(e))
    } else {
      obj.expiredShareIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SpliceState>, I>>(
    object: I
  ): SpliceState {
    const message = createBaseSpliceState()
    message.splices = object.splices?.map((e) => Splice.fromPartial(e)) || []
    message.expiredSpliceIds = object.expiredSpliceIds?.map((e) => e) || []
    message.spliceMembers =
      object.spliceMembers?.map((e) => SpliceMember.fromPartial(e)) || []
    message.expiredMemberIds = object.expiredMemberIds?.map((e) => e) || []
    message.spliceShares =
      object.spliceShares?.map((e) => SpliceShare.fromPartial(e)) || []
    message.expiredShareIds = object.expiredShareIds?.map((e) => e) || []
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
