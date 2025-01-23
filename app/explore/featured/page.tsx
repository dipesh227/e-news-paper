"use client"

import { Star } from "lucide-react"

interface FeaturedStory {
  id: number
  title: string
  excerpt: string
  imageUrl: string
  readTime: number
  category: string
}

const featuredStories: FeaturedStory[] = [
  {
    id: 1,
    title: "The Rise of Quantum Computing",
    excerpt: "Exploring the revolutionary potential of quantum computers and their impact on technology.",
    imageUrl: "/images/news-preview-light.png",
    readTime: 8,
    category: "Technology"
  },
  {
    id: 2,
    title: "Ocean Conservation Breakthroughs",
    excerpt: "New initiatives and technologies helping to preserve marine ecosystems.",
    imageUrl: "/images/news-preview-light.png",
    readTime: 6,
    category: "Environment"
  },
  {
    id: 3,
    title: "The Future of Space Travel",
    excerpt: "Latest developments in space exploration and commercial space flight.",
    imageUrl: "/images/news-preview-light.png",
    readTime: 10,
    category: "Science"
  }
]

export default function FeaturedStoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Star className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold">Featured Stories</h1>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        Must-read articles selected by our editorial team.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredStories.map((story) => (
          <article
            key={story.id}
            className="rounded-lg border border-border/40 overflow-hidden hover:border-primary/60 transition-colors"
          >
            <img
              src={story.imageUrl}
              alt={story.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-primary font-medium">
                  {story.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {story.readTime} min read
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {story.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}