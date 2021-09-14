<script lang="ts">
  import type { Attribute } from '$types'
  import { format, parseISO } from 'date-fns'
  import ActionIcon from '$lib/attributes/ActionIcon.svelte'
  // TODO: Change to svelte store or some cache
  import attributeTypes from '../../mocks/attributeTypes'

  export let attribute: Pick<Attribute, 'type' | 'name' | 'value'>
  const attributeType = attributeTypes[attribute.type]
</script>

<div class="flex text-gray-700">
  <ActionIcon attributeAction={attributeType.actions[0]} />
  <div class="ml-2 text-gray-800 text-sm">
    <p>{format(parseISO(attribute.value[0]), "MMM dd',' hh:mm a")}</p>
    <p>{attribute.value[1]}</p>
  </div>
</div>
