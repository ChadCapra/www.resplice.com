import type { Contact } from '$types/contact'

export function filtersContactsList(
  contacts: Contact[],
  tags: string[],
  SearchQuery: string
): Contact[] {
  return contacts
}

export function arrToDict<T>(arr: T[], key: string) {
  const dict: Record<string, T> = {}
  arr.forEach((item) => {
    dict[item[key]] = item
  })
  return dict
}

export function capitalize(text: string): string {
  return text.substring(0, 1).toUpperCase() + text.substring(1)
}

export function validateEmail(email: string): boolean {
  if (!email) return false
  /* eslint-disable no-control-regex, no-useless-escape */
  // prettier-ignore
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  /* eslint-enable no-control-regex, no-useless-escape */
}

export function getOperatingSystem() {
  // Use new userAgentData if possible
  // TODO: Remove any type when lib.dom is updated
  if (
    (navigator as any).userAgentData &&
    (navigator as any).userAgentData.platform
  ) {
    return (navigator as any).userAgentData.platform
  }

  // Fallback to userAgent parsing
  // This code may be missing some edge cases
  const userAgent = navigator.userAgent || navigator.vendor

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows'
  }

  if (/android/i.test(userAgent)) {
    return 'Android'
  }

  if (/iPad|iPhone|iPod/i.test(userAgent)) {
    return 'iOS'
  }

  return 'unknown'
}
