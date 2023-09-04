import { cookies } from 'next/headers'

import { apiHandler } from '../../../../helpers/server/api'

const login = async (req: Request) => {
  try {
    const body = await req.json()
    const res = await fetch('http://0.0.0.0:5000/accounts/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const { ok }: { ok: boolean } = await res.json()
    if (!ok) {
      return {
        ok: false,
        data: {
          error: 'Email does not exist',
        },
      }
    }

    cookies().set('logged_in', 'true')
    return { ok: true }
  } catch (err) {
    let errMessage = 'Unexpected error'
    if (err instanceof Error) {
      errMessage = err.message
    }

    return {
      ok: false,
      data: {
        error: errMessage,
      },
    }
  }
}

module.exports = apiHandler({
  POST: login,
})
