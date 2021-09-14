<script lang="ts">
  export let name: string
  export let label: string
  export let isChecked: boolean
  export let float: 'left' | 'right' = 'left'

  let checkbox: HTMLInputElement
</script>

<div
  class="flex space-x-4 items-center cursor-pointer no-highlight"
  class:flex-reverse={float === 'right'}
>
  <div
    class="h-7 w-7 rounded bg-gray-200 cursor-pointer outline-none no-highlight focus:ring-2 focus:ring-gray-600"
    class:bg-brand-primary={isChecked}
    on:click={() => checkbox.click()}
  />
  <label class="cursor-pointer text-gray-900 font-semibold" for={name}>
    {label}
  </label>
  <input
    class="hidden appearence-none outline-none border-none"
    type="checkbox"
    id={name}
    {name}
    bind:this={checkbox}
    bind:checked={isChecked}
  />
</div>
