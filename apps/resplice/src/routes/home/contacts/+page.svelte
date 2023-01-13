<script lang="ts">
	import FilterList from '$lib/contacts/FilterList.svelte'
	import ContactList from '$lib/contacts/ContactList.svelte'
	import FavoritesList from '$lib/contacts/FavoritesList.svelte'

	let selectedFilter: string = 'Contacts'

	const filterListMap = {
		Favorites: FavoritesList,
		Contacts: ContactList
	}

	$: List = filterListMap[selectedFilter]
</script>

<svelte:head>
	<title>Contacts</title>
</svelte:head>

<div class="w-full h-full flex flex-col overflow-auto">
	<FilterList bind:selectedFilter />
	<div class="mt-2 px-2">
		<h2 class="text-2xl font-gray-700 px-2 my-2">
			{selectedFilter}
		</h2>
	</div>
	<svelte:component this={List} />
</div>
