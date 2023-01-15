import { copyText, locate } from '$utils/attribute/attribute-actions'
import {
  AttributeType,
  AttributeAction,
  type CoordinateValue,
  type AttributeTypeConfig
} from '$utils/attribute/attribute.types'

function valueToString(value: CoordinateValue) {
  return `${value.latitude},${value.longitude}`
}

function handleAction(action: AttributeAction, value: CoordinateValue) {
  switch (action) {
    case AttributeAction.Calendar:
      throw new Error('Cannot add a coordinate to a calendar')
    case AttributeAction.Call:
      throw new Error('Cannot call a coordinate')
    case AttributeAction.Copy:
      copyText(valueToString(value))
      break
    case AttributeAction.Email:
      throw new Error('Cannot email a coordinate')
    case AttributeAction.Link:
      throw new Error('Cannot link a coordinate')
    case AttributeAction.Locate:
      locate({
        locationType: 'coordinate',
        location: value
      })
      break
    case AttributeAction.Navigate:
      locate(
        {
          locationType: 'coordinate',
          location: value
        },
        true
      )
      break
    case AttributeAction.Sms:
      throw new Error('Cannot text a coordinate')
    default:
  }
}

const coordinateType: AttributeTypeConfig = {
  type: AttributeType.COORDINATE,
  name: 'Coordinate',
  verifiable: false,
  actions: [
    AttributeAction.Locate,
    AttributeAction.Navigate,
    AttributeAction.Copy
  ],
  handleAction,
  valueToString
}

export default coordinateType
