import addressType from '$utils/attribute/attribute-types/address'
import coordinateType from '$utils/attribute/attribute-types/coordinate'
import credentialType from '$utils/attribute/attribute-types/credential'
import dateType from '$utils/attribute/attribute-types/date'
import emailType from '$utils/attribute/attribute-types/email'
import linkType from '$utils/attribute/attribute-types/link'
import phoneType from '$utils/attribute/attribute-types/phone'
import socialType from '$utils/attribute/attribute-types/social'
import textType from '$utils/attribute/attribute-types/text'
import {
  AttributeType,
  type AttributeTypeConfig
} from '$utils/attribute/attribute.types'

export const attributeTypes: Record<AttributeType, AttributeTypeConfig> = {
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
