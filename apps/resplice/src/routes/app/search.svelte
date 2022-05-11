<script lang="ts">
  import { onMount } from 'svelte'
  import searchStores from '$stores/search'
  import SearchService, { type SearchResult } from '$services/search'
  import SearchField from '$lib/common/form/SearchField.svelte'
  import Spinner from '$lib/common/skeleton/Spinner.svelte'
  import AttributeResults from '$lib/search/AttributeResults.svelte'
  import ContactResults from '$lib/search/ContactResults.svelte'
  import ContactAttributeResults from '$lib/search/ContactAttributeResults.svelte'

  const index = searchStores.index
  const query = searchStores.query

  let searchService: SearchService | null = null
  let buildingIndex: Promise<void> = Promise.resolve()
  let searching: Promise<SearchResult | null> = Promise.resolve(null)

  $: {
    if (!!searchService) {
      buildingIndex = searchService.buildIndex($index)
    }
  }

  $: {
    if (!!searchService && !!$query) {
      console.log(searchService)
      searching = searchService.query($query)
    }
    if (!$query) {
      searching = Promise.resolve(null)
    }
  }

  onMount(() => {
    searchService = new SearchService()
  })
</script>

<main class="w-full h-full flex flex-col">
  <SearchField name="search" label="Search" bind:query={$query} />

  <div class="flex-1 overflow-auto pt-8 pb-4 px-4">
    {#await buildingIndex}
      <Spinner />
    {:then}
      {#await searching}
        <Spinner />
      {:then results}
        {#if results}
          <AttributeResults results={results.attributes} />
          <ContactResults results={results.contacts} />
          <ContactAttributeResults results={results.contactAttributes} />
        {/if}
      {/await}
    {/await}
  </div>
</main>
