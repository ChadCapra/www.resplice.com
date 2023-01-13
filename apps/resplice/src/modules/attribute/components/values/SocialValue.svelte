<script lang="ts">
  import LinkPreview from '$lib/common/LinkPreview.svelte'

  import type { SocialValue } from '$types/attribute'

  export let value: SocialValue
</script>

<div class="pb-2">
  {#if value.url}
    <a
      class="underline underline-offset-4 decoration-brand-primary decoration-2"
      href={value.url}
      target="_blank"
      rel="noopener"
    >
      {value.handle}
    </a>
    <LinkPreview url={value.url} />
  {:else}
    <p>{value.handle}</p>
  {/if}
</div>
