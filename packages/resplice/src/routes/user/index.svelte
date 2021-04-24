<script>
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
</script>

<svelte:head>
  <title>{user.name}</title>
</svelte:head>

<main>
  <Header {user} />
  <UserAvatar {user} />
  <UserAttributeList {attributes} />
  <AddAttributeButton />
</main>
