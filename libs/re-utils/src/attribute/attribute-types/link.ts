import { copyText, goto } from '$utils/attribute/attribute-actions'
import {
  AttributeType,
  AttributeAction,
  type LinkValue,
  type AttributeTypeConfig
} from '$utils/attribute/attribute.types'

function valueToString(value: LinkValue) {
  return value.url
}

function handleAction(action: AttributeAction, value: LinkValue) {
  switch (action) {
    case AttributeAction.Calendar:
      throw new Error('Cannot add a link to a calendar')
    case AttributeAction.Call:
      throw new Error('Cannot call a link')
    case AttributeAction.Copy:
      copyText(valueToString(value))
      break
    case AttributeAction.Email:
      throw new Error('Cannot email a link')
    case AttributeAction.Link:
      goto(value.url)
      break
    case AttributeAction.Locate:
      throw new Error('Cannot geolocate a link')
    case AttributeAction.Navigate:
      throw new Error('Cannot navigate to a link')
    case AttributeAction.Sms:
      throw new Error('Cannot text a link')
    default:
  }
}

const linkType: AttributeTypeConfig = {
  type: AttributeType.LINK,
  name: 'Link',
  verifiable: false,
  actions: [AttributeAction.Link, AttributeAction.Copy],
  handleAction,
  valueToString
}

export default linkType
