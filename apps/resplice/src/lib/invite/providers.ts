import { isSupported } from '@resplice/utils'

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

export async function getNativeContacts(): Promise<ProviderContact[]> {
  const [isContactPickerSupported] = isSupported([
    'contacts',
    'ContactsManager'
  ])
  if (!isContactPickerSupported) return

  try {
    const contacts: any[] = await (navigator as any).contacts.select(
      ['name', 'email', 'tel', 'icon'],
      { multiple: true }
    )
    console.log(contacts)
    return contacts.map((c, idx) => ({
      id: idx.toString(),
      name: c.name[0],
      avatar: c.icon,
      values: [c.email[0], c.tel[0]]
    }))
  } catch (err) {
    // TODO: Show an alert
    console.log(err)
  }
}

export async function getContactsFromCsv(
  csv: Blob
): Promise<ProviderContact[]> {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const csvStr = e.target.result as string
      const headers = csvStr.slice(0, csvStr.indexOf('\n')).split(',')
      const rows = csvStr.slice(csvStr.indexOf('\n') + 1).split('\n')

      const data = []

      rows.forEach((row) => {
        const vals = row.split(',')
        const valMap = vals.reduce((map, v, idx) => {
          map[headers[idx]] = v
          return map
        })
        data.push(valMap)
      })

      const contacts = data.map((d, idx) => ({
        id: idx.toString(),
        name: d.name,
        avatar: '',
        values: [d.email, d.phone]
      }))

      resolve(contacts)
    }
    reader.readAsText(csv)
  })
}
