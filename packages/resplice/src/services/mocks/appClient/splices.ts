import type { Splice, Attribute } from '$types/splice'

import { contacts } from './contacts'
import attributes from './attributes'
import messages from './messages'

const spliceAttributes: Attribute[] = [
  {
    ...attributes[5],
    splice_uuid: '678asdad'
  }
]

const splices: Splice[] = [
  {
    uuid: '678asdad',
    name: 'Vietnam Trip',
    members: contacts,
    latest_message: messages[2],
    latest_attribute: spliceAttributes[0],
    missed_messages: 1
  }
]

export default splices
