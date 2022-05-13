import { copyText, locate } from '$lib/attributes/actions'
import {
  AttributeType,
  AttributeAction,
  type AddressValue,
  type AttributeTypeConfig
} from '$types/attribute'

function valueToString(value: AddressValue) {
  return `${value.streetAddress1}\n${
    value.streetAddress2 ? value.streetAddress2 + '\n' : ''
  }${value.locality}, ${value.region} ${value.postalCode}\n${value.country}`
}

function handleAction(action: AttributeAction, value: AddressValue) {
  switch (action) {
    case AttributeAction.Calendar:
      throw new Error('Cannot add an address to a calendar')
    case AttributeAction.Call:
      throw new Error('Cannot call an address')
    case AttributeAction.Copy:
      copyText(valueToString(value))
      break
    case AttributeAction.Email:
      throw new Error('Cannot email an address')
    case AttributeAction.Link:
      throw new Error('Cannot link an address')
    case AttributeAction.Locate:
      locate({
        locationType: 'address',
        location: valueToString(value)
      })
      break
    case AttributeAction.Navigate:
      locate(
        {
          locationType: 'address',
          location: valueToString(value)
        },
        true
      )
      break
    case AttributeAction.Sms:
      throw new Error('Cannot text an address')
    default:
  }
}

const addressType: AttributeTypeConfig = {
  type: AttributeType.ADDRESS,
  name: 'Address',
  verifiable: false,
  actions: [
    AttributeAction.Navigate,
    AttributeAction.Locate,
    AttributeAction.Copy
  ],
  handleAction,
  valueToString
}

export default addressType
