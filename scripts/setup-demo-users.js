const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function setupDemoUsers() {
  console.log('🔄 Setting up demo users in Supabase...');

  const demoUsers = [
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
    },
    {
      email: 'customer@eshop.com',
      first_name: 'Demo',
      last_name: 'Customer',
      role: 'customer',
      is_active: true
    },
    {
      email: 'john@example.com',
      first_name: 'John',
      last_name: 'Doe',
      role: 'customer',
      is_active: true
    },
    {
      email: 'jane@example.com',
      first_name: 'Jane',
      last_name: 'Smith',
      role: 'customer',
      is_active: true
    }
  ];

  for (const user of demoUsers) {
    try {
      console.log(`🔄 Adding user to database: ${user.email}`);
      
      // Check if user already exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('email', user.email)
        .single();

      if (existingUser) {
        console.log(`⚠️  User ${user.email} already exists, skipping...`);
        continue;
      }

      // Insert user into users table
      const { error: insertError } = await supabase
        .from('users')
        .insert(user);

      if (insertError) {
        console.error(`❌ Error inserting user ${user.email}:`, insertError.message);
      } else {
        console.log(`✅ User added to database: ${user.email}`);
      }

    } catch (error) {
      console.error(`❌ Unexpected error adding user ${user.email}:`, error);
    }
  }

  console.log('\n✅ Demo users setup completed!');
  console.log('\n📋 Demo Credentials (for API route fallback):');
  console.log('Admin: admin@eshop.com / admin123');
  console.log('Manager: manager@eshop.com / manager123');
  console.log('Customer: customer@eshop.com / customer123');
  console.log('Customer: john@example.com / john123');
  console.log('Customer: jane@example.com / jane123');
  console.log('\n💡 Note: These users are now in the database but need to be created in Supabase Auth.');
  console.log('💡 Users can sign up normally through the signup page, or use the demo credentials for testing.');
}

setupDemoUsers().catch(console.error);
