import type { Splice } from '$types/splice'
import type { Contact } from '$types/contact'
import type { Invite } from '$types/invite'

type CreateParams = {
  name: string
  welcomeMessage: string
}

export interface SplicesClient {
  create: (contactUUIDS: string[], params: CreateParams) => Promise<Splice>
  get: (spliceUUID: string) => Promise<Splice>
  getAll: () => Promise<Splice[]>
  update: (spliceUUID: string, splice: Pick<Splice, 'name'>) => Promise<Splice>
  leave: (spliceUUID: string) => Promise<void>
  getMember: (spliceUUID: string, memberUUID: string) => Promise<Contact>
  getMembers: (spliceUUID: string) => Promise<Contact[]>
  getAllMembers: () => Promise<Contact[]>
  removeMember: (spliceUUID: string, contactUUID: string) => Promise<void>
  createInvite: (spliceUUID: string) => Promise<Invite>
  getShare: (spliceUUID: string, shareUUID: string) => Promise<any>
  getShares: (spliceUUID: string) => Promise<any>
  getAllShares: () => Promise<any>
  addShare: (spliceUUID: string, attributeUUID: string) => Promise<any>
  removeShare: (spliceUUID: string, shareUUID: string) => Promise<any>
}

// TODO: Change to reactive model
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function splicesClientFactory(api: any): SplicesClient {
  return {
    create: (contactUUIDS, params) => api.createSplice(contactUUIDS, params),
    get: (spliceUUID) => api.getSplice(spliceUUID),
    getAll: () => api.getAllSplices(),
    update: (spliceUUID, splice) => api.updateSplice(spliceUUID, splice),
    leave: (spliceUUID) => api.leaveSplice(spliceUUID),
    getMember: (spliceUUID, memberUUID) =>
      api.getSpliceMember(spliceUUID, memberUUID),
    getMembers: (spliceUUID) => api.getSpliceMembers(spliceUUID),
    getAllMembers: () => api.getAllMembers(),
    removeMember: (spliceUUID, memberUUID) =>
      api.removeSpliceMember(spliceUUID, memberUUID),
    createInvite: (spliceUUID) => api.createMemberInvite(spliceUUID),
    getShare: (spliceUUID, shareUUID) =>
      api.getSpliceShare(spliceUUID, shareUUID),
    getShares: (spliceUUID) => api.getSpliceShares(spliceUUID),
    getAllShares: () => api.getAllSpliceShares(),
    addShare: (spliceUUID, attributeUUID) =>
      api.addSpliceShare(spliceUUID, attributeUUID),
    removeShare: (spliceUUID, shareUUID) =>
      api.removeSpliceShare(spliceUUID, shareUUID)
  }
}

export default splicesClientFactory
