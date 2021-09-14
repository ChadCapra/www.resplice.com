import type { EmailValue, PhoneValue } from './attribute.type'

export type Invite = {
  name: string
  value: PhoneValue | EmailValue
}

export type Share = {
  uuid: string
  attribute_uuid: string
  entity_uuid: string
  exipry: string
  sort_order: number
}
