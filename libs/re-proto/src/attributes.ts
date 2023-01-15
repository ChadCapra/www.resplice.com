/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  Country,
  SocialNetwork,
  countryFromJSON,
  countryToJSON,
  socialNetworkFromJSON,
  socialNetworkToJSON
} from './common'

export enum AttributeType {
  NO_TYPE = 0,
  PHONE = 1,
  EMAIL = 2,
  ADDRESS = 3,
  COORDINATE = 4,
  SOCIAL = 5,
  CREDENTIAL = 6,
  URL = 7,
  TEXT = 8,
  UNRECOGNIZED = -1
}

export function attributeTypeFromJSON(object: any): AttributeType {
  switch (object) {
    case 0:
    case 'NO_TYPE':
      return AttributeType.NO_TYPE
    case 1:
    case 'PHONE':
      return AttributeType.PHONE
    case 2:
    case 'EMAIL':
      return AttributeType.EMAIL
    case 3:
    case 'ADDRESS':
      return AttributeType.ADDRESS
    case 4:
    case 'COORDINATE':
      return AttributeType.COORDINATE
    case 5:
    case 'SOCIAL':
      return AttributeType.SOCIAL
    case 6:
    case 'CREDENTIAL':
      return AttributeType.CREDENTIAL
    case 7:
    case 'URL':
      return AttributeType.URL
    case 8:
    case 'TEXT':
      return AttributeType.TEXT
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AttributeType.UNRECOGNIZED
  }
}

export function attributeTypeToJSON(object: AttributeType): string {
  switch (object) {
    case AttributeType.NO_TYPE:
      return 'NO_TYPE'
    case AttributeType.PHONE:
      return 'PHONE'
    case AttributeType.EMAIL:
      return 'EMAIL'
    case AttributeType.ADDRESS:
      return 'ADDRESS'
    case AttributeType.COORDINATE:
      return 'COORDINATE'
    case AttributeType.SOCIAL:
      return 'SOCIAL'
    case AttributeType.CREDENTIAL:
      return 'CREDENTIAL'
    case AttributeType.URL:
      return 'URL'
    case AttributeType.TEXT:
      return 'TEXT'
    default:
      return 'UNKNOWN'
  }
}

export interface AttributeGroup {
  id: number
  name: string
  sortOrder: number
}

export interface Attribute {
  id: number
  name: string
  type: AttributeType
  value: AttributeValue | undefined
  groupId: number
  sortOrder: number
  verifiedAt: number
  verifyExpiry: number
}

export interface AttributeValue {
  phone: Phone | undefined
  email: string
  address: Address | undefined
  coordinates: Coordinates | undefined
  social: Social | undefined
  credential: Credential | undefined
  url: string
  text: string
}

export interface Phone {
  number: number
  extension: number
  smsEnabled: boolean
}

export interface Address {
  streetAddress1: string
  streetAddress2: string
  locality: string
  region: string
  postalCode: string
  country: Country
}

/** Precise to 0.00001 (divide by 10^5 to get actual) */
export interface Coordinates {
  latitude: number
  longitude: number
}

export interface Social {
  network: SocialNetwork
  domain: string
  handle: string
}

export interface Credential {
  identity: string
  passcode: string
}

export interface State {
  attributes: Attribute[]
  expiredAttributeIds: number[]
  attributeGroups: AttributeGroup[]
  expiredGroupIds: number[]
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

function createBaseAttribute(): Attribute {
  return {
    id: 0,
    name: '',
    type: 0,
    value: undefined,
    groupId: 0,
    sortOrder: 0,
    verifiedAt: 0,
    verifyExpiry: 0
  }
}

export const Attribute = {
  encode(
    message: Attribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type)
    }
    if (message.value !== undefined) {
      AttributeValue.encode(message.value, writer.uint32(34).fork()).ldelim()
    }
    if (message.groupId !== 0) {
      writer.uint32(48).uint32(message.groupId)
    }
    if (message.sortOrder !== 0) {
      writer.uint32(56).uint32(message.sortOrder)
    }
    if (message.verifiedAt !== 0) {
      writer.uint32(64).uint32(message.verifiedAt)
    }
    if (message.verifyExpiry !== 0) {
      writer.uint32(72).uint32(message.verifyExpiry)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAttribute()
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
          message.type = reader.int32() as any
          break
        case 4:
          message.value = AttributeValue.decode(reader, reader.uint32())
          break
        case 6:
          message.groupId = reader.uint32()
          break
        case 7:
          message.sortOrder = reader.uint32()
          break
        case 8:
          message.verifiedAt = reader.uint32()
          break
        case 9:
          message.verifyExpiry = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Attribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
      value: isSet(object.value)
        ? AttributeValue.fromJSON(object.value)
        : undefined,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      sortOrder: isSet(object.sortOrder) ? Number(object.sortOrder) : 0,
      verifiedAt: isSet(object.verifiedAt) ? Number(object.verifiedAt) : 0,
      verifyExpiry: isSet(object.verifyExpiry) ? Number(object.verifyExpiry) : 0
    }
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.name !== undefined && (obj.name = message.name)
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type))
    message.value !== undefined &&
      (obj.value = message.value
        ? AttributeValue.toJSON(message.value)
        : undefined)
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId))
    message.sortOrder !== undefined &&
      (obj.sortOrder = Math.round(message.sortOrder))
    message.verifiedAt !== undefined &&
      (obj.verifiedAt = Math.round(message.verifiedAt))
    message.verifyExpiry !== undefined &&
      (obj.verifyExpiry = Math.round(message.verifyExpiry))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(
    object: I
  ): Attribute {
    const message = createBaseAttribute()
    message.id = object.id ?? 0
    message.name = object.name ?? ''
    message.type = object.type ?? 0
    message.value =
      object.value !== undefined && object.value !== null
        ? AttributeValue.fromPartial(object.value)
        : undefined
    message.groupId = object.groupId ?? 0
    message.sortOrder = object.sortOrder ?? 0
    message.verifiedAt = object.verifiedAt ?? 0
    message.verifyExpiry = object.verifyExpiry ?? 0
    return message
  }
}

function createBaseAttributeValue(): AttributeValue {
  return {
    phone: undefined,
    email: '',
    address: undefined,
    coordinates: undefined,
    social: undefined,
    credential: undefined,
    url: '',
    text: ''
  }
}

export const AttributeValue = {
  encode(
    message: AttributeValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(10).fork()).ldelim()
    }
    if (message.email !== '') {
      writer.uint32(18).string(message.email)
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(26).fork()).ldelim()
    }
    if (message.coordinates !== undefined) {
      Coordinates.encode(message.coordinates, writer.uint32(34).fork()).ldelim()
    }
    if (message.social !== undefined) {
      Social.encode(message.social, writer.uint32(42).fork()).ldelim()
    }
    if (message.credential !== undefined) {
      Credential.encode(message.credential, writer.uint32(50).fork()).ldelim()
    }
    if (message.url !== '') {
      writer.uint32(58).string(message.url)
    }
    if (message.text !== '') {
      writer.uint32(66).string(message.text)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAttributeValue()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.phone = Phone.decode(reader, reader.uint32())
          break
        case 2:
          message.email = reader.string()
          break
        case 3:
          message.address = Address.decode(reader, reader.uint32())
          break
        case 4:
          message.coordinates = Coordinates.decode(reader, reader.uint32())
          break
        case 5:
          message.social = Social.decode(reader, reader.uint32())
          break
        case 6:
          message.credential = Credential.decode(reader, reader.uint32())
          break
        case 7:
          message.url = reader.string()
          break
        case 8:
          message.text = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AttributeValue {
    return {
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      email: isSet(object.email) ? String(object.email) : '',
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
      coordinates: isSet(object.coordinates)
        ? Coordinates.fromJSON(object.coordinates)
        : undefined,
      social: isSet(object.social) ? Social.fromJSON(object.social) : undefined,
      credential: isSet(object.credential)
        ? Credential.fromJSON(object.credential)
        : undefined,
      url: isSet(object.url) ? String(object.url) : '',
      text: isSet(object.text) ? String(object.text) : ''
    }
  },

  toJSON(message: AttributeValue): unknown {
    const obj: any = {}
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.email !== undefined && (obj.email = message.email)
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined)
    message.coordinates !== undefined &&
      (obj.coordinates = message.coordinates
        ? Coordinates.toJSON(message.coordinates)
        : undefined)
    message.social !== undefined &&
      (obj.social = message.social ? Social.toJSON(message.social) : undefined)
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? Credential.toJSON(message.credential)
        : undefined)
    message.url !== undefined && (obj.url = message.url)
    message.text !== undefined && (obj.text = message.text)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AttributeValue>, I>>(
    object: I
  ): AttributeValue {
    const message = createBaseAttributeValue()
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined
    message.email = object.email ?? ''
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined
    message.coordinates =
      object.coordinates !== undefined && object.coordinates !== null
        ? Coordinates.fromPartial(object.coordinates)
        : undefined
    message.social =
      object.social !== undefined && object.social !== null
        ? Social.fromPartial(object.social)
        : undefined
    message.credential =
      object.credential !== undefined && object.credential !== null
        ? Credential.fromPartial(object.credential)
        : undefined
    message.url = object.url ?? ''
    message.text = object.text ?? ''
    return message
  }
}

function createBasePhone(): Phone {
  return { number: 0, extension: 0, smsEnabled: false }
}

export const Phone = {
  encode(message: Phone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== 0) {
      writer.uint32(8).uint64(message.number)
    }
    if (message.extension !== 0) {
      writer.uint32(16).uint32(message.extension)
    }
    if (message.smsEnabled === true) {
      writer.uint32(24).bool(message.smsEnabled)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Phone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePhone()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.number = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.extension = reader.uint32()
          break
        case 3:
          message.smsEnabled = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Phone {
    return {
      number: isSet(object.number) ? Number(object.number) : 0,
      extension: isSet(object.extension) ? Number(object.extension) : 0,
      smsEnabled: isSet(object.smsEnabled) ? Boolean(object.smsEnabled) : false
    }
  },

  toJSON(message: Phone): unknown {
    const obj: any = {}
    message.number !== undefined && (obj.number = Math.round(message.number))
    message.extension !== undefined &&
      (obj.extension = Math.round(message.extension))
    message.smsEnabled !== undefined && (obj.smsEnabled = message.smsEnabled)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Phone>, I>>(object: I): Phone {
    const message = createBasePhone()
    message.number = object.number ?? 0
    message.extension = object.extension ?? 0
    message.smsEnabled = object.smsEnabled ?? false
    return message
  }
}

function createBaseAddress(): Address {
  return {
    streetAddress1: '',
    streetAddress2: '',
    locality: '',
    region: '',
    postalCode: '',
    country: 0
  }
}

export const Address = {
  encode(
    message: Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streetAddress1 !== '') {
      writer.uint32(10).string(message.streetAddress1)
    }
    if (message.streetAddress2 !== '') {
      writer.uint32(18).string(message.streetAddress2)
    }
    if (message.locality !== '') {
      writer.uint32(26).string(message.locality)
    }
    if (message.region !== '') {
      writer.uint32(34).string(message.region)
    }
    if (message.postalCode !== '') {
      writer.uint32(42).string(message.postalCode)
    }
    if (message.country !== 0) {
      writer.uint32(48).int32(message.country)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAddress()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.streetAddress1 = reader.string()
          break
        case 2:
          message.streetAddress2 = reader.string()
          break
        case 3:
          message.locality = reader.string()
          break
        case 4:
          message.region = reader.string()
          break
        case 5:
          message.postalCode = reader.string()
          break
        case 6:
          message.country = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Address {
    return {
      streetAddress1: isSet(object.streetAddress1)
        ? String(object.streetAddress1)
        : '',
      streetAddress2: isSet(object.streetAddress2)
        ? String(object.streetAddress2)
        : '',
      locality: isSet(object.locality) ? String(object.locality) : '',
      region: isSet(object.region) ? String(object.region) : '',
      postalCode: isSet(object.postalCode) ? String(object.postalCode) : '',
      country: isSet(object.country) ? countryFromJSON(object.country) : 0
    }
  },

  toJSON(message: Address): unknown {
    const obj: any = {}
    message.streetAddress1 !== undefined &&
      (obj.streetAddress1 = message.streetAddress1)
    message.streetAddress2 !== undefined &&
      (obj.streetAddress2 = message.streetAddress2)
    message.locality !== undefined && (obj.locality = message.locality)
    message.region !== undefined && (obj.region = message.region)
    message.postalCode !== undefined && (obj.postalCode = message.postalCode)
    message.country !== undefined &&
      (obj.country = countryToJSON(message.country))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress()
    message.streetAddress1 = object.streetAddress1 ?? ''
    message.streetAddress2 = object.streetAddress2 ?? ''
    message.locality = object.locality ?? ''
    message.region = object.region ?? ''
    message.postalCode = object.postalCode ?? ''
    message.country = object.country ?? 0
    return message
  }
}

function createBaseCoordinates(): Coordinates {
  return { latitude: 0, longitude: 0 }
}

export const Coordinates = {
  encode(
    message: Coordinates,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.latitude !== 0) {
      writer.uint32(13).sfixed32(message.latitude)
    }
    if (message.longitude !== 0) {
      writer.uint32(21).sfixed32(message.longitude)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coordinates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCoordinates()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.latitude = reader.sfixed32()
          break
        case 2:
          message.longitude = reader.sfixed32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Coordinates {
    return {
      latitude: isSet(object.latitude) ? Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? Number(object.longitude) : 0
    }
  },

  toJSON(message: Coordinates): unknown {
    const obj: any = {}
    message.latitude !== undefined &&
      (obj.latitude = Math.round(message.latitude))
    message.longitude !== undefined &&
      (obj.longitude = Math.round(message.longitude))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Coordinates>, I>>(
    object: I
  ): Coordinates {
    const message = createBaseCoordinates()
    message.latitude = object.latitude ?? 0
    message.longitude = object.longitude ?? 0
    return message
  }
}

function createBaseSocial(): Social {
  return { network: 0, domain: '', handle: '' }
}

export const Social = {
  encode(
    message: Social,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).int32(message.network)
    }
    if (message.domain !== '') {
      writer.uint32(18).string(message.domain)
    }
    if (message.handle !== '') {
      writer.uint32(26).string(message.handle)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Social {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSocial()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.network = reader.int32() as any
          break
        case 2:
          message.domain = reader.string()
          break
        case 3:
          message.handle = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Social {
    return {
      network: isSet(object.network)
        ? socialNetworkFromJSON(object.network)
        : 0,
      domain: isSet(object.domain) ? String(object.domain) : '',
      handle: isSet(object.handle) ? String(object.handle) : ''
    }
  },

  toJSON(message: Social): unknown {
    const obj: any = {}
    message.network !== undefined &&
      (obj.network = socialNetworkToJSON(message.network))
    message.domain !== undefined && (obj.domain = message.domain)
    message.handle !== undefined && (obj.handle = message.handle)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Social>, I>>(object: I): Social {
    const message = createBaseSocial()
    message.network = object.network ?? 0
    message.domain = object.domain ?? ''
    message.handle = object.handle ?? ''
    return message
  }
}

function createBaseCredential(): Credential {
  return { identity: '', passcode: '' }
}

export const Credential = {
  encode(
    message: Credential,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identity !== '') {
      writer.uint32(10).string(message.identity)
    }
    if (message.passcode !== '') {
      writer.uint32(18).string(message.passcode)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Credential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCredential()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.identity = reader.string()
          break
        case 2:
          message.passcode = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Credential {
    return {
      identity: isSet(object.identity) ? String(object.identity) : '',
      passcode: isSet(object.passcode) ? String(object.passcode) : ''
    }
  },

  toJSON(message: Credential): unknown {
    const obj: any = {}
    message.identity !== undefined && (obj.identity = message.identity)
    message.passcode !== undefined && (obj.passcode = message.passcode)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Credential>, I>>(
    object: I
  ): Credential {
    const message = createBaseCredential()
    message.identity = object.identity ?? ''
    message.passcode = object.passcode ?? ''
    return message
  }
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

declare var self: any | undefined
declare var window: any | undefined
declare var global: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
