import type { AuthStore } from '$stores/auth'
import type { Message, Session } from '$types/session'
import { MessageType } from '$types/session'

// type CreateParams = {
//   phone: { value: string; countryCallingCode: string }
//   email: string
//   rememberMe: boolean
// }
// type VerifyParams = {
//   code: string
// }
// type SinceParams = {
//   since: Date
// }

// export interface SessionsClient {
//   create: (params: CreateParams) => Promise<{
//     session: Session
//     confirmation_hash: string
//   }>
//   authenticate: () => void
//   getActive: () => Promise<Session | null>
//   getAll: (since: SinceParams) => Promise<Session[]>
//   expire: (sessionUUID: string) => Promise<void>
//   verifyEmail: (params: VerifyParams) => Promise<Session>
//   verifyPhone: (params: VerifyParams) => Promise<Session>
// }

export interface SessionsClient {
  handleMessage: (message: Message) => void
  authenticate: () => void
}

function sessionsClientFactory(
  conn: Worker,
  _cache: Worker,
  store: AuthStore
): SessionsClient {
  return {
    handleMessage: (message) => {
      switch (message.type) {
        case MessageType.AUTHENTICATE:
          store.update((state) => ({ ...state, session: message.data }))
      }
    },
    authenticate: () => {
      conn.postMessage({ type: 'SEND', data: 'Some token and key here' })
    }
  }
}

export default sessionsClientFactory
