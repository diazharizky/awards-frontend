import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import axios from 'axios'

type SignInResponse = {
  ok: boolean
  data: {
    token: string
  }
}

export async function POST(req: Request) {
  const resp = await axios.post<SignInResponse>(
    'http://localhost:5000/accounts/signin',
    req.body,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  if (resp.data.ok) {
    cookies().set('token', resp.data.data.token)
  }

  return NextResponse.json({ data: 'ok' })
}
