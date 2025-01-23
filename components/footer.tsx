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

    // TODO: Implement newsletter subscription
    console.log("Subscribe:", email)
    form.reset()
  }

  return (
    <footer className="relative border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary/90 to-purple-600 bg-clip-text text-transparent">
                E-News Paper
              </span>
            </Link>
            <p className="mb-6 text-muted-foreground">
              Your trusted source for the latest news and updates. Stay informed with our comprehensive coverage.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
                required
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              {QUICK_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block transition-all duration-200 hover:text-primary hover:translate-x-1"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <address className="space-y-2 text-sm not-italic">
              <p className="flex items-center gap-2 transition-all duration-200 hover:translate-x-1">
                <MapPin className="h-4 w-4 text-primary" />
                Khatima, U.S.Nagar, Uttarakhand
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:dipeshjoshi227@gmail.com" className="hover:text-primary transition-colors hover:translate-x-1">
                  dipeshjoshi227@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+918630484930" className="hover:text-primary transition-colors hover:translate-x-1">
                  +91 86304 84930
                </a>
              </p>
            </address>

            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2 transition-all duration-200 hover:translate-x-1">
                <span className="text-primary">🔭</span> Working on: AI Image Generation
              </p>
              <p className="flex items-center gap-2 transition-all duration-200 hover:translate-x-1">
                <span className="text-primary">🌱</span> Learning: AI/ML & Cloud Dev
              </p>
            </div>
          </div>

          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Connect With Me</h3>
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} E-News Paper. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-all duration-200 hover:text-primary hover:scale-105"
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