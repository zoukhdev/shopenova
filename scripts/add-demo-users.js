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

async function addDemoUsers() {
  console.log('🔄 Adding demo users to Supabase...');

  const demoUsers = [
    {
      email: 'admin@eshop.com',
      password: 'admin123',
      first_name: 'Admin',
      last_name: 'User',
      role: 'owner',
      phone: '+1234567890'
    },
    {
      email: 'manager@eshop.com',
      password: 'manager123',
      first_name: 'Manager',
      last_name: 'User',
      role: 'developer',
      phone: '+1234567891'
    },
    {
      email: 'customer@eshop.com',
      password: 'customer123',
      first_name: 'Demo',
      last_name: 'Customer',
      role: 'customer',
      phone: '+1234567892'
    },
    {
      email: 'john@example.com',
      password: 'john123',
      first_name: 'John',
      last_name: 'Doe',
      role: 'customer',
      phone: '+1234567893'
    },
    {
      email: 'jane@example.com',
      password: 'jane123',
      first_name: 'Jane',
      last_name: 'Smith',
      role: 'customer',
      phone: '+1234567894'
    }
  ];

  for (const user of demoUsers) {
    try {
      console.log(`🔄 Creating user: ${user.email}`);
      
      // Create user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: user.email,
        password: user.password,
        email_confirm: true, // Auto-confirm email
        user_metadata: {
          first_name: user.first_name,
          last_name: user.last_name,
          role: user.role
        }
      });

      if (authError) {
        console.error(`❌ Error creating auth user ${user.email}:`, authError.message);
        continue;
      }

      console.log(`✅ Auth user created: ${user.email}`);

      // Create user profile in users table
      const { error: profileError } = await supabase
        .from('users')
        .insert({
          id: authData.user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone,
          role: user.role,
          is_active: true
        });

      if (profileError) {
        console.error(`❌ Error creating user profile ${user.email}:`, profileError.message);
      } else {
        console.log(`✅ User profile created: ${user.email}`);
      }

    } catch (error) {
      console.error(`❌ Unexpected error creating user ${user.email}:`, error);
    }
  }

  console.log('✅ Demo users setup completed!');
  console.log('\n📋 Demo Credentials:');
  console.log('Admin: admin@eshop.com / admin123');
  console.log('Manager: manager@eshop.com / manager123');
  console.log('Customer: customer@eshop.com / customer123');
  console.log('Customer: john@example.com / john123');
  console.log('Customer: jane@example.com / jane123');
}

addDemoUsers().catch(console.error);
