import {
  phoneNumberToInt,
  phoneExtToInt,
  determineSmsCapability
} from '@resplice/utils'
import { parsePhoneNumber, type PhoneNumber } from 'libphonenumber-js'
import type { PhoneValue } from '$types/attribute'
import type { Attribute } from '$types/user'

export function sortUserAttributes(attributes: Map<number, Attribute>) {
  return [...attributes.values()].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function phoneNumberToValue(phone: PhoneNumber): PhoneValue {
  return {
    number: phoneNumberToInt(phone.number),
    extension: phone.ext ? phoneExtToInt(phone.ext) : undefined,
    smsEnabled: determineSmsCapability(phone.getType())
  }
}

export function phoneValueToNumber(phone: PhoneValue): PhoneNumber {
  const phoneNumber = parsePhoneNumber(`+${phone.number}`)
  if (!phoneNumber)
    throw new Error(
      `+${phone.number} could not be parsed as a valid phone number`
    )

  if (phone.extension) phoneNumber.setExt(phone.extension.toString())

  return phoneNumber
}
