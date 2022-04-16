<script lang="ts">
  import { onMount } from 'svelte'

  export let url: string
  let data: {
    title: string
    description: string
    image: string
  }

  onMount(async () => {
    // TODO: Cannot fetch html from another site because of CORS
    // We should create a simple linkpreview service that scrapes
    // sites and returns some metadata about them that we can then
    // show in a preview
    url
  })
</script>

{#if !!data}
  <div class="border-2 border-gray-200 rounded-xl p-4">
    {data.title}
  </div>
{/if}
