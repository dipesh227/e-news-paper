"use client"

import { Linkedin, Send, Github, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SocialIcon } from "@/components/ui/social-icon"
import { TooltipProvider } from "@/components/ui/tooltip"

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/explore", label: "Explore" },
  { href: "/discover", label: "Discover" },
  { href: "/about", label: "About Us" },
]

const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Settings" },
]

const SOCIAL_LINKS = [
  { href: "https://github.com/Dipeshcdy", label: "GitHub", icon: Github },
  { href: "mailto:dipeshjoshi227@gmail.com", label: "Email", icon: Mail },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
]

export function Footer() {
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = new FormData(form).get("email")

    if (!email) return
    console.log("Subscribe:", email)
    form.reset()
  }

  return (
    <footer className="relative border-t border-border">
      <div className="container max-w-7xl mx-auto px-4 pt-16 pb-8 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-bold relative">
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-info to-primary bg-[length:200%] animate-shimmer bg-clip-text text-transparent">
                  E-News Paper
                </span>
                <span className="relative bg-gradient-to-r from-primary to-info bg-clip-text text-transparent group-hover:opacity-0 transition-opacity duration-300">
                  E-News Paper
                </span>
              </span>
            </Link>
            <p className="mb-6 text-muted-foreground">
              Your trusted source for the latest news and updates. Stay informed with our comprehensive coverage.
            </p>
            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <div className="relative group">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="pr-12 transition-colors bg-background border-border hover:border-primary focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  variant="icon"
                  size="icon"
                  className="absolute right-1 top-1 hover:scale-105 transition-transform"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <nav className="grid gap-2 text-sm">
              {QUICK_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="w-fit relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-primary/60 after:via-info/60 after:to-primary/60 hover:after:w-full after:transition-all after:duration-300 hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Contact Info</h3>
            <address className="space-y-3 text-sm not-italic">
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Khatima, U.S.Nagar, Uttarakhand</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <Link href="mailto:dipeshjoshi227@gmail.com" className="relative text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-primary/60 after:via-info/60 after:to-primary/60 hover:after:w-full after:transition-all after:duration-300">
                  dipeshjoshi227@gmail.com
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <Link href="tel:+918630484930" className="relative text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-primary/60 after:via-info/60 after:to-primary/60 hover:after:w-full after:transition-all after:duration-300">
                  +91 86304 84930
                </Link>
              </p>
            </address>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-muted-foreground">
                <span className="text-success">🔭</span>
                <span>AI Image Generation Projects</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <span className="text-info">🌱</span>
                <span>Learning AI/ML & Cloud Dev</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <h3 className="mb-4 text-lg font-medium">Connect With Me</h3>
            <TooltipProvider>
              <div className="mb-6 flex space-x-4">
                {SOCIAL_LINKS.map(({ href, label, icon }) => (
                  <SocialIcon
                    key={href}
                    href={href}
                    label={label}
                    icon={icon}
                  />
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} E-News Paper. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-primary/60 after:via-info/60 after:to-primary/60 hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}