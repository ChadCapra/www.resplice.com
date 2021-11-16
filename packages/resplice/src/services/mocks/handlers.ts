import { rest } from 'msw'
import contacts from './contacts'
import attributes from './attributes'
import messages from './messages'
import user from './user'
import type { ContactDetail } from '$types/contact'

const BACKEND_URL = 'https://api.resplice.com'

const handlers = [
  rest.get(`${BACKEND_URL}/contacts`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(contacts))
  }),
  rest.get(`${BACKEND_URL}/contacts/:uuid`, (req, res, ctx) => {
    // console.log(req.params.uuid)
    const contactDetail: ContactDetail = {
      ...contacts[0],
      attributes,
      common_splices: ['Legends'],
      messages,
      pending: false
    }

    return res(ctx.status(200), ctx.delay(100), ctx.json(contactDetail))
  }),
  rest.get(`${BACKEND_URL}/user`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(user))
  })
]

export default handlers
