<script lang="ts">
	import cx from 'classnames'

	export let href: string = '#'
	export let useNewWindow: boolean = false
</script>

{#if useNewWindow}
	<a
		class={cx(
			$$props.class,
			'underline underline-offset-4 decoration-brand-primary decoration-2 text-gray-600'
		)}
		{href}
		target="_blank"
		rel="noreferrer"
	>
		<slot>link</slot>
	</a>
{:else}
	<a
		class={cx(
			$$props.class,
			'underline underline-offset-4 decoration-brand-primary decoration-2 text-gray-600'
		)}
		{href}
	>
		<slot>link</slot>
	</a>
{/if}
