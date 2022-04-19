/**
 * @file Automatically generated by barrelsby.
 */

import * as attributesattributets from './attributes/attribute'
import * as attributesattribute_groupts from './attributes/attribute_group'
import * as attributesattribute_typets from './attributes/attribute_type'
import * as attributesattribute_valuets from './attributes/attribute_value'
import * as attributesrequestattribute_groupsts from './attributes/request/attribute_groups'
import * as attributesrequestattributests from './attributes/request/attributes'
import * as authrequestsessionts from './auth/request/session'
import * as authrequestsocketts from './auth/request/socket'
import * as authsessionts from './auth/session'
import * as client_requestts from './client_request'
import * as contactscontactts from './contacts/contact'
import * as contactscontact_attributets from './contacts/contact_attribute'
import * as contactscontact_sharets from './contacts/contact_share'
import * as contactspending_contactts from './contacts/pending_contact'
import * as contactspending_contact_attributets from './contacts/pending_contact_attribute'
import * as contactsrequestcontact_attributests from './contacts/request/contact_attributes'
import * as contactsrequestcontact_sharests from './contacts/request/contact_shares'
import * as contactsrequestcontactsts from './contacts/request/contacts'
import * as contactsrequestpending_contactsts from './contacts/request/pending_contacts'
import * as invitesinvitets from './invites/invite'
import * as invitesinvite_attributets from './invites/invite_attribute'
import * as invitesinvite_typets from './invites/invite_type'
import * as invitesqr_invitets from './invites/qr_invite'
import * as invitesqr_invite_attributests from './invites/qr_invite_attributes'
import * as invitesrequestinvite_attributests from './invites/request/invite_attributes'
import * as invitesrequestinvitests from './invites/request/invites'
import * as invitesrequestqr_invite_attributests from './invites/request/qr_invite_attributes'
import * as invitesrequestqr_invitests from './invites/request/qr_invites'
import * as messagingmessage_typests from './messaging/message_types'
import * as server_errorts from './server_error'
import * as server_messagets from './server_message'
import * as splice_invitesqr_splice_invitets from './splice_invites/qr_splice_invite'
import * as splice_invitesrequestqr_splice_invitets from './splice_invites/request/qr_splice_invite'
import * as splice_invitesrequestsplice_invitests from './splice_invites/request/splice_invites'
import * as splice_invitessplice_invitets from './splice_invites/splice_invite'
import * as splicespending_splicets from './splices/pending_splice'
import * as splicesrequestpending_splicests from './splices/request/pending_splices'
import * as splicesrequestsplice_memberts from './splices/request/splice_member'
import * as splicesrequestsplice_sharets from './splices/request/splice_share'
import * as splicesrequestsplicests from './splices/request/splices'
import * as splicessplicets from './splices/splice'
import * as splicessplice_memberts from './splices/splice_member'
import * as splicessplice_sharets from './splices/splice_share'
import * as userprofilets from './user/profile'
import * as userrequestaccountts from './user/request/account'
import * as userrequestprofilets from './user/request/profile'
export const attributes = {
  attribute: attributesattributets,
  attribute_group: attributesattribute_groupts,
  attribute_type: attributesattribute_typets,
  attribute_value: attributesattribute_valuets,
  request: {
    attribute_groups: attributesrequestattribute_groupsts,
    attributes: attributesrequestattributests,
  },
}
export const auth = {
  request: {
    session: authrequestsessionts,
    socket: authrequestsocketts,
  },
  session: authsessionts,
}
export {client_requestts as client_request}
export const contacts = {
  contact: contactscontactts,
  contact_attribute: contactscontact_attributets,
  contact_share: contactscontact_sharets,
  pending_contact: contactspending_contactts,
  pending_contact_attribute: contactspending_contact_attributets,
  request: {
    contact_attributes: contactsrequestcontact_attributests,
    contact_shares: contactsrequestcontact_sharests,
    contacts: contactsrequestcontactsts,
    pending_contacts: contactsrequestpending_contactsts,
  },
}
export const invites = {
  invite: invitesinvitets,
  invite_attribute: invitesinvite_attributets,
  invite_type: invitesinvite_typets,
  qr_invite: invitesqr_invitets,
  qr_invite_attributes: invitesqr_invite_attributests,
  request: {
    invite_attributes: invitesrequestinvite_attributests,
    invites: invitesrequestinvitests,
    qr_invite_attributes: invitesrequestqr_invite_attributests,
    qr_invites: invitesrequestqr_invitests,
  },
}
export const messaging = {
  message_types: messagingmessage_typests,
}
export {server_errorts as server_error}
export {server_messagets as server_message}
export const splice_invites = {
  qr_splice_invite: splice_invitesqr_splice_invitets,
  request: {
    qr_splice_invite: splice_invitesrequestqr_splice_invitets,
    splice_invites: splice_invitesrequestsplice_invitests,
  },
  splice_invite: splice_invitessplice_invitets,
}
export const splices = {
  pending_splice: splicespending_splicets,
  request: {
    pending_splices: splicesrequestpending_splicests,
    splice_member: splicesrequestsplice_memberts,
    splice_share: splicesrequestsplice_sharets,
    splices: splicesrequestsplicests,
  },
  splice: splicessplicets,
  splice_member: splicessplice_memberts,
  splice_share: splicessplice_sharets,
}
export const user = {
  profile: userprofilets,
  request: {
    account: userrequestaccountts,
    profile: userrequestprofilets,
  },
}
