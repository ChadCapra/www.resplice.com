<script context="module">
  /** @type {import('./[type]').Load} */
  export async function load({ params }) {
    return {
      props: {
        attributeType: params.type.toUpperCase()
      }
    }
  }
</script>

<script lang="ts">
  import AttributeForm from '$lib/attributes/form/AttributeForm.svelte'
  import type { AttributeType } from '$types/attribute'
  import attributeTypes from '$lib/attributes/attributeTypes'

  export let attributeType: AttributeType

  $: attributeTypeConfig = attributeTypes[attributeType]
</script>

<main
  class="h-full w-full flex flex-col items-center justify-between max-w-xl m-auto"
>
  <AttributeForm {attributeType} {attributeTypeConfig} />
</main>
