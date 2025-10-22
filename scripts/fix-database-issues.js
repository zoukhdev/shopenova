#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://bbtypnulrkkdvvfupxws.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidHlwbnVscmtrZHZ2ZnVweHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MDE2NDksImV4cCI6MjA3NDI3NzY0OX0.zAXeNagYcELcs9jlEJxzAfhgAjknhA2ZWv-pkn7hrrM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function fixDatabaseIssues() {
  console.log('🔧 Fixing database issues...');

  try {
    // 1. Update products with local image paths to use Unsplash URLs
    console.log('📸 Updating product images...');
    
    const imageUpdates = [
      { oldPath: '/images/sony-headphones.jpg', newUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
      { oldPath: '/images/apple-watch.jpg', newUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
      { oldPath: '/images/samsung-phone.jpg', newUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400' },
      { oldPath: '/images/nike-shoes.jpg', newUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
      { oldPath: '/images/macbook-pro.jpg', newUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400' }
    ];

    for (const update of imageUpdates) {
      const { error } = await supabase
        .from('products')
        .update({ image: update.newUrl })
        .eq('image', update.oldPath);

      if (error) {
        console.log(`⚠️  Could not update ${update.oldPath}: ${error.message}`);
      } else {
        console.log(`✅ Updated ${update.oldPath} to Unsplash URL`);
      }
    }

    // 2. Check if customers table has proper RLS policies
    console.log('🔒 Checking RLS policies...');
    
    // Try to create a test customer to see if RLS is working
    const { data: testCustomer, error: testError } = await supabase
      .from('customers')
      .insert({
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User'
      })
      .select()
      .single();

    if (testError) {
      console.log(`⚠️  Customer creation test failed: ${testError.message}`);
      console.log('🔧 This indicates RLS policies need to be updated in Supabase dashboard');
    } else {
      console.log('✅ Customer creation works - RLS policies are properly configured');
      // Clean up test customer
      await supabase.from('customers').delete().eq('id', testCustomer.id);
    }

    console.log('✅ Database fixes completed!');
    console.log('📝 If you still see RLS errors, please update the policies in your Supabase dashboard:');
    console.log('   1. Go to Authentication > Policies');
    console.log('   2. Add policy for customers table: "Anyone can create customers" with INSERT permission');
    console.log('   3. Set the policy condition to: true');

  } catch (error) {
    console.error('❌ Error fixing database issues:', error);
  }
}

// Run the fix
fixDatabaseIssues();
