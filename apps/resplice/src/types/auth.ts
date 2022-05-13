import type { Session } from '$types/session'
import type { ReCrypto } from '$services/crypto'

type LoginValues = {
  phone: {
    countryCode: string
    value: string
  }
  email: string
}
export type Auth = {
  loginValues?: LoginValues
  session: Session
  crypto: ReCrypto
}
