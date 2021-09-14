import type { Attribute as BaseAttribute } from './attribute.type'
import type { BaseMessage } from './message.type'

export type User = {
  name: string
  avatar: string | null
  tags: string[]
  attributes: Attribute[]
}

export type Attribute = BaseAttribute

export type Message = BaseMessage
