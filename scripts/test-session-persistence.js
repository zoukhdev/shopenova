#!/usr/bin/env node

/**
 * Test script to verify session persistence works correctly
 */

const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://bbtypnulrkkdvvfupxws.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidHlwbnVscmtrZHZ2ZnVweHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MDE2NDksImV4cCI6MjA3NDI3NzY0OX0.zAXeNagYcELcs9jlEJxzAfhgAjknhA2ZWv-pkn7hrrM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSessionPersistence() {
  console.log('🔐 Testing session persistence...');
  
  // Test demo customer login
  const customerCredentials = {
    email: 'customer@eshop.com',
    password: 'customer123'
  };
  
  try {
    console.log('\n🧪 Testing customer login API...');
    
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerCredentials)
    });
    
    const result = await response.json();
    
    if (result.user && result.token) {
      console.log('✅ Login successful!');
      console.log('   User:', result.user.email);
      console.log('   Role:', result.user.role);
      console.log('   Token length:', result.token.length);
      
      // Decode token to verify contents
      try {
        const tokenData = JSON.parse(Buffer.from(result.token, 'base64').toString());
        console.log('   Token data:', {
          userId: tokenData.userId,
          email: tokenData.email,
          role: tokenData.role,
          firstName: tokenData.firstName,
          lastName: tokenData.lastName,
          exp: new Date(tokenData.exp).toLocaleString()
        });
        
        // Check if token has all required fields
        const hasRequiredFields = tokenData.userId && tokenData.email && tokenData.role && tokenData.firstName && tokenData.lastName;
        console.log('   ✅ Token has all required fields:', hasRequiredFields);
        
        if (!hasRequiredFields) {
          console.log('   ❌ Token missing required fields for AuthContext reconstruction');
        }
        
      } catch (tokenError) {
        console.log('   ❌ Error decoding token:', tokenError.message);
      }
      
    } else {
      console.log('❌ Login failed:', result.error);
    }
    
  } catch (error) {
    console.log('❌ Test failed:', error.message);
  }
  
  console.log('\n📋 Instructions:');
  console.log('1. Make sure your dev server is running (npm run dev)');
  console.log('2. Try logging in with customer credentials');
  console.log('3. Check if you stay logged in after page refresh');
  console.log('4. The AuthContext should now properly restore user session from token');
}

testSessionPersistence();
