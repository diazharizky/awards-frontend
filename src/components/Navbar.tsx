'use client'

import { MenuOutlined, FilterOutlined } from '@ant-design/icons'
import { Layout, Button, Typography } from 'antd'
import { useState } from 'react'

import { LeftSidebar, RightSidebar } from './'

const { Header } = Layout
const { Text } = Typography

export function Navbar() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false)

  const showLeftSidebar = () => {
    setLeftSidebarOpen(true)
  }

  const closeLeftSidebar = () => {
    setLeftSidebarOpen(false)
  }

  const showRightSidebar = () => {
    setRightSidebarOpen(true)
  }

  const closeRightSidebar = () => {
    setRightSidebarOpen(false)
  }

  return (
    <>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          background: '#fff',
        }}
      >
        <div>
          <Button
            type="text"
            size="large"
            icon={<MenuOutlined />}
            onClick={showLeftSidebar}
          />
        </div>
        <div>
          <Text strong style={{ fontSize: 24 }}>
            Awards
          </Text>
        </div>
        <div>
          <Button
            type="text"
            size="large"
            icon={<FilterOutlined />}
            onClick={showRightSidebar}
          />
        </div>
      </Header>
      <LeftSidebar onClose={closeLeftSidebar} open={leftSidebarOpen} />
      <RightSidebar onClose={closeRightSidebar} open={rightSidebarOpen} />
    </>
  )
}
