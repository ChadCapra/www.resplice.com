import type { Contact } from '$types/index.type'

export function filtersContactsList(
  contacts: Contact[],
  tags: string[],
  SearchQuery: string
): Contact[] {
  return contacts
}
