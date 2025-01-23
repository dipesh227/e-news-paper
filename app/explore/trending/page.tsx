"use client"

import { TrendingUp } from "lucide-react"

interface TrendingTopic {
  id: number
  title: string
  views: number
  category: string
}

const trendingTopics: TrendingTopic[] = [
  { id: 1, title: "Latest Tech Innovations", views: 15234, category: "Technology" },
  { id: 2, title: "Global Economic Updates", views: 12456, category: "Business" },
  { id: 3, title: "Climate Change Report", views: 10789, category: "Environment" },
  { id: 4, title: "Space Exploration News", views: 9876, category: "Science" },
  { id: 5, title: "Health & Wellness Tips", views: 8765, category: "Health" }
]

export default function TrendingTopicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold">Trending Topics</h1>
      </div>
      
      <p className="text-lg text-muted-foreground mb-8">
        Stay updated with the most discussed topics right now.
      </p>

      <div className="space-y-4">
        {trendingTopics.map((topic) => (
          <div
            key={topic.id}
            className="p-6 rounded-lg border border-border/40 hover:border-primary/60 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">{topic.title}</h2>
              <span className="text-sm text-muted-foreground">
                {topic.views.toLocaleString()} views
              </span>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
              {topic.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}