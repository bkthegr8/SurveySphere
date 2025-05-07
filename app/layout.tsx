import type React from "react"
import { Mona_Sans as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"
import "@/app/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "SurveySphere",
  description: "Share and participate in surveys based on goodwill and community support",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative overflow-x-hidden flex flex-col",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {/* Background design elements */}
          <div className="fixed inset-0 bg-grid -z-10"></div>

          {/* Floating shapes */}
          <div className="floating-shape floating-shape-1"></div>
          <div className="floating-shape floating-shape-2"></div>
          <div className="floating-shape floating-shape-3"></div>

          {/* Circle decorations */}
          <div className="circle-decoration circle-decoration-1"></div>
          <div className="circle-decoration circle-decoration-2"></div>

          {/* Animated dots */}
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>

          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
