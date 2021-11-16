enum MessageType {
  IMMEDIDATE = 'IMMEDIDATE',
  DELAYED = 'DELAYED'
}

enum MessageDirection {
  SENT = 'SENT',
  RECEIVED = 'RECEIVED'
}

enum ContentType {
  ATTRIBUTE_SHARE = 'ATTRIBUTE_SHARE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  EVENT = 'EVENT',
  EVENT_RSVP = 'EVENT_RSVP',
  POLL = 'POLL',
  POLL_RESPONSE = 'POLL_RESPONSE',
  REACTION = 'REACTION'
}

interface BaseMessage {
  type: MessageType
  uuid: string
  contact_uuid: string
  direction: MessageDirection
  sent_at: Date
  expiry: Date
}

type AttributeShareContent = {
  attribute_uuid: string
}
export interface AttributeShareMessage extends BaseMessage {
  content_type: ContentType.ATTRIBUTE_SHARE
  content: AttributeShareContent
}

type TextContent = {
  text: string
  reply_to_uuid: string
}
export interface TextMessage extends BaseMessage {
  content_type: ContentType.TEXT
  content: TextContent
}

type ImageContent = {
  url: string
  caption: string
  reply_to_uuid: string
}
export interface ImageMessage extends BaseMessage {
  content_type: ContentType.IMAGE
  content: ImageContent
}

type EventContent = {
  title: string
  description: string
  start_at: Date
  duration: number // seconds after start_date
  timezone: string
  rsvp_options: string[]
  address: any
  phone: any
  email: any
  coordinates: any
}
export interface EventMessage extends BaseMessage {
  content_type: ContentType.EVENT
  content: EventContent
}

type EventRsvpContent = {
  rsvp: string
  event_uuid: string
}
export interface EventRsvpMessage extends BaseMessage {
  content_type: ContentType.EVENT_RSVP
  content: EventRsvpContent
}

type PollContent = {
  question: string
  responseOptions: string[]
  allow_write_in: boolean
  allow_multiple_responses: boolean
  anonymous_responses: boolean
}
export interface PollMessage extends BaseMessage {
  content_type: ContentType.POLL
  content: PollContent
}

type PollResponseContent = {
  response: string
  poll_uuid: string
}
export interface PollResponseMessage extends BaseMessage {
  content_type: ContentType.POLL_RESPONSE
  content: PollResponseContent
}

type ReactionContent = {
  reaction: string
  message_uuid: string
}
export interface ReactionMessage extends BaseMessage {
  content_type: ContentType.REACTION
  content: ReactionContent
}

export type Message =
  | AttributeShareMessage
  | TextMessage
  | ImageMessage
  | EventMessage
  | EventRsvpMessage
  | PollMessage
  | PollResponseMessage
  | ReactionMessage
