/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  AttributeType,
  AttributeValue,
  Phone,
  attributeTypeFromJSON,
  attributeTypeToJSON
} from './attributes'
import { InviteType, inviteTypeFromJSON, inviteTypeToJSON } from './invites'

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

export interface ContactAttribute {
  id: number
  contactId: number
  name: string
  type: AttributeType
  value: AttributeValue | undefined
  sharedOn: number
}

export interface ContactShare {
  id: number
  contactId: number
  attributeId: number
  sharedOn: number
}

export interface PendingContact {
  id: number
  name: string
  avatarUrl: string
  inviteType: InviteType
  handle: string
  phone: Phone | undefined
  email: string
  expiry: number
}

export interface PendingContactAttribute {
  id: number
  pendingContactId: number
  name: string
  type: AttributeType
}

export interface State {
  contacts: Contact[]
  expiredContactIds: number[]
  contactAttributes: ContactAttribute[]
  expiredContactAttributeIds: number[]
  contactShares: ContactShare[]
  expiredContactShareIds: number[]
  pendingContacts: PendingContact[]
  expiredPendingContactIds: number[]
  pendingContactAttributes: PendingContactAttribute[]
  expiredPendingContactAttributeIds: number[]
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

function createBaseContactAttribute(): ContactAttribute {
  return {
    id: 0,
    contactId: 0,
    name: '',
    type: 0,
    value: undefined,
    sharedOn: 0
  }
}

export const ContactAttribute = {
  encode(
    message: ContactAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.contactId !== 0) {
      writer.uint32(16).uint32(message.contactId)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type)
    }
    if (message.value !== undefined) {
      AttributeValue.encode(message.value, writer.uint32(42).fork()).ldelim()
    }
    if (message.sharedOn !== 0) {
      writer.uint32(48).uint32(message.sharedOn)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseContactAttribute()
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
          message.name = reader.string()
          break
        case 4:
          message.type = reader.int32() as any
          break
        case 5:
          message.value = AttributeValue.decode(reader, reader.uint32())
          break
        case 6:
          message.sharedOn = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ContactAttribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
      value: isSet(object.value)
        ? AttributeValue.fromJSON(object.value)
        : undefined,
      sharedOn: isSet(object.sharedOn) ? Number(object.sharedOn) : 0
    }
  },

  toJSON(message: ContactAttribute): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId))
    message.name !== undefined && (obj.name = message.name)
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    message.value !== undefined &&
      (obj.value = message.value
        ? AttributeValue.toJSON(message.value)
        : undefined)
    message.sharedOn !== undefined &&
      (obj.sharedOn = Math.round(message.sharedOn))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ContactAttribute>, I>>(
    object: I
  ): ContactAttribute {
    const message = createBaseContactAttribute()
    message.id = object.id ?? 0
    message.contactId = object.contactId ?? 0
    message.name = object.name ?? ''
    message.type = object.type ?? 0
    message.value =
      object.value !== undefined && object.value !== null
        ? AttributeValue.fromPartial(object.value)
        : undefined
    message.sharedOn = object.sharedOn ?? 0
    return message
  }
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

function createBasePendingContact(): PendingContact {
  return {
    id: 0,
    name: '',
    avatarUrl: '',
    inviteType: 0,
    handle: '',
    phone: undefined,
    email: '',
    expiry: 0
  }
}

export const PendingContact = {
  encode(
    message: PendingContact,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePendingContact()
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

  fromJSON(object: any): PendingContact {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : '',
      inviteType: isSet(object.inviteType)
        ? inviteTypeFromJSON(object.inviteType)
        : 0,
      handle: isSet(object.handle) ? String(object.handle) : '',
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      email: isSet(object.email) ? String(object.email) : '',
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0
    }
  },

  toJSON(message: PendingContact): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.name !== undefined && (obj.name = message.name)
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl)
    message.inviteType !== undefined &&
      (obj.inviteType = inviteTypeToJSON(message.inviteType))
    message.handle !== undefined && (obj.handle = message.handle)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.email !== undefined && (obj.email = message.email)
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PendingContact>, I>>(
    object: I
  ): PendingContact {
    const message = createBasePendingContact()
    message.id = object.id ?? 0
    message.name = object.name ?? ''
    message.avatarUrl = object.avatarUrl ?? ''
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

function createBasePendingContactAttribute(): PendingContactAttribute {
  return { id: 0, pendingContactId: 0, name: '', type: 0 }
}

export const PendingContactAttribute = {
  encode(
    message: PendingContactAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.pendingContactId !== 0) {
      writer.uint32(16).uint32(message.pendingContactId)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PendingContactAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePendingContactAttribute()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32()
          break
        case 2:
          message.pendingContactId = reader.uint32()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.type = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PendingContactAttribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      pendingContactId: isSet(object.pendingContactId)
        ? Number(object.pendingContactId)
        : 0,
      name: isSet(object.name) ? String(object.name) : '',
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0
    }
  },

  toJSON(message: PendingContactAttribute): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.pendingContactId !== undefined &&
      (obj.pendingContactId = Math.round(message.pendingContactId))
    message.name !== undefined && (obj.name = message.name)
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PendingContactAttribute>, I>>(
    object: I
  ): PendingContactAttribute {
    const message = createBasePendingContactAttribute()
    message.id = object.id ?? 0
    message.pendingContactId = object.pendingContactId ?? 0
    message.name = object.name ?? ''
    message.type = object.type ?? 0
    return message
  }
}

function createBaseState(): State {
  return {
    contacts: [],
    expiredContactIds: [],
    contactAttributes: [],
    expiredContactAttributeIds: [],
    contactShares: [],
    expiredContactShareIds: [],
    pendingContacts: [],
    expiredPendingContactIds: [],
    pendingContactAttributes: [],
    expiredPendingContactAttributeIds: []
  }
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contacts) {
      Contact.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredContactIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.contactAttributes) {
      ContactAttribute.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    writer.uint32(34).fork()
    for (const v of message.expiredContactAttributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.contactShares) {
      ContactShare.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    writer.uint32(50).fork()
    for (const v of message.expiredContactShareIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.pendingContacts) {
      PendingContact.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    writer.uint32(66).fork()
    for (const v of message.expiredPendingContactIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.pendingContactAttributes) {
      PendingContactAttribute.encode(v!, writer.uint32(74).fork()).ldelim()
    }
    writer.uint32(82).fork()
    for (const v of message.expiredPendingContactAttributeIds) {
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
          message.contacts.push(Contact.decode(reader, reader.uint32()))
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredContactIds.push(reader.uint32())
            }
          } else {
            message.expiredContactIds.push(reader.uint32())
          }
          break
        case 3:
          message.contactAttributes.push(
            ContactAttribute.decode(reader, reader.uint32())
          )
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredContactAttributeIds.push(reader.uint32())
            }
          } else {
            message.expiredContactAttributeIds.push(reader.uint32())
          }
          break
        case 5:
          message.contactShares.push(
            ContactShare.decode(reader, reader.uint32())
          )
          break
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredContactShareIds.push(reader.uint32())
            }
          } else {
            message.expiredContactShareIds.push(reader.uint32())
          }
          break
        case 7:
          message.pendingContacts.push(
            PendingContact.decode(reader, reader.uint32())
          )
          break
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredPendingContactIds.push(reader.uint32())
            }
          } else {
            message.expiredPendingContactIds.push(reader.uint32())
          }
          break
        case 9:
          message.pendingContactAttributes.push(
            PendingContactAttribute.decode(reader, reader.uint32())
          )
          break
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredPendingContactAttributeIds.push(reader.uint32())
            }
          } else {
            message.expiredPendingContactAttributeIds.push(reader.uint32())
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
      contacts: Array.isArray(object?.contacts)
        ? object.contacts.map((e: any) => Contact.fromJSON(e))
        : [],
      expiredContactIds: Array.isArray(object?.expiredContactIds)
        ? object.expiredContactIds.map((e: any) => Number(e))
        : [],
      contactAttributes: Array.isArray(object?.contactAttributes)
        ? object.contactAttributes.map((e: any) => ContactAttribute.fromJSON(e))
        : [],
      expiredContactAttributeIds: Array.isArray(
        object?.expiredContactAttributeIds
      )
        ? object.expiredContactAttributeIds.map((e: any) => Number(e))
        : [],
      contactShares: Array.isArray(object?.contactShares)
        ? object.contactShares.map((e: any) => ContactShare.fromJSON(e))
        : [],
      expiredContactShareIds: Array.isArray(object?.expiredContactShareIds)
        ? object.expiredContactShareIds.map((e: any) => Number(e))
        : [],
      pendingContacts: Array.isArray(object?.pendingContacts)
        ? object.pendingContacts.map((e: any) => PendingContact.fromJSON(e))
        : [],
      expiredPendingContactIds: Array.isArray(object?.expiredPendingContactIds)
        ? object.expiredPendingContactIds.map((e: any) => Number(e))
        : [],
      pendingContactAttributes: Array.isArray(object?.pendingContactAttributes)
        ? object.pendingContactAttributes.map((e: any) =>
            PendingContactAttribute.fromJSON(e)
          )
        : [],
      expiredPendingContactAttributeIds: Array.isArray(
        object?.expiredPendingContactAttributeIds
      )
        ? object.expiredPendingContactAttributeIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: State): unknown {
    const obj: any = {}
    if (message.contacts) {
      obj.contacts = message.contacts.map((e) =>
        e ? Contact.toJSON(e) : undefined
      )
    } else {
      obj.contacts = []
    }
    if (message.expiredContactIds) {
      obj.expiredContactIds = message.expiredContactIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredContactIds = []
    }
    if (message.contactAttributes) {
      obj.contactAttributes = message.contactAttributes.map((e) =>
        e ? ContactAttribute.toJSON(e) : undefined
      )
    } else {
      obj.contactAttributes = []
    }
    if (message.expiredContactAttributeIds) {
      obj.expiredContactAttributeIds = message.expiredContactAttributeIds.map(
        (e) => Math.round(e)
      )
    } else {
      obj.expiredContactAttributeIds = []
    }
    if (message.contactShares) {
      obj.contactShares = message.contactShares.map((e) =>
        e ? ContactShare.toJSON(e) : undefined
      )
    } else {
      obj.contactShares = []
    }
    if (message.expiredContactShareIds) {
      obj.expiredContactShareIds = message.expiredContactShareIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredContactShareIds = []
    }
    if (message.pendingContacts) {
      obj.pendingContacts = message.pendingContacts.map((e) =>
        e ? PendingContact.toJSON(e) : undefined
      )
    } else {
      obj.pendingContacts = []
    }
    if (message.expiredPendingContactIds) {
      obj.expiredPendingContactIds = message.expiredPendingContactIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredPendingContactIds = []
    }
    if (message.pendingContactAttributes) {
      obj.pendingContactAttributes = message.pendingContactAttributes.map((e) =>
        e ? PendingContactAttribute.toJSON(e) : undefined
      )
    } else {
      obj.pendingContactAttributes = []
    }
    if (message.expiredPendingContactAttributeIds) {
      obj.expiredPendingContactAttributeIds =
        message.expiredPendingContactAttributeIds.map((e) => Math.round(e))
    } else {
      obj.expiredPendingContactAttributeIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState()
    message.contacts = object.contacts?.map((e) => Contact.fromPartial(e)) || []
    message.expiredContactIds = object.expiredContactIds?.map((e) => e) || []
    message.contactAttributes =
      object.contactAttributes?.map((e) => ContactAttribute.fromPartial(e)) ||
      []
    message.expiredContactAttributeIds =
      object.expiredContactAttributeIds?.map((e) => e) || []
    message.contactShares =
      object.contactShares?.map((e) => ContactShare.fromPartial(e)) || []
    message.expiredContactShareIds =
      object.expiredContactShareIds?.map((e) => e) || []
    message.pendingContacts =
      object.pendingContacts?.map((e) => PendingContact.fromPartial(e)) || []
    message.expiredPendingContactIds =
      object.expiredPendingContactIds?.map((e) => e) || []
    message.pendingContactAttributes =
      object.pendingContactAttributes?.map((e) =>
        PendingContactAttribute.fromPartial(e)
      ) || []
    message.expiredPendingContactAttributeIds =
      object.expiredPendingContactAttributeIds?.map((e) => e) || []
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
