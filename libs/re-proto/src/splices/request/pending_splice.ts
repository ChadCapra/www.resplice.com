/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface Accept {
  pendingSpliceId: number
  attributeIds: number[]
}

export interface Decline {
  pendingSpliceId: number
}

function createBaseAccept(): Accept {
  return { pendingSpliceId: 0, attributeIds: [] }
}

export const Accept = {
  encode(
    message: Accept,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pendingSpliceId !== 0) {
      writer.uint32(8).uint32(message.pendingSpliceId)
    }
    writer.uint32(18).fork()
    for (const v of message.attributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Accept {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAccept()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pendingSpliceId = reader.uint32()
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.attributeIds.push(reader.uint32())
            }
          } else {
            message.attributeIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Accept {
    return {
      pendingSpliceId: isSet(object.pendingSpliceId)
        ? Number(object.pendingSpliceId)
        : 0,
      attributeIds: Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: Accept): unknown {
    const obj: any = {}
    message.pendingSpliceId !== undefined &&
      (obj.pendingSpliceId = Math.round(message.pendingSpliceId))
    if (message.attributeIds) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e))
    } else {
      obj.attributeIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Accept>, I>>(object: I): Accept {
    const message = createBaseAccept()
    message.pendingSpliceId = object.pendingSpliceId ?? 0
    message.attributeIds = object.attributeIds?.map((e) => e) || []
    return message
  }
}

function createBaseDecline(): Decline {
  return { pendingSpliceId: 0 }
}

export const Decline = {
  encode(
    message: Decline,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pendingSpliceId !== 0) {
      writer.uint32(8).uint32(message.pendingSpliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDecline()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pendingSpliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Decline {
    return {
      pendingSpliceId: isSet(object.pendingSpliceId)
        ? Number(object.pendingSpliceId)
        : 0
    }
  },

  toJSON(message: Decline): unknown {
    const obj: any = {}
    message.pendingSpliceId !== undefined &&
      (obj.pendingSpliceId = Math.round(message.pendingSpliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Decline>, I>>(object: I): Decline {
    const message = createBaseDecline()
    message.pendingSpliceId = object.pendingSpliceId ?? 0
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
