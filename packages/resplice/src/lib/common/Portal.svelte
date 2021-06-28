<script>
  // src/components/Portal.svelte
  import { onMount, onDestroy } from 'svelte'
  export let id: string
  let ref
  let portal: HTMLDivElement

  onMount(() => {
    portal = document.createElement('div')
    portal.id = 'portal' + id
    portal.className = 'portal'
    document.body.appendChild(portal)
    portal.appendChild(ref)
  })

  onDestroy(() => {
    document.body.removeChild(portal)
  })
</script>

<div class="hidden">
  <div bind:this={ref}>
    <slot />
  </div>
</div>
