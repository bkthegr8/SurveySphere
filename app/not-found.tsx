import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <div className="container max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950">
            <Link href="/browse">Browse Surveys</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
