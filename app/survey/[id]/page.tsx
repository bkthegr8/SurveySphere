import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, ExternalLink, Share2, Users } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { fetchSurvey, viewSurvey } from "@/app/actions"
import { formatDate } from "@/lib/utils"

export default async function SurveyDetail({ params }: { params: { id: string } }) {
  const { success, survey, error } = await fetchSurvey(params.id)

  if (!success || !survey) {
    notFound()
  }

  // Increment view count
  await viewSurvey(params.id)

  return (
    <main className="min-h-screen pb-16">
      <AnimatedBackground />
      <Navbar />

      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Link href="/browse" className="flex items-center text-muted-foreground hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to surveys
        </Link>

        <Card className="border-purple-900/30 bg-black/20">
          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline" className="bg-purple-950/50 text-purple-300 border-purple-800">
                {survey.category || "Other"}
              </Badge>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {survey.estimated_time || "Unknown"}
              </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl">{survey.title}</CardTitle>
            <CardDescription className="text-base">{survey.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between gap-4 p-4 bg-black/30 rounded-lg border border-purple-900/30">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Views</p>
                  <p className="font-medium">{survey.views}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Time</p>
                  <p className="font-medium">{survey.estimated_time || "Unknown"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-sm text-muted-foreground">Added</p>
                  <p className="font-medium">{formatDate(survey.created_at)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-sm text-muted-foreground">Expires</p>
                  <p className="font-medium">{survey.expiration_date || "No expiration"}</p>
                </div>
              </div>
            </div>

            {survey.contact_email && (
              <div>
                <h3 className="text-lg font-medium mb-2">Survey Creator</h3>
                <p className="text-sm text-muted-foreground mt-1">Contact: {survey.contact_email}</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
              <a href={survey.survey_link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Take Survey
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto border-purple-900/50">
              <Share2 className="mr-2 h-4 w-4" />
              Share Survey
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
