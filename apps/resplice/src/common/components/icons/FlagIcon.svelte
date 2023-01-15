<script lang="ts">
  import 'flag-icons/css/flag-icons.min.css'

  export let countryCode: string
  export let width = 48
  export let height = 48
</script>

<div
  class="fib fi-{countryCode.toLowerCase()} rounded-sm overflow-hidden"
  style="width: {width}px; height: {height}px;"
/>
