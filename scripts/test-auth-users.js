#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://bbtypnulrkkdvvfupxws.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidHlwbnVscmtrZHZ2ZnVweHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MDE2NDksImV4cCI6MjA3NDI3NzY0OX0.zAXeNagYcELcs9jlEJxzAfhgAjknhA2ZWv-pkn7hrrM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testAuthUsers() {
  console.log('🔐 Testing Supabase Auth users...');

  try {
    // Test 1: Try to sign in with demo credentials
    console.log('\n📋 Test 1: Testing demo credentials...');
    const { data: demoAuth, error: demoError } = await supabase.auth.signInWithPassword({
      email: 'admin@eshop.com',
      password: 'admin123'
    });

    if (demoError) {
      console.log('⚠️  Demo credentials failed (expected if not in Supabase Auth):', demoError.message);
    } else {
      console.log('✅ Demo credentials worked:', demoAuth.user?.email);
      await supabase.auth.signOut();
    }

    // Test 2: Check if we can create a test user in Supabase Auth
    console.log('\n🔧 Test 2: Creating test user in Supabase Auth...');
    const testEmail = 'testuser123@gmail.com';
    const testPassword = 'testpassword123';
    
    // First, try to sign up
    const { data: signupData, error: signupError } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        data: {
          first_name: 'Test',
          last_name: 'Auth User'
        }
      }
    });

    if (signupError) {
      console.error('❌ Signup error:', signupError);
    } else {
      console.log('✅ Test user created in Supabase Auth:', signupData.user?.email);
      console.log('   Email confirmed:', signupData.user?.email_confirmed_at ? 'Yes' : 'No');
      
      // Test 3: Try to sign in with the created user
      console.log('\n🔑 Test 3: Testing login with created user...');
      const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
        email: testEmail,
        password: testPassword
      });

      if (loginError) {
        console.error('❌ Login error:', loginError);
        console.error('   Error code:', loginError.code);
        console.error('   Error message:', loginError.message);
      } else {
        console.log('✅ Login successful:', loginData.user?.email);
        await supabase.auth.signOut();
      }
    }

    // Test 4: Check current session
    console.log('\n📊 Test 4: Checking current session...');
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('❌ Session error:', sessionError);
    } else if (session) {
      console.log('✅ Active session found:', session.user?.email);
    } else {
      console.log('ℹ️  No active session');
    }

    console.log('\n📝 Summary:');
    console.log('   - If demo credentials failed, they\'re not in Supabase Auth (use API demo mode)');
    console.log('   - If signup worked, check if email confirmation is required');
    console.log('   - If login failed, check the error message for details');

  } catch (error) {
    console.error('❌ Error during testing:', error);
  }
}

// Run the test
testAuthUsers();
