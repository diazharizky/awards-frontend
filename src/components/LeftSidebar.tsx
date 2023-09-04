import React from 'react'
import { Drawer, Menu } from 'antd'
import type { MenuProps } from 'antd'

import { useAccountService } from '../services'
import { SidebarProps } from '.'

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

export const LeftSidebar: React.FC<SidebarProps> = ({ onClose, open }) => {
  const accountService = useAccountService()

  const menuActions: Record<string, Function> = {
    home: onClose,
    logout: accountService.logout,
  }
  const onClick: MenuProps['onClick'] = (e) => menuActions[e.key]()

  const items: MenuProps['items'] = [
    getItem('Home', 'home'),
    getItem('Cards', 'cards'),
    getItem('Profile', 'profile'),
    getItem('Logout', 'logout'),
  ]

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
