import addressType from '$lib/attributes/attributeTypes/address'
import coordinateType from '$lib/attributes/attributeTypes/coordinate'
import credentialType from '$lib/attributes/attributeTypes/credential'
import dateType from '$lib/attributes/attributeTypes/date'
import emailType from '$lib/attributes/attributeTypes/email'
import linkType from '$lib/attributes/attributeTypes/link'
import phoneType from '$lib/attributes/attributeTypes/phone'
import socialType from '$lib/attributes/attributeTypes/social'
import textType from '$lib/attributes/attributeTypes/text'
import { AttributeType } from '$types/attribute'
import type { AttributeTypeConfig } from '$types/attribute'

const attributeTypes: Record<AttributeType, AttributeTypeConfig> = {
  [AttributeType.ADDRESS]: addressType,
  [AttributeType.COORDINATE]: coordinateType,
  [AttributeType.CREDENTIAL]: credentialType,
  [AttributeType.DATE]: dateType,
  [AttributeType.EMAIL]: emailType,
  [AttributeType.LINK]: linkType,
  [AttributeType.PHONE]: phoneType,
  [AttributeType.SOCIAL]: socialType,
  [AttributeType.TEXT]: textType
}

export default attributeTypes
