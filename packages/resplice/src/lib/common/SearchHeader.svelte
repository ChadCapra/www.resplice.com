<script lang="ts">
  import { goto } from '$app/navigation'
  import userStore from '$stores/user'
  import Avatar from '$lib/common/Avatar.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import SearchIcon from '$lib/icons/SearchIcon.svelte'
</script>

<div class="flex justify-between w-full p-4 items-center space-x-4">
  <TextField name="search" label="Search" value={''} Icon={SearchIcon} />
  <Avatar size="md" uuid={$userStore.uuid} on:click={() => goto('/app/user')} />
</div>
