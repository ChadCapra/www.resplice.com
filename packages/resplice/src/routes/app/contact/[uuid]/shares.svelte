<script lang="ts" context="module">
  export async function load({ page }) {
    return {
      props: {
        uuid: page.params.uuid
      }
    }
  }
</script>

<script lang="ts">
  import { goto } from '$app/navigation'
  import contactsStore from '$stores/contacts'
  import Avatar from '$lib/common/Avatar.svelte'
  import ContactAttributes from '$lib/contacts/ContactAttributes.svelte'
  import Header from '$lib/contacts/Header.svelte'
  import ContactName from '$lib/contacts/ContactName.svelte'

  export let uuid: string
  $: contact = $contactsStore && $contactsStore[uuid]
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <Header contact={contact?.profile} />
  <main
    class="bg-white rounded-t-3xl flex-1 flex flex-col items-center overflow-auto space-y-4"
  >
    <h1 class="text-2xl font-semibold text-gray-700 w-full px-8 pt-8 pb-4">
      Contact Shares
    </h1>
    <div
      class="w-full flex flex-col items-center justify-center space-y-2"
      on:click={() => goto(`/app/contact/${uuid}/edit`)}
    >
      <Avatar {uuid} src={contact?.profile.avatar_url} size="xl" />
      <ContactName contact={contact?.profile} />
    </div>
    <ContactAttributes contactDetail={contact?.detail} />
  </main>
</div>
