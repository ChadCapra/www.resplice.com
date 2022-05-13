<script lang="ts">
  import { fade } from 'svelte/transition'
  import Avatar from '$lib/common/Avatar.svelte'
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import EllipsisHorizontalIcon from '$lib/icons/EllipsisHorizontalIcon.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import IconButton from '$lib/common/IconButton.svelte'
  import ContextMenu from '$lib/contacts/ContextMenu.svelte'
  import type { Contact } from '$types/contact'

  export let contact: Contact | null
  export let showContact = false
  let showContextMenu = false
</script>

<nav class="flex-none flex items-center justify-between p-4">
  <div class="flex items-center">
    <IconButton Icon={BackIcon} on:click={() => window.history.back()} />
    {#if showContact}
      <div
        class="flex items-center ml-4"
        transition:fade={{ delay: 50, duration: 150 }}
      >
        {#if !!contact}
          <Avatar id={contact.id} src={contact.avatarUrl} size="sm" />
          <h2 class="ml-2 font-semibold text-xl">{contact.name}</h2>
        {:else}
          <Skeleton variant="circle" height="1em" width="1em" />
          <Skeleton variant="rect" height="1em" width="100%" />
        {/if}
      </div>
    {/if}
  </div>
  <IconButton
    Icon={EllipsisHorizontalIcon}
    on:click={() => (showContextMenu = true)}
  />
  {#if showContextMenu}
    <ContextMenu
      contactId={contact.id}
      on:close={() => (showContextMenu = false)}
    />
  {/if}
</nav>
