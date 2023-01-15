<script lang="ts">
	import authStore from '$common/auth.store'
	import RespliceWide from '@resplice/components/icons/RespliceWide.svelte'
	import VerifyForm from '$modules/verify/components/VerifyForm.svelte'
</script>

<svelte:head>
	<title>Verify</title>
</svelte:head>

<main class="w-full h-full p-8 flex flex-col justify-between m-auto max-w-lg overflow-auto">
	<header class="flex-none w-full mb-8">
		<RespliceWide width="100%" />
		<p class="text-lg font-semibold mt-4">
			Verify your phone and email by entering the codes that were sent to you.
		</p>
	</header>

	{#if !!$authStore}
		<VerifyForm />
	{/if}
</main>
