import type { Attribute } from '$types/attribute'

export function sortAttributes(attributes: Record<string, Attribute>) {
  return Object.values(attributes).sort((a, b) => a.sort_order - b.sort_order)
}
