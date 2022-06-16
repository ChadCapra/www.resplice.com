/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface Splice {
  id: number
  name: string
  description: string
  /** true = current user is moderator */
  isEditable: boolean
  /** true = any invite from member (splice or splice) is auto accepted */
  autoAcceptInvites: boolean
  isFavored: boolean
  isMuted: boolean
  isArchived: boolean
  joinedOn: number
}

function createBaseSplice(): Splice {
  return {
    id: 0,
    name: '',
    description: '',
    isEditable: false,
    autoAcceptInvites: false,
    isFavored: false,
    isMuted: false,
    isArchived: false,
    joinedOn: 0
  }
}

export const Splice = {
  encode(
    message: Splice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description)
    }
    if (message.isEditable === true) {
      writer.uint32(32).bool(message.isEditable)
    }
    if (message.autoAcceptInvites === true) {
      writer.uint32(40).bool(message.autoAcceptInvites)
    }
    if (message.isFavored === true) {
      writer.uint32(48).bool(message.isFavored)
    }
    if (message.isMuted === true) {
      writer.uint32(56).bool(message.isMuted)
    }
    if (message.isArchived === true) {
      writer.uint32(64).bool(message.isArchived)
    }
    if (message.joinedOn !== 0) {
      writer.uint32(72).uint32(message.joinedOn)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Splice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSplice()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.description = reader.string()
          break
        case 4:
          message.isEditable = reader.bool()
          break
        case 5:
          message.autoAcceptInvites = reader.bool()
          break
        case 6:
          message.isFavored = reader.bool()
          break
        case 7:
          message.isMuted = reader.bool()
          break
        case 8:
          message.isArchived = reader.bool()
          break
        case 9:
          message.joinedOn = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Splice {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      description: isSet(object.description) ? String(object.description) : '',
      isEditable: isSet(object.isEditable) ? Boolean(object.isEditable) : false,
      autoAcceptInvites: isSet(object.autoAcceptInvites)
        ? Boolean(object.autoAcceptInvites)
        : false,
      isFavored: isSet(object.isFavored) ? Boolean(object.isFavored) : false,
      isMuted: isSet(object.isMuted) ? Boolean(object.isMuted) : false,
      isArchived: isSet(object.isArchived) ? Boolean(object.isArchived) : false,
      joinedOn: isSet(object.joinedOn) ? Number(object.joinedOn) : 0
    }
  },

  toJSON(message: Splice): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.isEditable !== undefined && (obj.isEditable = message.isEditable)
    message.autoAcceptInvites !== undefined &&
      (obj.autoAcceptInvites = message.autoAcceptInvites)
    message.isFavored !== undefined && (obj.isFavored = message.isFavored)
    message.isMuted !== undefined && (obj.isMuted = message.isMuted)
    message.isArchived !== undefined && (obj.isArchived = message.isArchived)
    message.joinedOn !== undefined &&
      (obj.joinedOn = Math.round(message.joinedOn))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Splice>, I>>(object: I): Splice {
    const message = createBaseSplice()
    message.id = object.id ?? 0
    message.name = object.name ?? ''
    message.description = object.description ?? ''
    message.isEditable = object.isEditable ?? false
    message.autoAcceptInvites = object.autoAcceptInvites ?? false
    message.isFavored = object.isFavored ?? false
    message.isMuted = object.isMuted ?? false
    message.isArchived = object.isArchived ?? false
    message.joinedOn = object.joinedOn ?? 0
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
