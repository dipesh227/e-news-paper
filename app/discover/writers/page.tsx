"use client"

interface Writer {
  id: number
  name: string
  role: string
  bio: string
  articleCount: number
  imageUrl: string
  specialties: string[]
}

const writers: Writer[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Senior Technology Editor",
    bio: "Expert in artificial intelligence and emerging technologies with over 15 years of experience.",
    articleCount: 342,
    imageUrl: "https://github.com/shadcn.png",
    specialties: ["AI", "Tech Innovation", "Digital Transformation"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Environmental Correspondent",
    bio: "Award-winning journalist covering climate change and sustainability.",
    articleCount: 256,
    imageUrl: "https://github.com/shadcn.png",
    specialties: ["Climate Change", "Renewable Energy", "Conservation"]
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Business Analyst",
    bio: "Financial expert specializing in market trends and economic analysis.",
    articleCount: 189,
    imageUrl: "https://github.com/shadcn.png",
    specialties: ["Markets", "Economics", "Startups"]
  }
]

export default function WritersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Popular Writers</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Meet our talented team of writers and journalists.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {writers.map((writer) => (
          <div
            key={writer.id}
            className="rounded-lg border border-border/40 overflow-hidden hover:border-primary/60 transition-colors"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={writer.imageUrl}
                alt={writer.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-1">{writer.name}</h2>
              <p className="text-primary text-sm mb-3">{writer.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{writer.bio}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {writer.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {writer.articleCount} articles published
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}