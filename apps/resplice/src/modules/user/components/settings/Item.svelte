<script lang="ts">
  import { goto } from '$app/navigation'
  import ChevronRightIcon from '$lib/icons/ChevronRightIcon.svelte'

  export let linkTo: string = ''
  export let url: string = ''

  function handleSettingClick() {
    if (url) {
      window.open(url)
    } else if (linkTo) {
      goto(linkTo)
    }
  }
</script>

<button
  class="flex justify-between text-gray-800 font-semibold rounded-lg p-1 active:bg-gray-100"
  on:click={handleSettingClick}
>
  <slot />
  <ChevronRightIcon width={24} height={24} />
</button>
