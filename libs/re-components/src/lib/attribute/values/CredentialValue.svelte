<script lang="ts">
	import type { CredentialValue } from '@resplice/utils'
	import IconButton from '$lib/IconButton.svelte'
	import EyeIcon from '$lib/icons/EyeIcon.svelte'
	import EyeOffIcon from '$lib/icons/EyeOffIcon.svelte'

	export let value: CredentialValue
	let showPassword = false

	function togglePassword(e: MouseEvent) {
		// This will disable parent touch events from firing
		e.stopPropagation()
		if (showPassword) showPassword = false
		else showPassword = true
	}
</script>

<div class="flex flex-col">
	<p>{value.identity}</p>
	<div class="bg-gray-100 rounded-lg flex justify-between items-center p-1">
		{#if showPassword}
			<p class="flex-1 text-sm p-2 font-semibold text-gray-700 overflow-auto whitespace-nowrap">
				{value.passcode}
			</p>
			<IconButton Icon={EyeOffIcon} width={18} height={18} on:click={togglePassword} />
		{:else}
			<p class="p-2 text-sm filter blur-sm">
				{Array(value.passcode.length).fill('*').join('')}
			</p>
			<IconButton Icon={EyeIcon} width={18} height={18} on:click={togglePassword} />
		{/if}
	</div>
</div>
