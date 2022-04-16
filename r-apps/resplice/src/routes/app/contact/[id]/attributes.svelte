<script lang="ts" context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ params }) {
    return {
      props: {
        id: parseInt(params.id, 10)
      }
    }
  }
</script>

<script lang="ts">
  import { goto } from '$app/navigation'
  import contactStores from '$stores/contacts'
  import Avatar from '$lib/common/Avatar.svelte'
  import Header from '$lib/contacts/Header.svelte'
  import ContactName from '$lib/contacts/ContactName.svelte'
  import ContactAttributes from '$lib/contacts/ContactAttributes.svelte'

  export let id: number
  const contactStore = contactStores.contacts
  $: contact = $contactStore ? $contactStore.get(id) : null
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <Header {contact} />
  <main
    class="bg-white rounded-t-3xl flex-1 flex flex-col items-center overflow-auto space-y-4"
  >
    <div
      class="w-full flex flex-col items-center justify-center space-y-2 mt-8"
      on:click={() => goto(`/app/contact/${id}/edit`)}
    >
      <Avatar {id} src={contact.avatarUrl} size="xl" />
      <ContactName {contact} />
    </div>
    <h1 class="text-xl font-semibold text-gray-700 w-full px-8">Attributes</h1>
    <ContactAttributes contactId={contact.id} />
  </main>
</div>
