<script lang="ts">
  import cx from 'classnames'
  import SearchIcon from '$lib/icons/SearchIcon.svelte'

  export let name: string
  export let label: string
  export let query: string
  export let disabled = false
  export let autoFocus = true

  let isTouched = false

  $: {
    if (query) isTouched = true
    if (autoFocus) isTouched = true
  }
</script>

<div class="w-full p-4">
  <div
    class={cx(
      'relative rounded-2xl w-full text-left h-14 flex items-center text-gray-700',
      {
        'bg-white': !disabled,
        'bg-gray-200 text-opacity-50': disabled
      }
    )}
  >
    <div class="ml-4">
      <SearchIcon width={32} height={32} />
    </div>
    <label
      for={name}
      class={cx('font-semibold absolute left-16 transform', {
        'top-1 scale-90': isTouched,
        'top-4': !isTouched
      })}
    >
      {label}
    </label>
    <!-- svelte-ignore a11y-autofocus -->
    <input
      type="search"
      id={name}
      class="appearance-none absolute top-0 left-0 w-full h-14 bg-transparent outline-none border-none rounded-2xl px-6 pt-5 pl-16 font-semibold text-lg text-gray-900 ring-2 focus:ring-gray-800"
      class:ring-gray-200={disabled}
      class:ring-gray-600={!disabled}
      title={name}
      {name}
      {disabled}
      autofocus={autoFocus}
      bind:value={query}
      on:focus={() => (isTouched = true)}
      on:blur={() => (!!query ? (isTouched = true) : (isTouched = false))}
    />
  </div>
</div>

<style>
  label {
    transform-origin: 0 0;
    transition: all 0.2s ease;
  }
</style>
