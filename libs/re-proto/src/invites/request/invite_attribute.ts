/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface Add {
  inviteId: number
  attributeId: number
}

export interface Remove {
  inviteAttributeId: number
}

function createBaseAdd(): Add {
  return { inviteId: 0, attributeId: 0 }
}

export const Add = {
  encode(message: Add, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId)
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Add {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAdd()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.inviteId = reader.uint32()
          break
        case 2:
          message.attributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Add {
    return {
      inviteId: isSet(object.inviteId) ? Number(object.inviteId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: Add): unknown {
    const obj: any = {}
    message.inviteId !== undefined &&
      (obj.inviteId = Math.round(message.inviteId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Add>, I>>(object: I): Add {
    const message = createBaseAdd()
    message.inviteId = object.inviteId ?? 0
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseRemove(): Remove {
  return { inviteAttributeId: 0 }
}

export const Remove = {
  encode(
    message: Remove,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inviteAttributeId !== 0) {
      writer.uint32(8).uint32(message.inviteAttributeId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Remove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemove()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.inviteAttributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Remove {
    return {
      inviteAttributeId: isSet(object.inviteAttributeId)
        ? Number(object.inviteAttributeId)
        : 0
    }
  },

  toJSON(message: Remove): unknown {
    const obj: any = {}
    message.inviteAttributeId !== undefined &&
      (obj.inviteAttributeId = Math.round(message.inviteAttributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Remove>, I>>(object: I): Remove {
    const message = createBaseRemove()
    message.inviteAttributeId = object.inviteAttributeId ?? 0
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
