const fs = require('fs');
const path = require('path');

console.log('🚀 Supabase E-commerce Setup Script');
console.log('=====================================\n');

// Check if .env.local exists
const envPath = path.join(__dirname, '..', '.env.local');
const envExists = fs.existsSync(envPath);

if (!envExists) {
  console.log('📝 Creating .env.local file...');
  
  const envContent = `# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Optional: For server-side operations (recommended for admin functions)
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Example:
# NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
# SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env.local file created');
} else {
  console.log('✅ .env.local file already exists');
}

console.log('\n📋 Setup Instructions:');
console.log('====================');
console.log('1. Go to https://supabase.com and create a new project');
console.log('2. In your Supabase dashboard, go to Settings > API');
console.log('3. Copy your Project URL and paste it as NEXT_PUBLIC_SUPABASE_URL');
console.log('4. Copy your anon/public key and paste it as NEXT_PUBLIC_SUPABASE_ANON_KEY');
console.log('5. Copy your service_role key and paste it as SUPABASE_SERVICE_ROLE_KEY');
console.log('6. In your Supabase dashboard, go to SQL Editor');
console.log('7. Copy and paste the contents of supabase/schema.sql to create the database tables');
console.log('8. Run: node scripts/add-products-to-supabase.js to add all products to the database');
console.log('9. Start your development server: npm run dev');

console.log('\n🔧 Database Schema:');
console.log('==================');
console.log('The schema.sql file includes:');
console.log('- Products table with all necessary fields');
console.log('- Categories table');
console.log('- Users table for admin dashboard');
console.log('- Customers table');
console.log('- Orders and order_items tables');
console.log('- Inventory management');
console.log('- Discount codes');
console.log('- Shipping methods');
console.log('- Support tickets');
console.log('- Row Level Security (RLS) policies');
console.log('- Indexes for performance');

console.log('\n📦 Products to be added:');
console.log('========================');
console.log('- 20 high-quality products across 5 categories');
console.log('- Electronics: Sony headphones, Apple Watch, Samsung Galaxy, MacBook Pro, etc.');
console.log('- Sports: Nike Air Max, Adidas Ultraboost, Peloton Bike, etc.');
console.log('- Home & Kitchen: Dyson vacuum, KitchenAid mixer, Vitamix blender, etc.');
console.log('- Accessories: Rolex watch, Louis Vuitton bag, Yeti tumbler, etc.');
console.log('- Clothing: Patagonia jacket, Lululemon leggings, etc.');

console.log('\n🎯 Features included:');
console.log('====================');
console.log('- Real-time product data from Supabase');
console.log('- User authentication with Supabase Auth');
console.log('- Shopping cart and wishlist functionality');
console.log('- Order management system');
console.log('- Admin dashboard with analytics');
console.log('- Inventory management');
console.log('- Discount code system');
console.log('- Shipping method configuration');
console.log('- Customer support tickets');

console.log('\n✨ Next Steps:');
console.log('==============');
console.log('1. Set up your Supabase project and configure environment variables');
console.log('2. Run the database schema in your Supabase SQL Editor');
console.log('3. Execute the product insertion script');
console.log('4. Test the application with real data');
console.log('5. Deploy to Vercel with your Supabase credentials');

console.log('\n🎉 Your e-commerce site will be fully functional with real database integration!');
