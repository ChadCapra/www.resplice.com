<script lang="ts">
  import type { SocialValue } from '$types/attribute'

  export let value: SocialValue
</script>

{#if value.provider && value.handle}
  <p>{value.provider}, {value.handle}</p>
{/if}
