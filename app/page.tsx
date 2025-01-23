import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"

export const metadata: Metadata = {
  title: "E-News - Your Digital News Platform",
  description: "Stay informed with breaking news, in-depth stories, and personalized content tailored to your interests.",
  openGraph: {
    title: "E-News - Your Digital News Platform",
    description: "Stay informed with breaking news, in-depth stories, and personalized content tailored to your interests.",
    images: [
      {
        url: "/images/og-image.jpg", // This will fallback to Next.js defaults if missing
        width: 1200,
        height: 630,
        alt: "E-News Platform Preview",
      },
    ],
  },
}

export default function Home() {
  return (
    <main>
      <HeroSection 
        title="Your Digital News Platform"
        subtitle={{
          regular: "Breaking news and ",
          gradient: "engaging stories",
        }}
        description="Experience journalism reimagined with our cutting-edge digital news platform. Get real-time updates, personalized content, and comprehensive coverage of the stories that matter to you."
        ctaText="Start Reading"
        ctaHref="/news"
        secondaryCta={{
          text: "Try Interactive Canvas",
          href: "/interactive-canvas"
        }}
        bottomImage={{
          light: "/next.svg",
          dark: "/vercel.svg",
        }}
      />
    </main>
  )
}
