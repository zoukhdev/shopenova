// Simple setup script for Supabase admin users
// This script provides SQL commands to run in Supabase SQL Editor

console.log('🔐 Supabase Admin User Setup Instructions');
console.log('');
console.log('📝 STEP 1: Create users in Supabase Dashboard');
console.log('   1. Go to: Supabase Dashboard > Authentication > Users');
console.log('   2. Click "Add User"');
console.log('   3. Create these users:');
console.log('      - Email: admin@eshop.com, Password: admin123');
console.log('      - Email: manager@eshop.com, Password: manager123');
console.log('   4. Make sure to confirm their emails');
console.log('');
console.log('📝 STEP 2: Run this SQL in Supabase SQL Editor');
console.log('   (Replace USER_ID_1 and USER_ID_2 with actual IDs from auth.users)');
console.log('');
console.log('   -- Get user IDs first:');
console.log('   SELECT id, email FROM auth.users WHERE email IN (\'admin@eshop.com\', \'manager@eshop.com\');');
console.log('');
console.log('   -- Then insert into users table (replace the IDs):');
console.log('   INSERT INTO users (id, email, first_name, last_name, role, is_active, created_at, updated_at)');
console.log('   VALUES');
console.log('     (\'USER_ID_1\', \'admin@eshop.com\', \'Admin\', \'User\', \'owner\', true, NOW(), NOW()),');
console.log('     (\'USER_ID_2\', \'manager@eshop.com\', \'Manager\', \'User\', \'developer\', true, NOW(), NOW());');
console.log('');
console.log('📝 STEP 3: Test the login');
console.log('   Go to: /admin/login and use the credentials above');
console.log('');
console.log('🎉 Alternative: Use demo mode');
console.log('   The demo credentials already work without Supabase setup!');
console.log('   Just go to /admin/login and use:');
console.log('   - admin@eshop.com / admin123');
console.log('   - manager@eshop.com / manager123');
