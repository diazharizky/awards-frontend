import React from 'react'
import { Drawer, Typography, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { SidebarProps } from '.'

const { Title } = Typography

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('Home', 'home'),
  getItem('Cards', 'cards'),
  getItem('Profile', 'profile'),
  getItem('Logout', 'logout'),
]

export const LeftSidebar: React.FC<SidebarProps> = ({ onClose, open }) => {
  const menuActions: Record<string, Function> = {
    home: onClose,
  }

  const onClick: MenuProps['onClick'] = (e) => menuActions[e.key]()

  return (
    <Drawer
      title="Awards Menu"
      placement="left"
      onClose={onClose}
      closable={false}
      open={open}
    >
      <Menu onClick={onClick} mode="inline" items={items} />
    </Drawer>
  )
}
