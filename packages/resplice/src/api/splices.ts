import type { Contact, Invite, Splice } from '$types'

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
  deleteMember: (spliceUUID: string, contactUUID: string) => Promise<void>
  createInvite: (
    spliceUUID: string,
    invite: Pick<Invite, 'name' | 'value'>
  ) => Promise<Invite>
  getShare: (spliceUUID: string, shareUUID: string) => Promise<any>
  getShares: (spliceUUID: string) => Promise<any>
  getAllShares: () => Promise<any>
  addShare: (spliceUUID: string, attributeUUID: string) => Promise<any>
  removeShare: (shareUUID: string) => Promise<any>
}
