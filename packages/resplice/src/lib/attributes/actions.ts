import { getOperatingSystem } from '$lib/utils'

export function validateEmail(email: string): boolean {
  if (!email) return false
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

type locateParams =
  | {
      locationType: 'coordinate'
      location: { latitude: number; longitude: number }
    }
  | {
      locationType: 'address'
      location: string
    }
export function locate(params: locateParams, navigate = false) {
  const googleMapsUrl = navigate
    ? 'https://www.google.com/maps/dir/?api=1'
    : 'https://www.google.com/maps/search/?api=1'
  let query = ''

  if (params.locationType === 'coordinate') {
    query = `${params.location.latitude},${params.location.longitude}`
  } else {
    query = params.location.replace(' ', '+')
  }

  window.open(`${googleMapsUrl}&query=${query}`, '_blank')
}

export function openSms(phone: string, text = ''): void {
  const OS = getOperatingSystem()
  if (OS === 'iOS') {
    window.open(`sms:${phone}&body=${text}`)
  } else {
    window.open(`sms:${phone}?body=${text}`)
  }
}
