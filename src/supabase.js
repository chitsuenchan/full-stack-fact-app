import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://duyyufcpscvfukyuvcrm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eXl1ZmNwc2N2ZnVreXV2Y3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5ODYxMzksImV4cCI6MTk5NTU2MjEzOX0.YgkmrVXGo6O1MIUCyUIhVsnqMrVgYjftAqqHFPe-b3U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
