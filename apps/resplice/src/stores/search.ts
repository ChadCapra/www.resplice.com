import { derived } from 'svelte/store'
import attributes from './attributes'
import contacts from './contacts'
import invites from './invites'
import attributeTypes from '$lib/attributes/attributeTypes'

import type { RespliceIndex } from '$services/search'

const searchStore = derived(
  [attributes, contacts.contacts, contacts.contactAttributes, invites.invites],
  ([$attributes, $contacts, $contactAttributes, $invites]): RespliceIndex => {
    const attributesIndex = []
    $attributes.forEach((attr) => {
      const attributeType = attributeTypes[attr.type]
      const indexEntry = [attr.id, attributeType.valueToString(attr.value)]
      attributesIndex.push(indexEntry)
    })

    const contactsIndex = []
    $contacts.forEach((contact) => {
      const indexEntry = [contact.id, contact.alias || contact.name]
      contactsIndex.push(indexEntry)
    })

    const contactAttributesIndex = []
    $contactAttributes.forEach((cAttr) => {
      const attributeType = attributeTypes[cAttr.type]
      const indexEntry = [cAttr.id, attributeType.valueToString(cAttr.value)]
      contactAttributesIndex.push(indexEntry)
    })

    const invitesIndex = []
    $invites.forEach((invite) => {
      const indexEntry = [invite.id, invite.name]
      invitesIndex.push(indexEntry)
    })

    return {
      attributes: attributesIndex,
      contacts: contactsIndex,
      contactAttributes: contactAttributesIndex,
      invites: invitesIndex
    }
  }
)

export default searchStore
