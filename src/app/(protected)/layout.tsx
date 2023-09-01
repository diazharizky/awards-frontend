import React from 'react'
import { auth } from '../_helper/server/auth'

const Layout = ({ children }: { children: React.ReactNode }) => {
  if (!auth.isAuthenticated()) {
    console.log('not log in')
  }

  return <div>{children}</div>
}

export default Layout
