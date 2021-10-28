import { writable } from 'svelte/store'
import type { Attribute } from '$types/user'

const attributeStore = writable<Record<string, Attribute> | null>(null)

export type AttributeStore = typeof attributeStore

export default attributeStore
