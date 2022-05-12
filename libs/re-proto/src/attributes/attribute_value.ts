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
} from '../attributes/attribute_type'

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
