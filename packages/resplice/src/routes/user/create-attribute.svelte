<script>
  import type { AttributeType } from '$types'
  import AttributeTypeItem from '$lib/attributes/AttributeTypeItem.svelte'
  import BackButton from '$lib/common/BackButton.svelte'
  import attributeTypes from '../../mocks/attributeTypes'
  import AttributeForm from '$lib/attributes/form/AttributeForm.svelte'

  $: types = Object.values(attributeTypes)

  let activeAttributeType: AttributeType | null = null
</script>

<main
  class="h-full w-full flex flex-col items-center justify-between max-w-xl m-auto"
>
  {#if !!activeAttributeType}
    <AttributeForm attributeType={activeAttributeType} />
  {:else}
    <div class="w-full p-4">
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

  <div class="p-4"><BackButton /></div>
</main>
