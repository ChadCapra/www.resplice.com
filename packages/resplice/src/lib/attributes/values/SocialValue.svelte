<script lang="ts">
  // import LinkPreview from '$lib/common/LinkPreview.svelte'

  import type { SocialValue } from '$types/attribute'

  export let value: SocialValue
</script>

<div>
  {#if value.url}
    <a
      class="underline underline-offset-4 decoration-brand-primary decoration-2"
      href={value.url}
    >
      {value.handle}
    </a>
    <!-- <LinkPreview url={value.url} /> -->
  {:else}
    <p>{value.handle}</p>
  {/if}
</div>
