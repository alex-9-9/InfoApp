import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hxxjibcdgqoqztdkqind.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4eGppYmNkZ3FvcXp0ZGtxaW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMjMwMzgsImV4cCI6MjAyOTY5OTAzOH0.6Kthz_FJ2_J192A_nWCZWA7gLVDweLQEcbZaZr-gPZM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
