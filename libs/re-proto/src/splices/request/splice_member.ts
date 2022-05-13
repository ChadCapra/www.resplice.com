/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface Add {
  spliceId: number
  contactId: number
}

export interface Remove {
  spliceMemberId: number
}

export interface EnableModerator {
  spliceMemberId: number
}

export interface DisableModerator {
  spliceMemberId: number
}

function createBaseAdd(): Add {
  return { spliceId: 0, contactId: 0 }
}

export const Add = {
  encode(message: Add, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    if (message.contactId !== 0) {
      writer.uint32(16).uint32(message.contactId)
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
          message.spliceId = reader.uint32()
          break
        case 2:
          message.contactId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: Add): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Add>, I>>(object: I): Add {
    const message = createBaseAdd()
    message.spliceId = object.spliceId ?? 0
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseRemove(): Remove {
  return { spliceMemberId: 0 }
}

export const Remove = {
  encode(
    message: Remove,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceMemberId !== 0) {
      writer.uint32(8).uint32(message.spliceMemberId)
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
          message.spliceMemberId = reader.uint32()
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
      spliceMemberId: isSet(object.spliceMemberId)
        ? Number(object.spliceMemberId)
        : 0
    }
  },

  toJSON(message: Remove): unknown {
    const obj: any = {}
    message.spliceMemberId !== undefined &&
      (obj.spliceMemberId = Math.round(message.spliceMemberId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Remove>, I>>(object: I): Remove {
    const message = createBaseRemove()
    message.spliceMemberId = object.spliceMemberId ?? 0
    return message
  }
}

function createBaseEnableModerator(): EnableModerator {
  return { spliceMemberId: 0 }
}

export const EnableModerator = {
  encode(
    message: EnableModerator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceMemberId !== 0) {
      writer.uint32(8).uint32(message.spliceMemberId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableModerator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEnableModerator()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceMemberId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EnableModerator {
    return {
      spliceMemberId: isSet(object.spliceMemberId)
        ? Number(object.spliceMemberId)
        : 0
    }
  },

  toJSON(message: EnableModerator): unknown {
    const obj: any = {}
    message.spliceMemberId !== undefined &&
      (obj.spliceMemberId = Math.round(message.spliceMemberId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EnableModerator>, I>>(
    object: I
  ): EnableModerator {
    const message = createBaseEnableModerator()
    message.spliceMemberId = object.spliceMemberId ?? 0
    return message
  }
}

function createBaseDisableModerator(): DisableModerator {
  return { spliceMemberId: 0 }
}

export const DisableModerator = {
  encode(
    message: DisableModerator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceMemberId !== 0) {
      writer.uint32(8).uint32(message.spliceMemberId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisableModerator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDisableModerator()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceMemberId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DisableModerator {
    return {
      spliceMemberId: isSet(object.spliceMemberId)
        ? Number(object.spliceMemberId)
        : 0
    }
  },

  toJSON(message: DisableModerator): unknown {
    const obj: any = {}
    message.spliceMemberId !== undefined &&
      (obj.spliceMemberId = Math.round(message.spliceMemberId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DisableModerator>, I>>(
    object: I
  ): DisableModerator {
    const message = createBaseDisableModerator()
    message.spliceMemberId = object.spliceMemberId ?? 0
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
