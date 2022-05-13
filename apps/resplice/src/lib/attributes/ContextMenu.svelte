<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import useAppClient from '$lib/hooks/useAppClient'
  import Modal from '$lib/common/Modal.svelte'
  import Button from '$lib/common/Button.svelte'

  const dispatch = createEventDispatcher()
  const client = useAppClient()

  export let attributeId: number
</script>

<Modal on:close={() => dispatch('close')} let:close>
  <!-- TODO: Make this menu better -->
  <div class="my-8">
    <Button
      variant="primary"
      color="danger-light"
      on:click={() => {
        client.attributes.deleteAttribute(attributeId)
        close()
      }}
    >
      Delete Attribute
    </Button>
  </div>
</Modal>
