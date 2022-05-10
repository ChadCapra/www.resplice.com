import { Index as SearchIndex } from 'flexsearch'

type Index = [number, string][]
export type RespliceIndex = {
  attributes: Index
  contacts: Index
  contactAttributes: Index
  invites: Index
}

export type SearchResult = {
  attributes: number[]
  contacts: number[]
  contactAttributes: number[]
  invites: number[]
}

class SearchService {
  #engine: {
    attributes: SearchIndex
    contacts: SearchIndex
    contactAttributes: SearchIndex
    invites: SearchIndex
  }
  constructor() {
    this.#engine = {
      attributes: new SearchIndex('performance'),
      contacts: new SearchIndex('performance'),
      contactAttributes: new SearchIndex('performance'),
      invites: new SearchIndex('performance')
    }
  }

  async query(query: string, limit = 25): Promise<SearchResult> {
    const attributeSearch = this.#engine.attributes.searchAsync(query, limit)
    const contactSearch = this.#engine.contacts.searchAsync(query, limit)
    const contactAttributeSearch = this.#engine.contactAttributes.searchAsync(
      query,
      limit
    )
    const inviteSearch = this.#engine.invites.searchAsync(query, limit)

    const [
      attributeResults,
      contactResults,
      contactAttributeResults,
      inviteResults
    ] = await Promise.all([
      attributeSearch,
      contactSearch,
      contactAttributeSearch,
      inviteSearch
    ])

    return {
      attributes: attributeResults as number[],
      contacts: contactResults as number[],
      contactAttributes: contactAttributeResults as number[],
      invites: inviteResults as number[]
    }
  }

  buildIndex(index: RespliceIndex): Promise<void> {
    return new Promise((resolve) => {
      // TODO: Check performance here. Might be worth using Worker indexes
      const promises: Promise<SearchIndex>[] = []
      index.attributes.forEach((ai) =>
        promises.push(this.#engine.attributes.addAsync(ai[0], ai[1]))
      )

      index.contacts.forEach((ci) =>
        promises.push(this.#engine.contacts.addAsync(ci[0], ci[1]))
      )

      index.contactAttributes.forEach((cai) =>
        promises.push(this.#engine.contactAttributes.addAsync(cai[0], cai[1]))
      )

      index.invites.forEach((ii) =>
        promises.push(this.#engine.invites.addAsync(ii[0], ii[1]))
      )

      Promise.all(promises).then(() => resolve())
    })
  }
}

export default SearchService
