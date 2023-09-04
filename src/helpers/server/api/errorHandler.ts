import { NextResponse } from 'next/server'

const errorHandler = (err: Error | string) => {
  if (typeof err === 'string') {
    const is404 = err.toLowerCase().endsWith('not found')
    const status = is404 ? 404 : 400

    return NextResponse.json({ data: { error: err } }, { status })
  }

  return NextResponse.json({ data: { error: err.message } }, { status: 500 })
}

export { errorHandler }
