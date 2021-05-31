<script>
  import { goto } from '$app/navigation'
  import AttributeTypeItem from '$lib/attributes/AttributeTypeItem.svelte'
  import Button from '$lib/common/Button.svelte'
  import attributeTypes from '../../../mocks/attributeTypes'

  $: types = Object.values(attributeTypes)
</script>

<main
  class="h-full w-full flex flex-col items-center justify-between max-w-xl m-auto"
>
  <div class="w-full p-4">
    <h2 class="text-xl font-semibold mb-4">Select an Attribute Type</h2>
    <div class="flex flex-col space-y-4">
      {#each types as type}
        <AttributeTypeItem
          attributeType={type}
          on:click={() => goto(`create-attribute/${type.type}`)}
        />
      {/each}
    </div>
  </div>
  <div class="p-4">
    <Button color="danger-light" on:click={() => window.history.back()}>
      Cancel
    </Button>
  </div>
</main>
