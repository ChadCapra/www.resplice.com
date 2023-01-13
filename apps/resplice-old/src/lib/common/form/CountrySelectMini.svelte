<script lang="ts">
  import countries from '$lib/common/countries'
  import FlagIcon from '$lib/icons/FlagIcon.svelte'
  import ChevronDownIcon from '$lib/icons/ChevronDownIcon.svelte'

  export let name: string
  export let value: string
  export let disabled = false
</script>

<div class="h-14 relative z-10">
  <label for={name} class="w-full h-full flex items-center space-x-1">
    <FlagIcon countryCode={value} width={28} height={21} />
    <ChevronDownIcon width={12} />
  </label>
  <select
    type="text"
    id={name}
    class="appearance-none opacity-0 absolute bottom-0 left-0 w-12 h-14 bg-transparent outline-none border-none z-10"
    title={name}
    {name}
    {disabled}
    bind:value
    on:input
  >
    {#each Object.entries(countries) as c}
      <option value={c[0]}>{c[1]}</option>
    {/each}
  </select>
</div>
