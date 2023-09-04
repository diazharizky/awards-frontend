import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import axios from 'axios'

import { AwardListFilter, Award } from '../../../models'

type AwardsResponse = {
  ok: boolean
  data: {
    awards: Award[]
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const params: AwardListFilter = {
    type: searchParams.get('type'),
    maxPoint: searchParams.get('maxPoint'),
    minPoint: searchParams.get('minPoint'),
  }

  const token = cookies().get('token')?.value
  const resp = await axios.get<AwardsResponse>('http://localhost:5000/awards', {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (resp.status === 401) {
    cookies().delete('token')

    return redirect('/')
  }

  return NextResponse.json({ awards: resp.data.data.awards })
}
