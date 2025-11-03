import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xnfwuuyibzkkqpgdmvof.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZnd1dXlpYnpra3FwZ2Rtdm9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxOTk2MzEsImV4cCI6MjA3Nzc3NTYzMX0.tzc77G2npYF4w8yzYxCZ3y3H_MruDJlRxl1VBDQ7DcI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
