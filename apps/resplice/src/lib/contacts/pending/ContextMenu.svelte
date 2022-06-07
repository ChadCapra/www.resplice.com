<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Modal from '$lib/common/Modal.svelte'
  import Button from '$lib/common/Button.svelte'

  const dispatch = createEventDispatcher()

  export let contactId: number
</script>

<Modal on:close={() => dispatch('close')}>
  <!-- TODO: Make this menu better -->
  <div class="my-8">
    <Button on:click={() => {}}>Edit Shares</Button>
  </div>
</Modal>
