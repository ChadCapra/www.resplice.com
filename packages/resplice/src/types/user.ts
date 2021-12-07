import type { Attribute as BaseAttribute } from './attribute'
import type { Chat as BaseChat } from './chat'

export enum MessageType {
  UPDATE_AVATAR = 'UPDATE_AVATAR',
  UPDATE_NAME = 'UPDATE_NAME'
}

export type Message = {
  type: MessageType
  data: any
}

export type User = {
  uuid: string
  name: string
  avatar: string | null
  handle: string | null
  public_access_enabled: boolean
  user_registered_at: Date
}

export type Attribute = BaseAttribute

export type Chat = BaseChat

export type Invite = string
