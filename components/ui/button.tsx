"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: "default" | "outline" | "ghost" | "icon"
  size?: "sm" | "md" | "lg" | "icon"
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", href, isLoading, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
    const variants = {
      default: "bg-primary hover:bg-primary/90 text-primary-foreground",
      outline: "bg-primary/10 hover:bg-primary/20 text-primary",
      ghost: "bg-transparent hover:bg-primary/10 text-primary",
      icon: "bg-transparent hover:bg-primary/10 text-primary p-0",
    }
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
      icon: "w-9 h-9",
    }

    const content = (
      <>
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </>
    )

    return href ? (
      <Link
        href={href}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
      >
        {content}
      </Link>
    ) : (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }