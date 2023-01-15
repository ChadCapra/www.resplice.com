/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  AttributeType,
  attributeTypeFromJSON,
  attributeTypeToJSON
} from '../attributes'

export interface EditContactAlias {
  contactId: number
  alias: string
}

export interface EditContactDescription {
  contactId: number
  description: string
}

export interface FavorContact {
  contactId: number
}

export interface UnfavorContact {
  contactId: number
}

export interface MuteContact {
  contactId: number
}

export interface UnmuteContact {
  contactId: number
}

export interface ArchiveContact {
  contactId: number
}

export interface UnarchiveContact {
  contactId: number
}

export interface DeleteContact {
  contactId: number
}

export interface AddShare {
  contactId: number
  attributeId: number
}

export interface RemoveShare {
  contactShareId: number
}

export interface RequestContactAttribute {
  contactId: number
  type: AttributeType
}

export interface RemoveContactAttribute {
  contactAttributeId: number
}

export interface AcceptPendingContact {
  pendingContactId: number
  attributeIds: number[]
}

export interface DeclinePendingContact {
  pendingContactId: number
}

function createBaseEditContactAlias(): EditContactAlias {
  return { contactId: 0, alias: '' }
}

export const EditContactAlias = {
  encode(
    message: EditContactAlias,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EditContactAlias {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditContactAlias()
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

  fromJSON(object: any): EditContactAlias {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      alias: isSet(object.alias) ? String(object.alias) : ''
    }
  },

  toJSON(message: EditContactAlias): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.alias !== undefined && (obj.alias = message.alias)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditContactAlias>, I>>(
    object: I
  ): EditContactAlias {
    const message = createBaseEditContactAlias()
    message.contactId = object.contactId ?? 0
    message.alias = object.alias ?? ''
    return message
  }
}

function createBaseEditContactDescription(): EditContactDescription {
  return { contactId: 0, description: '' }
}

export const EditContactDescription = {
  encode(
    message: EditContactDescription,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditContactDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditContactDescription()
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

  fromJSON(object: any): EditContactDescription {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      description: isSet(object.description) ? String(object.description) : ''
    }
  },

  toJSON(message: EditContactDescription): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.description !== undefined && (obj.description = message.description)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditContactDescription>, I>>(
    object: I
  ): EditContactDescription {
    const message = createBaseEditContactDescription()
    message.contactId = object.contactId ?? 0
    message.description = object.description ?? ''
    return message
  }
}

function createBaseFavorContact(): FavorContact {
  return { contactId: 0 }
}

export const FavorContact = {
  encode(
    message: FavorContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FavorContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseFavorContact()
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

  fromJSON(object: any): FavorContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: FavorContact): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<FavorContact>, I>>(
    object: I
  ): FavorContact {
    const message = createBaseFavorContact()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseUnfavorContact(): UnfavorContact {
  return { contactId: 0 }
}

export const UnfavorContact = {
  encode(
    message: UnfavorContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnfavorContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUnfavorContact()
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

  fromJSON(object: any): UnfavorContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: UnfavorContact): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<UnfavorContact>, I>>(
    object: I
  ): UnfavorContact {
    const message = createBaseUnfavorContact()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseMuteContact(): MuteContact {
  return { contactId: 0 }
}

export const MuteContact = {
  encode(
    message: MuteContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MuteContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMuteContact()
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

  fromJSON(object: any): MuteContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: MuteContact): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MuteContact>, I>>(
    object: I
  ): MuteContact {
    const message = createBaseMuteContact()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseUnmuteContact(): UnmuteContact {
  return { contactId: 0 }
}

export const UnmuteContact = {
  encode(
    message: UnmuteContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnmuteContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUnmuteContact()
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

  fromJSON(object: any): UnmuteContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: UnmuteContact): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<UnmuteContact>, I>>(
    object: I
  ): UnmuteContact {
    const message = createBaseUnmuteContact()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseArchiveContact(): ArchiveContact {
  return { contactId: 0 }
}

export const ArchiveContact = {
  encode(
    message: ArchiveContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArchiveContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseArchiveContact()
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

  fromJSON(object: any): ArchiveContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: ArchiveContact): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ArchiveContact>, I>>(
    object: I
  ): ArchiveContact {
    const message = createBaseArchiveContact()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseUnarchiveContact(): UnarchiveContact {
  return { contactId: 0 }
}

export const UnarchiveContact = {
  encode(
    message: UnarchiveContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnarchiveContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUnarchiveContact()
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

  fromJSON(object: any): UnarchiveContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: UnarchiveContact): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<UnarchiveContact>, I>>(
    object: I
  ): UnarchiveContact {
    const message = createBaseUnarchiveContact()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseDeleteContact(): DeleteContact {
  return { contactId: 0 }
}

export const DeleteContact = {
  encode(
    message: DeleteContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeleteContact()
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

  fromJSON(object: any): DeleteContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: DeleteContact): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DeleteContact>, I>>(
    object: I
  ): DeleteContact {
    const message = createBaseDeleteContact()
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseAddShare(): AddShare {
  return { contactId: 0, attributeId: 0 }
}

export const AddShare = {
  encode(
    message: AddShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAddShare()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        case 2:
          message.attributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AddShare {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: AddShare): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AddShare>, I>>(object: I): AddShare {
    const message = createBaseAddShare()
    message.contactId = object.contactId ?? 0
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseRemoveShare(): RemoveShare {
  return { contactShareId: 0 }
}

export const RemoveShare = {
  encode(
    message: RemoveShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactShareId !== 0) {
      writer.uint32(8).uint32(message.contactShareId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoveShare()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactShareId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoveShare {
    return {
      contactShareId: isSet(object.contactShareId)
        ? Number(object.contactShareId)
        : 0
    }
  },

  toJSON(message: RemoveShare): unknown {
    const obj: any = {}
    message.contactShareId !== undefined &&
      (obj.contactShareId = Math.round(message.contactShareId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoveShare>, I>>(
    object: I
  ): RemoveShare {
    const message = createBaseRemoveShare()
    message.contactShareId = object.contactShareId ?? 0
    return message
  }
}

function createBaseRequestContactAttribute(): RequestContactAttribute {
  return { contactId: 0, type: 0 }
}

export const RequestContactAttribute = {
  encode(
    message: RequestContactAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId)
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestContactAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRequestContactAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32()
          break
        case 2:
          message.type = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RequestContactAttribute {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0
    }
  },

  toJSON(message: RequestContactAttribute): unknown {
    const obj: any = {}
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RequestContactAttribute>, I>>(
    object: I
  ): RequestContactAttribute {
    const message = createBaseRequestContactAttribute()
    message.contactId = object.contactId ?? 0
    message.type = object.type ?? 0
    return message
  }
}

function createBaseRemoveContactAttribute(): RemoveContactAttribute {
  return { contactAttributeId: 0 }
}

export const RemoveContactAttribute = {
  encode(
    message: RemoveContactAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactAttributeId !== 0) {
      writer.uint32(8).uint32(message.contactAttributeId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveContactAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoveContactAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactAttributeId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoveContactAttribute {
    return {
      contactAttributeId: isSet(object.contactAttributeId)
        ? Number(object.contactAttributeId)
        : 0
    }
  },

  toJSON(message: RemoveContactAttribute): unknown {
    const obj: any = {}
    message.contactAttributeId !== undefined &&
      (obj.contactAttributeId = Math.round(message.contactAttributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoveContactAttribute>, I>>(
    object: I
  ): RemoveContactAttribute {
    const message = createBaseRemoveContactAttribute()
    message.contactAttributeId = object.contactAttributeId ?? 0
    return message
  }
}

function createBaseAcceptPendingContact(): AcceptPendingContact {
  return { pendingContactId: 0, attributeIds: [] }
}

export const AcceptPendingContact = {
  encode(
    message: AcceptPendingContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pendingContactId !== 0) {
      writer.uint32(8).uint32(message.pendingContactId)
    }
    writer.uint32(18).fork()
    for (const v of message.attributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AcceptPendingContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAcceptPendingContact()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pendingContactId = reader.uint32()
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.attributeIds.push(reader.uint32())
            }
          } else {
            message.attributeIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AcceptPendingContact {
    return {
      pendingContactId: isSet(object.pendingContactId)
        ? Number(object.pendingContactId)
        : 0,
      attributeIds: Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: AcceptPendingContact): unknown {
    const obj: any = {}
    message.pendingContactId !== undefined &&
      (obj.pendingContactId = Math.round(message.pendingContactId))
    if (message.attributeIds) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e))
    } else {
      obj.attributeIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AcceptPendingContact>, I>>(
    object: I
  ): AcceptPendingContact {
    const message = createBaseAcceptPendingContact()
    message.pendingContactId = object.pendingContactId ?? 0
    message.attributeIds = object.attributeIds?.map((e) => e) || []
    return message
  }
}

function createBaseDeclinePendingContact(): DeclinePendingContact {
  return { pendingContactId: 0 }
}

export const DeclinePendingContact = {
  encode(
    message: DeclinePendingContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pendingContactId !== 0) {
      writer.uint32(8).uint32(message.pendingContactId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeclinePendingContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeclinePendingContact()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pendingContactId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DeclinePendingContact {
    return {
      pendingContactId: isSet(object.pendingContactId)
        ? Number(object.pendingContactId)
        : 0
    }
  },

  toJSON(message: DeclinePendingContact): unknown {
    const obj: any = {}
    message.pendingContactId !== undefined &&
      (obj.pendingContactId = Math.round(message.pendingContactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DeclinePendingContact>, I>>(
    object: I
  ): DeclinePendingContact {
    const message = createBaseDeclinePendingContact()
    message.pendingContactId = object.pendingContactId ?? 0
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
