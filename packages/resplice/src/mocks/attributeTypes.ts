import type { AttributeTypeConfig } from '$types/attribute'
import { AttributeType, AttributeAction } from '$types/attribute'

const attributeTypes: Record<AttributeType, AttributeTypeConfig> = {
  [AttributeType.Address]: {
    name: 'Address',
    actions: [
      AttributeAction.Navigate,
      AttributeAction.Locate,
      AttributeAction.Copy
    ]
  },
  [AttributeType.Credential]: {
    name: 'Credential',
    actions: [AttributeAction.Copy]
  },
  [AttributeType.Date]: {
    name: 'Date',
    actions: [
      AttributeAction.Calendar,
      AttributeAction.Navigate,
      AttributeAction.Copy
    ]
  },
  [AttributeType.Email]: {
    name: 'Email',
    actions: [AttributeAction.Email, AttributeAction.Copy]
  },
  [AttributeType.Phone]: {
    name: 'Phone',
    actions: [AttributeAction.Call, AttributeAction.Sms, AttributeAction.Copy]
  },
  [AttributeType.Social]: {
    name: 'Social',
    actions: [AttributeAction.Link, AttributeAction.Copy]
  },
  [AttributeType.Text]: {
    name: 'Text',
    actions: [AttributeAction.Copy]
  },
  [AttributeType.Unknown]: {
    name: 'Unkown',
    actions: [AttributeAction.Copy]
  }
}

export default attributeTypes
