export enum AttributeType {
  Address = 'ADDRESS',
  Credential = 'CREDENTIAL',
  Date = 'DATE',
  Email = 'EMAIL',
  Phone = 'PHONE',
  Social = 'SOCIAL',
  Text = 'TEXT',
  Unknown = 'UNKNOWN'
}
export type AttributeValue =
  | AddressValue
  | CredentialValue
  | DateValue
  | EmailValue
  | PhoneValue
  | SocialValue
  | TextValue
  | UnknownValue
interface BaseAttribute {
  uuid: string
  type: AttributeType
  name: string
  value: AttributeValue
  sort_order: number
}

export interface Address extends BaseAttribute {
  type: AttributeType.Address
  value: AddressValue
}
export type AddressValue = {
  address_1: string
  address_2?: string
  locality: string
  region: string
  postal_code: string
  country: string
  planet?: string
}

export interface Credential extends BaseAttribute {
  type: AttributeType.Credential
  value: CredentialValue
}
export type CredentialValue = {
  identity: string
  passcode: string
}

export interface Date extends BaseAttribute {
  type: AttributeType.Date
  value: DateValue
}
export type DateValue = {
  date: number
}

export interface Email extends BaseAttribute {
  type: AttributeType.Email
  value: EmailValue
}
export type EmailValue = {
  email: string
}

export interface Phone extends BaseAttribute {
  type: AttributeType.Phone
  value: PhoneValue
}
export type PhoneValue = {
  countryCallingCode: string
  number: string
  extension: string
  isSms: boolean
}

export interface Social extends BaseAttribute {
  type: AttributeType.Social
  value: SocialValue
}
export type SocialValue = {
  provider: string
  handle: string
}

export interface Text extends BaseAttribute {
  type: AttributeType.Text
  value: TextValue
}
export type TextValue = {
  text: string
}

export interface Unknown extends BaseAttribute {
  type: AttributeType.Unknown
  value: UnknownValue
}
export type UnknownValue = Record<string, unknown>

export type Attribute =
  | Address
  | Credential
  | Date
  | Email
  | Unknown
  | Phone
  | Social
  | Text

export enum AttributeAction {
  Calendar = 'CALENDAR',
  Call = 'CALL',
  Copy = 'COPY',
  Email = 'EMAIL',
  Link = 'LINK',
  Locate = 'LOCATE',
  Navigate = 'NAVIGATE',
  Sms = 'SMS'
}

export type AttributeTypeConfig = {
  name: string
  actions: AttributeAction[]
}
