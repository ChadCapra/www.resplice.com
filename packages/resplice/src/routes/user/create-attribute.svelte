<script>
  import type { AttributeTypeConfig } from '$types'
  import AttributeTypeItem from '$lib/user/AttributeTypeItem.svelte'
  import BackButton from '$lib/common/BackButton.svelte'
  import attributeTypes from '../../mocks/attributeTypes'

  $: types = Object.values(attributeTypes)

  let activeAttributeType: AttributeTypeConfig | null = null
</script>

<main class="h-full w-full flex flex-col items-center justify-between p-4">
  {#if !!activeAttributeType}
    <div class="w-full">Create Attribute form</div>
  {:else}
    <div class="w-full">
      <h2 class="text-xl font-semibold mb-4">Select an Attribute Type</h2>
      <div class="flex flex-col space-y-4">
        {#each types as type}
          <AttributeTypeItem
            attributeType={type}
            on:click={() => (activeAttributeType = type)}
          />
        {/each}
      </div>
    </div>
  {/if}

  <BackButton />
</main>
