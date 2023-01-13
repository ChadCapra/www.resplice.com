<script lang="ts">
  import contactStores from '$stores/contacts'
  import attributeStore from '$stores/attributes'
  import useAppClient from '$lib/hooks/useAppClient'
  import AttributeItem from '$lib/attributes/Item.svelte'
  import SkeletonList from '$lib/common/skeleton/SkeletonList.svelte'
  import AddIcon from '$lib/icons/AddIcon.svelte'
  import Toggle from '$lib/common/form/Toggle.svelte'
  import { sortUserAttributes } from '$lib/attributes/utils'
  import type { Share } from '$types/contact'

  const client = useAppClient()

  export let contactId: number

  const sharesStore = contactStores.contactSharesDict
  let shareMap: Record<number, boolean> = {}

  $: userAttributes = sortUserAttributes($attributeStore)
  $: buildShareMap($sharesStore[contactId])

  function buildShareMap(shares: Share[]) {
    const newShareMap: Record<number, boolean> = {}
    shares.forEach((share) => {
      newShareMap[share.attributeId] = true
    })
    shareMap = newShareMap
  }

  async function handleShareToggle(attributeId: number) {
    if (shareMap[attributeId]) {
      shareMap = { ...shareMap, [attributeId]: false }
      await client.contacts.removeShare(contactId, attributeId)
    } else {
      shareMap = { ...shareMap, [attributeId]: true }
      await client.contacts.addShare(contactId, attributeId)
    }
  }
</script>

<div class="flex-1 flex flex-col space-y-4 w-full px-8 py-4">
  {#if userAttributes}
    {#each userAttributes as attribute}
      <div class="flex">
        <AttributeItem itemType="user" {attribute} />
        <Toggle
          name={`share-${attribute.id}`}
          label=""
          isActive={shareMap[attribute.id]}
          on:toggle={() => handleShareToggle(attribute.id)}
        />
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
