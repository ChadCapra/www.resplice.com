import type { Attribute as BaseAttribute } from './attribute'
import type { Message as BaseMessage } from './message'

export type User = {
  uuid: string
  name: string
  avatar: string | null
  tags: string[]
  attributes: Attribute[]
}

export type Attribute = BaseAttribute

export type Message = BaseMessage

export type Invite = string
