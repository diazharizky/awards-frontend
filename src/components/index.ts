export * from './Navbar'
export * from './LeftSidebar'
export * from './RightSidebar'

export interface SidebarProps {
  onClose: () => void
  open: boolean
}
