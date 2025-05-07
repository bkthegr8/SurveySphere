import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { fetchSurveys } from "./actions"
import SurveyGrid from "@/components/survey-grid"

export default async function Home() {
  const { success, surveys = [] } = await fetchSurveys()

  // Get top 3 surveys by views, safely handling empty arrays
  const trendingSurveys =
    success && surveys.length > 0 ? [...surveys].sort((a, b) => b.views - a.views).slice(0, 3) : []

  return (
    <main>
      <AnimatedBackground />
      <Navbar />

      <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-fuchsia-900/20 to-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Surveys powered by <span className="text-purple-500">community</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Share your surveys and help others by participating. No sign-ups, no payments—just goodwill.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg relative overflow-hidden group"
          >
            <Link href="/add-survey">
              <span className="relative z-10">Add Survey</span>
              <span className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-950 px-8 py-6 text-lg relative overflow-hidden group"
          >
            <Link href="/browse">
              <span className="relative z-10">Browse Surveys</span>
              <span className="absolute inset-0 bg-purple-900/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </Button>
        </div>
      </section>

      {trendingSurveys.length > 0 && (
        <section className="px-4 py-16 bg-black/30 border-t border-purple-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <TrendingUp className="text-purple-500" />
                Trending Surveys
              </h2>
              <Button asChild variant="ghost" className="text-purple-400 hover:text-purple-300">
                <Link href="/browse">View all</Link>
              </Button>
            </div>

            <SurveyGrid surveys={trendingSurveys} />
          </div>
        </section>
      )}

      <section className="px-4 py-16 max-w-4xl mx-auto text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">How SurveySphere Works</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center relative">
            <div className="absolute -z-10 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent rounded-lg opacity-50"></div>
            </div>
            <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 relative">
              <span className="text-2xl font-bold text-purple-400">1</span>
              <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-pulse"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Share Your Survey</h3>
            <p className="text-muted-foreground">Add your survey link and details without creating an account</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center relative">
            <div className="absolute -z-10 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent rounded-lg opacity-50"></div>
            </div>
            <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 relative">
              <span className="text-2xl font-bold text-purple-400">2</span>
              <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-pulse"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Reach Participants</h3>
            <p className="text-muted-foreground">
              Your survey becomes available to our community of willing participants
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center relative">
            <div className="absolute -z-10 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent rounded-lg opacity-50"></div>
            </div>
            <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 relative">
              <span className="text-2xl font-bold text-purple-400">3</span>
              <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-pulse"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Help Others</h3>
            <p className="text-muted-foreground">Browse and participate in surveys to help fellow researchers</p>
          </div>

          {/* Connecting lines between steps */}
          <div className="hidden md:block absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          <div className="hidden md:block absolute top-1/4 right-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </div>
      </section>
    </main>
  )
}
