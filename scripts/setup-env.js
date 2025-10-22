#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envContent = `# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://bbtypnulrkkdvvfupxws.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidHlwbnVscmtrZHZ2ZnVweHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MDE2NDksImV4cCI6MjA3NDI3NzY0OX0.zAXeNagYcELcs9jlEJxzAfhgAjknhA2ZWv-pkn7hrrM

# Optional: For server-side operations
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
`;

const envPath = path.join(process.cwd(), '.env.local');

try {
  // Check if .env.local already exists
  if (fs.existsSync(envPath)) {
    console.log('⚠️  .env.local file already exists');
    console.log('📝 Please manually update it with the following content:');
    console.log('\n' + envContent);
  } else {
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Created .env.local file with Supabase configuration');
    console.log('🔄 Please restart your development server');
  }
} catch (error) {
  console.error('❌ Error creating .env.local file:', error.message);
  console.log('📝 Please manually create .env.local with the following content:');
  console.log('\n' + envContent);
}
