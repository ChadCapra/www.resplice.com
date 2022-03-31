<script lang="ts">
  import type { Contact } from '$types/contact'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import ContactItem from '$lib/auth/ContactItem.svelte'

  export let pendingContactsPromise: Promise<Pick<Contact, 'name' | 'id'>[]>
</script>

<div class="flex-1 overflow-scroll">
  <p class="font-semibold text-lg mb-2">Pending Contacts</p>
  {#await pendingContactsPromise}
    {#each Array.from(Array(8).keys()) as _}
      <div class="w-full px-4 py-2">
        <Skeleton variant="rect" width="100%" height="48px" />
      </div>
    {/each}
  {:then pendingContacts}
    <!-- Only get first 25 for perf reasons -->
    {#each pendingContacts.slice(0, 25) as contact}
      <ContactItem {contact} />
    {/each}
  {:catch error}
    <p>Something went wrong...</p>
    <p>{error.message}</p>
  {/await}
</div>
