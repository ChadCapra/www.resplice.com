import { AttributeType } from '$types/attribute'
import type { Address } from '$types/attribute'

export const valueToString = {
  [AttributeType.ADDRESS]: ({ value }: Address) => {
    return `${value.address_1}
      ${value.address_2}
      ${
        value.locality
          ? `${value.locality}, ${value.region} ${value.postal_code}`
          : `${value.region} ${value.postal_code}`
      }
      ${value.country}`
  }
}
