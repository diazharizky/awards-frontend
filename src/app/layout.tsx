import { Metadata } from 'next'
import { App } from 'antd'

export const metadata: Metadata = {
  title: 'Awards App',
  description: 'Some description',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  )
}

export default RootLayout
