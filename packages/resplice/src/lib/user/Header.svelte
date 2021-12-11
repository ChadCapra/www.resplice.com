<script lang="ts">
  import { fade } from 'svelte/transition'
  import { goto } from '$app/navigation'
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import Avatar from '$lib/common/Avatar.svelte'
  import IconButton from '$lib/common/IconButton.svelte'
  import SettingsIcon from '$lib/icons/SettingsIcon.svelte'

  import type { User } from '$types/user'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'

  export let user: User | null
  export let showUser = false
</script>

<nav class="flex-none flex items-center justify-between p-4">
  <div class="flex items-center">
    <IconButton Icon={BackIcon} on:click={() => goto('/app/list/contacts')} />
    {#if showUser}
      <div
        class="flex items-center ml-4"
        transition:fade={{ delay: 50, duration: 150 }}
      >
        {#if !!user}
          <Avatar uuid={user.uuid} src={user.avatar} size="sm" />
          <h2 class="ml-2 font-semibold text-xl">{user.name}</h2>
        {:else}
          <Skeleton variant="circle" height="1em" width="1em" />
          <Skeleton variant="rect" height="1em" width="100%" />
        {/if}
      </div>
    {/if}
  </div>
  <IconButton Icon={SettingsIcon} on:click={() => goto('/app/user/settings')} />
</nav>
