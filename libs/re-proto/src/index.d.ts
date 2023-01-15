import * as attributests from './attributes'
import * as authts from './auth'
import * as commonts from './common'
import * as contactsts from './contacts'
import * as invitests from './invites'
import * as messagests from './messages'
import * as protocolrequestts from './protocol/request'
import * as protocolresponsets from './protocol/response'
import * as serviceattributests from './service/attributes'
import * as serviceauthts from './service/auth'
import * as servicecontactsts from './service/contacts'
import * as serviceinvitests from './service/invites'
import * as servicesplice_invitests from './service/splice_invites'
import * as servicesplicests from './service/splices'
import * as serviceuserts from './service/user'
import * as splice_invitests from './splice_invites'
import * as splicests from './splices'
import * as userts from './user'

export { attributests as attributes }
export { authts as auth }
export { commonts as common }
export { contactsts as contacts }
export { invitests as invites }
export { messagests as messages }
export { splice_invitests as splice_invites }
export { splicests as splices }
export { userts as user }
export namespace protocol {
  export { protocolrequestts as request }
  export { protocolresponsets as response }
}
export namespace service {
  export { serviceattributests as attributes }
  export { serviceauthts as auth }
  export { servicecontactsts as contacts }
  export { serviceinvitests as invites }
  export { servicesplice_invitests as spliceInvites }
  export { servicesplicests as splices }
  export { serviceuserts as user }
}
