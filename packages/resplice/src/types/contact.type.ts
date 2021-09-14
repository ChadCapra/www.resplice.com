import type { Attribute as BaseAttribute } from './attribute.type'
import type { BaseMessage } from './message.type'

export type Contact = {
  uuid: string
  name: string
  nickName?: string
  description?: string
  tags: string[]
}

export type ContactDetail = Contact & {
  attributes: Attribute[]
  common_splices: string[]
  messages: Message[]
  pending: boolean
}

export type Attribute = BaseAttribute & {
  contact_uuid: string
}

export type Message = BaseMessage & {
  contact_uuid: string
}
