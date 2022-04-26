import { getOperatingSystem } from '@resplice/utils'

export function openCalendar(date: string): void {
  console.log('Opening Calendar', date)
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

export function goto(url: string): void {
  window.open(url, '_blank')
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
    ? 'https://www.google.com/maps/dir/?api=1&destination='
    : 'https://www.google.com/maps/search/?api=1&query='
  let query = ''

  if (params.locationType === 'coordinate') {
    query = `${params.location.latitude},${params.location.longitude}`
  } else {
    query = encodeURI(params.location)
  }

  window.open(`${googleMapsUrl}${query}`, '_blank')
}

export function openSms(phone: string, text = ''): void {
  const OS = getOperatingSystem()
  if (OS === 'iOS') {
    window.open(`sms:${phone}&body=${text}`)
  } else {
    window.open(`sms:${phone}?body=${text}`)
  }
}
