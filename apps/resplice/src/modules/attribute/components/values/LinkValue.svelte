<script lang="ts">
  import Link from '$lib/common/Link.svelte'
  import LinkPreview from '$lib/common/LinkPreview.svelte'
  import type { LinkValue } from '$types/attribute'

  export let value: LinkValue
</script>

<div>
  <span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
    <Link useNewWindow>{value.url}</Link>
  </span>
  <LinkPreview url={value.url} />
</div>
