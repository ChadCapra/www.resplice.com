<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '$lib/common/Button.svelte'

  const dispatch = createEventDispatcher()
</script>

<div class="flex space-x-4 w-full mt-4">
  <Button color="gray" on:click={() => window.history.back()}>Back</Button>
  <Button class="w-full" on:click={() => dispatch('save')}>Save</Button>
</div>
