import Link from "next/link"
import { Users, Library, BookOpen } from "lucide-react"

interface DiscoverSection {
  title: string
  description: string
  href: string
  icon: any
}

const sections: DiscoverSection[] = [
  {
    title: "Popular Writers",
    description: "Meet our top journalists and authors",
    href: "/discover/writers",
    icon: Users
  },
  {
    title: "Collections",
    description: "Browse themed article collections",
    href: "/discover/collections",
    icon: Library
  },
  {
    title: "Reading Lists",
    description: "Curated reading experiences",
    href: "/discover/lists",
    icon: BookOpen
  }
]

export default function DiscoverPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Discover</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Explore curated content and discover new perspectives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <Link
              key={section.title}
              href={section.href}
              className="group block p-6 rounded-lg border border-border/40 hover:border-primary/60 hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                {section.description}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}