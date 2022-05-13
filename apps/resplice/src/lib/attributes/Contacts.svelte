<script lang="ts">
  import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte'
  import { goto } from '$app/navigation'
  import contactStores from '$stores/contacts'
  import ContactItem from '$lib/contacts/ContactItem.svelte'
  import type { Contact } from '$types/contact'

  const contacts = contactStores.contacts
  const shares = contactStores.contactShares
  export let attributeId: number

  function buildAttributeContacts(
    contacts: typeof $contacts,
    shares: typeof $shares
  ) {
    const attributeShares = [...shares.values()].filter(
      (share) => share.attributeId === attributeId
    )
    const attributeContacts: Contact[] = []

    attributeShares.forEach((share) =>
      attributeContacts.push(contacts.get(share.contactId))
    )

    return attributeContacts
  }

  $: attributeContacts = buildAttributeContacts($contacts, $shares)
</script>

<div>
  <h2 class="text-2xl font-gray-700 my-2">Contacts</h2>
  <p class="text-gray-700 text-sm mb-4">
    Editing shares from an attribute is coming soon!
  </p>

  <VirtualList items={attributeContacts} itemHeight={64} let:item>
    <ContactItem
      contact={item}
      on:click={() => {
        goto(`/app/contact/${item.id}/shares`)
      }}
    />
  </VirtualList>
</div>
