export type ProviderContact = {
  id: string
  name: string
  avatar: string
  values: string[]
}

export async function getGoogleContacts(): Promise<ProviderContact[]> {
  console.log('fetching google contacts')
  // TODO: Use People API
  // https://developers.google.com/people
  return []
}
