import { NextRequest, NextResponse } from 'next/server'

import { errorHandler } from '.'

const apiHandler = (handler: any) => {
  const httpMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  const wrappedHandler: any = {}

  httpMethods.forEach((method) => {
    if (typeof handler[method] !== 'function') return

    wrappedHandler[method] = async (req: NextRequest, ...args: any) => {
      try {
        const json = await req.json()
        req.json = () => json
      } catch {}

      try {
        const respBody = await handler[method](req, ...args)
        return NextResponse.json(respBody || {})
      } catch (err: any) {
        return errorHandler(err)
      }
    }
  })

  return wrappedHandler
}

export { apiHandler }
