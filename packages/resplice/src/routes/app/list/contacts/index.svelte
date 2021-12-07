<script lang="ts">
  import type { Contact } from '$types/contact'
  import SearchHeader from '$lib/common/SearchHeader.svelte'
  import TagsList from '$lib/contacts/TagsList.svelte'
  import ContactList from '$lib/contacts/ContactList.svelte'

  let selectedFilters: Set<string> = new Set()
  let contactsAsync: Promise<Contact[]> = Promise.resolve([])

  const onTagSetChange = (e: CustomEvent<Set<string>>) => {
    selectedFilters = e.detail
  }
</script>

<svelte:head>
  <title>Contacts</title>
</svelte:head>

<div class="w-full h-full flex flex-col overflow-auto">
  <SearchHeader />
  <TagsList on:change={onTagSetChange} />
  <ContactList {contactsAsync} />
</div>
