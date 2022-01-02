<script lang="ts" context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ params }) {
    return {
      props: {
        uuid: params.uuid
      }
    }
  }
</script>

<script lang="ts">
  import { goto } from '$app/navigation'
  import contactsStore from '$stores/contacts'
  import Avatar from '$lib/common/Avatar.svelte'
  import Header from '$lib/contacts/Header.svelte'
  import ContactName from '$lib/contacts/ContactName.svelte'
  import EditForm from '$lib/contacts/EditForm.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'

  export let uuid: string
  $: contact = $contactsStore && $contactsStore[uuid]
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <Header contact={contact?.profile} />
  <main
    class="bg-white rounded-t-3xl flex-1 flex flex-col items-center overflow-auto space-y-4"
  >
    <h1 class="text-2xl font-semibold text-gray-700 w-full px-8 pt-8 pb-4">
      Edit Contact
    </h1>
    <div
      class="w-full flex flex-col items-center justify-center space-y-2"
      on:click={() => goto(`/app/contact/${uuid}/edit`)}
    >
      <Avatar {uuid} src={contact?.profile.avatar_url} size="xl" />
      <ContactName contact={contact?.profile} />
    </div>
    {#if contact}
      <EditForm contact={contact.profile} />
    {:else}
      <div class="flex-1 w-full flex flex-col space-x-4 px-8">
        <Skeleton variant="rect" width="100%" height="2em" />
        <Skeleton variant="rect" width="100%" height="100%" />
      </div>
    {/if}
  </main>
</div>
