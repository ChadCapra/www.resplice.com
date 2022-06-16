/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface Contact {
  id: number
  name: string
  avatarUrl: string
  alias: string
  description: string
  isFavored: boolean
  isMuted: boolean
  isArchived: boolean
  connectedAt: number
}

function createBaseContact(): Contact {
  return {
    id: 0,
    name: '',
    avatarUrl: '',
    alias: '',
    description: '',
    isFavored: false,
    isMuted: false,
    isArchived: false,
    connectedAt: 0
  }
}

export const Contact = {
  encode(
    message: Contact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.avatarUrl !== '') {
      writer.uint32(26).string(message.avatarUrl)
    }
    if (message.alias !== '') {
      writer.uint32(34).string(message.alias)
    }
    if (message.description !== '') {
      writer.uint32(42).string(message.description)
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
    if (message.connectedAt !== 0) {
      writer.uint32(72).uint32(message.connectedAt)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseContact()
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
          message.avatarUrl = reader.string()
          break
        case 4:
          message.alias = reader.string()
          break
        case 5:
          message.description = reader.string()
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
          message.connectedAt = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Contact {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : '',
      alias: isSet(object.alias) ? String(object.alias) : '',
      description: isSet(object.description) ? String(object.description) : '',
      isFavored: isSet(object.isFavored) ? Boolean(object.isFavored) : false,
      isMuted: isSet(object.isMuted) ? Boolean(object.isMuted) : false,
      isArchived: isSet(object.isArchived) ? Boolean(object.isArchived) : false,
      connectedAt: isSet(object.connectedAt) ? Number(object.connectedAt) : 0
    }
  },

  toJSON(message: Contact): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.name !== undefined && (obj.name = message.name)
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl)
    message.alias !== undefined && (obj.alias = message.alias)
    message.description !== undefined && (obj.description = message.description)
    message.isFavored !== undefined && (obj.isFavored = message.isFavored)
    message.isMuted !== undefined && (obj.isMuted = message.isMuted)
    message.isArchived !== undefined && (obj.isArchived = message.isArchived)
    message.connectedAt !== undefined &&
      (obj.connectedAt = Math.round(message.connectedAt))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Contact>, I>>(object: I): Contact {
    const message = createBaseContact()
    message.id = object.id ?? 0
    message.name = object.name ?? ''
    message.avatarUrl = object.avatarUrl ?? ''
    message.alias = object.alias ?? ''
    message.description = object.description ?? ''
    message.isFavored = object.isFavored ?? false
    message.isMuted = object.isMuted ?? false
    message.isArchived = object.isArchived ?? false
    message.connectedAt = object.connectedAt ?? 0
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
