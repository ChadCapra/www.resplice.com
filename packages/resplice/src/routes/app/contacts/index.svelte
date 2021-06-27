<script>
  // import { onMount } from 'svelte'
  // import { t } from 'svelte-i18n'
  import type { Contact } from '$types'
  import SearchHeader from '$lib/common/SearchHeader.svelte'
  import TagsList from '$lib/contacts/TagsList.svelte'
  import ContactList from '$lib/contacts/ContactList.svelte'

  let selectedTags: Set<string> = new Set()
  let contactsAsync: Promise<Contact[]> = Promise.resolve([])

  async function fetchContacts(): Promise<Contact[]> {
    const res = await fetch('https://api.resplice.com/contacts')
    return await res.json()
  }

  // onMount(() => {
  //   contactsAsync = fetchContacts()
  // })

  const onTagSetChange = (e: CustomEvent<Set<string>>) => {
    selectedTags = e.detail
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
