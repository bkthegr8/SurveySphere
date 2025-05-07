"use client"

import { useState } from "react"
import Link from "next/link"
import type { Survey } from "@/types/survey"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Grid, List, Search } from "lucide-react"
import SurveyGrid from "./survey-grid"
import SurveyList from "./survey-list"

interface SurveyBrowseClientProps {
  initialSurveys: Survey[]
}

export function SurveyBrowseClient({ initialSurveys }: SurveyBrowseClientProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [surveys, setSurveys] = useState<Survey[]>(initialSurveys)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  // Filter surveys based on search term and category
  const filteredSurveys = surveys.filter((survey) => {
    const matchesSearch =
      survey.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      survey.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      activeCategory === "all" || (survey.category && survey.category.toLowerCase() === activeCategory.toLowerCase())

    return matchesSearch && matchesCategory
  })

  // Sort surveys based on sort option
  const sortedSurveys = [...filteredSurveys].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      case "popular":
        return b.views - a.views
      case "shortest":
        const getMinutes = (time: string | undefined) => {
          if (!time) return 999
          const match = time.match(/(\d+)/)
          return match ? Number.parseInt(match[1], 10) : 999
        }
        return getMinutes(a.estimated_time) - getMinutes(b.estimated_time)
      default:
        return 0
    }
  })

  return (
    <>
      <div className="bg-black/20 border border-purple-900/30 rounded-lg p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search surveys..."
              className="pl-10 bg-black/30 border-purple-900/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Select defaultValue={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px] bg-black/30 border-purple-900/50">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="shortest">Shortest Time</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon" className="border-purple-900/50">
              <Filter className="h-4 w-4" />
            </Button>

            <div className="border border-purple-900/50 rounded-md flex">
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-none ${viewMode === "grid" ? "bg-purple-900/30" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-none ${viewMode === "list" ? "bg-purple-900/30" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="bg-black/30 border border-purple-900/50">
          <TabsTrigger value="all">All Surveys</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="health">Health</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
        </TabsList>
      </Tabs>

      {sortedSurveys.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No surveys found</h3>
          <p className="text-muted-foreground mb-6">
            {searchTerm || activeCategory !== "all"
              ? "Try adjusting your search or filters"
              : "Be the first to add a survey!"}
          </p>
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href="/add-survey">Add Your Survey</Link>
          </Button>
        </div>
      ) : viewMode === "grid" ? (
        <SurveyGrid surveys={sortedSurveys} />
      ) : (
        <SurveyList surveys={sortedSurveys} />
      )}

      {sortedSurveys.length > 0 && (
        <div className="flex justify-center mt-10">
          <Button variant="outline" className="border-purple-900/50 hover:bg-purple-900/30">
            Load More Surveys
          </Button>
        </div>
      )}
    </>
  )
}
