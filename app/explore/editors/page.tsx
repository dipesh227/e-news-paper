interface EditorPick {
  id: number
  title: string
  description: string
  editor: string
  date: string
}

const editorPicks: EditorPick[] = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    description: "An in-depth look at how AI is shaping our world and what to expect in the coming years.",
    editor: "Emma Wilson",
    date: "2024-01-22"
  },
  {
    id: 2,
    title: "Sustainable Living in Modern Cities",
    description: "Exploring innovative solutions for environmental challenges in urban environments.",
    editor: "James Chen",
    date: "2024-01-21"
  },
  {
    id: 3,
    title: "The Evolution of Remote Work",
    description: "How workplace dynamics have transformed and what it means for the future.",
    editor: "Sarah Thompson",
    date: "2024-01-20"
  }
]

export default function EditorsPicksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Editor's Picks</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Carefully curated articles by our editorial team.
      </p>

      <div className="grid gap-8">
        {editorPicks.map((pick) => (
          <article
            key={pick.id}
            className="p-6 rounded-lg border border-border/40 hover:border-primary/60 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-3">{pick.title}</h2>
            <p className="text-muted-foreground mb-4">{pick.description}</p>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">Editor:</span>
                <span className="text-primary">{pick.editor}</span>
              </div>
              <time className="text-muted-foreground">
                {new Date(pick.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}