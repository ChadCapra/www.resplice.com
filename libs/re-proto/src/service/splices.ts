/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export interface CreateSplice {
  name: string
  description: string
  autoAcceptInvites: boolean
  memberIds: number[]
}

export interface EditSpliceName {
  name: string
}

export interface EditSpliceDescription {
  description: string
}

export interface EnableSpliceAutoAccept {
  spliceId: number
}

export interface DisableSpliceAutoAccept {
  spliceId: number
}

export interface FavorSplice {
  spliceId: number
}

export interface UnfavorSplice {
  spliceId: number
}

export interface MuteSplice {
  spliceId: number
}

export interface UnmuteSplice {
  spliceId: number
}

export interface ArchiveSplice {
  spliceId: number
}

export interface UnarchiveSplice {
  spliceId: number
}

export interface LeaveSplice {
  spliceId: number
}

export interface AddMember {
  spliceId: number
  contactId: number
}

export interface RemoveMember {
  spliceMemberId: number
}

export interface EnableModerator {
  spliceMemberId: number
}

export interface DisableModerator {
  spliceMemberId: number
}

export interface AddShare {
  spliceId: number
  attributeId: number
}

export interface RemoveShare {
  spliceShareId: number
}

export interface AcceptPendingSplice {
  pendingSpliceId: number
  attributeIds: number[]
}

export interface DeclinePendingSplice {
  pendingSpliceId: number
}

function createBaseCreateSplice(): CreateSplice {
  return { name: '', description: '', autoAcceptInvites: false, memberIds: [] }
}

export const CreateSplice = {
  encode(
    message: CreateSplice,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreateSplice()
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

  fromJSON(object: any): CreateSplice {
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

  toJSON(message: CreateSplice): unknown {
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

  fromPartial<I extends Exact<DeepPartial<CreateSplice>, I>>(
    object: I
  ): CreateSplice {
    const message = createBaseCreateSplice()
    message.name = object.name ?? ''
    message.description = object.description ?? ''
    message.autoAcceptInvites = object.autoAcceptInvites ?? false
    message.memberIds = object.memberIds?.map((e) => e) || []
    return message
  }
}

function createBaseEditSpliceName(): EditSpliceName {
  return { name: '' }
}

export const EditSpliceName = {
  encode(
    message: EditSpliceName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditSpliceName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditSpliceName()
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

  fromJSON(object: any): EditSpliceName {
    return {
      name: isSet(object.name) ? String(object.name) : ''
    }
  },

  toJSON(message: EditSpliceName): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditSpliceName>, I>>(
    object: I
  ): EditSpliceName {
    const message = createBaseEditSpliceName()
    message.name = object.name ?? ''
    return message
  }
}

function createBaseEditSpliceDescription(): EditSpliceDescription {
  return { description: '' }
}

export const EditSpliceDescription = {
  encode(
    message: EditSpliceDescription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== '') {
      writer.uint32(10).string(message.description)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditSpliceDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditSpliceDescription()
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

  fromJSON(object: any): EditSpliceDescription {
    return {
      description: isSet(object.description) ? String(object.description) : ''
    }
  },

  toJSON(message: EditSpliceDescription): unknown {
    const obj: any = {}
    message.description !== undefined && (obj.description = message.description)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditSpliceDescription>, I>>(
    object: I
  ): EditSpliceDescription {
    const message = createBaseEditSpliceDescription()
    message.description = object.description ?? ''
    return message
  }
}

function createBaseEnableSpliceAutoAccept(): EnableSpliceAutoAccept {
  return { spliceId: 0 }
}

export const EnableSpliceAutoAccept = {
  encode(
    message: EnableSpliceAutoAccept,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EnableSpliceAutoAccept {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEnableSpliceAutoAccept()
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

  fromJSON(object: any): EnableSpliceAutoAccept {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: EnableSpliceAutoAccept): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EnableSpliceAutoAccept>, I>>(
    object: I
  ): EnableSpliceAutoAccept {
    const message = createBaseEnableSpliceAutoAccept()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseDisableSpliceAutoAccept(): DisableSpliceAutoAccept {
  return { spliceId: 0 }
}

export const DisableSpliceAutoAccept = {
  encode(
    message: DisableSpliceAutoAccept,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisableSpliceAutoAccept {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDisableSpliceAutoAccept()
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

  fromJSON(object: any): DisableSpliceAutoAccept {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: DisableSpliceAutoAccept): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DisableSpliceAutoAccept>, I>>(
    object: I
  ): DisableSpliceAutoAccept {
    const message = createBaseDisableSpliceAutoAccept()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseFavorSplice(): FavorSplice {
  return { spliceId: 0 }
}

export const FavorSplice = {
  encode(
    message: FavorSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FavorSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseFavorSplice()
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

  fromJSON(object: any): FavorSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: FavorSplice): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<FavorSplice>, I>>(
    object: I
  ): FavorSplice {
    const message = createBaseFavorSplice()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseUnfavorSplice(): UnfavorSplice {
  return { spliceId: 0 }
}

export const UnfavorSplice = {
  encode(
    message: UnfavorSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnfavorSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUnfavorSplice()
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

  fromJSON(object: any): UnfavorSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: UnfavorSplice): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<UnfavorSplice>, I>>(
    object: I
  ): UnfavorSplice {
    const message = createBaseUnfavorSplice()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseMuteSplice(): MuteSplice {
  return { spliceId: 0 }
}

export const MuteSplice = {
  encode(
    message: MuteSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MuteSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMuteSplice()
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

  fromJSON(object: any): MuteSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: MuteSplice): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MuteSplice>, I>>(
    object: I
  ): MuteSplice {
    const message = createBaseMuteSplice()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseUnmuteSplice(): UnmuteSplice {
  return { spliceId: 0 }
}

export const UnmuteSplice = {
  encode(
    message: UnmuteSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnmuteSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUnmuteSplice()
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

  fromJSON(object: any): UnmuteSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: UnmuteSplice): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<UnmuteSplice>, I>>(
    object: I
  ): UnmuteSplice {
    const message = createBaseUnmuteSplice()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseArchiveSplice(): ArchiveSplice {
  return { spliceId: 0 }
}

export const ArchiveSplice = {
  encode(
    message: ArchiveSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArchiveSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseArchiveSplice()
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

  fromJSON(object: any): ArchiveSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: ArchiveSplice): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ArchiveSplice>, I>>(
    object: I
  ): ArchiveSplice {
    const message = createBaseArchiveSplice()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseUnarchiveSplice(): UnarchiveSplice {
  return { spliceId: 0 }
}

export const UnarchiveSplice = {
  encode(
    message: UnarchiveSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnarchiveSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUnarchiveSplice()
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

  fromJSON(object: any): UnarchiveSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: UnarchiveSplice): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<UnarchiveSplice>, I>>(
    object: I
  ): UnarchiveSplice {
    const message = createBaseUnarchiveSplice()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseLeaveSplice(): LeaveSplice {
  return { spliceId: 0 }
}

export const LeaveSplice = {
  encode(
    message: LeaveSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaveSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseLeaveSplice()
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

  fromJSON(object: any): LeaveSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0
    }
  },

  toJSON(message: LeaveSplice): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<LeaveSplice>, I>>(
    object: I
  ): LeaveSplice {
    const message = createBaseLeaveSplice()
    message.spliceId = object.spliceId ?? 0
    return message
  }
}

function createBaseAddMember(): AddMember {
  return { spliceId: 0, contactId: 0 }
}

export const AddMember = {
  encode(
    message: AddMember,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
    }
    if (message.contactId !== 0) {
      writer.uint32(16).uint32(message.contactId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAddMember()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceId = reader.uint32()
          break
        case 2:
          message.contactId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AddMember {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0
    }
  },

  toJSON(message: AddMember): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AddMember>, I>>(
    object: I
  ): AddMember {
    const message = createBaseAddMember()
    message.spliceId = object.spliceId ?? 0
    message.contactId = object.contactId ?? 0
    return message
  }
}

function createBaseRemoveMember(): RemoveMember {
  return { spliceMemberId: 0 }
}

export const RemoveMember = {
  encode(
    message: RemoveMember,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceMemberId !== 0) {
      writer.uint32(8).uint32(message.spliceMemberId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoveMember()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceMemberId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoveMember {
    return {
      spliceMemberId: isSet(object.spliceMemberId)
        ? Number(object.spliceMemberId)
        : 0
    }
  },

  toJSON(message: RemoveMember): unknown {
    const obj: any = {}
    message.spliceMemberId !== undefined &&
      (obj.spliceMemberId = Math.round(message.spliceMemberId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoveMember>, I>>(
    object: I
  ): RemoveMember {
    const message = createBaseRemoveMember()
    message.spliceMemberId = object.spliceMemberId ?? 0
    return message
  }
}

function createBaseEnableModerator(): EnableModerator {
  return { spliceMemberId: 0 }
}

export const EnableModerator = {
  encode(
    message: EnableModerator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceMemberId !== 0) {
      writer.uint32(8).uint32(message.spliceMemberId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableModerator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEnableModerator()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceMemberId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EnableModerator {
    return {
      spliceMemberId: isSet(object.spliceMemberId)
        ? Number(object.spliceMemberId)
        : 0
    }
  },

  toJSON(message: EnableModerator): unknown {
    const obj: any = {}
    message.spliceMemberId !== undefined &&
      (obj.spliceMemberId = Math.round(message.spliceMemberId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EnableModerator>, I>>(
    object: I
  ): EnableModerator {
    const message = createBaseEnableModerator()
    message.spliceMemberId = object.spliceMemberId ?? 0
    return message
  }
}

function createBaseDisableModerator(): DisableModerator {
  return { spliceMemberId: 0 }
}

export const DisableModerator = {
  encode(
    message: DisableModerator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceMemberId !== 0) {
      writer.uint32(8).uint32(message.spliceMemberId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisableModerator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDisableModerator()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.spliceMemberId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DisableModerator {
    return {
      spliceMemberId: isSet(object.spliceMemberId)
        ? Number(object.spliceMemberId)
        : 0
    }
  },

  toJSON(message: DisableModerator): unknown {
    const obj: any = {}
    message.spliceMemberId !== undefined &&
      (obj.spliceMemberId = Math.round(message.spliceMemberId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DisableModerator>, I>>(
    object: I
  ): DisableModerator {
    const message = createBaseDisableModerator()
    message.spliceMemberId = object.spliceMemberId ?? 0
    return message
  }
}

function createBaseAddShare(): AddShare {
  return { spliceId: 0, attributeId: 0 }
}

export const AddShare = {
  encode(
    message: AddShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId)
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
          message.spliceId = reader.uint32()
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
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0
    }
  },

  toJSON(message: AddShare): unknown {
    const obj: any = {}
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AddShare>, I>>(object: I): AddShare {
    const message = createBaseAddShare()
    message.spliceId = object.spliceId ?? 0
    message.attributeId = object.attributeId ?? 0
    return message
  }
}

function createBaseRemoveShare(): RemoveShare {
  return { spliceShareId: 0 }
}

export const RemoveShare = {
  encode(
    message: RemoveShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceShareId !== 0) {
      writer.uint32(8).uint32(message.spliceShareId)
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
          message.spliceShareId = reader.uint32()
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
      spliceShareId: isSet(object.spliceShareId)
        ? Number(object.spliceShareId)
        : 0
    }
  },

  toJSON(message: RemoveShare): unknown {
    const obj: any = {}
    message.spliceShareId !== undefined &&
      (obj.spliceShareId = Math.round(message.spliceShareId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoveShare>, I>>(
    object: I
  ): RemoveShare {
    const message = createBaseRemoveShare()
    message.spliceShareId = object.spliceShareId ?? 0
    return message
  }
}

function createBaseAcceptPendingSplice(): AcceptPendingSplice {
  return { pendingSpliceId: 0, attributeIds: [] }
}

export const AcceptPendingSplice = {
  encode(
    message: AcceptPendingSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pendingSpliceId !== 0) {
      writer.uint32(8).uint32(message.pendingSpliceId)
    }
    writer.uint32(18).fork()
    for (const v of message.attributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptPendingSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAcceptPendingSplice()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pendingSpliceId = reader.uint32()
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

  fromJSON(object: any): AcceptPendingSplice {
    return {
      pendingSpliceId: isSet(object.pendingSpliceId)
        ? Number(object.pendingSpliceId)
        : 0,
      attributeIds: Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: AcceptPendingSplice): unknown {
    const obj: any = {}
    message.pendingSpliceId !== undefined &&
      (obj.pendingSpliceId = Math.round(message.pendingSpliceId))
    if (message.attributeIds) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e))
    } else {
      obj.attributeIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AcceptPendingSplice>, I>>(
    object: I
  ): AcceptPendingSplice {
    const message = createBaseAcceptPendingSplice()
    message.pendingSpliceId = object.pendingSpliceId ?? 0
    message.attributeIds = object.attributeIds?.map((e) => e) || []
    return message
  }
}

function createBaseDeclinePendingSplice(): DeclinePendingSplice {
  return { pendingSpliceId: 0 }
}

export const DeclinePendingSplice = {
  encode(
    message: DeclinePendingSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pendingSpliceId !== 0) {
      writer.uint32(8).uint32(message.pendingSpliceId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeclinePendingSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeclinePendingSplice()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pendingSpliceId = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DeclinePendingSplice {
    return {
      pendingSpliceId: isSet(object.pendingSpliceId)
        ? Number(object.pendingSpliceId)
        : 0
    }
  },

  toJSON(message: DeclinePendingSplice): unknown {
    const obj: any = {}
    message.pendingSpliceId !== undefined &&
      (obj.pendingSpliceId = Math.round(message.pendingSpliceId))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DeclinePendingSplice>, I>>(
    object: I
  ): DeclinePendingSplice {
    const message = createBaseDeclinePendingSplice()
    message.pendingSpliceId = object.pendingSpliceId ?? 0
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
