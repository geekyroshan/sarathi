
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mlxcagdhjopscuaytlgz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1seGNhZ2Roam9wc2N1YXl0bGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MjY1MDMsImV4cCI6MjA1NjQwMjUwM30.a3vVqgAgDz18IydSNgGRMJVIGfETWXf7obwM9PpY9oU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
