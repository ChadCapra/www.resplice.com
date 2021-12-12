<script lang="ts">
  import { fly } from 'svelte/transition'
  import type { Toast } from '$types/common'

  export let toast: Toast
</script>

<div
  transition:fly={{ y: -50, delay: 50, duration: 150, opacity: 0.25 }}
  class="w-full shadow-lg rounded-2xl z-50 bg-white"
>
  <p>{toast.title}</p>
</div>
