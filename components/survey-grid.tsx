import Link from "next/link"
import type { Survey } from "@/types/survey"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ExternalLink, Users } from "lucide-react"
import { CardDecoration } from "./card-decoration"
import { formatDate } from "@/lib/utils"

interface SurveyGridProps {
  surveys: Survey[]
}

export default function SurveyGrid({ surveys }: SurveyGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {surveys.map((survey) => (
        <Card
          key={survey.id}
          className="bg-black/40 border-purple-900/50 hover:border-purple-500/50 transition-all relative"
        >
          <CardDecoration />
          <CardHeader>
            <div className="flex justify-between items-start">
              <Badge variant="outline" className="bg-purple-950/50 text-purple-300 border-purple-800">
                {survey.category || "Other"}
              </Badge>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="h-3 w-3 mr-1" />
                {survey.estimated_time || "Unknown"}
              </div>
            </div>
            <CardTitle className="text-xl mt-3">{survey.title}</CardTitle>
            <CardDescription className="line-clamp-2">{survey.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              <span>{survey.views} views</span>
              <span className="mx-2">•</span>
              <span>{formatDate(survey.created_at)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 relative overflow-hidden group">
              <Link href={`/survey/${survey.id}`}>
                <span className="relative z-10 flex items-center justify-center">
                  Take Survey
                  <ExternalLink className="ml-2 h-4 w-4" />
                </span>
                <span className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
