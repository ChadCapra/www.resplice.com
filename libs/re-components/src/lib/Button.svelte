<script lang="ts">
	import cx from 'classnames'
	import Spinner from '$lib/skeleton/Spinner.svelte'

	export let type: 'button' | 'reset' | 'submit' = 'button'
	export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary'
	export let color:
		| 'brand'
		| 'brand-light'
		| 'success'
		| 'warning'
		| 'danger'
		| 'danger-light'
		| 'gray'
		| 'none' = 'brand'
	export let isLoading = false
	export let disabled = false
</script>

<button
	{type}
	class={cx(
		$$props.class,
		'relative text-lg font-semibold rounded-lg transform transition duration-75 ease-in-out shadow-md focus:ring-4 focus:ring-green-200 focus:outline-none',
		{
			'bg-brand-primary text-white': color === 'brand',
			'bg-brand-primary text-brand-primary-dark bg-opacity-20 shadow-none': color === 'brand-light',
			'bg-yellow-700 text-white': color === 'warning',
			'bg-red-700 text-white': color === 'danger',
			'bg-red-200 text-red-600 shadow-none': color === 'danger-light',
			'bg-gray-300 text-gray-600 shadow-none': color === 'gray',
			'py-2 px-4': variant !== 'tertiary',
			'bg-transparent text-gray-800 shadow-none px-2': variant === 'tertiary',
			'active:scale-90 active:shadow-none': !disabled && !isLoading,
			'opacity-75': disabled || isLoading
		}
	)}
	disabled={disabled || isLoading}
	on:click
>
	{#if isLoading}
		<div
			class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-gray-400 bg-opacity-60 rounded-lg"
		>
			<Spinner width={24} />
		</div>
	{/if}
	<slot>Button</slot>
</button>
