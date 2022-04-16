import type {
  EmailValue,
  PhoneValue,
  Share as BaseShare,
  Attribute as BaseAttribute
} from './attribute'

export enum InviteType {
  HANDLE = 'HANDLE',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  SPLICE = 'SPLICE'
}

interface BaseInvite {
  id: number
  type: InviteType
  expiry: number
}

interface HandleInvite extends BaseInvite {
  type: InviteType.HANDLE
  name: string
  handle: string
}

interface PhoneInvite extends BaseInvite {
  type: InviteType.PHONE
  name: string
  phone: PhoneValue
}

interface EmailInvite extends BaseInvite {
  type: InviteType.EMAIL
  name: string
  email: EmailValue
}

interface CommonSpliceInvite extends BaseInvite {
  type: InviteType.SPLICE
  splice_name: string
}

export type Invite =
  | HandleInvite
  | PhoneInvite
  | EmailInvite
  | CommonSpliceInvite

export type QrInvite = {
  id: number
  unlock_code: number
  expiry: number
  attributeIds: number[]
}

export type Attribute = BaseAttribute & {
  inviteId: number
  sharedOn: number
}

export type Share = BaseShare & {
  inviteId: number
}
