<script>
  import type { Attribute, AttributeType } from '$types'
  import Button from '$lib/common/Button.svelte'
  import AttributeItem from '$lib/attributes/AttributeItem.svelte'

  export let attributeType: AttributeType
  export let attribute: Attribute | null = null
</script>

<div class="w-full flex-1 overflow-auto p-4">
  <div class="w-full shadow-lg rounded-lg p-4">
    <h2 class="text-xl font-semibold mb-4">{attributeType.name}</h2>
    <AttributeItem
      itemType="disabled"
      attribute={{
        type: attributeType.type,
        name: 'Mobile',
        value: '2185910657'
      }}
    />
  </div>
  <form class="flex flex-col items-center my-4">
    <Button>Save</Button>
  </form>
</div>
