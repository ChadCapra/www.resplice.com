<script lang="ts">
  import { goto } from '$app/navigation'
  import userStore from '$stores/user'
  import Avatar from '$lib/common/Avatar.svelte'
  import SearchIcon from '$lib/icons/SearchIcon.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
</script>

<div class="flex justify-between w-full p-4 items-center space-x-4">
  <button
    class="flex items-center flex-1 rounded-2xl text-left h-12 text-gray-900 ring-2 ring-gray-600 focus:ring-gray-800 bg-white outline-none border-none"
    on:click={() => goto('/app/search')}
  >
    <div class="mx-4 text-gray-600">
      <SearchIcon width={32} height={32} />
    </div>
    <p class="text-gray-500 font-semibold">Search</p>
  </button>
  {#if $userStore}
    <Avatar
      size="md"
      uuid={$userStore.uuid}
      src={$userStore.avatar}
      on:click={() => goto('/app/user')}
    />
  {:else}
    <Skeleton variant="circle" width="48px" />
  {/if}
</div>
