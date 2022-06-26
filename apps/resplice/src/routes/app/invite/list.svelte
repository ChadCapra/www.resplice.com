<script lang="ts">
  import profileStore from '$stores/profile'
  import Header from '$lib/user/Header.svelte'
  import { goto } from '$app/navigation'
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <Header
    profile={$profileStore}
    showUser
    on:back={() => goto('/app/settings')}
  />
  <main
    class="flex-1 overflow-auto relative w-full max-w-xl m-auto py-4 rounded-t-3xl bg-white"
  >
    Invite List
  </main>
</div>
