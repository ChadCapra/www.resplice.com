import type { Attribute, Invite, User } from '$types'

type CreateParams = {
  image: Blob
  name: string
}

export interface UserClient {
  create: (params: CreateParams) => Promise<User>
  get: () => Promise<User>
  update: (user: Pick<User, 'name' | 'avatar'>) => Promise<User>
  delete: (user: Pick<User, 'name'>) => Promise<void>
  addAttribute: (attribute: Attribute) => Promise<Attribute>
  getAttribute: (attributeUUID: string) => Promise<Attribute>
  updateAttribute: (attribute: Attribute) => Promise<Attribute>
  verifyAttribute: (attributeUUID: string, code: string) => Promise<void>
  resendAttributeVerification: (attributeUUID: string) => Promise<void>
  deleteAttribute: (attributeUUID: string) => Promise<void>
  generateQrInvite: () => Promise<Invite>
}
