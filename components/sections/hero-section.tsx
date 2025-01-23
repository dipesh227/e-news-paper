"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCta?: {
    text: string
    href: string
  }
  bottomImage?: {
    light: string
    dark: string
  }
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Your Digital News Platform",
      subtitle = {
        regular: "Stay informed with ",
        gradient: "E-News Paper",
      },
      description = "Experience news like never before. Get real-time updates, trending stories, and in-depth coverage right at your fingertips. Your one-stop destination for all things news, curated just for you.",
      ctaText = "Explore News",
      ctaHref = "/news",
      secondaryCta = {
        text: "Discover More",
        href: "/discover"
      },
      bottomImage = {
        light: "/images/news-preview-light.png",
        dark: "/images/news-preview-light.png",
      },
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative min-h-[calc(100vh-5rem)]", className)} ref={ref} {...props}>
        <section className="relative max-w-full mx-auto z-1">
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
              <Link href="/" className="inline-block group">
                <h1 className="text-sm text-muted-foreground font-medium mx-auto px-5 py-2 bg-gradient-to-tr from-border/40 via-muted to-transparent rounded-3xl w-fit inline-flex items-center">
                  {title}
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                </h1>
              </Link>
              <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/90 to-info dark:from-primary dark:to-info">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                {description}
              </p>
              <div className="flex items-center justify-center gap-x-4 space-y-3 sm:space-y-0">
                <Button href={ctaHref} size="lg">
                  {ctaText}
                </Button>
                <Button
                  href={secondaryCta.href}
                  variant="outline"
                  size="lg"
                >
                  {secondaryCta.text}
                </Button>
              </div>
            </div>
            {bottomImage && (
              <div className="mt-32 mx-10 relative z-10">
                <div className="w-full max-h-[400px] overflow-hidden rounded-lg border border-border">
                  <div className="dark:hidden">
                    <Image
                      src={bottomImage.light}
                      alt="E-News Paper Preview"
                      width={1200}
                      height={600}
                      priority
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="hidden dark:block">
                    <Image
                      src={bottomImage.dark}
                      alt="E-News Paper Preview"
                      width={1200}
                      height={600}
                      priority
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }