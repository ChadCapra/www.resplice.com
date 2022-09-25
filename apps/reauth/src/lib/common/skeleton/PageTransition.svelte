<script lang="ts">
  // import { fly } from 'svelte/transition'
  export const refresh = ''
</script>

<!-- {#key refresh}
  <div
    in:fly={{ x: -5, duration: 500, delay: 500 }}
    out:fly={{ x: 5, duration: 500 }}
  >
    <slot />
  </div>
{/key} -->
<!-- Slot for now until I have time to play with animations -->
<slot />
