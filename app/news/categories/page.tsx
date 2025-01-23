export default function NewsCategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">News Categories</h1>
      <p className="text-lg text-muted-foreground">Browse news articles by category.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {["Politics", "Technology", "Science", "Sports", "Entertainment", "Business"].map((category) => (
          <div key={category} className="p-6 rounded-lg border border-border/40 hover:border-primary/60 transition-colors">
            <h2 className="text-xl font-semibold mb-2">{category}</h2>
            <p className="text-sm text-muted-foreground">Latest updates in {category.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}