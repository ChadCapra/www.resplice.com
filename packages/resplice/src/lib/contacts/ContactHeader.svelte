<script lang="ts">
  import type { Contact } from '$types/contact'
  import Avatar from '$lib/common/Avatar.svelte'
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import EllipsisHorizontalIcon from '$lib/icons/EllipsisHorizontalIcon.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import IconButton from '$lib/common/IconButton.svelte'

  export let contact: Contact | null
</script>

{#if !!contact}
  <nav class="flex items-center justify-between p-4">
    <div class="flex-1 flex items-center">
      <div class="mr-4">
        <IconButton Icon={BackIcon} on:click={() => window.history.back()} />
      </div>
      <Avatar uuid={contact.uuid} src={contact.avatar_url} size="sm" />
      <p class="ml-2 text-xl font-semibold">{contact.name}</p>
    </div>
    <div><IconButton Icon={EllipsisHorizontalIcon} /></div>
  </nav>
{:else}
  <nav class="flex items-center justify-between p-4">
    <div class="flex-1 flex items-center">
      <div class="mr-4"><IconButton Icon={BackIcon} /></div>
      <Skeleton variant="circle" width="2em" />
      <Skeleton class="ml-2" variant="rect" height="2em" width="10em" />
    </div>
    <div><IconButton Icon={EllipsisHorizontalIcon} /></div>
  </nav>
{/if}
