"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Home, Newspaper, Bell, User, Bookmark, Menu, X, ChevronRight, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { UserProfile } from "./user-profile"
import { NavBarProps, NavItem, hasSubmenu } from "./types"

// Mobile-specific navigation items
const mainNavItems: NavItem[] = [
  {
    name: "News",
    url: "/news",
    icon: Newspaper
  },
  {
    name: "Bookmarks",
    url: "/bookmarks",
    icon: Bookmark
  },
  {
    name: "Home",
    url: "/",
    icon: Home
  },
  {
    name: "Notifications",
    url: "/notifications",
    icon: Bell
  },
  {
    name: "Profile",
    url: "/profile",
    icon: User
  }
]

// Mobile menu items (in top dropdown)
const menuItems = [
  {
    name: "Latest News",
    url: "/news/latest",
    description: "Stay updated with the most recent stories"
  },
  {
    name: "Categories",
    url: "/news/categories",
    description: "Browse news by category"
  },
  {
    name: "Saved Articles",
    url: "/news/saved",
    description: "Your reading list"
  },
  {
    name: "History",
    url: "/history",
    description: "Previously read articles"
  },
  {
    name: "Settings",
    url: "/settings",
    description: "Customize your experience"
  }
]

export function MobileNav({ className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(mainNavItems[2].name)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mock auth state - replace with your auth logic
  const isAuthenticated = false
  const user = isAuthenticated ? {
    name: "John Doe",
    email: "john@example.com",
    image: "https://github.com/shadcn.png"
  } : null

  return (
    <>
      {/* Header */}
      <div className={cn(
        "md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border",
        className
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                E-News
              </span>
            </Link>
            <div className="flex items-center gap-2">
              {isAuthenticated ? (
                <UserProfile user={user} />
              ) : (
                <Link 
                  href="/login"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full transition-colors hover:bg-primary/5 text-primary"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </Link>
              )}
              <ModeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-foreground/80 hover:text-primary rounded-full"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-border bg-background/80 backdrop-blur-lg"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-primary/5"
                    >
                      <div className="text-sm font-medium">{item.name}</div>
                      {item.description && (
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </div>
                      )}
                    </Link>
                  ))}
                  {!isAuthenticated && (
                    <Link
                      href="/register"
                      className="block px-4 py-3 mt-2 text-center rounded-lg bg-primary/5 hover:bg-primary/10 text-primary font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Create Account
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe">
        <div className="container mx-auto px-4 pb-4">
          <div className="flex items-center justify-between bg-background/80 border border-border backdrop-blur-lg py-2 px-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-12">
              {mainNavItems.slice(0, 2).map((item) => (
                <NavButton
                  key={item.name}
                  item={item}
                  isActive={activeTab === item.name}
                  onClick={() => setActiveTab(item.name)}
                />
              ))}
            </div>
            
            <div className="absolute left-1/2 -translate-x-1/2 -top-5">
              <NavButton
                item={mainNavItems[2]}
                isActive={activeTab === mainNavItems[2].name}
                onClick={() => setActiveTab(mainNavItems[2].name)}
                className="bg-background shadow-lg p-3 border border-border rounded-2xl"
              />
            </div>

            <div className="flex items-center gap-12">
              {mainNavItems.slice(3).map((item) => (
                <NavButton
                  key={item.name}
                  item={item}
                  isActive={activeTab === item.name}
                  onClick={() => setActiveTab(item.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface NavButtonProps {
  item: NavItem
  isActive: boolean
  onClick: () => void
  className?: string
}

function NavButton({ item, isActive, onClick, className }: NavButtonProps) {
  const Icon = item.icon!
  
  return (
    <Link
      href={item.url}
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center justify-center",
        "text-foreground/60 hover:text-primary",
        className
      )}
    >
      <span className={cn(
        "relative rounded-full p-2 transition-colors",
        isActive && "text-primary"
      )}>
        <Icon size={24} strokeWidth={2} />
        {isActive && (
          <motion.div
            layoutId="mobile-nav-active"
            className="absolute inset-0 bg-primary/10 rounded-full -z-10"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
              <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
              <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
              <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
            </div>
          </motion.div>
        )}
      </span>
      <span className="text-xs font-medium mt-1">{item.name}</span>
    </Link>
  )
}