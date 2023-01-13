<script lang="ts">
  import contactsStore from '$stores/contacts'
  import AttributeItem from '$lib/contacts/pending/AttributeItem.svelte'
  import SkeletonList from '$lib/common/skeleton/SkeletonList.svelte'

  export let contactId: number

  const attributesStore = contactsStore.pendingContactAttributesDict
  const attributes = $attributesStore[contactId]
</script>

{#if attributes}
  <div class="flex flex-col space-y-4 w-full px-8 pb-4">
    {#each attributes as attribute}
      <AttributeItem {attribute} />
    {/each}
  </div>
{:else}
  <SkeletonList count={8} height="3em" width="100%" />
{/if}
