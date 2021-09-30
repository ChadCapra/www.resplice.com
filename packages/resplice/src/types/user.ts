import type { Attribute as BaseAttribute } from './attribute'
import type { BaseMessage } from './message'

export type User = {
  name: string
  avatar: string | null
  tags: string[]
  attributes: Attribute[]
}

export type Attribute = BaseAttribute

export type Message = BaseMessage

export type Invite = string
