import { copyText, locate } from '$lib/attributes/actions'
import {
  AttributeType,
  AttributeAction,
  type CoordinateValue,
  type AttributeTypeConfig
} from '$types/attribute'

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
  actions: [
    AttributeAction.Locate,
    AttributeAction.Navigate,
    AttributeAction.Copy
  ],
  handleAction,
  valueToString
}

export default coordinateType
