<script>
  import { writable } from 'svelte/store'
  import Avatar from '$components/common/Avatar.svelte'
  import TextField from '$components/common/form/TextField.svelte'
  import SearchIcon from '$components/icons/SearchIcon.svelte'

  const searchQuery = writable('')
</script>

<div class="flex justify-between w-full p-4 items-center space-x-4">
  <TextField
    name="search"
    label="Search"
    value={$searchQuery}
    Icon={SearchIcon}
  />
  <Avatar
    size="md"
    uuid="marcusv"
    on:click={() => console.log('Go to profile page')}
  />
</div>
