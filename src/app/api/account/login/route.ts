import { cookies } from 'next/headers'
import { apiHandler } from '../../../_helper/server/api'

module.exports = apiHandler({
  POST: login,
})

async function login(req: Request) {
  cookies().set('logged_in', 'true')

  return { ok: true }
}
