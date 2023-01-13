import session from '$modules/session/session.store'
import attribute from '$modules/attribute/attribute.store'
import chat from '$modules/chat/chat.store'
import appEvent from '$modules/app-event/app-event.store'
import contact from '$modules/contact/contact.store'
import invite from '$modules/invite/invite.store'
import profile from '$modules/user/profile.store'
import search from '$modules/search/search.store'
import toast from '$modules/toast/toast.store'

const stores = {
	session,
	attribute,
	chat,
	appEvent,
	contact,
	invite,
	profile,
	search,
	toast
}

export type Stores = typeof stores

export default stores
