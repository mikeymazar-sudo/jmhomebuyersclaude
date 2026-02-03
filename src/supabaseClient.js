import { createClient } from '@supabase/supabase-js'

// Landing page Supabase (stores all submissions)
const supabaseUrl = 'https://gdikosiygwuqptnmisny.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkaWtvc2l5Z3d1cXB0bm1pc255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNTk2MjMsImV4cCI6MjA4NTczNTYyM30.9-A20b2f-DzHuOmKciBlv5iI0e_biuvnvRNEg5ooQdc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// CRM Supabase (syncs hot leads)
const crmSupabaseUrl = 'https://vrwdrchiaanttwjwncmp.supabase.co'
const crmSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyd2RyY2hpYWFudHR3anduY21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MTM5MTgsImV4cCI6MjA3OTQ4OTkxOH0.PSxoOSUCZfR3UrfGywloHZeNuakE7sfMfS-qzhqXUEo'

export const crmSupabase = createClient(crmSupabaseUrl, crmSupabaseAnonKey)
