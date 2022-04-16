import { copyText } from '$lib/attributes/actions'
import {
  AttributeType,
  AttributeAction,
  type CredentialValue,
  type AttributeTypeConfig
} from '$types/attribute'

function valueToString(value: CredentialValue) {
  return `${value.identity}\n${value.passcode}`
}

function handleAction(action: AttributeAction, value: CredentialValue) {
  switch (action) {
    case AttributeAction.Calendar:
      throw new Error('Cannot add a credential to a calendar')
    case AttributeAction.Call:
      throw new Error('Cannot call a credential')
    case AttributeAction.Copy:
      copyText(valueToString(value))
      break
    case AttributeAction.Email:
      throw new Error('Cannot email a credential')
    case AttributeAction.Link:
      throw new Error('Cannot link a credential')
    case AttributeAction.Locate:
      throw new Error('Cannot geolocate a credential')
    case AttributeAction.Navigate:
      throw new Error('Cannot navigate to a credential')
    case AttributeAction.Sms:
      throw new Error('Cannot text a credential')
    default:
  }
}

const credentialType: AttributeTypeConfig = {
  type: AttributeType.CREDENTIAL,
  name: 'Credential',
  actions: [AttributeAction.Copy],
  handleAction,
  valueToString
}

export default credentialType
