<script>
  export let variant: 'circle' | 'rect'
  export let width: string
  export let height: string = width

  if (variant === 'circle') height = width
</script>

<div
  class="animate-pulse bg-gray-200"
  class:rounded-full={variant === 'circle'}
  class:rounded-lg={variant === 'rect'}
  style={`width: ${width}; height: ${height}`}
/>
