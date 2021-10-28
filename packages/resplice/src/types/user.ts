import type { Attribute as BaseAttribute } from './attribute'
import type { Message as BaseMessage } from './message'

export type User = {
  uuid: string
  name: string
  avatar: string | null
  handle: string | null
  public_access_enabled: boolean
  user_registered_at: Date
}

export type Attribute = BaseAttribute

export type Message = BaseMessage

export type Invite = string
