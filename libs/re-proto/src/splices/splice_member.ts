/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface SpliceMember {
  id: number
  spliceId: number
  /** 0=null = no direct connection */
  contactId: number
  name: string
  avatar: string
  isModerator: boolean
  joinedOn: number
}

function createBaseSpliceMember(): SpliceMember {
  return {
    id: 0,
    spliceId: 0,
    contactId: 0,
    name: '',
    avatar: '',
    isModerator: false,
    joinedOn: 0
  }
}

export const SpliceMember = {
  encode(
    message: SpliceMember,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.spliceId !== 0) {
      writer.uint32(16).uint32(message.spliceId)
    }
    if (message.contactId !== 0) {
      writer.uint32(24).uint32(message.contactId)
    }
    if (message.name !== '') {
      writer.uint32(34).string(message.name)
    }
    if (message.avatar !== '') {
      writer.uint32(42).string(message.avatar)
    }
    if (message.isModerator === true) {
      writer.uint32(48).bool(message.isModerator)
    }
    if (message.joinedOn !== 0) {
      writer.uint32(56).uint32(message.joinedOn)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpliceMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSpliceMember()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.spliceId = reader.uint32()
          break
        case 3:
          message.contactId = reader.uint32()
          break
        case 4:
          message.name = reader.string()
          break
        case 5:
          message.avatar = reader.string()
          break
        case 6:
          message.isModerator = reader.bool()
          break
        case 7:
          message.joinedOn = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SpliceMember {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      avatar: isSet(object.avatar) ? String(object.avatar) : '',
      isModerator: isSet(object.isModerator)
        ? Boolean(object.isModerator)
        : false,
      joinedOn: isSet(object.joinedOn) ? Number(object.joinedOn) : 0
    }
  },

  toJSON(message: SpliceMember): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.name !== undefined && (obj.name = message.name)
    message.avatar !== undefined && (obj.avatar = message.avatar)
    message.isModerator !== undefined && (obj.isModerator = message.isModerator)
    message.joinedOn !== undefined &&
      (obj.joinedOn = Math.round(message.joinedOn))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SpliceMember>, I>>(
    object: I
  ): SpliceMember {
    const message = createBaseSpliceMember()
    message.id = object.id ?? 0
    message.spliceId = object.spliceId ?? 0
    message.contactId = object.contactId ?? 0
    message.name = object.name ?? ''
    message.avatar = object.avatar ?? ''
    message.isModerator = object.isModerator ?? false
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
