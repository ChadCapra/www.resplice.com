/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface Create {
  name: string
  description: string
  autoAcceptInvites: boolean
  memberIds: number[]
}

export interface EditName {
  name: string
}

export interface EditDescription {
  description: string
}

export interface EnableAutoAccept {
  spliceId: number
}

export interface DisableAutoAccept {
  spliceId: number
}

export interface Favor {
  spliceId: number
}

export interface Unfavor {
  spliceId: number
}

export interface Mute {
  spliceId: number
}

export interface Unmute {
  spliceId: number
}

export interface Archive {
  spliceId: number
}

export interface Unarchive {
  spliceId: number
}

export interface Leave {
  spliceId: number
}

function createBaseCreate(): Create {
  return { name: '', description: '', autoAcceptInvites: false, memberIds: [] }
}

export const Create = {
  encode(
    message: Create,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description)
    }
    if (message.autoAcceptInvites === true) {
      writer.uint32(24).bool(message.autoAcceptInvites)
    }
    writer.uint32(34).fork()
    for (const v of message.memberIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Create {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreate()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.description = reader.string()
          break
        case 3:
          message.autoAcceptInvites = reader.bool()
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.memberIds.push(reader.uint32())
            }
          } else {
            message.memberIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Create {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      description: isSet(object.description) ? String(object.description) : '',
      autoAcceptInvites: isSet(object.autoAcceptInvites)
        ? Boolean(object.autoAcceptInvites)
        : false,
      memberIds: Array.isArray(object?.memberIds)
        ? object.memberIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: Create): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.autoAcceptInvites !== undefined &&
      (obj.autoAcceptInvites = message.autoAcceptInvites)
    if (message.memberIds) {
      obj.memberIds = message.memberIds.map((e) => Math.round(e))
    } else {
      obj.memberIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Create>, I>>(object: I): Create {
    const message = createBaseCreate()
    message.name = object.name ?? ''
    message.description = object.description ?? ''
    message.autoAcceptInvites = object.autoAcceptInvites ?? false
    message.memberIds = object.memberIds?.map((e) => e) || []
    return message
  }
}

function createBaseEditName(): EditName {
  return { name: '' }
}

export const EditName = {
  encode(
    message: EditName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditName()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EditName {
    return {
      name: isSet(object.name) ? String(object.name) : ''
    }
  },

  toJSON(message: EditName): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditName>, I>>(object: I): EditName {
    const message = createBaseEditName()
    message.name = object.name ?? ''
    return message
  }
}

function createBaseEditDescription(): EditDescription {
  return { description: '' }
}

export const EditDescription = {
  encode(
    message: EditDescription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== '') {
      writer.uint32(10).string(message.description)
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
      description: isSet(object.description) ? String(object.description) : ''
    }
  },

  toJSON(message: EditDescription): unknown {
    const obj: any = {}
    message.description !== undefined && (obj.description = message.description)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditDescription>, I>>(
    object: I
  ): EditDescription {
    const message = createBaseEditDescription()
    message.description = object.description ?? ''
    return message
  }
}

function createBaseEnableAutoAccept(): EnableAutoAccept {
  return { spliceId: 0 }
}

export const EnableAutoAccept = {
  encode(
    message: EnableAutoAccept,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableAutoAccept {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEnableAutoAccept()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EnableAutoAccept {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: EnableAutoAccept): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EnableAutoAccept>, I>>(
    object: I
  ): EnableAutoAccept {
    const message = createBaseEnableAutoAccept()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseDisableAutoAccept(): DisableAutoAccept {
  return { spliceId: 0 }
}

export const DisableAutoAccept = {
  encode(
    message: DisableAutoAccept,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisableAutoAccept {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDisableAutoAccept()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DisableAutoAccept {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: DisableAutoAccept): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DisableAutoAccept>, I>>(
    object: I
  ): DisableAutoAccept {
    const message = createBaseDisableAutoAccept()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseFavor(): Favor {
  return { spliceId: 0 }
}

export const Favor = {
  encode(message: Favor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: Favor): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Favor>, I>>(object: I): Favor {
    const message = createBaseFavor()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseUnfavor(): Unfavor {
  return { spliceId: 0 }
}

export const Unfavor = {
  encode(
    message: Unfavor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: Unfavor): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Unfavor>, I>>(object: I): Unfavor {
    const message = createBaseUnfavor()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseMute(): Mute {
  return { spliceId: 0 }
}

export const Mute = {
  encode(message: Mute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: Mute): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Mute>, I>>(object: I): Mute {
    const message = createBaseMute()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseUnmute(): Unmute {
  return { spliceId: 0 }
}

export const Unmute = {
  encode(
    message: Unmute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: Unmute): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Unmute>, I>>(object: I): Unmute {
    const message = createBaseUnmute()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseArchive(): Archive {
  return { spliceId: 0 }
}

export const Archive = {
  encode(
    message: Archive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: Archive): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Archive>, I>>(object: I): Archive {
    const message = createBaseArchive()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseUnarchive(): Unarchive {
  return { spliceId: 0 }
}

export const Unarchive = {
  encode(
    message: Unarchive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: Unarchive): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Unarchive>, I>>(
    object: I
  ): Unarchive {
    const message = createBaseUnarchive()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseLeave(): Leave {
  return { spliceId: 0 }
}

export const Leave = {
  encode(message: Leave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Leave {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseLeave()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Leave {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: Leave): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Leave>, I>>(object: I): Leave {
    const message = createBaseLeave()
    message.spliceId = object.spliceId ?? 0
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
