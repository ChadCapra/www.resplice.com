<script lang="ts">
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import type { PendingContact } from '$types/contact'

  export let contact: Pick<PendingContact, 'name'> | null
</script>

{#if contact}
  <h2 class="text-xl font-semibold">{contact.name}</h2>
{:else}
  <Skeleton variant="rect" width="100%" height="2em" />
{/if}
