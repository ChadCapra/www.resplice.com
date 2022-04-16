import { copyText, email } from '$lib/attributes/actions'
import {
  AttributeType,
  AttributeAction,
  type EmailValue,
  type AttributeTypeConfig
} from '$types/attribute'

function valueToString(value: EmailValue) {
  return value.email
}

function handleAction(action: AttributeAction, value: EmailValue) {
  switch (action) {
    case AttributeAction.Calendar:
      throw new Error('Cannot add an email to a calendar')
    case AttributeAction.Call:
      throw new Error('Cannot call an email')
    case AttributeAction.Copy:
      copyText(valueToString(value))
      break
    case AttributeAction.Email:
      email(value.email)
      break
    case AttributeAction.Link:
      throw new Error('Cannot link an email')
    case AttributeAction.Locate:
      throw new Error('Cannot geolocate an email')
    case AttributeAction.Navigate:
      throw new Error('Cannot navigate to an email')
    case AttributeAction.Sms:
      throw new Error('Cannot text an email')
    default:
  }
}

const emailType: AttributeTypeConfig = {
  type: AttributeType.EMAIL,
  name: 'Email',
  actions: [AttributeAction.Email, AttributeAction.Copy],
  handleAction,
  valueToString
}

export default emailType
