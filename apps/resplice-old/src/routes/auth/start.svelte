<script lang="ts">
	import { _ as t } from 'svelte-i18n'
	import RespliceWide from '$lib/icons/RespliceWide.svelte'
	import LoginForm from '$lib/auth/LoginForm.svelte'
</script>

<svelte:head>
	<title>{$t('Login')}</title>
</svelte:head>

<main class="w-full h-full p-8 flex flex-col m-auto max-w-lg">
	<header class="flex-none w-full mb-8">
		<RespliceWide width="100%" />
		<p class="text-lg font-semibold mt-4">
			{$t('auth.welcomeMessage')}
		</p>
	</header>

	<LoginForm />
</main>
