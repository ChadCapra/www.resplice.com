import { getContext } from 'svelte'
import { type AuthProtocol, contextKey } from '$common/auth-protocol'

function useAuthProtocol() {
	const context = getContext<{ protocol: AuthProtocol }>(contextKey)
	if (!context) throw Error('Auth Protocol has not yet been initialized')
	return context.protocol
}

export default useAuthProtocol
