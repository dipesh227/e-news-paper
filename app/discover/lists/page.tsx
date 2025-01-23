"use client"

import { BookOpen, Clock, Star } from "lucide-react"

interface ReadingList {
  id: number
  title: string
  description: string
  articles: {
    title: string
    readTime: number
    difficulty: "Beginner" | "Intermediate" | "Advanced"
  }[]
  totalTime: number
  category: string
}

const readingLists: ReadingList[] = [
  {
    id: 1,
    title: "Understanding AI Basics",
    description: "A beginner-friendly guide to artificial intelligence concepts",
    articles: [
      { title: "What is AI?", readTime: 5, difficulty: "Beginner" },
      { title: "Machine Learning Fundamentals", readTime: 8, difficulty: "Beginner" },
      { title: "Neural Networks Explained", readTime: 10, difficulty: "Intermediate" }
    ],
    totalTime: 23,
    category: "Technology"
  },
  {
    id: 2,
    title: "Sustainable Living Guide",
    description: "Essential tips for an eco-friendly lifestyle",
    articles: [
      { title: "Getting Started with Recycling", readTime: 6, difficulty: "Beginner" },
      { title: "Zero Waste Living", readTime: 7, difficulty: "Intermediate" },
      { title: "Sustainable Home Energy", readTime: 9, difficulty: "Intermediate" }
    ],
    totalTime: 22,
    category: "Lifestyle"
  }
]

export default function ReadingListsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold">Reading Lists</h1>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        Curated reading paths to help you learn and explore topics systematically.
      </p>

      <div className="space-y-8">
        {readingLists.map((list) => (
          <div
            key={list.id}
            className="rounded-lg border border-border/40 overflow-hidden hover:border-primary/60 transition-colors"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">{list.title}</h2>
                <span className="text-sm text-primary font-medium">
                  {list.category}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6">{list.description}</p>

              <div className="space-y-4">
                {list.articles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-primary/5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-primary font-medium">{index + 1}</span>
                      <div>
                        <h3 className="font-medium">{article.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {article.readTime} min read
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      article.difficulty === "Beginner" 
                        ? "bg-green-100 text-green-700" 
                        : article.difficulty === "Intermediate"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {article.difficulty}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/40">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Total time: {list.totalTime} minutes
                  </span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Star className="w-4 h-4" />
                  <span>Save List</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}