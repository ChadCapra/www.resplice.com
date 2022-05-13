import { callPhone, copyText, openSms } from '$lib/attributes/actions'
import {
  AttributeType,
  AttributeAction,
  type PhoneValue,
  type AttributeTypeConfig
} from '$types/attribute'

function valueToString(value: PhoneValue) {
  return `+${value.number} ${value.extension ? `x${value.extension}` : ''}`
}

function handleAction(action: AttributeAction, value: PhoneValue) {
  switch (action) {
    case AttributeAction.Calendar:
      throw new Error('Cannot add a phone number to a calendar')
    case AttributeAction.Call:
      callPhone(valueToString(value))
      break
    case AttributeAction.Copy:
      copyText(valueToString(value))
      break
    case AttributeAction.Email:
      throw new Error('Cannot email a phone number')
    case AttributeAction.Link:
      throw new Error('Cannot link a phone number')
    case AttributeAction.Locate:
      throw new Error('Cannot geolocate a phone number')
    case AttributeAction.Navigate:
      throw new Error('Cannot navigate to a phone number')
    case AttributeAction.Sms:
      openSms(valueToString(value))
      break
    default:
  }
}

const phoneType: AttributeTypeConfig = {
  type: AttributeType.PHONE,
  name: 'Phone',
  verifiable: true,
  actions: [AttributeAction.Call, AttributeAction.Sms, AttributeAction.Copy],
  handleAction,
  valueToString
}

export default phoneType
