"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Home, Newspaper, Bell, User, Bookmark, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { UserProfile } from "./user-profile"
import { NavBarProps, NavItem } from "./types"

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

// Mobile menu items
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
        "sm:hidden fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/80",
        className
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2">
              <motion.span
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold bg-gradient-to-r from-primary/90 via-purple-500 to-purple-600 bg-clip-text text-transparent"
              >
                E-News
              </motion.span>
            </Link>
            <div className="flex items-center gap-2">
              {isAuthenticated ? (
                <UserProfile user={user} />
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full transition-colors hover:bg-primary/5 text-primary"
                >
                  <User size={18} />
                  <span>Login</span>
                </Link>
              )}
              <ModeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1.5 text-foreground/70 hover:text-primary rounded-full hover:bg-primary/5 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-x-0 top-14 bottom-16 z-30 bg-background/95 backdrop-blur-sm border-y border-border/40"
          >
            <div className="h-full overflow-y-auto">
              <div className="container mx-auto py-4 px-4">
                <nav className="space-y-1.5">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.url}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex flex-col w-full rounded-lg px-4 py-3 hover:bg-primary/5 active:bg-primary/10 transition-colors"
                      >
                        <div className="text-sm font-medium">{item.name}</div>
                        {item.description && (
                          <div className="text-xs text-muted-foreground/70">
                            {item.description}
                          </div>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Brand Section */}
                <div className="mt-6 px-4">
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-purple-500/5">
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="text-2xl font-bold bg-gradient-to-r from-primary/90 via-purple-500 to-purple-600 bg-clip-text text-transparent"
                    >
                      E-News
                    </motion.div>
                    <p className="text-xs text-center text-muted-foreground">Your daily source for news and updates</p>
                  </div>
                </div>

                {!isAuthenticated && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 px-4"
                  >
                    <Link
                      href="/register"
                      className="block w-full px-4 py-3 text-center text-sm rounded-lg bg-primary/10 hover:bg-primary/15 active:bg-primary/20 text-primary font-medium transition-all duration-200 hover:scale-[0.98]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Create Account
                    </Link>
                  </motion.div>
                )}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="sm:hidden fixed inset-x-0 bottom-0 z-40">
        <div className="bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-t border-border/40">
          <div className="container mx-auto px-4 py-2">
            <div className="grid grid-cols-5 relative">
              {mainNavItems.slice(0, 2).map((item) => (
                <NavButton
                  key={item.name}
                  item={item}
                  isActive={activeTab === item.name}
                  onClick={() => setActiveTab(item.name)}
                />
              ))}

              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-6">
                  <div className="p-1.5 rounded-full bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border border-border/40">
                    <NavButton
                      item={mainNavItems[2]}
                      isActive={activeTab === mainNavItems[2].name}
                      onClick={() => setActiveTab(mainNavItems[2].name)}
                      className="bg-background shadow-md p-2 rounded-full border border-border/40 hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>

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
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ item, isActive, onClick, className }) => {
  const Icon = item.icon!;

  return (
    <Link
      href={item.url}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={cn(
        "relative flex flex-col items-center justify-center mx-auto",
        "text-foreground/60 hover:text-primary transition-colors duration-200",
        "w-full",
        className
      )}
    >
      <span className={cn(
        "relative rounded-full p-2 transition-all duration-200",
        isActive && "text-primary scale-110"
      )}>
        <Icon size={20} strokeWidth={2} />
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
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-t-full">
              <div className="absolute w-8 h-4 bg-primary/20 rounded-full blur-md -top-2 -left-1" />
              <div className="absolute w-6 h-4 bg-primary/20 rounded-full blur-md -top-1" />
              <div className="absolute w-3 h-3 bg-primary/20 rounded-full blur-sm top-0 left-1.5" />
            </div>
          </motion.div>
        )}
      </span>
      <span className="text-[10px] font-medium mt-0.5">{item.name}</span>
    </Link>
  )
}