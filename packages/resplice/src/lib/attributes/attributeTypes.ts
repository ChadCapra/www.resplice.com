import type {
  AddressValue,
  AttributeTypeConfig,
  CoordinateValue,
  CredentialValue,
  DateValue,
  EmailValue,
  PhoneValue,
  SocialValue,
  TextValue
} from '$types/attribute'
import { AttributeType, AttributeAction } from '$types/attribute'

const attributeTypes: Record<AttributeType, AttributeTypeConfig> = {
  [AttributeType.ADDRESS]: {
    name: 'Address',
    actions: [
      AttributeAction.Navigate,
      AttributeAction.Locate,
      AttributeAction.Copy
    ],
    valueToString: (value: AddressValue) =>
      `
        ${value.street_address_1}
        ${value.street_address_2}
        ${value.locality}, ${value.region} ${value.postal_code}
        ${value.country}
      `
  },
  [AttributeType.COORDINATE]: {
    name: 'Coordinate',
    actions: [
      AttributeAction.Locate,
      AttributeAction.Navigate,
      AttributeAction.Copy
    ],
    valueToString: (value: CoordinateValue) =>
      `${value.latitude}, ${value.longitude}`
  },
  [AttributeType.CREDENTIAL]: {
    name: 'Credential',
    actions: [AttributeAction.Copy],
    valueToString: (value: CredentialValue) =>
      `${value.identity}\n${value.passcode}`
  },
  [AttributeType.DATE]: {
    name: 'Date',
    actions: [AttributeAction.Calendar, AttributeAction.Copy],
    valueToString: (value: DateValue) =>
      `${value.month} ${value.day} ${value.year}`
  },
  [AttributeType.EMAIL]: {
    name: 'Email',
    actions: [AttributeAction.Email, AttributeAction.Copy],
    valueToString: (value: EmailValue) => value.email
  },
  [AttributeType.PHONE]: {
    name: 'Phone',
    actions: [AttributeAction.Call, AttributeAction.Sms, AttributeAction.Copy],
    valueToString: (value: PhoneValue) =>
      `+${value.countryCallingCode} ${value.number}
      ${value.extension ? `x${value.extension}` : ''}`
  },
  [AttributeType.SOCIAL]: {
    name: 'Social',
    actions: [AttributeAction.Link, AttributeAction.Copy],
    valueToString: (value: SocialValue) => `${value.handle}\n${value.url}`
  },
  [AttributeType.TEXT]: {
    name: 'Text',
    actions: [AttributeAction.Copy],
    valueToString: (value: TextValue) => value.text
  }
}

export default attributeTypes
