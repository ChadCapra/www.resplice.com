<script>
  import { onMount } from 'svelte'
  import type { User } from '$types'
  import Header from '$lib/user/Header.svelte'
  import UserAttributeList from '$lib/user/UserAttributeList.svelte'
  import UserAvatar from '$lib/user/UserAvatar.svelte'

  // TODO: Remove after api request
  import user from '../../mocks/user'
  import AddAttributeButton from '$lib/user/AddAttributeButton.svelte'

  $: attributes = sortUserAttributes(user)

  function sortUserAttributes(user: User) {
    if (!user) return []
    return user.attributes.sort((a, b) => a.sort_order - b.sort_order)
  }

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
  })
</script>

<svelte:head>
  <title>{user.name}</title>
</svelte:head>

<main class="flex flex-col w-full h-full">
  <Header showUser={showUserOnHeader} {user} />
  <div class="flex-1 overflow-auto relative w-full max-w-xl m-auto">
    <UserAvatar {user} />
    <h1 class="text-4xl font-bold mt-2 text-center mb-4">{user.name}</h1>
    <div
      bind:this={scrollEl}
      id="scrollIntersection"
      class="absolute top-1/4"
    />
    <UserAttributeList {attributes} />
    <AddAttributeButton />
  </div>
</main>
