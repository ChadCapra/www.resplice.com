import { writable } from 'svelte/store'
import type { Attribute } from '$types/user'

import { attributes as mockAttributes } from '$services/mocks/state/attributes'

type AttributeRecord = Map<number, Attribute>
const attributeStore = writable<AttributeRecord | null>(mockAttributes)

export type AttributeStore = typeof attributeStore

export default attributeStore
