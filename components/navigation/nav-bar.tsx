"use client"

import React, { useEffect, useState } from "react"
import { NavBarProps } from "./types"
import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"

export function NavBar({ className }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {isMobile ? (
        <MobileNav className={className} />
      ) : (
        <DesktopNav className={className} />
      )}
    </>
  )
}