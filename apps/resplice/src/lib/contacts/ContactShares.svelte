<script lang="ts">
  import contactStores from '$stores/contacts'
  import attributeStore from '$stores/attributes'
  import AttributeItem from '$lib/attributes/Item.svelte'
  import SkeletonList from '$lib/common/skeleton/SkeletonList.svelte'
  import AddIcon from '$lib/icons/AddIcon.svelte'
  import Toggle from '$lib/common/form/Toggle.svelte'

  export let contactId: number

  const sharesStore = contactStores.contactSharesDict
  const shares = $sharesStore[contactId]
  const userAttributes = $attributeStore
</script>

<div class="flex-1 flex flex-col space-y-4 w-full px-8 py-4">
  {#if shares}
    {#each shares as share}
      <div class="flex">
        <AttributeItem
          itemType="user"
          attribute={userAttributes.get(share.attributeId)}
        />
        <Toggle name={`share-${share.id}`} label="" isActive />
      </div>
    {/each}
    <button class="flex items-center">
      <div
        class="bg-brand-primary text-brand-primary outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none transform transition duration-75 ease-in-out active:scale-90"
      >
        <AddIcon width={24} height={24} />
      </div>
      <p class="ml-4">New Attribute</p>
    </button>
  {:else}
    <SkeletonList count={8} height="3em" width="100%" />
  {/if}
</div>
