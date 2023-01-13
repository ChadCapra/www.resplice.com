<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '$lib/common/Button.svelte'

  const dispatch = createEventDispatcher()
</script>

<div class="flex flex-col items-center space-y-4 w-full mt-4">
  <Button class="w-40" on:click={() => dispatch('save')}>Save</Button>
  <Button class="w-40" color="gray" on:click={() => window.history.back()}>
    Back
  </Button>
</div>
