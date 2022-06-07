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
  import contactStores from '$stores/contacts'
  import Avatar from '$lib/common/Avatar.svelte'
  import Header from '$lib/contacts/pending/Header.svelte'
  import Name from '$lib/contacts/pending/Name.svelte'
  import Attributes from '$lib/contacts/pending/Attributes.svelte'
  import Shares from '$lib/contacts/pending/Shares.svelte'

  export let id: number
  const pendingContactStore = contactStores.pendingContacts
  $: contact = $pendingContactStore ? $pendingContactStore.get(id) : null
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <Header {contact} />
  <main
    class="bg-white rounded-t-3xl flex-1 flex flex-col items-center overflow-auto space-y-4"
  >
    <div
      class="w-full flex flex-col items-center justify-center space-y-2 mt-8"
    >
      <Avatar {id} src={contact.avatarUrl} size="xl" />
      <Name {contact} />
    </div>

    <h1 class="text-xl font-semibold text-gray-700 w-full px-8">Attributes</h1>
    <Attributes contactId={contact.id} />

    <h1 class="text-xl font-semibold text-gray-700 w-full px-8">Shares</h1>
    <Shares contactId={contact.id} />
  </main>
</div>
