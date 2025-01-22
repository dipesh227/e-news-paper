"use client"

import { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

interface SocialIconProps {
  icon: LucideIcon
  label: string
  href: string
}

export function SocialIcon({ icon: Icon, label, href }: SocialIconProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          asChild
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="h-4 w-4" />
            <span className="sr-only">{label}</span>
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Follow us on {label}</p>
      </TooltipContent>
    </Tooltip>
  )
}