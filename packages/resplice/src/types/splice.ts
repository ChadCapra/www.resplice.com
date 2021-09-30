import type { Contact } from './contact'
import type { Attribute as BaseAttribute } from './attribute'
import type { BaseMessage } from './message'

export type Splice = {
  uuid: string
  name: string
  members: Contact[]
  latest_message: Message
  latest_attribute: Attribute
  missed_messages: number
}

export type SpliceDetail = Splice & {
  messages: Message[]
  attributes: Attribute[]
}

export type Attribute = BaseAttribute & {
  splice_uuid: string
}

export type Message = BaseMessage & {
  splice_uuid: string
}

export type Plan = {
  uuid: string
}
