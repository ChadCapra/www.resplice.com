<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { attributeTypes } from '@resplice/utils'
	import AttributeAction from '$lib/attribute/Action.svelte'
	import AttributeValue from '$lib/attribute/Value.svelte'
	import type { Attribute } from '@resplice/utils'

	export let attribute: Attribute
	export let itemType: 'contact' | 'user' | 'disabled'
	export let showSecondAction = true
	export let disableActions = false

	const dispatch = createEventDispatcher()

	const attributeType = attributeTypes[attribute.type]

	$: showValue = !!Object.values(attribute.value).length

	function onAttributeClick(e: MouseEvent | KeyboardEvent) {
		if (itemType === 'disabled' || disableActions) return

		dispatch('click', e)
	}
</script>

<div class="flex justify-between items-start w-full">
	<div class="flex items-start flex-1 overflow-hidden">
		<AttributeAction
			{itemType}
			{attribute}
			attributeAction={attributeType.actions[0]}
			disableAction={disableActions}
		/>
		<div
			class="flex flex-col mx-4 flex-1 overflow-hidden no-highlight"
			role="button"
			on:click={onAttributeClick}
			on:keypress={onAttributeClick}
		>
			<span class="font-semibold text-gray-800 overflow-hidden text-ellipsis h-6">
				{attribute.name}
			</span>
			{#if showValue}
				<AttributeValue {attribute} />
			{/if}
		</div>
	</div>
	{#if itemType !== 'user' && showSecondAction && !!attributeType.actions[1]}
		<AttributeAction
			{itemType}
			{attribute}
			attributeAction={attributeType.actions[1]}
			disableAction={disableActions}
		/>
	{/if}
</div>
