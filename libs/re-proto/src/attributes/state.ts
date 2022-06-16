/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Attribute } from '../attributes/attribute'
import { AttributeGroup } from '../attributes/attribute_group'

export interface State {
  attributes: Attribute[]
  expiredAttributeIds: number[]
  attributeGroups: AttributeGroup[]
  expiredGroupIds: number[]
}

function createBaseState(): State {
  return {
    attributes: [],
    expiredAttributeIds: [],
    attributeGroups: [],
    expiredGroupIds: []
  }
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredAttributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.attributeGroups) {
      AttributeGroup.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    writer.uint32(34).fork()
    for (const v of message.expiredGroupIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.attributes.push(Attribute.decode(reader, reader.uint32()))
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredAttributeIds.push(reader.uint32())
            }
          } else {
            message.expiredAttributeIds.push(reader.uint32())
          }
          break
        case 3:
          message.attributeGroups.push(
            AttributeGroup.decode(reader, reader.uint32())
          )
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredGroupIds.push(reader.uint32())
            }
          } else {
            message.expiredGroupIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): State {
    return {
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      expiredAttributeIds: Array.isArray(object?.expiredAttributeIds)
        ? object.expiredAttributeIds.map((e: any) => Number(e))
        : [],
      attributeGroups: Array.isArray(object?.attributeGroups)
        ? object.attributeGroups.map((e: any) => AttributeGroup.fromJSON(e))
        : [],
      expiredGroupIds: Array.isArray(object?.expiredGroupIds)
        ? object.expiredGroupIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: State): unknown {
    const obj: any = {}
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      )
    } else {
      obj.attributes = []
    }
    if (message.expiredAttributeIds) {
      obj.expiredAttributeIds = message.expiredAttributeIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredAttributeIds = []
    }
    if (message.attributeGroups) {
      obj.attributeGroups = message.attributeGroups.map((e) =>
        e ? AttributeGroup.toJSON(e) : undefined
      )
    } else {
      obj.attributeGroups = []
    }
    if (message.expiredGroupIds) {
      obj.expiredGroupIds = message.expiredGroupIds.map((e) => Math.round(e))
    } else {
      obj.expiredGroupIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState()
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || []
    message.expiredAttributeIds =
      object.expiredAttributeIds?.map((e) => e) || []
    message.attributeGroups =
      object.attributeGroups?.map((e) => AttributeGroup.fromPartial(e)) || []
    message.expiredGroupIds = object.expiredGroupIds?.map((e) => e) || []
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
