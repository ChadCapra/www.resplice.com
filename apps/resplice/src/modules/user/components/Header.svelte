<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { fade } from 'svelte/transition'
  import { goto } from '$app/navigation'
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import Avatar from '$lib/common/Avatar.svelte'
  import IconButton from '$lib/common/IconButton.svelte'
  import SettingsIcon from '$lib/icons/SettingsIcon.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import type { Profile } from '$types/user'

  const dispatch = createEventDispatcher()

  export let profile: Profile | null
  export let showUser = false
</script>

<nav class="flex-none flex items-center justify-between p-4">
  <div class="flex items-center">
    <IconButton Icon={BackIcon} on:click={() => dispatch('back')} />
    {#if showUser}
      <div
        class="flex items-center ml-4"
        transition:fade={{ delay: 50, duration: 150 }}
      >
        {#if !!profile}
          <Avatar id={0} src={profile.avatar} size="sm" />
          <h2 class="ml-2 font-semibold text-xl">{profile.name}</h2>
        {:else}
          <Skeleton variant="circle" height="1em" width="1em" />
          <Skeleton variant="rect" height="1em" width="100%" />
        {/if}
      </div>
    {/if}
  </div>
  <IconButton Icon={SettingsIcon} on:click={() => goto('/app/settings')} />
</nav>
