<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  import Button from '$lib/common/Button.svelte'

  import cx from 'classnames'
  export const tags: string[] = [
    'Friends',
    'Family',
    'Coworkers',
    'Frenemies',
    'Mentors'
  ]
  let selectedTags: Set<string> = new Set()

  const onTagSelect = (tag: string) => {
    const newTags = new Set(selectedTags)
    if (newTags.has(tag)) {
      newTags.delete(tag)
    } else {
      newTags.add(tag)
    }
    dispatch('change', newTags)
    selectedTags = newTags
  }
</script>

<div class="w-full overflow-auto py-1">
  <div class="flex space-x-2 w-min px-4">
    {#each tags as tag}
      <div
        class={cx(
          'bg-gray-200 rounded-xl px-4 py-1 text-gray-700 font-semibold cursor-pointer no-highlight transform transition duration-75 ease-in-out active:scale-90',
          {
            'bg-brand-primary bg-opacity-20 text-brand-primary': selectedTags.has(
              tag
            )
          }
        )}
        on:click={() => onTagSelect(tag)}
      >
        {tag}
      </div>
    {/each}
  </div>
</div>

<div class="flex justify-between mt-2 px-2">
  {#if selectedTags.size}
    <h2 class="text-2xl font-gray-700 px-2 my-2">
      {[...selectedTags.values()].join(', ')}
    </h2>
  {:else}
    <h2 class="text-2xl font-gray-700 px-2 my-2">Contacts</h2>
  {/if}
  <Button variant="tertiary" color="none">See all</Button>
</div>
