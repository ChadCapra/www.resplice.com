export enum AttributeType {
  ADDRESS = 'ADDRESS',
  COORDINATE = 'COORDINATE',
  CREDENTIAL = 'CREDENTIAL',
  DATE = 'DATE',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  SOCIAL = 'SOCIAL',
  TEXT = 'TEXT'
}
export type AttributeValue =
  | AddressValue
  | CoordinateValue
  | CredentialValue
  | DateValue
  | EmailValue
  | PhoneValue
  | SocialValue
  | TextValue
interface BaseAttribute {
  uuid: string
  type: AttributeType
  name: string
  value: AttributeValue
  expiry?: Date
  sort_order: number
}

export interface Address extends BaseAttribute {
  type: AttributeType.ADDRESS
  value: AddressValue
}
export type AddressValue = {
  street_address_1: string
  street_address_2?: string
  locality: string
  region: string
  postal_code: string
  country: string
}

export interface Coordinate extends BaseAttribute {
  type: AttributeType.COORDINATE
  value: CoordinateValue
}
export type CoordinateValue = {
  latitude: number
  longitude: number
}

export interface Credential extends BaseAttribute {
  type: AttributeType.CREDENTIAL
  value: CredentialValue
}
export type CredentialValue = {
  identity: string
  passcode: string
}

export interface Date extends BaseAttribute {
  type: AttributeType.DATE
  value: DateValue
}
export type DateValue = {
  year: number
  month: number
  day: number
}

export interface Email extends BaseAttribute {
  type: AttributeType.EMAIL
  value: EmailValue
}
export type EmailValue = {
  email: string
}

export interface Phone extends BaseAttribute {
  type: AttributeType.PHONE
  value: PhoneValue
}
export type PhoneValue = {
  countryCallingCode: string
  number: string
  extension?: string
  isSms: boolean
}

export interface Social extends BaseAttribute {
  type: AttributeType.SOCIAL
  value: SocialValue
}
export type SocialValue = {
  provider: string
  handle: string
}

export interface Text extends BaseAttribute {
  type: AttributeType.TEXT
  value: TextValue
}
export type TextValue = {
  text: string
}

export type Attribute =
  | Address
  | Coordinate
  | Credential
  | Date
  | Email
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
