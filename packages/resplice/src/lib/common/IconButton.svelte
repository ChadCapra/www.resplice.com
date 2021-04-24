<script>
  export let Icon: any
  export let disabled: boolean
</script>

<button class="shadow rounded-full" {disabled} on:click>
  <svelte:component this={Icon} width={32} height={32} />
</button>
