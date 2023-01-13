import { onDestroy } from 'svelte'

function useInterval(callback: () => void, ms: number) {
  const interval = setInterval(callback, ms)

  onDestroy(() => {
    clearInterval(interval)
  })
}

export default useInterval
