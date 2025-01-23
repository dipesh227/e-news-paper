import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/providers"
import { NavBar } from "@/components/navigation/nav-bar"
import { Footer } from "@/components/footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "E-News Paper",
  description: "Your daily news platform",
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: "E-News Paper",
    description: "Your daily news platform",
    type: "website"
  },
  twitter: {
    title: "E-News Paper",
    description: "Your daily news platform",
    card: "summary_large_image"
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <NavBar />
            <main className="flex-1 mt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
