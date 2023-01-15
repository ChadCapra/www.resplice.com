/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Address, Phone, Coordinates } from './attributes'

export enum MessageDirection {
  DIRECTION_UNKNOWN = 0,
  OUTBOUND = 1,
  INBOUND = 2,
  UNRECOGNIZED = -1
}

export function messageDirectionFromJSON(object: any): MessageDirection {
  switch (object) {
    case 0:
    case 'DIRECTION_UNKNOWN':
      return MessageDirection.DIRECTION_UNKNOWN
    case 1:
    case 'OUTBOUND':
      return MessageDirection.OUTBOUND
    case 2:
    case 'INBOUND':
      return MessageDirection.INBOUND
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MessageDirection.UNRECOGNIZED
  }
}

export function messageDirectionToJSON(object: MessageDirection): string {
  switch (object) {
    case MessageDirection.DIRECTION_UNKNOWN:
      return 'DIRECTION_UNKNOWN'
    case MessageDirection.OUTBOUND:
      return 'OUTBOUND'
    case MessageDirection.INBOUND:
      return 'INBOUND'
    default:
      return 'UNKNOWN'
  }
}

export enum MessageDelivery {
  DELIVERY_UNKNOWN = 0,
  IMMEDIATE = 1,
  DELAYED = 2,
  UNRECOGNIZED = -1
}

export function messageDeliveryFromJSON(object: any): MessageDelivery {
  switch (object) {
    case 0:
    case 'DELIVERY_UNKNOWN':
      return MessageDelivery.DELIVERY_UNKNOWN
    case 1:
    case 'IMMEDIATE':
      return MessageDelivery.IMMEDIATE
    case 2:
    case 'DELAYED':
      return MessageDelivery.DELAYED
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MessageDelivery.UNRECOGNIZED
  }
}

export function messageDeliveryToJSON(object: MessageDelivery): string {
  switch (object) {
    case MessageDelivery.DELIVERY_UNKNOWN:
      return 'DELIVERY_UNKNOWN'
    case MessageDelivery.IMMEDIATE:
      return 'IMMEDIATE'
    case MessageDelivery.DELAYED:
      return 'DELAYED'
    default:
      return 'UNKNOWN'
  }
}

export enum MessageType {
  TYPE_UNKNOWN = 0,
  ATTRIBUTE_SHARE = 1,
  TEXT = 2,
  IMAGE = 3,
  EVENT = 4,
  RSVP = 5,
  LIST = 6,
  SELECTION = 7,
  REACTION = 8,
  UNRECOGNIZED = -1
}

export function messageTypeFromJSON(object: any): MessageType {
  switch (object) {
    case 0:
    case 'TYPE_UNKNOWN':
      return MessageType.TYPE_UNKNOWN
    case 1:
    case 'ATTRIBUTE_SHARE':
      return MessageType.ATTRIBUTE_SHARE
    case 2:
    case 'TEXT':
      return MessageType.TEXT
    case 3:
    case 'IMAGE':
      return MessageType.IMAGE
    case 4:
    case 'EVENT':
      return MessageType.EVENT
    case 5:
    case 'RSVP':
      return MessageType.RSVP
    case 6:
    case 'LIST':
      return MessageType.LIST
    case 7:
    case 'SELECTION':
      return MessageType.SELECTION
    case 8:
    case 'REACTION':
      return MessageType.REACTION
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MessageType.UNRECOGNIZED
  }
}

export function messageTypeToJSON(object: MessageType): string {
  switch (object) {
    case MessageType.TYPE_UNKNOWN:
      return 'TYPE_UNKNOWN'
    case MessageType.ATTRIBUTE_SHARE:
      return 'ATTRIBUTE_SHARE'
    case MessageType.TEXT:
      return 'TEXT'
    case MessageType.IMAGE:
      return 'IMAGE'
    case MessageType.EVENT:
      return 'EVENT'
    case MessageType.RSVP:
      return 'RSVP'
    case MessageType.LIST:
      return 'LIST'
    case MessageType.SELECTION:
      return 'SELECTION'
    case MessageType.REACTION:
      return 'REACTION'
    default:
      return 'UNKNOWN'
  }
}

export enum ListType {
  LIST_TYPE_UNKNOWN = 0,
  BULLET = 1,
  POLL = 2,
  SIGN_UP = 3,
  CHECKLIST = 4,
  UNRECOGNIZED = -1
}

export function listTypeFromJSON(object: any): ListType {
  switch (object) {
    case 0:
    case 'LIST_TYPE_UNKNOWN':
      return ListType.LIST_TYPE_UNKNOWN
    case 1:
    case 'BULLET':
      return ListType.BULLET
    case 2:
    case 'POLL':
      return ListType.POLL
    case 3:
    case 'SIGN_UP':
      return ListType.SIGN_UP
    case 4:
    case 'CHECKLIST':
      return ListType.CHECKLIST
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ListType.UNRECOGNIZED
  }
}

export function listTypeToJSON(object: ListType): string {
  switch (object) {
    case ListType.LIST_TYPE_UNKNOWN:
      return 'LIST_TYPE_UNKNOWN'
    case ListType.BULLET:
      return 'BULLET'
    case ListType.POLL:
      return 'POLL'
    case ListType.SIGN_UP:
      return 'SIGN_UP'
    case ListType.CHECKLIST:
      return 'CHECKLIST'
    default:
      return 'UNKNOWN'
  }
}

export interface MessageValue {
  attributeShare: AttributeShare | undefined
  text: Text | undefined
  image: Image | undefined
  event: Event | undefined
  rsvp: Rsvp | undefined
  list: List | undefined
  selection: Selection | undefined
  reaction: Reaction | undefined
}

export interface DirectMessage {
  uuid: string
  contactUuid: string
  messageDirection: MessageDirection
  messageType: MessageType
  messageValue: MessageValue | undefined
  deliveryAt: number
  isPendingDelivery: boolean
}

export interface GetDirectMessagesResponse {
  requestedAt: number
  messages: DirectMessage[]
  expiredUuids: string[]
}

export interface SendDirectMessageRequest {
  contactUuid: string
  messageDelivery: MessageDelivery
  deliverAt: number
  messageType: MessageType
  messageValue: MessageValue | undefined
}

export interface EditDirectMessageRequest {
  messageUuid: string
  messageType: MessageType
  messageValue: MessageValue | undefined
}

export interface EditMessageDeliveryRequest {
  messageUuid: string
  messageDelivery: MessageDelivery
  deliverAt: number
}

export interface AttributeShare {
  attributeUuid: string
}

export interface Text {
  text: string
  replyToUuid: string
}

export interface Image {
  image: string
  caption: string
  replyToUuid: string
}

export interface Event {
  title: string
  description: string
  startAt: number
  duration: number
  timezone: string
  rsvpOptions: string
  address: Address | undefined
  phone: Phone | undefined
  email: string
  coordinates: Coordinates | undefined
}

export interface Rsvp {
  rsvp: string
  eventUuid: string
}

export interface List {
  title: string
  listType: ListType
  items: string[]
  allowWriteInSelection: boolean
  allowMultipleSelections: boolean
  isAnonymous: boolean
}

export interface Selection {
  choice: string
  listUuid: string
}

export interface Reaction {
  reaction: string
  messageUuid: string
}

function createBaseMessageValue(): MessageValue {
  return {
    attributeShare: undefined,
    text: undefined,
    image: undefined,
    event: undefined,
    rsvp: undefined,
    list: undefined,
    selection: undefined,
    reaction: undefined
  }
}

export const MessageValue = {
  encode(
    message: MessageValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attributeShare !== undefined) {
      AttributeShare.encode(
        message.attributeShare,
        writer.uint32(10).fork()
      ).ldelim()
    }
    if (message.text !== undefined) {
      Text.encode(message.text, writer.uint32(18).fork()).ldelim()
    }
    if (message.image !== undefined) {
      Image.encode(message.image, writer.uint32(26).fork()).ldelim()
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(34).fork()).ldelim()
    }
    if (message.rsvp !== undefined) {
      Rsvp.encode(message.rsvp, writer.uint32(42).fork()).ldelim()
    }
    if (message.list !== undefined) {
      List.encode(message.list, writer.uint32(50).fork()).ldelim()
    }
    if (message.selection !== undefined) {
      Selection.encode(message.selection, writer.uint32(58).fork()).ldelim()
    }
    if (message.reaction !== undefined) {
      Reaction.encode(message.reaction, writer.uint32(66).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMessageValue()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.attributeShare = AttributeShare.decode(
            reader,
            reader.uint32()
          )
          break
        case 2:
          message.text = Text.decode(reader, reader.uint32())
          break
        case 3:
          message.image = Image.decode(reader, reader.uint32())
          break
        case 4:
          message.event = Event.decode(reader, reader.uint32())
          break
        case 5:
          message.rsvp = Rsvp.decode(reader, reader.uint32())
          break
        case 6:
          message.list = List.decode(reader, reader.uint32())
          break
        case 7:
          message.selection = Selection.decode(reader, reader.uint32())
          break
        case 8:
          message.reaction = Reaction.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MessageValue {
    return {
      attributeShare: isSet(object.attributeShare)
        ? AttributeShare.fromJSON(object.attributeShare)
        : undefined,
      text: isSet(object.text) ? Text.fromJSON(object.text) : undefined,
      image: isSet(object.image) ? Image.fromJSON(object.image) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      rsvp: isSet(object.rsvp) ? Rsvp.fromJSON(object.rsvp) : undefined,
      list: isSet(object.list) ? List.fromJSON(object.list) : undefined,
      selection: isSet(object.selection)
        ? Selection.fromJSON(object.selection)
        : undefined,
      reaction: isSet(object.reaction)
        ? Reaction.fromJSON(object.reaction)
        : undefined
    }
  },

  toJSON(message: MessageValue): unknown {
    const obj: any = {}
    message.attributeShare !== undefined &&
      (obj.attributeShare = message.attributeShare
        ? AttributeShare.toJSON(message.attributeShare)
        : undefined)
    message.text !== undefined &&
      (obj.text = message.text ? Text.toJSON(message.text) : undefined)
    message.image !== undefined &&
      (obj.image = message.image ? Image.toJSON(message.image) : undefined)
    message.event !== undefined &&
      (obj.event = message.event ? Event.toJSON(message.event) : undefined)
    message.rsvp !== undefined &&
      (obj.rsvp = message.rsvp ? Rsvp.toJSON(message.rsvp) : undefined)
    message.list !== undefined &&
      (obj.list = message.list ? List.toJSON(message.list) : undefined)
    message.selection !== undefined &&
      (obj.selection = message.selection
        ? Selection.toJSON(message.selection)
        : undefined)
    message.reaction !== undefined &&
      (obj.reaction = message.reaction
        ? Reaction.toJSON(message.reaction)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MessageValue>, I>>(
    object: I
  ): MessageValue {
    const message = createBaseMessageValue()
    message.attributeShare =
      object.attributeShare !== undefined && object.attributeShare !== null
        ? AttributeShare.fromPartial(object.attributeShare)
        : undefined
    message.text =
      object.text !== undefined && object.text !== null
        ? Text.fromPartial(object.text)
        : undefined
    message.image =
      object.image !== undefined && object.image !== null
        ? Image.fromPartial(object.image)
        : undefined
    message.event =
      object.event !== undefined && object.event !== null
        ? Event.fromPartial(object.event)
        : undefined
    message.rsvp =
      object.rsvp !== undefined && object.rsvp !== null
        ? Rsvp.fromPartial(object.rsvp)
        : undefined
    message.list =
      object.list !== undefined && object.list !== null
        ? List.fromPartial(object.list)
        : undefined
    message.selection =
      object.selection !== undefined && object.selection !== null
        ? Selection.fromPartial(object.selection)
        : undefined
    message.reaction =
      object.reaction !== undefined && object.reaction !== null
        ? Reaction.fromPartial(object.reaction)
        : undefined
    return message
  }
}

function createBaseDirectMessage(): DirectMessage {
  return {
    uuid: '',
    contactUuid: '',
    messageDirection: 0,
    messageType: 0,
    messageValue: undefined,
    deliveryAt: 0,
    isPendingDelivery: false
  }
}

export const DirectMessage = {
  encode(
    message: DirectMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== '') {
      writer.uint32(10).string(message.uuid)
    }
    if (message.contactUuid !== '') {
      writer.uint32(18).string(message.contactUuid)
    }
    if (message.messageDirection !== 0) {
      writer.uint32(24).int32(message.messageDirection)
    }
    if (message.messageType !== 0) {
      writer.uint32(32).int32(message.messageType)
    }
    if (message.messageValue !== undefined) {
      MessageValue.encode(
        message.messageValue,
        writer.uint32(42).fork()
      ).ldelim()
    }
    if (message.deliveryAt !== 0) {
      writer.uint32(48).uint32(message.deliveryAt)
    }
    if (message.isPendingDelivery === true) {
      writer.uint32(56).bool(message.isPendingDelivery)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DirectMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDirectMessage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string()
          break
        case 2:
          message.contactUuid = reader.string()
          break
        case 3:
          message.messageDirection = reader.int32() as any
          break
        case 4:
          message.messageType = reader.int32() as any
          break
        case 5:
          message.messageValue = MessageValue.decode(reader, reader.uint32())
          break
        case 6:
          message.deliveryAt = reader.uint32()
          break
        case 7:
          message.isPendingDelivery = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DirectMessage {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : '',
      contactUuid: isSet(object.contactUuid) ? String(object.contactUuid) : '',
      messageDirection: isSet(object.messageDirection)
        ? messageDirectionFromJSON(object.messageDirection)
        : 0,
      messageType: isSet(object.messageType)
        ? messageTypeFromJSON(object.messageType)
        : 0,
      messageValue: isSet(object.messageValue)
        ? MessageValue.fromJSON(object.messageValue)
        : undefined,
      deliveryAt: isSet(object.deliveryAt) ? Number(object.deliveryAt) : 0,
      isPendingDelivery: isSet(object.isPendingDelivery)
        ? Boolean(object.isPendingDelivery)
        : false
    }
  },

  toJSON(message: DirectMessage): unknown {
    const obj: any = {}
    message.uuid !== undefined && (obj.uuid = message.uuid)
    message.contactUuid !== undefined && (obj.contactUuid = message.contactUuid)
    message.messageDirection !== undefined &&
      (obj.messageDirection = messageDirectionToJSON(message.messageDirection))
    message.messageType !== undefined &&
      (obj.messageType = messageTypeToJSON(message.messageType))
    message.messageValue !== undefined &&
      (obj.messageValue = message.messageValue
        ? MessageValue.toJSON(message.messageValue)
        : undefined)
    message.deliveryAt !== undefined &&
      (obj.deliveryAt = Math.round(message.deliveryAt))
    message.isPendingDelivery !== undefined &&
      (obj.isPendingDelivery = message.isPendingDelivery)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<DirectMessage>, I>>(
    object: I
  ): DirectMessage {
    const message = createBaseDirectMessage()
    message.uuid = object.uuid ?? ''
    message.contactUuid = object.contactUuid ?? ''
    message.messageDirection = object.messageDirection ?? 0
    message.messageType = object.messageType ?? 0
    message.messageValue =
      object.messageValue !== undefined && object.messageValue !== null
        ? MessageValue.fromPartial(object.messageValue)
        : undefined
    message.deliveryAt = object.deliveryAt ?? 0
    message.isPendingDelivery = object.isPendingDelivery ?? false
    return message
  }
}

function createBaseGetDirectMessagesResponse(): GetDirectMessagesResponse {
  return { requestedAt: 0, messages: [], expiredUuids: [] }
}

export const GetDirectMessagesResponse = {
  encode(
    message: GetDirectMessagesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestedAt !== 0) {
      writer.uint32(8).uint32(message.requestedAt)
    }
    for (const v of message.messages) {
      DirectMessage.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.expiredUuids) {
      writer.uint32(26).string(v!)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDirectMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGetDirectMessagesResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requestedAt = reader.uint32()
          break
        case 2:
          message.messages.push(DirectMessage.decode(reader, reader.uint32()))
          break
        case 3:
          message.expiredUuids.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GetDirectMessagesResponse {
    return {
      requestedAt: isSet(object.requestedAt) ? Number(object.requestedAt) : 0,
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => DirectMessage.fromJSON(e))
        : [],
      expiredUuids: Array.isArray(object?.expiredUuids)
        ? object.expiredUuids.map((e: any) => String(e))
        : []
    }
  },

  toJSON(message: GetDirectMessagesResponse): unknown {
    const obj: any = {}
    message.requestedAt !== undefined &&
      (obj.requestedAt = Math.round(message.requestedAt))
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? DirectMessage.toJSON(e) : undefined
      )
    } else {
      obj.messages = []
    }
    if (message.expiredUuids) {
      obj.expiredUuids = message.expiredUuids.map((e) => e)
    } else {
      obj.expiredUuids = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<GetDirectMessagesResponse>, I>>(
    object: I
  ): GetDirectMessagesResponse {
    const message = createBaseGetDirectMessagesResponse()
    message.requestedAt = object.requestedAt ?? 0
    message.messages =
      object.messages?.map((e) => DirectMessage.fromPartial(e)) || []
    message.expiredUuids = object.expiredUuids?.map((e) => e) || []
    return message
  }
}

function createBaseSendDirectMessageRequest(): SendDirectMessageRequest {
  return {
    contactUuid: '',
    messageDelivery: 0,
    deliverAt: 0,
    messageType: 0,
    messageValue: undefined
  }
}

export const SendDirectMessageRequest = {
  encode(
    message: SendDirectMessageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactUuid !== '') {
      writer.uint32(10).string(message.contactUuid)
    }
    if (message.messageDelivery !== 0) {
      writer.uint32(16).int32(message.messageDelivery)
    }
    if (message.deliverAt !== 0) {
      writer.uint32(24).uint32(message.deliverAt)
    }
    if (message.messageType !== 0) {
      writer.uint32(32).int32(message.messageType)
    }
    if (message.messageValue !== undefined) {
      MessageValue.encode(
        message.messageValue,
        writer.uint32(42).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SendDirectMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSendDirectMessageRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contactUuid = reader.string()
          break
        case 2:
          message.messageDelivery = reader.int32() as any
          break
        case 3:
          message.deliverAt = reader.uint32()
          break
        case 4:
          message.messageType = reader.int32() as any
          break
        case 5:
          message.messageValue = MessageValue.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SendDirectMessageRequest {
    return {
      contactUuid: isSet(object.contactUuid) ? String(object.contactUuid) : '',
      messageDelivery: isSet(object.messageDelivery)
        ? messageDeliveryFromJSON(object.messageDelivery)
        : 0,
      deliverAt: isSet(object.deliverAt) ? Number(object.deliverAt) : 0,
      messageType: isSet(object.messageType)
        ? messageTypeFromJSON(object.messageType)
        : 0,
      messageValue: isSet(object.messageValue)
        ? MessageValue.fromJSON(object.messageValue)
        : undefined
    }
  },

  toJSON(message: SendDirectMessageRequest): unknown {
    const obj: any = {}
    message.contactUuid !== undefined && (obj.contactUuid = message.contactUuid)
    message.messageDelivery !== undefined &&
      (obj.messageDelivery = messageDeliveryToJSON(message.messageDelivery))
    message.deliverAt !== undefined &&
      (obj.deliverAt = Math.round(message.deliverAt))
    message.messageType !== undefined &&
      (obj.messageType = messageTypeToJSON(message.messageType))
    message.messageValue !== undefined &&
      (obj.messageValue = message.messageValue
        ? MessageValue.toJSON(message.messageValue)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SendDirectMessageRequest>, I>>(
    object: I
  ): SendDirectMessageRequest {
    const message = createBaseSendDirectMessageRequest()
    message.contactUuid = object.contactUuid ?? ''
    message.messageDelivery = object.messageDelivery ?? 0
    message.deliverAt = object.deliverAt ?? 0
    message.messageType = object.messageType ?? 0
    message.messageValue =
      object.messageValue !== undefined && object.messageValue !== null
        ? MessageValue.fromPartial(object.messageValue)
        : undefined
    return message
  }
}

function createBaseEditDirectMessageRequest(): EditDirectMessageRequest {
  return { messageUuid: '', messageType: 0, messageValue: undefined }
}

export const EditDirectMessageRequest = {
  encode(
    message: EditDirectMessageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageUuid !== '') {
      writer.uint32(10).string(message.messageUuid)
    }
    if (message.messageType !== 0) {
      writer.uint32(16).int32(message.messageType)
    }
    if (message.messageValue !== undefined) {
      MessageValue.encode(
        message.messageValue,
        writer.uint32(26).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditDirectMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditDirectMessageRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.messageUuid = reader.string()
          break
        case 2:
          message.messageType = reader.int32() as any
          break
        case 3:
          message.messageValue = MessageValue.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EditDirectMessageRequest {
    return {
      messageUuid: isSet(object.messageUuid) ? String(object.messageUuid) : '',
      messageType: isSet(object.messageType)
        ? messageTypeFromJSON(object.messageType)
        : 0,
      messageValue: isSet(object.messageValue)
        ? MessageValue.fromJSON(object.messageValue)
        : undefined
    }
  },

  toJSON(message: EditDirectMessageRequest): unknown {
    const obj: any = {}
    message.messageUuid !== undefined && (obj.messageUuid = message.messageUuid)
    message.messageType !== undefined &&
      (obj.messageType = messageTypeToJSON(message.messageType))
    message.messageValue !== undefined &&
      (obj.messageValue = message.messageValue
        ? MessageValue.toJSON(message.messageValue)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditDirectMessageRequest>, I>>(
    object: I
  ): EditDirectMessageRequest {
    const message = createBaseEditDirectMessageRequest()
    message.messageUuid = object.messageUuid ?? ''
    message.messageType = object.messageType ?? 0
    message.messageValue =
      object.messageValue !== undefined && object.messageValue !== null
        ? MessageValue.fromPartial(object.messageValue)
        : undefined
    return message
  }
}

function createBaseEditMessageDeliveryRequest(): EditMessageDeliveryRequest {
  return { messageUuid: '', messageDelivery: 0, deliverAt: 0 }
}

export const EditMessageDeliveryRequest = {
  encode(
    message: EditMessageDeliveryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageUuid !== '') {
      writer.uint32(10).string(message.messageUuid)
    }
    if (message.messageDelivery !== 0) {
      writer.uint32(16).int32(message.messageDelivery)
    }
    if (message.deliverAt !== 0) {
      writer.uint32(24).uint32(message.deliverAt)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditMessageDeliveryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditMessageDeliveryRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.messageUuid = reader.string()
          break
        case 2:
          message.messageDelivery = reader.int32() as any
          break
        case 3:
          message.deliverAt = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EditMessageDeliveryRequest {
    return {
      messageUuid: isSet(object.messageUuid) ? String(object.messageUuid) : '',
      messageDelivery: isSet(object.messageDelivery)
        ? messageDeliveryFromJSON(object.messageDelivery)
        : 0,
      deliverAt: isSet(object.deliverAt) ? Number(object.deliverAt) : 0
    }
  },

  toJSON(message: EditMessageDeliveryRequest): unknown {
    const obj: any = {}
    message.messageUuid !== undefined && (obj.messageUuid = message.messageUuid)
    message.messageDelivery !== undefined &&
      (obj.messageDelivery = messageDeliveryToJSON(message.messageDelivery))
    message.deliverAt !== undefined &&
      (obj.deliverAt = Math.round(message.deliverAt))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditMessageDeliveryRequest>, I>>(
    object: I
  ): EditMessageDeliveryRequest {
    const message = createBaseEditMessageDeliveryRequest()
    message.messageUuid = object.messageUuid ?? ''
    message.messageDelivery = object.messageDelivery ?? 0
    message.deliverAt = object.deliverAt ?? 0
    return message
  }
}

function createBaseAttributeShare(): AttributeShare {
  return { attributeUuid: '' }
}

export const AttributeShare = {
  encode(
    message: AttributeShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attributeUuid !== '') {
      writer.uint32(10).string(message.attributeUuid)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAttributeShare()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.attributeUuid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AttributeShare {
    return {
      attributeUuid: isSet(object.attributeUuid)
        ? String(object.attributeUuid)
        : ''
    }
  },

  toJSON(message: AttributeShare): unknown {
    const obj: any = {}
    message.attributeUuid !== undefined &&
      (obj.attributeUuid = message.attributeUuid)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AttributeShare>, I>>(
    object: I
  ): AttributeShare {
    const message = createBaseAttributeShare()
    message.attributeUuid = object.attributeUuid ?? ''
    return message
  }
}

function createBaseText(): Text {
  return { text: '', replyToUuid: '' }
}

export const Text = {
  encode(message: Text, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== '') {
      writer.uint32(10).string(message.text)
    }
    if (message.replyToUuid !== '') {
      writer.uint32(18).string(message.replyToUuid)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Text {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseText()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string()
          break
        case 2:
          message.replyToUuid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Text {
    return {
      text: isSet(object.text) ? String(object.text) : '',
      replyToUuid: isSet(object.replyToUuid) ? String(object.replyToUuid) : ''
    }
  },

  toJSON(message: Text): unknown {
    const obj: any = {}
    message.text !== undefined && (obj.text = message.text)
    message.replyToUuid !== undefined && (obj.replyToUuid = message.replyToUuid)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Text>, I>>(object: I): Text {
    const message = createBaseText()
    message.text = object.text ?? ''
    message.replyToUuid = object.replyToUuid ?? ''
    return message
  }
}

function createBaseImage(): Image {
  return { image: '', caption: '', replyToUuid: '' }
}

export const Image = {
  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.image !== '') {
      writer.uint32(10).string(message.image)
    }
    if (message.caption !== '') {
      writer.uint32(18).string(message.caption)
    }
    if (message.replyToUuid !== '') {
      writer.uint32(26).string(message.replyToUuid)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseImage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.image = reader.string()
          break
        case 2:
          message.caption = reader.string()
          break
        case 3:
          message.replyToUuid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Image {
    return {
      image: isSet(object.image) ? String(object.image) : '',
      caption: isSet(object.caption) ? String(object.caption) : '',
      replyToUuid: isSet(object.replyToUuid) ? String(object.replyToUuid) : ''
    }
  },

  toJSON(message: Image): unknown {
    const obj: any = {}
    message.image !== undefined && (obj.image = message.image)
    message.caption !== undefined && (obj.caption = message.caption)
    message.replyToUuid !== undefined && (obj.replyToUuid = message.replyToUuid)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Image>, I>>(object: I): Image {
    const message = createBaseImage()
    message.image = object.image ?? ''
    message.caption = object.caption ?? ''
    message.replyToUuid = object.replyToUuid ?? ''
    return message
  }
}

function createBaseEvent(): Event {
  return {
    title: '',
    description: '',
    startAt: 0,
    duration: 0,
    timezone: '',
    rsvpOptions: '',
    address: undefined,
    phone: undefined,
    email: '',
    coordinates: undefined
  }
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== '') {
      writer.uint32(10).string(message.title)
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description)
    }
    if (message.startAt !== 0) {
      writer.uint32(24).uint32(message.startAt)
    }
    if (message.duration !== 0) {
      writer.uint32(32).uint32(message.duration)
    }
    if (message.timezone !== '') {
      writer.uint32(42).string(message.timezone)
    }
    if (message.rsvpOptions !== '') {
      writer.uint32(50).string(message.rsvpOptions)
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(58).fork()).ldelim()
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(66).fork()).ldelim()
    }
    if (message.email !== '') {
      writer.uint32(74).string(message.email)
    }
    if (message.coordinates !== undefined) {
      Coordinates.encode(message.coordinates, writer.uint32(82).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEvent()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string()
          break
        case 2:
          message.description = reader.string()
          break
        case 3:
          message.startAt = reader.uint32()
          break
        case 4:
          message.duration = reader.uint32()
          break
        case 5:
          message.timezone = reader.string()
          break
        case 6:
          message.rsvpOptions = reader.string()
          break
        case 7:
          message.address = Address.decode(reader, reader.uint32())
          break
        case 8:
          message.phone = Phone.decode(reader, reader.uint32())
          break
        case 9:
          message.email = reader.string()
          break
        case 10:
          message.coordinates = Coordinates.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Event {
    return {
      title: isSet(object.title) ? String(object.title) : '',
      description: isSet(object.description) ? String(object.description) : '',
      startAt: isSet(object.startAt) ? Number(object.startAt) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      timezone: isSet(object.timezone) ? String(object.timezone) : '',
      rsvpOptions: isSet(object.rsvpOptions) ? String(object.rsvpOptions) : '',
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      email: isSet(object.email) ? String(object.email) : '',
      coordinates: isSet(object.coordinates)
        ? Coordinates.fromJSON(object.coordinates)
        : undefined
    }
  },

  toJSON(message: Event): unknown {
    const obj: any = {}
    message.title !== undefined && (obj.title = message.title)
    message.description !== undefined && (obj.description = message.description)
    message.startAt !== undefined && (obj.startAt = Math.round(message.startAt))
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration))
    message.timezone !== undefined && (obj.timezone = message.timezone)
    message.rsvpOptions !== undefined && (obj.rsvpOptions = message.rsvpOptions)
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined)
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined)
    message.email !== undefined && (obj.email = message.email)
    message.coordinates !== undefined &&
      (obj.coordinates = message.coordinates
        ? Coordinates.toJSON(message.coordinates)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent()
    message.title = object.title ?? ''
    message.description = object.description ?? ''
    message.startAt = object.startAt ?? 0
    message.duration = object.duration ?? 0
    message.timezone = object.timezone ?? ''
    message.rsvpOptions = object.rsvpOptions ?? ''
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined
    message.email = object.email ?? ''
    message.coordinates =
      object.coordinates !== undefined && object.coordinates !== null
        ? Coordinates.fromPartial(object.coordinates)
        : undefined
    return message
  }
}

function createBaseRsvp(): Rsvp {
  return { rsvp: '', eventUuid: '' }
}

export const Rsvp = {
  encode(message: Rsvp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rsvp !== '') {
      writer.uint32(10).string(message.rsvp)
    }
    if (message.eventUuid !== '') {
      writer.uint32(18).string(message.eventUuid)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rsvp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRsvp()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.rsvp = reader.string()
          break
        case 2:
          message.eventUuid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Rsvp {
    return {
      rsvp: isSet(object.rsvp) ? String(object.rsvp) : '',
      eventUuid: isSet(object.eventUuid) ? String(object.eventUuid) : ''
    }
  },

  toJSON(message: Rsvp): unknown {
    const obj: any = {}
    message.rsvp !== undefined && (obj.rsvp = message.rsvp)
    message.eventUuid !== undefined && (obj.eventUuid = message.eventUuid)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Rsvp>, I>>(object: I): Rsvp {
    const message = createBaseRsvp()
    message.rsvp = object.rsvp ?? ''
    message.eventUuid = object.eventUuid ?? ''
    return message
  }
}

function createBaseList(): List {
  return {
    title: '',
    listType: 0,
    items: [],
    allowWriteInSelection: false,
    allowMultipleSelections: false,
    isAnonymous: false
  }
}

export const List = {
  encode(message: List, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== '') {
      writer.uint32(10).string(message.title)
    }
    if (message.listType !== 0) {
      writer.uint32(16).int32(message.listType)
    }
    for (const v of message.items) {
      writer.uint32(26).string(v!)
    }
    if (message.allowWriteInSelection === true) {
      writer.uint32(32).bool(message.allowWriteInSelection)
    }
    if (message.allowMultipleSelections === true) {
      writer.uint32(40).bool(message.allowMultipleSelections)
    }
    if (message.isAnonymous === true) {
      writer.uint32(48).bool(message.isAnonymous)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): List {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseList()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string()
          break
        case 2:
          message.listType = reader.int32() as any
          break
        case 3:
          message.items.push(reader.string())
          break
        case 4:
          message.allowWriteInSelection = reader.bool()
          break
        case 5:
          message.allowMultipleSelections = reader.bool()
          break
        case 6:
          message.isAnonymous = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): List {
    return {
      title: isSet(object.title) ? String(object.title) : '',
      listType: isSet(object.listType) ? listTypeFromJSON(object.listType) : 0,
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => String(e))
        : [],
      allowWriteInSelection: isSet(object.allowWriteInSelection)
        ? Boolean(object.allowWriteInSelection)
        : false,
      allowMultipleSelections: isSet(object.allowMultipleSelections)
        ? Boolean(object.allowMultipleSelections)
        : false,
      isAnonymous: isSet(object.isAnonymous)
        ? Boolean(object.isAnonymous)
        : false
    }
  },

  toJSON(message: List): unknown {
    const obj: any = {}
    message.title !== undefined && (obj.title = message.title)
    message.listType !== undefined &&
      (obj.listType = listTypeToJSON(message.listType))
    if (message.items) {
      obj.items = message.items.map((e) => e)
    } else {
      obj.items = []
    }
    message.allowWriteInSelection !== undefined &&
      (obj.allowWriteInSelection = message.allowWriteInSelection)
    message.allowMultipleSelections !== undefined &&
      (obj.allowMultipleSelections = message.allowMultipleSelections)
    message.isAnonymous !== undefined && (obj.isAnonymous = message.isAnonymous)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<List>, I>>(object: I): List {
    const message = createBaseList()
    message.title = object.title ?? ''
    message.listType = object.listType ?? 0
    message.items = object.items?.map((e) => e) || []
    message.allowWriteInSelection = object.allowWriteInSelection ?? false
    message.allowMultipleSelections = object.allowMultipleSelections ?? false
    message.isAnonymous = object.isAnonymous ?? false
    return message
  }
}

function createBaseSelection(): Selection {
  return { choice: '', listUuid: '' }
}

export const Selection = {
  encode(
    message: Selection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.choice !== '') {
      writer.uint32(10).string(message.choice)
    }
    if (message.listUuid !== '') {
      writer.uint32(18).string(message.listUuid)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Selection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSelection()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.choice = reader.string()
          break
        case 2:
          message.listUuid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Selection {
    return {
      choice: isSet(object.choice) ? String(object.choice) : '',
      listUuid: isSet(object.listUuid) ? String(object.listUuid) : ''
    }
  },

  toJSON(message: Selection): unknown {
    const obj: any = {}
    message.choice !== undefined && (obj.choice = message.choice)
    message.listUuid !== undefined && (obj.listUuid = message.listUuid)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Selection>, I>>(
    object: I
  ): Selection {
    const message = createBaseSelection()
    message.choice = object.choice ?? ''
    message.listUuid = object.listUuid ?? ''
    return message
  }
}

function createBaseReaction(): Reaction {
  return { reaction: '', messageUuid: '' }
}

export const Reaction = {
  encode(
    message: Reaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reaction !== '') {
      writer.uint32(10).string(message.reaction)
    }
    if (message.messageUuid !== '') {
      writer.uint32(18).string(message.messageUuid)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseReaction()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.reaction = reader.string()
          break
        case 2:
          message.messageUuid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Reaction {
    return {
      reaction: isSet(object.reaction) ? String(object.reaction) : '',
      messageUuid: isSet(object.messageUuid) ? String(object.messageUuid) : ''
    }
  },

  toJSON(message: Reaction): unknown {
    const obj: any = {}
    message.reaction !== undefined && (obj.reaction = message.reaction)
    message.messageUuid !== undefined && (obj.messageUuid = message.messageUuid)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Reaction>, I>>(object: I): Reaction {
    const message = createBaseReaction()
    message.reaction = object.reaction ?? ''
    message.messageUuid = object.messageUuid ?? ''
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
