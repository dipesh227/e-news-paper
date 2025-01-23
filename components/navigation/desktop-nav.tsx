"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Newspaper, Search, TrendingUp, ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { UserProfile } from "./user-profile"
import { NavBarProps, NavItem, SubMenuProps, hasSubmenu } from "./types"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Desktop-specific navigation items
const navItems: NavItem[] = [
  {
    name: "Home",
    url: "/",
    icon: Home
  },
  {
    name: "News",
    url: "/news",
    icon: Newspaper,
    children: [
      {
        name: "Latest News",
        url: "/news/latest",
        description: "Breaking news and updates"
      },
      {
        name: "Top Stories",
        url: "/news/top",
        description: "Most important stories of the day"
      },
      {
        name: "Categories",
        url: "/news/categories",
        description: "Browse news by topics"
      }
    ]
  },
  {
    name: "Explore",
    url: "/explore",
    icon: Search,
    children: [
      {
        name: "Trending Topics",
        url: "/explore/trending",
        description: "What's popular right now"
      },
      {
        name: "Editor's Picks",
        url: "/explore/editors",
        description: "Curated by our editors"
      },
      {
        name: "Featured Stories",
        url: "/explore/featured",
        description: "Must-read articles"
      }
    ]
  },
  {
    name: "Discover",
    url: "/discover",
    icon: TrendingUp,
    children: [
      {
        name: "Popular Writers",
        url: "/discover/writers",
        description: "Top journalists and authors"
      },
      {
        name: "Collections",
        url: "/discover/collections",
        description: "Themed article collections"
      },
      {
        name: "Reading Lists",
        url: "/discover/lists",
        description: "Curated reading experiences"
      }
    ]
  }
]

function SubMenu({ items, show, onClose }: SubMenuProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 px-4"
        >
          <div className="relative w-[320px] overflow-hidden rounded-xl border border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 p-2 shadow-lg">
            <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                onClick={onClose}
                className="flex items-start space-x-2 rounded-lg px-3 py-2.5 hover:bg-primary/5 transition-colors duration-200"
              >
                <div className="space-y-1">
                  <div className="text-sm font-medium leading-none">{item.name}</div>
                  {item.description && (
                    <div className="line-clamp-1 text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  )}
                </div>
                <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function DesktopNav({ className }: NavBarProps) {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  // Mock auth state - replace with your auth logic
  const isAuthenticated = false
  const user = isAuthenticated ? {
    name: "John Doe",
    email: "john@example.com",
    image: "https://github.com/shadcn.png"
  } : null

  return (
    <TooltipProvider>
      <div className={cn(
        "hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border/40",
        className
      )}>
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary/90 to-purple-600 bg-clip-text text-transparent">
                  E-News Paper
                </span>
              </Link>

              <nav className="flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon!
                  const isActive = pathname === item.url || pathname.startsWith(item.url + "/")
                  const itemHasSubmenu = hasSubmenu(item)

                  return (
                    <div key={item.name} className="relative">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={itemHasSubmenu ? "#" : item.url}
                            onClick={() => {
                              if (itemHasSubmenu) {
                                setOpenSubmenu(openSubmenu === item.name ? null : item.name)
                              } else {
                                setOpenSubmenu(null)
                              }
                            }}
                            className={cn(
                              "relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                              "text-foreground/60 hover:text-foreground group",
                              isActive && "text-foreground"
                            )}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{item.name}</span>
                            {itemHasSubmenu && (
                              <ChevronDown className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                openSubmenu === item.name && "rotate-180"
                              )} />
                            )}
                            {isActive && (
                              <motion.div
                                layoutId="desktop-nav-active"
                                className="absolute inset-0 bg-primary/5 rounded-full -z-10"
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
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="center">
                          {itemHasSubmenu ? `View ${item.name} options` : `Go to ${item.name}`}
                        </TooltipContent>
                      </Tooltip>

                      {itemHasSubmenu && item.children && (
                        <SubMenu
                          items={item.children}
                          show={openSubmenu === item.name}
                          onClose={() => setOpenSubmenu(null)}
                        />
                      )}
                    </div>
                  )
                })}
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <div className="h-5 w-px bg-border/40" />
              <ModeToggle />
              <UserProfile user={user} />
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}