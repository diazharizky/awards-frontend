import { cookies } from 'next/headers'

import { apiHandler } from '../../../../helpers/server/api'

const logout = async () => {
  let errMessage = 'Unexpected error'

  try {
    const res = await fetch('http://0.0.0.0:5000/accounts/signout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const { ok }: { ok: boolean } = await res.json()
    if (!ok) {
      return { ok: false, data: { error: errMessage } }
    }

    cookies().delete('logged_in')
    return { ok: true }
  } catch (err) {
    if (err instanceof Error) {
      errMessage = err.message
    }

    return { ok: false, data: { error: errMessage } }
  }
}

module.exports = apiHandler({
  POST: logout,
})
