<script lang="ts">
	export let isActive: boolean = false
	export let top: number = 0
	export let left: number = 0
</script>

<div class="absolute bg-white rounded-full p-1" style="top: {top}; left: {left}">
	<div
		class="w-3.5 h-3.5 rounded-full"
		class:bg-brand-primary={isActive}
		class:bg-gray-300={!isActive}
	/>
</div>
