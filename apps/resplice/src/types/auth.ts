import type { Session } from '$types/session'
import type { ReCrypto } from '$services/crypto'

export type Auth = {
  session: Session
  crypto: ReCrypto
}
