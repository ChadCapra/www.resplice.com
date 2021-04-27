import type { Contact, Coordinate } from '$types'

export function filtersContactsList(
  contacts: Contact[],
  tags: string[],
  SearchQuery: string
): Contact[] {
  return contacts
}

export function validateEmail(email: string): boolean {
  /* eslint-disable no-control-regex, no-useless-escape */
  // prettier-ignore
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  /* eslint-enable no-control-regex, no-useless-escape */
}

export function openCalendar(): void {
  console.log('Opening Calendar')
  // Example Google Calendar Link:
  // https://calendar.google.com/calendar/r/eventedit?text=My+Custom+Event&dates=20180512T230000Z/20180513T030000Z&details=For+details,+link+here:+https://example.com/tickets-43251101208&location=Garage+Boston+-+20+Linden+Street+-+Allston,+MA+02134
}

export function callPhone(phone: string): void {
  window.open(`tel:${phone}`)
}

export async function copyText(text: string): Promise<void> {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text)
  } else {
    throw Error('Failed to write text to clipboard')
  }
}

export function email(email: string, subject = '', body = ''): void {
  window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank')
}

export function goto(link: string): void {
  window.open(link, '_blank')
}

export function locate(location: string | Coordinate, navigate = false): void {
  const api = navigate ? 'dir' : 'search'
  const googleMapsUrl = `https://www.google.com/maps/${api}/?api=1`

  if (typeof location === 'string') {
    const locationUrl = location.replace(' ', '+')
    window.open(`${googleMapsUrl}&query=${locationUrl}`, '_blank')
  } else {
    const coordinateString = `${location.lat},${location.lon}`
    window.open(`${googleMapsUrl}&query=${coordinateString}`, '_blank')
  }
}

export function openSms(phone: string, text = ''): void {
  const OS = getMobileOperatingSystem()
  if (OS === 'iOS') {
    window.open(`sms:${phone}&body=${text}`)
  } else {
    window.open(`sms:${phone}?body=${text}`)
  }
}

function getMobileOperatingSystem() {
  // This code may be missing some edge cases
  const userAgent = navigator.userAgent || navigator.vendor

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone'
  }

  if (/android/i.test(userAgent)) {
    return 'Android'
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS'
  }

  return 'unknown'
}
