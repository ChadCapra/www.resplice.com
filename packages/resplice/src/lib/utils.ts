import type { Contact } from '$types'

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
