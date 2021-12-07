import { writable } from 'svelte/store'
import type { Attribute } from '$types/user'

import { attributes } from '$services/mocks/state/attributes'

const attributeStore = writable<Record<string, Attribute> | null>(attributes)

export type AttributeStore = typeof attributeStore

export default attributeStore
