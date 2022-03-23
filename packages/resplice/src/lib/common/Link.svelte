<script lang="ts">
  import cx from 'classnames'

  export let href: string = '#'
  console.log(href)
</script>

<a
  class={cx(
    $$props.class,
    'underline underline-offset-4 decoration-brand-primary decoration-2 text-gray-600'
  )}
  {href}
>
  <slot>link</slot>
</a>
