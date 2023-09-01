import { App } from 'antd'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awards App',
  description: 'Some description',
}

const RootLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  )
}

export default RootLayout