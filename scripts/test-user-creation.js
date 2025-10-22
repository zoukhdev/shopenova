#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://bbtypnulrkkdvvfupxws.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidHlwbnVscmtrZHZ2ZnVweHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MDE2NDksImV4cCI6MjA3NDI3NzY0OX0.zAXeNagYcELcs9jlEJxzAfhgAjknhA2ZWv-pkn7hrrM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testUserCreation() {
  console.log('🧪 Testing user creation and RLS policies...');

  try {
    // Test 1: Check existing users
    console.log('\n📋 Test 1: Checking existing users...');
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('*');

    if (usersError) {
      console.error('❌ Error fetching users:', usersError);
    } else {
      console.log(`✅ Found ${users.length} users in users table`);
      users.forEach(user => {
        console.log(`   - ${user.email} (${user.role}, active: ${user.is_active})`);
      });
    }

    // Test 2: Try to create a test user
    console.log('\n🔧 Test 2: Creating test user...');
    const testUser = {
      email: 'testuser@example.com',
      first_name: 'Test',
      last_name: 'User',
      role: 'staff',
      is_active: true,
      password_hash: ''
    };

    const { data: newUser, error: createError } = await supabase
      .from('users')
      .insert([testUser])
      .select()
      .single();

    if (createError) {
      console.error('❌ Error creating test user:', createError);
      console.error('   This indicates RLS policies need to be updated');
    } else {
      console.log('✅ Test user created successfully:', newUser);
      
      // Clean up test user
      const { error: deleteError } = await supabase
        .from('users')
        .delete()
        .eq('id', newUser.id);
      
      if (deleteError) {
        console.log('⚠️  Could not clean up test user:', deleteError.message);
      } else {
        console.log('✅ Test user cleaned up successfully');
      }
    }

    // Test 3: Check customers table
    console.log('\n👥 Test 3: Checking customers table...');
    const { data: customers, error: customersError } = await supabase
      .from('customers')
      .select('*');

    if (customersError) {
      console.error('❌ Error fetching customers:', customersError);
    } else {
      console.log(`✅ Found ${customers.length} customers in customers table`);
    }

    console.log('\n📝 Summary:');
    console.log('   - If user creation fails, run the RLS policies SQL script');
    console.log('   - If customers table is empty, that\'s normal for new setup');
    console.log('   - The login API should handle user creation automatically');

  } catch (error) {
    console.error('❌ Error during testing:', error);
  }
}

// Run the test
testUserCreation();
