import type { Contact } from './contact.type'
import type { Attribute as BaseAttribute } from './attribute'
import type { BaseMessage } from './message.type'

export type Splice = {
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
