// import { setContext, onMount } from 'svelte'
// import { goto } from '$app/navigation'
// import startConnCommuter from '$services/commuters/connCommuter'
// import MockAppClient from '$services/mocks/appClient'
// import AppClient, { contextKey as clientContextKey } from '$services/api/appClient'
// import apiFactory from '$services/api/http'
// import cache from '$services/db'
// import stores from '$stores/index'
// import useConfig from '$lib/hooks/useConfig'
// import AppLoading from '$lib/common/skeleton/AppLoading.svelte'
// import PageTransition from '$lib/common/skeleton/PageTransition.svelte'
// import ToastProvider from '$lib/common/ToastProvider.svelte'
// import { SessionStatus } from '$types/session'

// console.log('App layout rendering')

// let isLoading = Promise.resolve(false)

// const config = useConfig()
// const authStore = stores.auth
// const clientContext = { client: null }
// setContext(clientContextKey, clientContext)

// async function startConnection() {
// 	if (!$authStore || $authStore.session.status !== SessionStatus.AUTHENTICATED) {
// 		goto('/auth')
// 		return
// 	}

// 	const useMock = !config.wsEndpoint
// 	if (useMock) {
// 		clientContext.client = new MockAppClient()
// 	} else {
// 		const connCommuter = startConnCommuter(useMock)
// 		const api = apiFactory(config.httpEndpoint)
// 		const client = new AppClient(config.wsEndpoint, connCommuter, api, cache, stores)
// 		clientContext.client = client
// 	}

// 	return true
// }

// onMount(() => (isLoading = startConnection()))

// {#await isLoading}
//   <AppLoading />
// {:then isLoaded}
//   {#if isLoaded}
//     <PageTransition>
//       <ToastProvider>
//         <slot />
//       </ToastProvider>
//     </PageTransition>
//   {/if}
// {:catch error}
//   <!-- TODO: Make better error screen -->
//   <p>{'App could not load :('}</p>
//   <p>{error.message}</p>
// {/await}
