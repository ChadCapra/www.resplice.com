<script lang="ts">
  import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte'
  import { goto } from '$app/navigation'
  import ContactItem from '$lib/contacts/ContactItem.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import contactStores from '$stores/contacts'

  const contactsStore = contactStores.contacts

  $: contactList =
    $contactsStore && [...$contactsStore.values()].filter((c) => c.isFavored)
</script>

<!-- TODO: Implement Alphabet slider -->
<div class="flex-1 overflow-auto">
  {#if contactList}
    <VirtualList items={contactList} itemHeight={64} let:item>
      <ContactItem
        contact={item}
        on:click={() => {
          goto(`/app/contact/${item.id}/attributes`)
        }}
      />
    </VirtualList>
  {:else}
    {#each Array(8) as _}
      <div class="w-full px-4 py-2">
        <Skeleton variant="rect" width="100%" height="64px" />
      </div>
    {/each}
  {/if}
</div>
