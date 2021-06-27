<script>
  import SearchHeader from '$lib/common/SearchHeader.svelte'
  import SpliceList from '$lib/splices/SpliceList.svelte'
  import type { Splice } from '$types'
  // TODO: Pull from api client
  import splices from '../../../mocks/splices'

  let splicesAsync: Promise<Splice[]> = Promise.resolve(splices)
</script>

<svelte:head>
  <title>Splices</title>
</svelte:head>

<div class="h-full w-full flex flex-col overflow-auto">
  <SearchHeader />
  <SpliceList {splicesAsync} />
</div>
