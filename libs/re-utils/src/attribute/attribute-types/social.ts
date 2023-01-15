import { copyText, goto } from '$utils/attribute/attribute-actions'
import {
  AttributeType,
  AttributeAction,
  type SocialValue,
  type AttributeTypeConfig
} from '$utils/attribute/attribute.types'

function valueToString(value: SocialValue) {
  return `${value.handle}\n${value.url}`
}

function handleAction(action: AttributeAction, value: SocialValue) {
  switch (action) {
    case AttributeAction.Calendar:
      throw new Error('Cannot add a social account to a calendar')
    case AttributeAction.Call:
      throw new Error('Cannot call a social account')
    case AttributeAction.Copy:
      copyText(valueToString(value))
      break
    case AttributeAction.Email:
      throw new Error('Cannot email a social account')
    case AttributeAction.Link:
      goto(value.url)
      break
    case AttributeAction.Locate:
      throw new Error('Cannot geolocate a social account')
    case AttributeAction.Navigate:
      throw new Error('Cannot navigate to a social account')
    case AttributeAction.Sms:
      throw new Error('Cannot text a social account')
    default:
  }
}

const socialType: AttributeTypeConfig = {
  type: AttributeType.SOCIAL,
  name: 'Social',
  verifiable: false,
  actions: [AttributeAction.Link, AttributeAction.Copy],
  handleAction,
  valueToString
}

export default socialType
