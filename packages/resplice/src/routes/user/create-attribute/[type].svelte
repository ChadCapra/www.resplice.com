<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page }) {
    return {
      props: {
        typeParam: page.params.type
      }
    }
  }
</script>

<script>
  import AttributeForm from '$lib/attributes/form/AttributeForm.svelte'
  import type { AttributeTypeEnum } from '$types'
  import attributeTypes from '../../../mocks/attributeTypes'

  export let typeParam: AttributeTypeEnum

  $: attributeType = attributeTypes[typeParam]
</script>

<main
  class="h-full w-full flex flex-col items-center justify-between max-w-xl m-auto"
>
  <AttributeForm {attributeType} />
</main>
