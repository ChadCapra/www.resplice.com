<script lang="ts">
  import cx from 'classnames'
  export let isActive: boolean
  export let href: string
</script>

<a
  {href}
  class={cx(
    'p-2 rounded-full no-highlight transform transition duration-75 ease-in-out active:scale-90',
    {
      'bg-brand-primary bg-opacity-20 text-brand-primary': isActive,
      'bg-transparent text-gray-400': !isActive
    }
  )}
>
  <slot />
</a>
