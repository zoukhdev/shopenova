#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://bbtypnulrkkdvvfupxws.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidHlwbnVscmtrZHZ2ZnVweHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MDE2NDksImV4cCI6MjA3NDI3NzY0OX0.zAXeNagYcELcs9jlEJxzAfhgAjknhA2ZWv-pkn7hrrM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testYourLogin() {
  console.log('🔐 Testing your login credentials...');
  console.log('📝 Please enter your email and password to test login');
  
  // You can modify these values to test your actual credentials
  const testCredentials = [
    // Admin credentials
    { email: 'admin@eshop.com', password: 'admin123', description: 'Demo Admin' },
    { email: 'manager@eshop.com', password: 'manager123', description: 'Demo Manager' },
    // Customer credentials
    { email: 'customer@eshop.com', password: 'customer123', description: 'Demo Customer' },
    { email: 'john@example.com', password: 'john123', description: 'Demo Customer John' },
    { email: 'jane@example.com', password: 'jane123', description: 'Demo Customer Jane' }
    // Add your actual credentials here:
    // { email: 'your-email@example.com', password: 'your-password', description: 'Your Account' }
  ];

  for (const cred of testCredentials) {
    console.log(`\n🧪 Testing: ${cred.description} (${cred.email})`);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cred.email,
        password: cred.password
      });

      if (error) {
        console.log(`❌ Login failed: ${error.message}`);
        console.log(`   Error code: ${error.code}`);
      } else {
        console.log(`✅ Login successful!`);
        console.log(`   User ID: ${data.user?.id}`);
        console.log(`   Email: ${data.user?.email}`);
        console.log(`   Email confirmed: ${data.user?.email_confirmed_at ? 'Yes' : 'No'}`);
        console.log(`   Created at: ${data.user?.created_at}`);
        
        // Sign out after successful test
        await supabase.auth.signOut();
      }
    } catch (err) {
      console.log(`❌ Unexpected error: ${err.message}`);
    }
  }

  console.log('\n📋 Instructions:');
  console.log('1. If demo credentials work, the issue is with your specific account');
  console.log('2. If your account fails, check:');
  console.log('   - Email format is correct');
  console.log('   - Password is correct');
  console.log('   - Email has been confirmed (check your email)');
  console.log('3. Try creating a new account and see if that works');
}

// Run the test
testYourLogin();
