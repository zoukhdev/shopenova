#!/usr/bin/env node
// Read-only script: counts rows in the products table using Supabase anon key
const { createClient } = require('@supabase/supabase-js');
const path = require('path');

// Load .env.local from project root
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.local') });

(async () => {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
      console.error('Missing env variables. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in .env.local');
      process.exit(1);
    }

    const supabase = createClient(url, key);
    const { count, error } = await supabase.from('products').select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Query error:', error.message || error);
      process.exit(1);
    }

    console.log(String(count ?? 0));
  } catch (e) {
    console.error('Unexpected error:', e.message || e);
    process.exit(1);
  }
})();
