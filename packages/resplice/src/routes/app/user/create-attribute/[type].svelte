<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page }) {
    return {
      props: {
        attributeType: page.params.type.toUpperCase()
      }
    }
  }
</script>

<script lang="ts">
  import AttributeForm from '$lib/attributes/form/AttributeForm.svelte'
  import type { AttributeType } from '$types/attribute'
  import attributeTypes from '$services/mocks/attributeTypes'

  export let attributeType: AttributeType

  $: attributeTypeConfig = attributeTypes[attributeType]
</script>

<main
  class="h-full w-full flex flex-col items-center justify-between max-w-xl m-auto"
>
  <AttributeForm {attributeType} {attributeTypeConfig} />
</main>
