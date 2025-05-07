import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { fetchSurveys } from "../actions"
import type { Survey } from "@/types/survey"
import { SurveyBrowseClient } from "@/components/survey-browse-client"

export default async function BrowseSurveys() {
  const { success, surveys = [], error } = await fetchSurveys()

  return (
    <main className="min-h-screen pb-16">
      <AnimatedBackground />
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Browse Surveys</h1>
            <p className="text-muted-foreground">Discover surveys and help others with your participation</p>
          </div>
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href="/add-survey">Add Your Survey</Link>
          </Button>
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-8 text-center">
            <p className="text-red-300">{error}. Please try again later.</p>
          </div>
        )}

        <SurveyBrowseClient initialSurveys={surveys as Survey[]} />
      </div>
    </main>
  )
}
