<script lang="ts">
  import cx from 'classnames'
  import countries from '$lib/common/countries'

  export let name: string
  export let label: string
  export let value: string
  export let error: string = ''
  export let disabled = false
  // TODO: Figure out how to type svelte component prop
  export let Icon: any = null
  let isTouched = !!value

  function resetError() {
    if (error) error = ''
  }
</script>

<div class="w-full">
  <div
    class="relative rounded-2xl w-full text-left h-14 flex items-center"
    class:bg-white={!disabled}
    class:bg-gray-200={disabled}
  >
    {#if Icon}
      <div class="ml-4 text-gray-700">
        <svelte:component this={Icon} width={32} height={32} />
      </div>
    {/if}
    <label
      for={name}
      class={cx('text-gray-700 font-semibold absolute left-6 transform', {
        'top-1 scale-90': isTouched,
        'top-4': !isTouched,
        'left-16': !!Icon
      })}
    >
      {label}
    </label>
    <select
      type="text"
      class="appearance-none absolute top-0 left-0 w-full h-14 bg-transparent outline-none border-none rounded-2xl px-6 pt-5 font-semibold text-lg text-gray-900 ring-2 focus:ring-gray-800"
      class:pl-16={!!Icon}
      class:ring-gray-200={disabled}
      class:ring-gray-600={!disabled && !error}
      class:ring-red-600={!disabled && !!error}
      title={name}
      {name}
      {disabled}
      bind:value
      on:input={resetError}
      on:focus={() => (isTouched = true)}
      on:blur={() => (!!value ? (isTouched = true) : (isTouched = false))}
    >
      {#each Object.entries(countries) as c}
        <option value={c[0]}>{c[1]}</option>
      {/each}
    </select>
  </div>
  {#if error}
    <p class="text-sm text-red-600 h-4 my-1 mx-2">{error}</p>
  {/if}
</div>

<style>
  label {
    transform-origin: 0 0;
    transition: all 0.2s ease;
  }
</style>
