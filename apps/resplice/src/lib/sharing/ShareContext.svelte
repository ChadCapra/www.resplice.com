<script lang="ts">
  import { sortUserAttributes } from '$lib/attributes/utils'
  import AttributeItem from '$lib/attributes/Item.svelte'
  import Button from '$lib/common/Button.svelte'
  import Toggle from '$lib/common/form/Toggle.svelte'
  import Modal from '$lib/common/Modal.svelte'

  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import attributeStore from '$stores/attributes'

  export let shares = new Set<number>()
  let isEditing = false
  let initialSharesSet = false

  $: attributes = $attributeStore
  $: sortedAttributes = attributes ? sortUserAttributes(attributes) : []

  $: {
    // TODO: Find a better way to set initial shares
    if (attributes && !initialSharesSet) {
      shares = new Set([sortedAttributes[0].id, sortedAttributes[1].id])
      initialSharesSet = true
    }
  }

  function toggleShare(id: number) {
    const newShares = new Set(shares)
    if (newShares.has(id)) newShares.delete(id)
    else newShares.add(id)
    shares = newShares
  }
</script>

<section class="w-full flex-1 flex flex-col space-y-2">
  <div class="w-full flex justify-between items-center mb-2">
    <h2 class="font-semibold text-xl">Sharing</h2>
    <Button
      class="text-sm"
      color="brand-light"
      on:click={() => (isEditing = true)}>EDIT</Button
    >
  </div>

  {#if attributes}
    <div class="w-full flex-1 flex flex-col space-y-4 overflow-scroll">
      {#each [...shares] as id}
        <AttributeItem
          itemType="user"
          attribute={attributes.get(id)}
          disableActions
        />
      {/each}
    </div>
  {:else}
    <Skeleton variant="rect" width="100%" height="2.5em" />
    <Skeleton variant="rect" width="100%" height="2.5em" />
  {/if}
</section>

{#if isEditing}
  <Modal let:close on:close={() => (isEditing = false)} initialY={56}>
    <div
      class="flex-1 w-full px-4 overflow-scroll"
      style="padding-bottom: 76px"
    >
      <h2 class="font-semibold text-xl mb-4">Sharing</h2>
      <div class="w-full flex flex-col space-y-4">
        {#each sortedAttributes as attribute}
          <div class="flex justify-between w-full">
            <AttributeItem itemType="user" {attribute} disableActions />
            <Toggle
              name="share-toggle-{attribute.id}"
              isActive={shares.has(attribute.id)}
              on:toggle={() => toggleShare(attribute.id)}
            />
          </div>
        {/each}
      </div>
      <div class="w-full flex justify-center mt-4">
        <Button class="w-48" on:click={close}>Save</Button>
      </div>
    </div>
  </Modal>
{/if}
