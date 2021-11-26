<script lang="ts">
  export let error: Error
</script>

<div class="w-full h-full flex flex-col items-center justify-center">
  <p>Something went wrong</p>
  <p class="text-red-600 font-semibold">{error.message}</p>
</div>
