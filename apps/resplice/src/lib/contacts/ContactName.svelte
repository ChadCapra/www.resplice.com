<script lang="ts">
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import type { Contact } from '$types/contact'

  export let contact: Contact | null
</script>

{#if contact}
  {#if contact.alias}
    <div class="flex flex-col items-center">
      <h2 class="text-xl font-semibold">{contact.alias}</h2>
      <p class="font-semibold text-gray-600">{contact.name}</p>
    </div>
  {:else}
    <h2 class="text-xl font-semibold">{contact.name}</h2>
  {/if}
{:else}
  <Skeleton variant="rect" width="100%" height="2em" />
{/if}
