"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { User as UserIcon, LogOut, Settings, ChevronDown, LogIn } from "lucide-react"
import type { User } from "./types"

interface UserProfileProps {
  user?: User | null
  className?: string
  onClick?: () => void
}

export function UserProfile({ user, className, onClick }: UserProfileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    onClick?.()
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary/5 text-primary"
        >
          <LogIn size={18} />
          <span className="hidden md:inline">Login</span>
        </Link>
        <Link
          href="/register"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/5 hover:bg-primary/10 text-primary transition-colors"
        >
          Create Account
        </Link>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={cn(
          "flex items-center gap-2 rounded-full p-1 transition-colors",
          "hover:bg-primary/10",
          className
        )}
      >
        <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/5">
              <UserIcon className="h-5 w-5 text-primary" />
            </div>
          )}
        </div>
        <span className="hidden text-sm font-medium md:inline-block">
          {user.name}
        </span>
        <ChevronDown className="hidden h-4 w-4 md:inline-block" />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-[280px] rounded-lg border border-border bg-background/80 p-1 shadow-lg backdrop-blur-lg">
          <div className="relative">
            <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="p-2 text-xs text-muted-foreground">
              Signed in as
              <div className="truncate font-medium text-foreground">
                {user.email}
              </div>
            </div>
            <div className="h-px bg-border my-1" />
            <button
              onClick={() => {
                setIsMenuOpen(false)
                // Add your settings navigation logic here
              }}
              className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-primary/5"
            >
              <Settings className="h-4 w-4" />
              Settings
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false)
                // Add your logout logic here
              }}
              className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-red-500 hover:bg-red-500/5"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      )}
    </div>
  )
}