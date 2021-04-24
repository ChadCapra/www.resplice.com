<script>
  import Button from './Button.svelte'
</script>

<Button color="danger-light" on:click={() => window.history.back()}>
  <slot>Cancel</slot>
</Button>
