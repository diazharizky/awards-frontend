import { NextResponse } from 'next/server'
import axios from 'axios'
import { cookies } from 'next/headers'

export async function POST() {
  const token = cookies().get('token')?.value
  await axios.post('http://localhost:5000/accounts/signout', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  cookies().delete('token')

  return NextResponse.json({ data: 'ok' })
}
