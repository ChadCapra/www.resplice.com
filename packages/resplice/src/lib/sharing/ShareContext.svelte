<script lang="ts">
  import AttributeItem from '$lib/attributes/AttributeItem.svelte'
  import { sortAttributes } from '$lib/attributes/utils'
  import Button from '$lib/common/Button.svelte'
  import Toggle from '$lib/common/form/Toggle.svelte'
  import Modal from '$lib/common/Modal.svelte'

  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import attributeStore from '$stores/attributes'

  export let shares = new Set<string>()
  let isEditing = false
  let initialSharesSet = false

  $: attributes = $attributeStore
  $: sortedAttributes = attributes ? sortAttributes(attributes) : []

  $: {
    // TODO: Find a better way to set initial shares
    if (attributes && !initialSharesSet) {
      shares = new Set([sortedAttributes[0].uuid, sortedAttributes[1].uuid])
      initialSharesSet = true
    }
  }

  function toggleShare(uuid: string) {
    if (shares.has(uuid)) shares.delete(uuid)
    else shares.add(uuid)
    // Need to do this so svelte will rerender
    console.log(shares)
    shares = shares
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
      {#each [...shares] as uuid}
        <AttributeItem
          itemType="user"
          attribute={attributes[uuid]}
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
  <Modal on:close={() => (isEditing = false)} initialY={56}>
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
              name="share-toggle-{attribute.uuid}"
              isActive={shares.has(attribute.uuid)}
              on:toggle={() => toggleShare(attribute.uuid)}
            />
          </div>
        {/each}
      </div>
      <div class="w-full flex justify-center mt-4">
        <Button class="w-48" on:click={() => (isEditing = false)}>Save</Button>
      </div>
    </div>
  </Modal>
{/if}
