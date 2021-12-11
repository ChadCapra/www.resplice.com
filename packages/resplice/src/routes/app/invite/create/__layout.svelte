<script lang="ts">
  import Avatar from '$lib/common/Avatar.svelte'

  import IconButton from '$lib/common/IconButton.svelte'
  import BackIcon from '$lib/icons/BackIcon.svelte'
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <nav class="flex-none flex items-center justify-start p-4">
    <IconButton Icon={BackIcon} on:click={() => window.history.back()} />
    <h1 class="ml-4 font-semibold text-xl">Create Invite</h1>
  </nav>
  <main class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto">
    <div class="flex-none flex justify-center w-full mb-8">
      <Avatar uuid="resplice" size="xl" />
    </div>
    <slot />
  </main>
</div>
