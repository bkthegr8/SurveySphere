"use server"

import { createSurvey, getAllSurveys, getSurveyById, incrementSurveyViews } from "@/lib/db"
import type { SurveyFormData } from "@/types/survey"
import { revalidatePath } from "next/cache"

export async function addSurvey(formData: FormData) {
  try {
    const survey: SurveyFormData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      survey_link: formData.get("survey_link") as string,
      category: (formData.get("category") as string) || undefined,
      estimated_time: (formData.get("estimated_time") as string) || undefined,
      contact_email: (formData.get("contact_email") as string) || undefined,
      expiration_date: (formData.get("expiration_date") as string) || undefined,
    }

    const newSurvey = await createSurvey(survey)
    revalidatePath("/browse")
    return { success: true, survey: newSurvey }
  } catch (error) {
    console.error("Error adding survey:", error)
    return { success: false, error: "Failed to add survey" }
  }
}

export async function fetchSurveys() {
  try {
    const surveys = await getAllSurveys()
    return { success: true, surveys }
  } catch (error) {
    console.error("Error fetching surveys:", error)
    // Return empty array instead of error to prevent page crashes
    return { success: false, surveys: [], error: "Failed to fetch surveys" }
  }
}

export async function fetchSurvey(id: string) {
  try {
    const survey = await getSurveyById(id)
    return { success: true, survey }
  } catch (error) {
    console.error(`Error fetching survey ${id}:`, error)
    return { success: false, error: "Failed to fetch survey" }
  }
}

export async function viewSurvey(id: string) {
  try {
    const result = await incrementSurveyViews(id)
    if (result) {
      revalidatePath(`/survey/${id}`)
      return { success: true }
    }
    return { success: false, error: "Failed to update view count" }
  } catch (error) {
    console.error(`Error incrementing views for survey ${id}:`, error)
    return { success: false, error: "Failed to update view count" }
  }
}
