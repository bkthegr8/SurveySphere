export interface Survey {
  id: string
  title: string
  description: string
  survey_link: string
  category?: string
  estimated_time?: string
  contact_email?: string
  expiration_date?: string
  views: number
  created_at: string
}

export interface SurveyFormData {
  title: string
  description: string
  survey_link: string
  category?: string
  estimated_time?: string
  contact_email?: string
  expiration_date?: string
}
