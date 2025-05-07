import { createServerSupabaseClient } from "./supabase"
import type { Survey, SurveyFormData } from "@/types/survey"

export async function getAllSurveys() {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase.from("surveys").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching surveys:", error)
      throw new Error(`Failed to fetch surveys: ${error.message}`)
    }

    return data as Survey[]
  } catch (error) {
    console.error("Error in getAllSurveys:", error)
    // Return empty array instead of throwing to prevent page crashes
    return []
  }
}

export async function getSurveyById(id: string) {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase.from("surveys").select("*").eq("id", id).single()

    if (error) {
      console.error(`Error fetching survey with ID ${id}:`, error)
      throw new Error(`Failed to fetch survey: ${error.message}`)
    }

    return data as Survey
  } catch (error) {
    console.error(`Error in getSurveyById:`, error)
    throw new Error("Failed to fetch survey")
  }
}

export async function incrementSurveyViews(id: string) {
  try {
    const supabase = createServerSupabaseClient()

    // First check if the survey exists to avoid incrementing non-existent surveys
    const { data: surveyExists, error: checkError } = await supabase.from("surveys").select("id").eq("id", id).single()

    if (checkError) {
      throw new Error(`Survey not found: ${checkError.message}`)
    }

    // Use a simpler approach to increment views to avoid RPC issues
    const { data, error } = await supabase
      .from("surveys")
      .update({ views: supabase.rpc("increment_views", { row_id: id }) })
      .eq("id", id)
      .select()

    if (error) {
      console.error(`Error incrementing views for survey ${id}:`, error)
      throw new Error(`Failed to update survey views: ${error.message}`)
    }

    return data
  } catch (error) {
    console.error(`Error in incrementSurveyViews:`, error)
    // Return null instead of throwing to prevent page crashes
    return null
  }
}

export async function createSurvey(survey: SurveyFormData) {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase.from("surveys").insert([survey]).select()

    if (error) {
      console.error("Error creating survey:", error)
      throw new Error(`Failed to create survey: ${error.message}`)
    }

    return data[0] as Survey
  } catch (error) {
    console.error("Error in createSurvey:", error)
    throw new Error("Failed to create survey")
  }
}
