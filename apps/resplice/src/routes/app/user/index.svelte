<script lang="ts">
  import { onMount } from 'svelte'

  import attributeStore from '$stores/attributes'
  import profileStore from '$stores/profile'

  import Header from '$lib/user/Header.svelte'
  import UserAttributeList from '$lib/user/UserAttributeList.svelte'
  import UserAvatar from '$lib/user/UserAvatar.svelte'
  import AddAttributeButton from '$lib/user/AddAttributeButton.svelte'
  import { sortUserAttributes } from '$lib/attributes/utils'

  $: attributes = sortUserAttributes($attributeStore)

  $: profile = $profileStore

  let scrollEl: HTMLDivElement
  let showUserOnHeader = false
  onMount(() => {
    let observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      showUserOnHeader = !entry.isIntersecting
    })
    if (scrollEl) {
      observer.observe(scrollEl)
    }
    return () => observer.disconnect()
  })
</script>

<svelte:head>
  <title>{profile?.name || 'Loading'}</title>
</svelte:head>

<div class="flex flex-col w-full h-full bg-gray-100">
  <Header {profile} showUser={showUserOnHeader} />
  <main
    class="flex-1 overflow-auto relative w-full max-w-xl m-auto py-4 rounded-t-3xl bg-white"
  >
    {#if !!profile}
      <UserAvatar {profile} />
      <h1 class="text-4xl font-bold mt-2 text-center mb-4">{profile.name}</h1>
      <div
        bind:this={scrollEl}
        id="scrollIntersection"
        class="absolute top-1/4"
      />
      <UserAttributeList {attributes} />
      <AddAttributeButton />
    {/if}
  </main>
</div>
