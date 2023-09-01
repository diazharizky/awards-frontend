import React from 'react'
import { Drawer } from 'antd'
import { SidebarProps } from '.'

export const LeftSidebar: React.FC<SidebarProps> = ({ onClose, open }) => {
  return (
    <Drawer
      title="Awards Menu"
      placement="left"
      onClose={onClose}
      closable={false}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}
