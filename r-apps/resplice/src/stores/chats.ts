import { writable } from 'svelte/store'
import type { Chat as UserChat } from '$types/user'
import type { Chat as ContactChat } from '$types/contact'

type Chat = UserChat | ContactChat

const chatStore = writable<Record<string, Chat[]> | null>(null)

export type ChatStore = typeof chatStore

export default chatStore
