import { onDestroy } from 'svelte'

export function useInterval(callback: () => void, ms: number) {
	const interval = setInterval(callback, ms)

	onDestroy(() => {
		clearInterval(interval)
	})
}
