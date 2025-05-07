"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { ArrowLeft, Clock, LinkIcon } from "lucide-react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import { addSurvey } from "../actions"

export default function AddSurvey() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    survey_link: "",
    category: "",
    estimated_time: "",
    contact_email: "",
    expiration_date: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formDataObj.append(key, value)
      })

      const result = await addSurvey(formDataObj)

      if (result.success) {
        toast({
          title: "Survey submitted successfully!",
          description: "Your survey is now available for participants.",
        })
        router.push(`/survey-confirmation?id=${result.survey.id}`)
      } else {
        throw new Error(result.error || "Failed to submit survey")
      }
    } catch (error) {
      console.error("Error submitting survey:", error)
      toast({
        title: "Error submitting survey",
        description: "There was a problem submitting your survey. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen pb-16">
      <AnimatedBackground />
      <Navbar />
      <Toaster />

      <div className="container max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="flex items-center text-muted-foreground hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <Card className="border-purple-900/30 bg-black/20">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Add Your Survey</CardTitle>
            <CardDescription>Share your survey with our community. No account required.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="survey_link" className="text-sm font-medium">
                  Survey Link <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="survey_link"
                    name="survey_link"
                    value={formData.survey_link}
                    onChange={handleChange}
                    placeholder="https://your-survey-platform.com/your-survey"
                    required
                    className="pl-10 bg-black/30 border-purple-900/50 focus:border-purple-500"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Paste the full URL to your external survey (Google Forms, SurveyMonkey, etc.)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium">
                  Survey Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter a descriptive title"
                  required
                  className="bg-black/30 border-purple-900/50 focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Explain what your survey is about and why people should participate"
                  required
                  className="min-h-[120px] bg-black/30 border-purple-900/50 focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium">
                    Category
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger className="bg-black/30 border-purple-900/50 focus:border-purple-500">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academic">Academic Research</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="health">Health & Wellness</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="social">Social Issues</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimated_time" className="text-sm font-medium">
                    Estimated Completion Time
                  </Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="estimated_time"
                      name="estimated_time"
                      value={formData.estimated_time}
                      onChange={handleChange}
                      placeholder="e.g., 5 minutes"
                      className="pl-10 bg-black/30 border-purple-900/50 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact_email" className="text-sm font-medium">
                  Contact Email (Optional)
                </Label>
                <Input
                  id="contact_email"
                  name="contact_email"
                  value={formData.contact_email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your email for participants to contact you"
                  className="bg-black/30 border-purple-900/50 focus:border-purple-500"
                />
                <p className="text-xs text-muted-foreground">
                  This will be publicly visible. Leave blank if you prefer not to share.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expiration_date" className="text-sm font-medium">
                  Expiration Date
                </Label>
                <Input
                  id="expiration_date"
                  name="expiration_date"
                  value={formData.expiration_date}
                  onChange={handleChange}
                  type="date"
                  className="bg-black/30 border-purple-900/50 focus:border-purple-500"
                />
                <p className="text-xs text-muted-foreground">
                  Your survey will be automatically removed after this date
                </p>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm font-normal leading-tight">
                  I confirm this survey does not contain harmful, offensive, or inappropriate content and complies with
                  ethical research standards.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Survey"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
