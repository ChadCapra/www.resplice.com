import type { Attribute as BaseAttribute } from './attribute'
import type { BaseMessage } from './message'

export enum ContactType {
  CONTACT = 'CONTACT',
  PENDING = 'PENDING',
  INVITED = 'INVITED'
}
export type Contact = {
  uuid: string
  type: ContactType
  name: string
  avatar_url?: string
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
