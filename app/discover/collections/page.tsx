"use client"

import { Book } from "lucide-react"

interface Collection {
  id: number
  title: string
  description: string
  articleCount: number
  category: string
  imageUrl: string
  readTime: string
}

const collections: Collection[] = [
  {
    id: 1,
    title: "Future of Technology",
    description: "Exploring breakthrough innovations and their impact on society",
    articleCount: 15,
    category: "Technology",
    imageUrl: "/images/news-preview-light.png",
    readTime: "2.5 hours"
  },
  {
    id: 2,
    title: "Climate Solutions",
    description: "Innovative approaches to combat climate change",
    articleCount: 12,
    category: "Environment",
    imageUrl: "/images/news-preview-light.png",
    readTime: "2 hours"
  },
  {
    id: 3,
    title: "Modern Business",
    description: "Insights into contemporary business practices and trends",
    articleCount: 18,
    category: "Business",
    imageUrl: "/images/news-preview-light.png",
    readTime: "3 hours"
  },
  {
    id: 4,
    title: "Health & Wellness",
    description: "Latest research and advice for healthy living",
    articleCount: 10,
    category: "Health",
    imageUrl: "/images/news-preview-light.png",
    readTime: "1.5 hours"
  }
]

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Book className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold">Collections</h1>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        Curated collections of articles around specific themes and topics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="group rounded-lg border border-border/40 overflow-hidden hover:border-primary/60 transition-colors"
          >
            <div className="relative">
              <img
                src={collection.imageUrl}
                alt={collection.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm">
                {collection.readTime}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-primary font-medium">
                  {collection.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {collection.articleCount} articles
                </span>
              </div>
              
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {collection.title}
              </h2>
              
              <p className="text-muted-foreground text-sm">
                {collection.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}