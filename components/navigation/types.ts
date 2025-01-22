import { LucideIcon } from "lucide-react"

export interface NavItem {
  name: string
  url: string
  icon?: LucideIcon
  children?: Array<{
    name: string
    url: string
    description?: string
  }>
}

export interface NavBarProps {
  className?: string
}

export interface User {
  name: string
  email: string
  image?: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export const hasSubmenu = (item: NavItem): boolean => {
  return Array.isArray(item.children) && item.children.length > 0
}

export interface SubMenuProps {
  items: NonNullable<NavItem["children"]>
  show: boolean
  onClose: () => void
}