import type { Splice } from '$types'

import { contacts } from './contacts'
import attributes from './attributes'
import messages from './messages'

const splices: Splice[] = [
  {
    uuid: '678asdad',
    name: 'Vietnam Trip',
    members: contacts,
    latest_message: messages[2],
    latest_attribute: attributes[5],
    missed_messages: 1
  }
]

export default splices
