const { createClient } = require('@supabase/supabase-js');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

console.log('🧪 Testing Supabase Connection');
console.log('==============================\n');

// Check environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables');
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file');
  process.exit(1);
}

console.log('✅ Environment variables found');
console.log('   URL:', supabaseUrl);
console.log('   Key length:', supabaseKey.length);

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    console.log('\n🔄 Testing database connection...');
    
    // Test products table
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('id, name, price')
      .limit(5);

    if (productsError) {
      console.error('❌ Error fetching products:', productsError.message);
      return;
    }

    console.log('✅ Products table accessible');
    console.log('   Found', products?.length || 0, 'products');
    
    if (products && products.length > 0) {
      console.log('   Sample product:', products[0].name, '- $' + products[0].price);
    }

    // Test categories table
    const { data: categories, error: categoriesError } = await supabase
      .from('categories')
      .select('id, name')
      .limit(5);

    if (categoriesError) {
      console.error('❌ Error fetching categories:', categoriesError.message);
    } else {
      console.log('✅ Categories table accessible');
      console.log('   Found', categories?.length || 0, 'categories');
    }

    // Test authentication
    console.log('\n🔄 Testing authentication...');
    const { data: authData, error: authError } = await supabase.auth.getSession();
    
    if (authError) {
      console.log('ℹ️  No active session (this is normal for testing)');
    } else {
      console.log('✅ Authentication system accessible');
    }

    console.log('\n🎉 Supabase integration test completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Run: node scripts/add-products-to-supabase.js');
    console.log('2. Start your dev server: npm run dev');
    console.log('3. Test the application in your browser');

  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your Supabase project is active');
    console.log('2. Verify your API keys are correct');
    console.log('3. Ensure the database schema has been created');
    console.log('4. Check your internet connection');
  }
}

// Run the test
testConnection();