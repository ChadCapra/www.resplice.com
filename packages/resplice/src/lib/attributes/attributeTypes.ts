import type {
  AddressValue,
  AttributeTypeConfig,
  CoordinateValue,
  CredentialValue,
  DateValue,
  EmailValue,
  LinkValue,
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
      `${value.streetAddress1}\n${
        value.streetAddress2 ? value.streetAddress2 + '\n' : ''
      }${value.locality}, ${value.region} ${value.postalCode}\n${value.country}`
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
  [AttributeType.LINK]: {
    name: 'Link',
    actions: [AttributeAction.Link, AttributeAction.Copy],
    valueToString: (value: LinkValue) => value.url
  },
  [AttributeType.PHONE]: {
    name: 'Phone',
    actions: [AttributeAction.Call, AttributeAction.Sms, AttributeAction.Copy],
    valueToString: (value: PhoneValue) =>
      `+${value.number}
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
