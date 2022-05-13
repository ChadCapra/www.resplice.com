import type { E164Number, Extension, NumberType } from 'libphonenumber-js'

export function determineSmsCapability(type: NumberType): boolean {
  switch (type) {
    case 'VOIP':
    case 'PERSONAL_NUMBER':
    case 'PAGER':
    case 'FIXED_LINE_OR_MOBILE':
    case 'MOBILE':
      return true
    default:
      return false
  }
}

export function phoneNumberToInt(number: E164Number): number {
  if (number[0] !== '+') throw new Error(`Invalid Phone Number: ${number}`)
  return parseInt(number.slice(1), 10)
}

export function phoneExtToInt(ext: Extension): number {
  if (ext[0] !== 'x') throw new Error(`Invalid extension: ${ext}`)
  return parseInt(ext.slice(1), 10)
}
