import { createClient } from '@supabase/supabase-js'
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const URL = import.meta.env.VITE_APP_URL;

export const supabase = createClient(URL, API_KEY);