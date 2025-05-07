import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for server-side usage with retry logic
export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL!
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase environment variables")
    throw new Error("Missing required environment variables for Supabase")
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    // Add global error handler
    global: {
      fetch: (...args) => {
        return fetch(...args)
      },
    },
  })
}

// Create a singleton client for client-side usage
let clientSupabaseClient: ReturnType<typeof createClient> | null = null

export const createClientSupabaseClient = () => {
  if (clientSupabaseClient) return clientSupabaseClient

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables")
    throw new Error("Missing required environment variables for Supabase")
  }

  clientSupabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  return clientSupabaseClient
}
