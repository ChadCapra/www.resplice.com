export type Profile = {
	name: string
	avatarUrl: string
	handle: string
	userRegisteredAt: number
}

export type Contact = {
	id: number
	name: string
	handle: string
	avatarUrl: string | null
	alias: string | null
	description: string | null
	isFavored: boolean
	isMuted: boolean
	isArchived: boolean
	connectedAt: number
}
