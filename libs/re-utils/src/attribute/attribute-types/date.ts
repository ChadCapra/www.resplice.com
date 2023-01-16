import { formatDatetime } from '$utils/parsers/datetime'
import { copyText, openCalendar } from '$utils/attribute/attribute-actions'
import {
  AttributeType,
  AttributeAction,
  type DateValue,
  type AttributeTypeConfig
} from '$utils/attribute/attribute.types'

function valueToString(value: DateValue) {
  const date = new Date(value.year, value.month - 1, value.day)
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  return formatDatetime(date, tz, "MMMM dd',' yyyy")
}

function handleAction(action: AttributeAction, value: DateValue) {
  switch (action) {
    case AttributeAction.Calendar:
      openCalendar(valueToString(value))
      break
    case AttributeAction.Call:
      throw new Error('Cannot call a date')
    case AttributeAction.Copy:
      copyText(valueToString(value))
      break
    case AttributeAction.Email:
      throw new Error('Cannot email a date')
    case AttributeAction.Link:
      throw new Error('Cannot link a date')
    case AttributeAction.Locate:
      throw new Error('Cannot geolocate a date')
    case AttributeAction.Navigate:
      throw new Error('Cannot navigate to a date')
    case AttributeAction.Sms:
      throw new Error('Cannot text a date')
    default:
  }
}

const dateType: AttributeTypeConfig = {
  type: AttributeType.DATE,
  name: 'Date',
  verifiable: false,
  actions: [AttributeAction.Calendar, AttributeAction.Copy],
  handleAction,
  valueToString
}

export default dateType
