import { writable } from 'svelte/store'
import type { Chat as UserChat } from '$modules/user/user.types'
import type { Chat as ContactChat } from '$modules/contact/contact.types'

type Chat = UserChat | ContactChat

const chatStore = writable<Record<string, Chat[]> | null>(null)

export type ChatStore = typeof chatStore

export default chatStore
