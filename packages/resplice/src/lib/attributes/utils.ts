import type { Attribute } from '$types/user'

export function sortUserAttributes(attributes: Map<number, Attribute>) {
  return [...attributes.values()].sort((a, b) => a.sortOrder - b.sortOrder)
}
