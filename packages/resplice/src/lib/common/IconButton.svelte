<script lang="ts">
  export let Icon: any
  export let disabled: boolean = false
</script>

<button
  class="rounded-full bg-gray-200 text-gray-800 p-2 transform transition duration-75 ease-in-out active:scale-95 focus:ring-4 focus:ring-gray-300 focus:outline-none"
  {disabled}
  on:click
>
  <svelte:component this={Icon} width={28} height={28} />
</button>
