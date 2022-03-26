import type { EmailValue, PhoneValue } from './attribute'

export enum InviteType {
  HANDLE = 'HANDLE',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  SPLICE = 'SPLICE',
  QR_CODE = 'QR_CODE' // TODO: Check with proto schema
}

interface BaseInvite {
  id: number
  type: InviteType
  name: string
  value: PhoneValue | EmailValue | string | number
  expiry: number
}

interface HandleInvite extends BaseInvite {
  type: InviteType.HANDLE
  value: string
}

interface PhoneInvite extends BaseInvite {
  type: InviteType.PHONE
  value: PhoneValue
}

interface EmailInvite extends BaseInvite {
  type: InviteType.EMAIL
  value: EmailValue
}

interface SpliceInvite extends BaseInvite {
  type: InviteType.SPLICE
  value: string
}

interface QrCodeInvite extends BaseInvite {
  type: InviteType.QR_CODE
  value: number
}

export type Invite =
  | HandleInvite
  | PhoneInvite
  | EmailInvite
  | SpliceInvite
  | QrCodeInvite // TODO: Think more about QrCode Invites

export type InviteAttribute = {
  id: number
  inviteId: number
  attributeId: number
}

// TODO: Figure out if this belongs here.
export type Share = {
  id: number
  contactId: number
  attributeId: number
  sharedOn: number
}
