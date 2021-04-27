<script>
  import type { Attribute, AttributeType } from '$types'
  import Button from '$lib/common/Button.svelte'

  export let attributeType: AttributeType
  export let attribute: Attribute | null = null
</script>

<div class="p-4">
  <div class="shadow-lg rounded-lg">
    <h2 class="text-xl font-semibold">{attributeType.name}</h2>
  </div>
  <form>
    <Button>Save</Button>
  </form>
</div>
