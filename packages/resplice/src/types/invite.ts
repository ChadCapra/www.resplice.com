import type { EmailValue, PhoneValue } from './attribute'

export type Invite = {
  name: string
  value: PhoneValue | EmailValue | string
}

export type Share = {
  uuid: string
  attribute_uuid: string
  entity_uuid: string
  exipry: string
  sort_order: number
}
