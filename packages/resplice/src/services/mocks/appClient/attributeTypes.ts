import type { AttributeTypeConfig } from '$types/attribute'
import { AttributeType, AttributeAction } from '$types/attribute'

const attributeTypes: Record<AttributeType, AttributeTypeConfig> = {
  [AttributeType.ADDRESS]: {
    name: 'Address',
    actions: [
      AttributeAction.Navigate,
      AttributeAction.Locate,
      AttributeAction.Copy
    ]
  },
  [AttributeType.CREDENTIAL]: {
    name: 'Credential',
    actions: [AttributeAction.Copy]
  },
  [AttributeType.DATE]: {
    name: 'Date',
    actions: [
      AttributeAction.Calendar,
      AttributeAction.Navigate,
      AttributeAction.Copy
    ]
  },
  [AttributeType.EMAIL]: {
    name: 'Email',
    actions: [AttributeAction.Email, AttributeAction.Copy]
  },
  [AttributeType.PHONE]: {
    name: 'Phone',
    actions: [AttributeAction.Call, AttributeAction.Sms, AttributeAction.Copy]
  },
  [AttributeType.SOCIAL]: {
    name: 'Social',
    actions: [AttributeAction.Link, AttributeAction.Copy]
  },
  [AttributeType.TEXT]: {
    name: 'Text',
    actions: [AttributeAction.Copy]
  }
}

export default attributeTypes
