import Link from "next/link"
import type { Survey } from "@/types/survey"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ExternalLink, Users } from "lucide-react"
import { CardDecoration } from "./card-decoration"
import { formatDate } from "@/lib/utils"

interface SurveyListProps {
  surveys: Survey[]
}

export default function SurveyList({ surveys }: SurveyListProps) {
  return (
    <div className="space-y-4">
      {surveys.map((survey) => (
        <Card
          key={survey.id}
          className="bg-black/40 border-purple-900/50 hover:border-purple-500/50 transition-all relative"
        >
          <CardDecoration />
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow p-6">
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline" className="bg-purple-950/50 text-purple-300 border-purple-800">
                  {survey.category || "Other"}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-3 w-3 mr-1" />
                  {survey.estimated_time || "Unknown"}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{survey.title}</h3>
              <p className="text-muted-foreground mb-4">{survey.description}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                <span>{survey.views} views</span>
                <span className="mx-2">•</span>
                <span>{formatDate(survey.created_at)}</span>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 md:border-l border-purple-900/30 md:w-48">
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 relative overflow-hidden group">
                <Link href={`/survey/${survey.id}`}>
                  <span className="relative z-10 flex items-center justify-center">
                    Take Survey
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                  <span className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
