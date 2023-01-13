import addressType from '$modules/attribute/attribute-types/address'
import coordinateType from '$modules/attribute/attribute-types/coordinate'
import credentialType from '$modules/attribute/attribute-types/credential'
import dateType from '$modules/attribute/attribute-types/date'
import emailType from '$modules/attribute/attribute-types/email'
import linkType from '$modules/attribute/attribute-types/link'
import phoneType from '$modules/attribute/attribute-types/phone'
import socialType from '$modules/attribute/attribute-types/social'
import textType from '$modules/attribute/attribute-types/text'
import { AttributeType, type AttributeTypeConfig } from '$modules/attribute/attribute.types'

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
