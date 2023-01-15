/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { InviteType, inviteTypeFromJSON, inviteTypeToJSON } from './invites'
import { Phone } from './attributes'

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

export interface SpliceShare {
  id: number
  spliceId: number
  attributeId: number
  sharedOn: number
}

export interface PendingSplice {
  id: number
  name: string
  description: string
  inviteType: InviteType
  handle: string
  phone: Phone | undefined
  email: string
  expiry: number
}

export interface PendingSpliceMember {
  pendingSpliceId: number
  name: string
  avatar: string
}

export interface State {
  splices: Splice[]
  expiredSpliceIds: number[]
  spliceMembers: SpliceMember[]
  expiredMemberIds: number[]
  spliceShares: SpliceShare[]
  expiredShareIds: number[]
  pendingSplices: PendingSplice[]
  expiredPendingSpliceIds: number[]
  pendingSpliceMembers: PendingSpliceMember[]
  expiredPendingSpliceMemberIds: number[]
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

function createBaseSpliceShare(): SpliceShare {
  return { id: 0, spliceId: 0, attributeId: 0, sharedOn: 0 }
}

export const SpliceShare = {
  encode(
    message: SpliceShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.spliceId !== 0) {
      writer.uint32(16).uint32(message.spliceId)
    }
    if (message.attributeId !== 0) {
      writer.uint32(24).uint32(message.attributeId)
    }
    if (message.sharedOn !== 0) {
      writer.uint32(32).uint32(message.sharedOn)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpliceShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSpliceShare()
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

  fromJSON(object: any): SpliceShare {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      sharedOn: isSet(object.sharedOn) ? Number(object.sharedOn) : 0
    }
  },

  toJSON(message: SpliceShare): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId))
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId))
    message.sharedOn !== undefined &&
      (obj.sharedOn = Math.round(message.sharedOn))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SpliceShare>, I>>(
    object: I
  ): SpliceShare {
    const message = createBaseSpliceShare()
    message.id = object.id ?? 0
    message.spliceId = object.spliceId ?? 0
    message.attributeId = object.attributeId ?? 0
    message.sharedOn = object.sharedOn ?? 0
    return message
  }
}

function createBasePendingSplice(): PendingSplice {
  return {
    id: 0,
    name: '',
    description: '',
    inviteType: 0,
    handle: '',
    phone: undefined,
    email: '',
    expiry: 0
  }
}

export const PendingSplice = {
  encode(
    message: PendingSplice,
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
    if (message.inviteType !== 0) {
      writer.uint32(32).int32(message.inviteType)
    }
    if (message.handle !== '') {
      writer.uint32(42).string(message.handle)
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(50).fork()).ldelim()
    }
    if (message.email !== '') {
      writer.uint32(58).string(message.email)
    }
    if (message.expiry !== 0) {
      writer.uint32(64).uint32(message.expiry)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePendingSplice()
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
          message.inviteType = reader.int32() as any
          break
        case 5:
          message.handle = reader.string()
          break
        case 6:
          message.phone = Phone.decode(reader, reader.uint32())
          break
        case 7:
          message.email = reader.string()
          break
        case 8:
          message.expiry = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PendingSplice {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      description: isSet(object.description) ? String(object.description) : '',
      inviteType: isSet(object.inviteType)
        ? inviteTypeFromJSON(object.inviteType)
        : 0,
      handle: isSet(object.handle) ? String(object.handle) : '',
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      email: isSet(object.email) ? String(object.email) : '',
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0
    }
  },

  toJSON(message: PendingSplice): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.inviteType !== undefined &&
      (obj.inviteType = inviteTypeToJSON(message.inviteType))
    message.handle !== undefined && (obj.handle = message.handle)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.email !== undefined && (obj.email = message.email)
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PendingSplice>, I>>(
    object: I
  ): PendingSplice {
    const message = createBasePendingSplice()
    message.id = object.id ?? 0
    message.name = object.name ?? ''
    message.description = object.description ?? ''
    message.inviteType = object.inviteType ?? 0
    message.handle = object.handle ?? ''
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined
    message.email = object.email ?? ''
    message.expiry = object.expiry ?? 0
    return message
  }
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

function createBaseState(): State {
  return {
    splices: [],
    expiredSpliceIds: [],
    spliceMembers: [],
    expiredMemberIds: [],
    spliceShares: [],
    expiredShareIds: [],
    pendingSplices: [],
    expiredPendingSpliceIds: [],
    pendingSpliceMembers: [],
    expiredPendingSpliceMemberIds: []
  }
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.splices) {
      Splice.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredSpliceIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.spliceMembers) {
      SpliceMember.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    writer.uint32(34).fork()
    for (const v of message.expiredMemberIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.spliceShares) {
      SpliceShare.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    writer.uint32(50).fork()
    for (const v of message.expiredShareIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.pendingSplices) {
      PendingSplice.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    writer.uint32(66).fork()
    for (const v of message.expiredPendingSpliceIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.pendingSpliceMembers) {
      PendingSpliceMember.encode(v!, writer.uint32(74).fork()).ldelim()
    }
    writer.uint32(82).fork()
    for (const v of message.expiredPendingSpliceMemberIds) {
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
          message.splices.push(Splice.decode(reader, reader.uint32()))
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredSpliceIds.push(reader.uint32())
            }
          } else {
            message.expiredSpliceIds.push(reader.uint32())
          }
          break
        case 3:
          message.spliceMembers.push(
            SpliceMember.decode(reader, reader.uint32())
          )
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredMemberIds.push(reader.uint32())
            }
          } else {
            message.expiredMemberIds.push(reader.uint32())
          }
          break
        case 5:
          message.spliceShares.push(SpliceShare.decode(reader, reader.uint32()))
          break
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredShareIds.push(reader.uint32())
            }
          } else {
            message.expiredShareIds.push(reader.uint32())
          }
          break
        case 7:
          message.pendingSplices.push(
            PendingSplice.decode(reader, reader.uint32())
          )
          break
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredPendingSpliceIds.push(reader.uint32())
            }
          } else {
            message.expiredPendingSpliceIds.push(reader.uint32())
          }
          break
        case 9:
          message.pendingSpliceMembers.push(
            PendingSpliceMember.decode(reader, reader.uint32())
          )
          break
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredPendingSpliceMemberIds.push(reader.uint32())
            }
          } else {
            message.expiredPendingSpliceMemberIds.push(reader.uint32())
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
      splices: Array.isArray(object?.splices)
        ? object.splices.map((e: any) => Splice.fromJSON(e))
        : [],
      expiredSpliceIds: Array.isArray(object?.expiredSpliceIds)
        ? object.expiredSpliceIds.map((e: any) => Number(e))
        : [],
      spliceMembers: Array.isArray(object?.spliceMembers)
        ? object.spliceMembers.map((e: any) => SpliceMember.fromJSON(e))
        : [],
      expiredMemberIds: Array.isArray(object?.expiredMemberIds)
        ? object.expiredMemberIds.map((e: any) => Number(e))
        : [],
      spliceShares: Array.isArray(object?.spliceShares)
        ? object.spliceShares.map((e: any) => SpliceShare.fromJSON(e))
        : [],
      expiredShareIds: Array.isArray(object?.expiredShareIds)
        ? object.expiredShareIds.map((e: any) => Number(e))
        : [],
      pendingSplices: Array.isArray(object?.pendingSplices)
        ? object.pendingSplices.map((e: any) => PendingSplice.fromJSON(e))
        : [],
      expiredPendingSpliceIds: Array.isArray(object?.expiredPendingSpliceIds)
        ? object.expiredPendingSpliceIds.map((e: any) => Number(e))
        : [],
      pendingSpliceMembers: Array.isArray(object?.pendingSpliceMembers)
        ? object.pendingSpliceMembers.map((e: any) =>
            PendingSpliceMember.fromJSON(e)
          )
        : [],
      expiredPendingSpliceMemberIds: Array.isArray(
        object?.expiredPendingSpliceMemberIds
      )
        ? object.expiredPendingSpliceMemberIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: State): unknown {
    const obj: any = {}
    if (message.splices) {
      obj.splices = message.splices.map((e) =>
        e ? Splice.toJSON(e) : undefined
      )
    } else {
      obj.splices = []
    }
    if (message.expiredSpliceIds) {
      obj.expiredSpliceIds = message.expiredSpliceIds.map((e) => Math.round(e))
    } else {
      obj.expiredSpliceIds = []
    }
    if (message.spliceMembers) {
      obj.spliceMembers = message.spliceMembers.map((e) =>
        e ? SpliceMember.toJSON(e) : undefined
      )
    } else {
      obj.spliceMembers = []
    }
    if (message.expiredMemberIds) {
      obj.expiredMemberIds = message.expiredMemberIds.map((e) => Math.round(e))
    } else {
      obj.expiredMemberIds = []
    }
    if (message.spliceShares) {
      obj.spliceShares = message.spliceShares.map((e) =>
        e ? SpliceShare.toJSON(e) : undefined
      )
    } else {
      obj.spliceShares = []
    }
    if (message.expiredShareIds) {
      obj.expiredShareIds = message.expiredShareIds.map((e) => Math.round(e))
    } else {
      obj.expiredShareIds = []
    }
    if (message.pendingSplices) {
      obj.pendingSplices = message.pendingSplices.map((e) =>
        e ? PendingSplice.toJSON(e) : undefined
      )
    } else {
      obj.pendingSplices = []
    }
    if (message.expiredPendingSpliceIds) {
      obj.expiredPendingSpliceIds = message.expiredPendingSpliceIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredPendingSpliceIds = []
    }
    if (message.pendingSpliceMembers) {
      obj.pendingSpliceMembers = message.pendingSpliceMembers.map((e) =>
        e ? PendingSpliceMember.toJSON(e) : undefined
      )
    } else {
      obj.pendingSpliceMembers = []
    }
    if (message.expiredPendingSpliceMemberIds) {
      obj.expiredPendingSpliceMemberIds =
        message.expiredPendingSpliceMemberIds.map((e) => Math.round(e))
    } else {
      obj.expiredPendingSpliceMemberIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState()
    message.splices = object.splices?.map((e) => Splice.fromPartial(e)) || []
    message.expiredSpliceIds = object.expiredSpliceIds?.map((e) => e) || []
    message.spliceMembers =
      object.spliceMembers?.map((e) => SpliceMember.fromPartial(e)) || []
    message.expiredMemberIds = object.expiredMemberIds?.map((e) => e) || []
    message.spliceShares =
      object.spliceShares?.map((e) => SpliceShare.fromPartial(e)) || []
    message.expiredShareIds = object.expiredShareIds?.map((e) => e) || []
    message.pendingSplices =
      object.pendingSplices?.map((e) => PendingSplice.fromPartial(e)) || []
    message.expiredPendingSpliceIds =
      object.expiredPendingSpliceIds?.map((e) => e) || []
    message.pendingSpliceMembers =
      object.pendingSpliceMembers?.map((e) =>
        PendingSpliceMember.fromPartial(e)
      ) || []
    message.expiredPendingSpliceMemberIds =
      object.expiredPendingSpliceMemberIds?.map((e) => e) || []
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
