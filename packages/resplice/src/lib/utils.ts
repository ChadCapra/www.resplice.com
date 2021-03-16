import type { Contact } from '$types'

export function filtersContactsList(
  contacts: Contact[],
  tags: string[],
  SearchQuery: string
): Contact[] {
  return contacts
}
