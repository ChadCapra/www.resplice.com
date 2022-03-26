import type { Attribute } from '$types/attribute'

export function sortAttributes(attributes: Map<number, Attribute>) {
  return [...attributes.values()].sort((a, b) => a.sortOrder - b.sortOrder)
}
