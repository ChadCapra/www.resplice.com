/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface PendingSpliceMember {
  pendingSpliceId: number
  name: string
  avatar: string
}

function createBasePendingSpliceMember(): PendingSpliceMember {
  return { pendingSpliceId: 0, name: '', avatar: '' }
}

export const PendingSpliceMember = {
  encode(
    message: PendingSpliceMember,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pendingSpliceId !== 0) {
      writer.uint32(8).uint32(message.pendingSpliceId)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.avatar !== '') {
      writer.uint32(26).string(message.avatar)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingSpliceMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePendingSpliceMember()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pendingSpliceId = reader.uint32()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.avatar = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PendingSpliceMember {
    return {
      pendingSpliceId: isSet(object.pendingSpliceId)
        ? Number(object.pendingSpliceId)
        : 0,
      name: isSet(object.name) ? String(object.name) : '',
      avatar: isSet(object.avatar) ? String(object.avatar) : ''
    }
  },

  toJSON(message: PendingSpliceMember): unknown {
    const obj: any = {}
    message.pendingSpliceId !== undefined &&
      (obj.pendingSpliceId = Math.round(message.pendingSpliceId))
    message.name !== undefined && (obj.name = message.name)
    message.avatar !== undefined && (obj.avatar = message.avatar)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PendingSpliceMember>, I>>(
    object: I
  ): PendingSpliceMember {
    const message = createBasePendingSpliceMember()
    message.pendingSpliceId = object.pendingSpliceId ?? 0
    message.name = object.name ?? ''
    message.avatar = object.avatar ?? ''
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
