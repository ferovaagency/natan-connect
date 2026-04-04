import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cleavkkoodpzqtshnnwb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Oj9HWH1TSyt08KFF4NvyZw_iQKdQehh';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
