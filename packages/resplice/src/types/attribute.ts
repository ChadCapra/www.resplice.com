export enum AttributeType { // TODO: Check against proto files
  ADDRESS = 'ADDRESS',
  COORDINATE = 'COORDINATE',
  CREDENTIAL = 'CREDENTIAL',
  DATE = 'DATE',
  EMAIL = 'EMAIL',
  // FILE = 'FILE', // probably future feature
  LINK = 'LINK',
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
  | LinkValue
  | PhoneValue
  | SocialValue
  | TextValue
interface BaseAttribute {
  id: number
  type: AttributeType
  name: string
  value: AttributeValue
  sortOrder: number
}

export interface Address extends BaseAttribute {
  type: AttributeType.ADDRESS
  value: AddressValue
}
export type AddressValue = {
  streetAddress1: string
  streetAddress2?: string
  locality: string
  region: string
  postalCode: string
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

export interface Link extends BaseAttribute {
  type: AttributeType.LINK
  value: LinkValue
}
export type LinkValue = {
  url: string
}

export interface Phone extends BaseAttribute {
  type: AttributeType.PHONE
  value: PhoneValue
}
export type PhoneValue = {
  number: number
  extension?: number
  isSms: boolean
}

export interface Social extends BaseAttribute {
  type: AttributeType.SOCIAL
  value: SocialValue
}
export type SocialValue = {
  handle: string
  url: string
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
  | Link
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
  type: AttributeType
  name: string
  actions: AttributeAction[]
  handleAction: (action: AttributeAction, value: AttributeValue) => void
  valueToString: (value: AttributeValue) => string
}
