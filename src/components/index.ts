export * from './Navbar'
export * from './LeftSidebar'
export * from './RightSidebar'

export interface SidebarProps {
  onClose: () => void
  open: boolean
}

export const awardTypes: Record<string, string> = {
  voucher: 'Voucher',
  product: 'Product',
}
