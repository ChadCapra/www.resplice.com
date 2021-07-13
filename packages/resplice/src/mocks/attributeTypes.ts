import type { AttributeTypeConfig } from '$types'
import { AttributeType, AttributeAction } from '$types'

const attributeTypes: Record<AttributeType, AttributeTypeConfig> = {
  [AttributeType.Address]: {
    name: 'Address',
    actions: [
      AttributeAction.Navigate,
      AttributeAction.Locate,
      AttributeAction.Copy
    ]
  },
  [AttributeType.Coordinates]: {
    name: 'Coordinates',
    actions: [
      AttributeAction.Locate,
      AttributeAction.Navigate,
      AttributeAction.Copy
    ]
  },
  [AttributeType.Email]: {
    name: 'Email',
    actions: [AttributeAction.Email, AttributeAction.Copy]
  },
  [AttributeType.Empty]: {
    name: 'Empty',
    actions: [AttributeAction.Copy]
  },
  [AttributeType.Datetime]: {
    name: 'Datetime',
    actions: [
      AttributeAction.Calendar,
      AttributeAction.Navigate,
      AttributeAction.Copy
    ]
  },
  [AttributeType.Link]: {
    name: 'Link',
    actions: [AttributeAction.Link, AttributeAction.Copy]
  },
  [AttributeType.Location]: {
    name: 'Live Location',
    actions: [
      AttributeAction.Locate,
      AttributeAction.Navigate,
      AttributeAction.Copy
    ]
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
  }
}

export default attributeTypes
