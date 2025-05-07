import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Copy } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { fetchSurvey } from "../actions"

export default async function SurveyConfirmation({
  searchParams,
}: {
  searchParams: { id?: string }
}) {
  const id = searchParams.id

  if (!id) {
    redirect("/add-survey")
  }

  const { success, survey, error } = await fetchSurvey(id)

  if (!success || !survey) {
    notFound()
  }

  // Use a default URL if the environment variable is not available
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (typeof window !== "undefined" ? window.location.origin : "https://surveysphere.vercel.app")

  const surveyUrl = `${baseUrl}/survey/${survey.id}`
  const statsUrl = `${baseUrl}/stats/${survey.id}`

  return (
    <main className="min-h-screen pb-16">
      <AnimatedBackground />
      <Navbar />

      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Card className="border-purple-900/30 bg-black/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl md:text-3xl">Survey Added Successfully!</CardTitle>
            <CardDescription className="text-base">Your survey is now available for participants</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-black/30 rounded-lg border border-purple-900/30">
              <h3 className="font-medium mb-2">Survey Link</h3>
              <div className="flex items-center gap-2">
                <code className="flex-grow p-2 bg-black/50 rounded text-sm overflow-x-auto">{surveyUrl}</code>
                <Button variant="outline" size="icon" className="flex-shrink-0">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Share this link to direct people to your survey page</p>
            </div>

            <div className="p-4 bg-black/30 rounded-lg border border-purple-900/30">
              <h3 className="font-medium mb-2">Stats Tracking Link</h3>
              <div className="flex items-center gap-2">
                <code className="flex-grow p-2 bg-black/50 rounded text-sm overflow-x-auto">{statsUrl}</code>
                <Button variant="outline" size="icon" className="flex-shrink-0">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Bookmark this link to check your survey statistics (views, clicks)
              </p>
            </div>

            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
              <h3 className="font-medium mb-2 text-purple-300">Important Information</h3>
              <ul className="space-y-2 text-sm">
                <li>• Your survey will be active until the expiration date you set</li>
                <li>• You can share your survey on social media to get more participants</li>
                <li>• The stats link is private - keep it bookmarked to track your survey</li>
                <li>• If you need to remove your survey, use the removal link in the stats page</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
              <Link href={`/survey/${survey.id}`}>View Survey Page</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto border-purple-900/50">
              <Link href="/browse">Browse Other Surveys</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
