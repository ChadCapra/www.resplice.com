import { writable } from 'svelte/store'
import type { Attribute } from '$types/user'

// import { attributes } from '$services/mocks/state/attributes'

type AttributeRecord = Map<number, Attribute>
const attributeStore = writable<AttributeRecord | null>(null)

export type AttributeStore = typeof attributeStore

export default attributeStore
