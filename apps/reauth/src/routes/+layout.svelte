<script lang="ts">
	import { setContext, onMount } from 'svelte'
	import { navigating, page } from '$app/stores'
	import { contextKey } from '$common/auth-protocol'
	import MockAuthProtocol from '$common/auth-protocol/authProtocol.mocks'
	import cache from '$common/db'
	import authStore from '$common/auth.store'
	import appConfig from '$common/config'
	import navigate from '$common/navigate'
	import AppLoading from '@resplice/components/skeleton/AppLoading.svelte'
	import PageTransition from '@resplice/components/skeleton/PageTransition.svelte'
	import { AuthStatus } from '$common/common.types'
	import '../app.css'
	import '@resplice/components/lib.css'
	import { browser } from '$app/environment'

	let isLoading = Promise.resolve(false)

	const protocolContext = { protocol: new MockAuthProtocol() }
	setContext(contextKey, protocolContext)

	function routeGuard(status: AuthStatus) {
		navigating
		switch (status) {
			case AuthStatus.UNKNOWN:
			case AuthStatus.EXPIRED:
			case AuthStatus.PENDING_ADDITIONAL_AUTHENTICATION:
				navigate.auth()
				break
			case AuthStatus.PENDING_EMAIL_VERIFICATION:
			case AuthStatus.PENDING_PHONE_VERIFICATION:
				navigate.verify()
				break
			case AuthStatus.PENDING_USER_REGISRATION:
				navigate.register()
				break
			case AuthStatus.AUTHENTICATED:
				navigate.app()
				break
		}
	}

	async function loadApp(): Promise<boolean> {
		routeGuard($authStore.status)

		return true
	}

	onMount(() => (isLoading = loadApp()))

	$: {
		if (browser) {
			routeGuard($authStore.status)
		}
	}
</script>

{#await isLoading}
	<AppLoading />
{:then isLoaded}
	{#if isLoaded}
		<PageTransition>
			<slot />
		</PageTransition>
	{:else}
		<AppLoading />
	{/if}
{:catch error}
	<!-- TODO: Make better error screen -->
	<p>{'App could not load :('}</p>
	<p>{error.message}</p>
{/await}
