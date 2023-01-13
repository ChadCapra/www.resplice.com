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
