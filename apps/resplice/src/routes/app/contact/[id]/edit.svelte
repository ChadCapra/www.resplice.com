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
  import Header from '$lib/contacts/Header.svelte'
  import ContactName from '$lib/contacts/ContactName.svelte'
  import EditForm from '$lib/contacts/EditForm.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'

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
    >
      <Avatar {id} src={contact.avatarUrl} size="xl" />
      <ContactName {contact} />
    </div>
    <h1 class="text-xl font-semibold text-gray-700 w-full px-8">
      Edit Contact
    </h1>
    {#if contact}
      <EditForm {contact} />
    {:else}
      <div class="flex-1 w-full flex flex-col space-x-4 px-8">
        <Skeleton variant="rect" width="100%" height="2em" />
        <Skeleton variant="rect" width="100%" height="100%" />
      </div>
    {/if}
  </main>
</div>
