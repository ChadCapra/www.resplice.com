<script lang="ts">
  import cx from 'classnames'
  export let name: string
  export let label: string
  export let value: string
  export let autoComplete = 'on'
  export let error = ''
  export let disabled = false
  // TODO: Figure out how to type svelte component prop
  export let Icon: any = null
  let isTouched = false

  $: {
    if (value) isTouched = true
  }

  function resetError() {
    if (error) error = ''
  }
</script>

<div class="w-full">
  <div
    class={cx(
      'relative rounded-2xl w-full text-left h-14 flex items-center text-gray-700',
      {
        'bg-white': !disabled,
        'bg-gray-200 text-opacity-50': disabled
      }
    )}
  >
    {#if Icon}
      <div class="ml-4">
        <svelte:component this={Icon} width={32} height={32} />
      </div>
    {/if}
    <label
      for={name}
      class={cx('font-semibold absolute transform', {
        'top-1 scale-90': isTouched,
        'top-4': !isTouched,
        'left-6': !Icon,
        'left-16': !!Icon
      })}
    >
      {label}
    </label>
    <input
      type="text"
      id={name}
      class="appearance-none absolute top-0 left-0 w-full h-14 bg-transparent outline-none border-none rounded-2xl px-6 pt-5 font-semibold text-lg text-gray-900 ring-2 focus:ring-gray-800"
      class:pl-16={!!Icon}
      class:ring-gray-200={disabled}
      class:ring-gray-600={!disabled && !error}
      class:ring-red-600={!disabled && !!error}
      title={name}
      {name}
      {disabled}
      autocomplete={autoComplete}
      bind:value
      on:input={resetError}
      on:focus={() => (isTouched = true)}
      on:blur={() => (!!value ? (isTouched = true) : (isTouched = false))}
    />
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
