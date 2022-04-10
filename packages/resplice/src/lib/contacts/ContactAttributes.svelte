<script lang="ts">
  import contactsStore from '$stores/contacts'
  import AttributeItem from '$lib/attributes/AttributeItem.svelte'
  import SkeletonList from '$lib/common/skeleton/SkeletonList.svelte'

  export let contactId: number

  const attributesStore = contactsStore.contactAttributesDict
  const attributes = $attributesStore[contactId]
</script>

{#if attributes}
  <div class="flex-1 flex flex-col space-y-4 w-full px-8 py-4">
    {#each attributes as attribute}
      <AttributeItem itemType="contact" {attribute} />
    {/each}
  </div>
{:else}
  <SkeletonList count={8} height="3em" width="100%" />
{/if}
