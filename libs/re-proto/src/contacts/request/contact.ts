/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface EditAlias {
  contactId: number
  alias: string
}

export interface EditDescription {
  contactId: number
  description: string
}

export interface Favor {
  contactId: number
}

export interface Unfavor {
  contactId: number
}

export interface Mute {
  contactId: number
}

export interface Unmute {
  contactId: number
}

export interface Archive {
  contactId: number
}

export interface Unarchive {
  contactId: number
}

export interface Delete {
  contactId: number
}

function createBaseEditAlias(): EditAlias {
  return { contactId: 0, alias: '' }
}

export const EditAlias = {
  encode(
    message: EditAlias,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    if (message.alias !== '') {
      writer.uint32(18).string(message.alias)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditAlias {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditAlias()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        case 2:
          message.alias = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EditAlias {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      alias: isSet(object.alias) ? String(object.alias) : ''
    }
  },

  toJSON(message: EditAlias): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.alias !== undefined && (obj.alias = message.alias)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditAlias>, I>>(
    object: I
  ): EditAlias {
    const message = createBaseEditAlias()
    message.contactId = object.contactId ?? 0
    message.alias = object.alias ?? ''
    return message
  }
}

function createBaseEditDescription(): EditDescription {
  return { contactId: 0, description: '' }
}

export const EditDescription = {
  encode(
    message: EditDescription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditDescription()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        case 2:
          message.description = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EditDescription {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      description: isSet(object.description) ? String(object.description) : ''
    }
  },

  toJSON(message: EditDescription): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.description !== undefined && (obj.description = message.description)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditDescription>, I>>(
    object: I
  ): EditDescription {
    const message = createBaseEditDescription()
    message.contactId = object.contactId ?? 0
    message.description = object.description ?? ''
    return message
  }
}

function createBaseFavor(): Favor {
  return { contactId: 0 }
}

export const Favor = {
  encode(message: Favor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Favor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseFavor()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Favor {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: Favor): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Favor>, I>>(object: I): Favor {
    const message = createBaseFavor()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseUnfavor(): Unfavor {
  return { contactId: 0 }
}

export const Unfavor = {
  encode(
    message: Unfavor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unfavor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUnfavor()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Unfavor {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: Unfavor): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Unfavor>, I>>(object: I): Unfavor {
    const message = createBaseUnfavor()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseMute(): Mute {
  return { contactId: 0 }
}

export const Mute = {
  encode(message: Mute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Mute {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: Mute): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Mute>, I>>(object: I): Mute {
    const message = createBaseMute()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseUnmute(): Unmute {
  return { contactId: 0 }
}

export const Unmute = {
  encode(
    message: Unmute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unmute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUnmute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Unmute {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: Unmute): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Unmute>, I>>(object: I): Unmute {
    const message = createBaseUnmute()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseArchive(): Archive {
  return { contactId: 0 }
}

export const Archive = {
  encode(
    message: Archive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Archive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseArchive()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Archive {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: Archive): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Archive>, I>>(object: I): Archive {
    const message = createBaseArchive()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseUnarchive(): Unarchive {
  return { contactId: 0 }
}

export const Unarchive = {
  encode(
    message: Unarchive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unarchive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUnarchive()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Unarchive {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: Unarchive): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Unarchive>, I>>(
    object: I
  ): Unarchive {
    const message = createBaseUnarchive()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseDelete(): Delete {
  return { contactId: 0 }
}

export const Delete = {
  encode(
    message: Delete,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
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
          message.contactId = reader.uint32()
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
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: Delete): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Delete>, I>>(object: I): Delete {
    const message = createBaseDelete()
    message.contactId = object.contactId ?? 0
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
