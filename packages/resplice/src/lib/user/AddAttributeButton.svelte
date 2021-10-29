<script lang="ts">
  import { goto } from '$app/navigation'
  import Button from '$lib/common/Button.svelte'
  import AddIcon from '$lib/icons/AddIcon.svelte'
</script>

<div class="w-full flex items-center justify-center my-4">
  <Button
    color="brand-light"
    on:click={() => goto('/app/user/create-attribute')}
  >
    <div class="flex items-center justify-center w-full">
      <AddIcon width={36} height={36} />
      <p class="ml-2">Add Attribute</p>
    </div>
  </Button>
</div>
