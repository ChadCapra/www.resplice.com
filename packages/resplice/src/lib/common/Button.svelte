<script>
  import cx from 'classnames'

  export let type: 'button' | 'menu' | 'reset' | 'submit' = 'button'
  export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary'
  export let color:
    | 'brand'
    | 'brand-light'
    | 'success'
    | 'warning'
    | 'danger'
    | 'danger-light'
    | 'gray'
    | 'none' = 'brand'
  export let isLoading = false
  export let disabled = false
</script>

<button
  {type}
  class={cx(
    $$props.class,
    'text-lg font-semibold rounded-lg transform transition duration-75 ease-in-out active:scale-90 shadow-md active:shadow-none focus:ring-4 focus:ring-green-200 focus:outline-none',
    {
      'bg-brand-primary text-white': color === 'brand',
      'bg-brand-primary text-brand-primary-dark bg-opacity-20 shadow-none':
        color === 'brand-light',
      'bg-yellow-700 text-white': color === 'warning',
      'bg-red-700 text-white': color === 'danger',
      'bg-red-200 text-red-600 shadow-none': color === 'danger-light',
      'bg-gray-300 text-gray-600': color === 'gray',
      'py-2 px-4': variant !== 'tertiary',
      'bg-transparent text-gray-800 shadow-none px-2': variant === 'tertiary',
      'opacity-75': disabled || isLoading
    }
  )}
  disabled={disabled || isLoading}
  on:click
>
  {#if isLoading}
    Loading...
  {:else}
    <slot>Button</slot>
  {/if}
</button>
