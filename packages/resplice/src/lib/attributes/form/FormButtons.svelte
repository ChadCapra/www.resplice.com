<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '$lib/common/Button.svelte'

  const dispatch = createEventDispatcher()
</script>

<div class="flex flex-col space-y-4">
  <Button on:click={() => dispatch('save')}>Save</Button>
  <Button color="danger-light" on:click={() => window.history.back()}>
    Cancel
  </Button>
</div>
