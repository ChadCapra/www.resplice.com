/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface AttributeGroup {
  id: number
  name: string
  sortOrder: number
}

function createBaseAttributeGroup(): AttributeGroup {
  return { id: 0, name: '', sortOrder: 0 }
}

export const AttributeGroup = {
  encode(
    message: AttributeGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.sortOrder !== 0) {
      writer.uint32(24).uint32(message.sortOrder)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAttributeGroup()
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
          message.sortOrder = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AttributeGroup {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      sortOrder: isSet(object.sortOrder) ? Number(object.sortOrder) : 0
    }
  },

  toJSON(message: AttributeGroup): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.name !== undefined && (obj.name = message.name)
    message.sortOrder !== undefined &&
      (obj.sortOrder = Math.round(message.sortOrder))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AttributeGroup>, I>>(
    object: I
  ): AttributeGroup {
    const message = createBaseAttributeGroup()
    message.id = object.id ?? 0
    message.name = object.name ?? ''
    message.sortOrder = object.sortOrder ?? 0
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
