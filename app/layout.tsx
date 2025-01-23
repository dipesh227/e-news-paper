import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/providers"
import { NavBar } from "@/components/navigation/nav-bar"
import { Footer } from "@/components/footer"
import { GridPattern } from "@/components/ui/grid-pattern"
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
  description: "Your Digital News Platform",
  metadataBase: new URL('http://localhost:3000')
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
      <head>
        <link rel="preload" href="/_next/static/media/66f30814ff6d7cdf.p.woff2" as="font" crossOrigin="" type="font/woff2" />
        <link rel="preload" href="/_next/static/media/e11418ac562b8ac1-s.p.woff2" as="font" crossOrigin="" type="font/woff2" />
        <link rel="stylesheet" href="/_next/static/css/ef8512bae0007463.css" data-precedence="next" />
        <link rel="stylesheet" href="/_next/static/css/2f1f5e4620763a13.css" data-precedence="next" />
        <link rel="preload" as="script" fetchPriority="low" href="/_next/static/chunks/webpack-c8e0bad27d434520.js" />
      </head>
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
            <div className="fixed inset-0 -z-10">
              <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
              <GridPattern
                opacity={0.2}
                className="z-0"
              />
            </div>
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
