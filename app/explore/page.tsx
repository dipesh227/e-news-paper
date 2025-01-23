import Link from "next/link"

export default function ExplorePage() {
  const sections = [
    {
      title: "Trending Topics",
      description: "What's popular right now",
      href: "/explore/trending"
    },
    {
      title: "Editor's Picks",
      description: "Curated by our editors",
      href: "/explore/editors"
    },
    {
      title: "Featured Stories",
      description: "Must-read articles",
      href: "/explore/featured"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Explore</h1>
      <p className="text-lg text-muted-foreground mb-8">Discover interesting content and trending stories.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="block p-6 rounded-lg border border-border/40 hover:border-primary/60 hover:bg-primary/5 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-sm text-muted-foreground">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}