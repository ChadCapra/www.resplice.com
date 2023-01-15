import { copyText } from '$utils/attribute/attribute-actions'
import {
  AttributeType,
  AttributeAction,
  type TextValue,
  type AttributeTypeConfig
} from '$utils/attribute/attribute.types'

function valueToString(value: TextValue) {
  return value.text
}

function handleAction(action: AttributeAction, value: TextValue) {
  switch (action) {
    case AttributeAction.Calendar:
      throw new Error('Cannot add text to a calendar')
    case AttributeAction.Call:
      throw new Error('Cannot call text')
    case AttributeAction.Copy:
      copyText(valueToString(value))
      break
    case AttributeAction.Email:
      throw new Error('Cannot email text')
    case AttributeAction.Link:
      throw new Error('Cannot link text')
    case AttributeAction.Locate:
      throw new Error('Cannot geolocate text')
    case AttributeAction.Navigate:
      throw new Error('Cannot navigate to text')
    case AttributeAction.Sms:
      throw new Error('Cannot text message text')
    default:
  }
}

const textType: AttributeTypeConfig = {
  type: AttributeType.TEXT,
  name: 'Text',
  verifiable: false,
  actions: [AttributeAction.Copy],
  handleAction,
  valueToString
}

export default textType
