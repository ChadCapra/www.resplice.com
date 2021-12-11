<script lang="ts">
  import { goto } from '$app/navigation'

  import Camera from '$lib/common/Camera.svelte'
</script>

<div class="w-full h-full">
  <Camera
    on:picture={(e) => console.log(e.detail)}
    on:close={() => goto('/app/list/contacts')}
  />
</div>
