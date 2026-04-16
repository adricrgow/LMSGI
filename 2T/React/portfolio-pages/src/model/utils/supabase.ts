import { createClient } from '@supabase/supabase-js'

const supabaseUrl ='https://rcmdqdihcfneklhxohqc.supabase.co'
const supabaseAnonKey ='sb_publishable_3QgQYyfwBfX7XiFyYOZFDQ_qgjDndRt'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)