import { getContext } from 'svelte'
import { type AuthProtocol, contextKey } from '$common/auth-protocol'

function useAuthProtocol() {
	const protocol = getContext<AuthProtocol>(contextKey)
	if (!protocol) throw Error('Auth Protocol has not yet been initialized')
	return protocol
}

export default useAuthProtocol
