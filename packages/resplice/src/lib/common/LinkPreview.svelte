<script lang="ts">
  import { onMount } from 'svelte'

  export let url: string
  let data: {
    title: string
    description: string
    image: string
  }

  onMount(async () => {
    const res = await fetch(url, { mode: 'no-cors' })
    console.log(res)
    const html = await res.text()
    console.log(html)
  })
</script>

{#if !!data}
  <div class="border-2 border-gray-200 rounded-xl p-4">
    {data.title}
  </div>
{/if}
