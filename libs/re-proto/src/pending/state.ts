/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { PendingContact } from '../pending/pending_contact'
import { PendingContactAttribute } from '../pending/pending_contact_attribute'
import { PendingSplice } from '../pending/pending_splice'

export interface State {
  pendingContacts: PendingContact[]
  expiredPendingContactIds: number[]
  pendingContactAttributes: PendingContactAttribute[]
  expiredPendingContactAttributeIds: number[]
  pendingSplices: PendingSplice[]
  expiredPendingSpliceIds: number[]
}

function createBaseState(): State {
  return {
    pendingContacts: [],
    expiredPendingContactIds: [],
    pendingContactAttributes: [],
    expiredPendingContactAttributeIds: [],
    pendingSplices: [],
    expiredPendingSpliceIds: []
  }
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingContacts) {
      PendingContact.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredPendingContactIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.pendingContactAttributes) {
      PendingContactAttribute.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    writer.uint32(34).fork()
    for (const v of message.expiredPendingContactAttributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.pendingSplices) {
      PendingSplice.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    writer.uint32(50).fork()
    for (const v of message.expiredPendingSpliceIds) {
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
          message.pendingContacts.push(
            PendingContact.decode(reader, reader.uint32())
          )
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredPendingContactIds.push(reader.uint32())
            }
          } else {
            message.expiredPendingContactIds.push(reader.uint32())
          }
          break
        case 3:
          message.pendingContactAttributes.push(
            PendingContactAttribute.decode(reader, reader.uint32())
          )
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredPendingContactAttributeIds.push(reader.uint32())
            }
          } else {
            message.expiredPendingContactAttributeIds.push(reader.uint32())
          }
          break
        case 5:
          message.pendingSplices.push(
            PendingSplice.decode(reader, reader.uint32())
          )
          break
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredPendingSpliceIds.push(reader.uint32())
            }
          } else {
            message.expiredPendingSpliceIds.push(reader.uint32())
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
      pendingContacts: Array.isArray(object?.pendingContacts)
        ? object.pendingContacts.map((e: any) => PendingContact.fromJSON(e))
        : [],
      expiredPendingContactIds: Array.isArray(object?.expiredPendingContactIds)
        ? object.expiredPendingContactIds.map((e: any) => Number(e))
        : [],
      pendingContactAttributes: Array.isArray(object?.pendingContactAttributes)
        ? object.pendingContactAttributes.map((e: any) =>
            PendingContactAttribute.fromJSON(e)
          )
        : [],
      expiredPendingContactAttributeIds: Array.isArray(
        object?.expiredPendingContactAttributeIds
      )
        ? object.expiredPendingContactAttributeIds.map((e: any) => Number(e))
        : [],
      pendingSplices: Array.isArray(object?.pendingSplices)
        ? object.pendingSplices.map((e: any) => PendingSplice.fromJSON(e))
        : [],
      expiredPendingSpliceIds: Array.isArray(object?.expiredPendingSpliceIds)
        ? object.expiredPendingSpliceIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: State): unknown {
    const obj: any = {}
    if (message.pendingContacts) {
      obj.pendingContacts = message.pendingContacts.map((e) =>
        e ? PendingContact.toJSON(e) : undefined
      )
    } else {
      obj.pendingContacts = []
    }
    if (message.expiredPendingContactIds) {
      obj.expiredPendingContactIds = message.expiredPendingContactIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredPendingContactIds = []
    }
    if (message.pendingContactAttributes) {
      obj.pendingContactAttributes = message.pendingContactAttributes.map((e) =>
        e ? PendingContactAttribute.toJSON(e) : undefined
      )
    } else {
      obj.pendingContactAttributes = []
    }
    if (message.expiredPendingContactAttributeIds) {
      obj.expiredPendingContactAttributeIds =
        message.expiredPendingContactAttributeIds.map((e) => Math.round(e))
    } else {
      obj.expiredPendingContactAttributeIds = []
    }
    if (message.pendingSplices) {
      obj.pendingSplices = message.pendingSplices.map((e) =>
        e ? PendingSplice.toJSON(e) : undefined
      )
    } else {
      obj.pendingSplices = []
    }
    if (message.expiredPendingSpliceIds) {
      obj.expiredPendingSpliceIds = message.expiredPendingSpliceIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredPendingSpliceIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState()
    message.pendingContacts =
      object.pendingContacts?.map((e) => PendingContact.fromPartial(e)) || []
    message.expiredPendingContactIds =
      object.expiredPendingContactIds?.map((e) => e) || []
    message.pendingContactAttributes =
      object.pendingContactAttributes?.map((e) =>
        PendingContactAttribute.fromPartial(e)
      ) || []
    message.expiredPendingContactAttributeIds =
      object.expiredPendingContactAttributeIds?.map((e) => e) || []
    message.pendingSplices =
      object.pendingSplices?.map((e) => PendingSplice.fromPartial(e)) || []
    message.expiredPendingSpliceIds =
      object.expiredPendingSpliceIds?.map((e) => e) || []
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
