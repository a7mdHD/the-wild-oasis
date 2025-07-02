
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://awgmsghfuojvrfqqduxo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3Z21zZ2hmdW9qdnJmcXFkdXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMTQ3OTMsImV4cCI6MjA2NjY5MDc5M30.-WxTBCNJQOB_1rtI9oYk9uN2kXbYds8itTJlfl1gdHY'
const supabase = createClient(supabaseUrl, supabaseKey)



export default supabase;