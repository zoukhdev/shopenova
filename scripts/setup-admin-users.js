// Admin user setup script for Supabase
// This script creates admin users in your Supabase users table

const { createClient } = require('@supabase/supabase-js');

// Replace these with your actual Supabase credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bbtypnulrkkdvvfupxws.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidHlwbnVscmtrZHZ2ZnVweHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MDE2NDksImV4cCI6MjA3NDI3NzY0OX0.zAXeNagYcELcs9jlEJxzAfhgAjknhA2ZWv-pkn7hrrM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupAdminUsers() {
  console.log('🔐 Setting up admin users...');

  try {
    // First, you need to manually create these users in Supabase Auth dashboard:
    // 1. Go to Authentication > Users
    // 2. Add User with email: admin@eshop.com, password: admin123
    // 3. Add User with email: manager@eshop.com, password: manager123
    
    console.log('📝 IMPORTANT: Before running this script, manually create these users in Supabase Auth:');
    console.log('   1. admin@eshop.com / admin123');
    console.log('   2. manager@eshop.com / manager123');
    console.log('');
    console.log('   Go to: Supabase Dashboard > Authentication > Users > Add User');
    console.log('');

    // Get all users from auth to find their IDs
    const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();
    
    if (authError) {
      console.error('❌ Error fetching auth users:', authError);
      console.log('💡 Make sure you have the right permissions or use the Supabase Dashboard instead.');
      return;
    }

    console.log('👥 Found auth users:', authUsers.users.length);

    // Create admin users in the users table
    const adminUsers = [
      {
        email: 'admin@eshop.com',
        first_name: 'Admin',
        last_name: 'User',
        role: 'owner',
        is_active: true
      },
      {
        email: 'manager@eshop.com',
        first_name: 'Manager',
        last_name: 'User',
        role: 'developer',
        is_active: true
      }
    ];

    for (const adminUser of adminUsers) {
      // Find the corresponding auth user
      const authUser = authUsers.users.find(user => user.email === adminUser.email);
      
      if (!authUser) {
        console.log(`⚠️  Auth user not found for ${adminUser.email}. Please create this user in Supabase Auth first.`);
        continue;
      }

      // Create user in users table
      const { data, error } = await supabase
        .from('users')
        .upsert({
          id: authUser.id,
          email: adminUser.email,
          first_name: adminUser.first_name,
          last_name: adminUser.last_name,
          role: adminUser.role,
          is_active: adminUser.is_active
        }, { onConflict: 'id' });
      
      if (error) {
        console.error(`❌ Error creating user ${adminUser.email}:`, error);
      } else {
        console.log(`✅ Created admin user: ${adminUser.email} (${adminUser.role})`);
      }
    }

    console.log('');
    console.log('🎉 Admin user setup completed!');
    console.log('📝 You can now login with:');
    console.log('   Admin: admin@eshop.com / admin123');
    console.log('   Manager: manager@eshop.com / manager123');

  } catch (error) {
    console.error('❌ Error setting up admin users:', error);
  }
}

// Run the setup
setupAdminUsers();
