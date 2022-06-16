/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface ContactShare {
  id: number
  contactId: number
  attributeId: number
  sharedOn: number
}

function createBaseContactShare(): ContactShare {
  return { id: 0, contactId: 0, attributeId: 0, sharedOn: 0 }
}

export const ContactShare = {
  encode(
    message: ContactShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.contactId !== 0) {
      writer.uint32(16).uint32(message.contactId)
    }
    if (message.attributeId !== 0) {
      writer.uint32(24).uint32(message.attributeId)
    }
    if (message.sharedOn !== 0) {
      writer.uint32(32).uint32(message.sharedOn)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseContactShare()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.contactId = reader.uint32()
          break
        case 3:
          message.attributeId = reader.uint32()
          break
        case 4:
          message.sharedOn = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ContactShare {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      sharedOn: isSet(object.sharedOn) ? Number(object.sharedOn) : 0
    }
  },

  toJSON(message: ContactShare): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    message.sharedOn !== undefined &&
      (obj.sharedOn = Math.round(message.sharedOn))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ContactShare>, I>>(
    object: I
  ): ContactShare {
    const message = createBaseContactShare()
    message.id = object.id ?? 0
    message.contactId = object.contactId ?? 0
    message.attributeId = object.attributeId ?? 0
    message.sharedOn = object.sharedOn ?? 0
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
