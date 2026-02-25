import {createClient} from '@supabase/supabase-js'

const supabaseConexion = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonkey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const api = createClient(supabaseConexion,supabaseAnonkey)
