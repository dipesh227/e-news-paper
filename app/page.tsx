import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"

export const metadata: Metadata = {
  title: "E-News Paper - Your Digital News Platform",
  description: "Experience news like never before with real-time updates, trending stories, and in-depth coverage right at your fingertips.",
  openGraph: {
    title: "E-News Paper - Your Digital News Platform",
    description: "Experience news like never before with real-time updates, trending stories, and in-depth coverage right at your fingertips.",
    images: [
      {
        url: "/images/news-preview-light.png",
        width: 1200,
        height: 630,
        alt: "E-News Paper Platform Preview",
      },
    ],
  },
}

export default function Home() {
  return (
    <main>
      <HeroSection
        title="Your Digital News Platforms"
        subtitle={{
          regular: "Stay informed with ",
          gradient: "E-News Paper",
        }}
        description="Experience news like never before. Get real-time updates, trending stories, and in-depth coverage right at your fingertips. Your one-stop destination for all things news, curated just for you."
        ctaText="Explore News"
        ctaHref="/news"
        secondaryCta={{
          text: "Discover More",
          href: "/discover"
        }}
        bottomImage={{
          light: "/images/news-preview-light.png",
          dark: "/images/news-preview-light.png",
        }}
      />
    </main>
  )
}
