// Database initialization script for Supabase
// This script helps populate the database with initial data

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables from .env.local if present
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  require('dotenv').config({ path: envPath });
}

// Prefer Service Role key to bypass RLS; fallback to anon key if necessary
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bbtypnulrkkdvvfupxws.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidHlwbnVscmtrZHZ2ZnVweHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MDE2NDksImV4cCI6MjA3NDI3NzY0OX0.zAXeNagYcELcs9jlEJxzAfhgAjknhA2ZWv-pkn7hrrM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function initializeDatabase() {
  console.log('🚀 Initializing database...');

  try {
    // 1. Create categories
    console.log('📁 Creating categories...');
    const categories = [
      { name: 'Electronics', description: 'Electronic devices and accessories' },
      { name: 'Clothing', description: 'Fashion and apparel' },
      { name: 'Sports', description: 'Sports equipment and gear' },
      { name: 'Home & Kitchen', description: 'Home improvement and kitchen items' },
      { name: 'Accessories', description: 'Various accessories and gadgets' }
    ];

    for (const category of categories) {
      // Check if category exists by unique-ish name
      const { data: existingCat, error: catCheckError } = await supabase
        .from('categories')
        .select('id')
        .eq('name', category.name)
        .limit(1)
        .maybeSingle();

      if (catCheckError) {
        console.error('Error checking category:', catCheckError);
        continue;
      }

      if (existingCat) {
        console.log(`ℹ️  Category already exists: ${category.name}`);
        continue;
      }

      const { error } = await supabase
        .from('categories')
        .insert(category);

      if (error) {
        console.error('Error creating category:', error);
      } else {
        console.log(`✅ Created category: ${category.name}`);
      }
    }

    // 2. Create sample products
    console.log('📦 Creating sample products...');
    const products = [
      {
        name: 'Sony WH-1000XM4 Headphones',
        description: 'Industry-leading noise canceling with Dual Noise Sensor technology',
        price: 279.99,
        original_price: 349.99,
        category: 'Electronics',
        brand: 'Sony',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
        rating: 4.8,
        reviews: 2847,
        in_stock: true
      },
      {
        name: 'Apple Watch Series 9',
        description: 'The most advanced Apple Watch with health and fitness features',
        price: 399.99,
        original_price: 429.99,
        category: 'Electronics',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
        rating: 4.7,
        reviews: 1923,
        in_stock: true
      },
      {
        name: 'Samsung Galaxy S24',
        description: 'Latest flagship smartphone with AI-powered features',
        price: 999.99,
        original_price: 1099.99,
        category: 'Electronics',
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
        rating: 4.6,
        reviews: 2100,
        in_stock: true
      },
      {
        name: 'Nike Air Max 270',
        description: 'Comfortable running shoes with Max Air cushioning',
        price: 129.99,
        original_price: 150.00,
        category: 'Sports',
        brand: 'Nike',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        rating: 4.6,
        reviews: 1234,
        in_stock: true
      },
      {
        name: 'MacBook Pro 16-inch',
        description: 'Professional laptop with M3 Pro chip',
        price: 2499.99,
        original_price: 2799.99,
        category: 'Electronics',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
        rating: 4.9,
        reviews: 445,
        in_stock: true
      }
    ];

    for (const product of products) {
      // Check if product exists by name
      const { data: existingProd, error: prodCheckError } = await supabase
        .from('products')
        .select('id')
        .eq('name', product.name)
        .limit(1)
        .maybeSingle();

      if (prodCheckError) {
        console.error('Error checking product:', prodCheckError);
        continue;
      }

      if (existingProd) {
        console.log(`ℹ️  Product already exists: ${product.name}`);
        continue;
      }

      const { error } = await supabase
        .from('products')
        .insert(product);
      
      if (error) {
        console.error('Error creating product:', error);
      } else {
        console.log(`✅ Created product: ${product.name}`);
      }
    }

    // 3. Create shipping methods
    console.log('🚚 Creating shipping methods...');
    const shippingMethods = [
      {
        name: 'Standard Shipping',
        type: 'standard',
        cost: 5.00,
        estimated_days: '5-7 business days',
        description: 'Economical shipping option for domestic orders',
        regions: ['US', 'CA'],
        is_active: true
      },
      {
        name: 'Express Shipping',
        type: 'express',
        cost: 15.00,
        estimated_days: '2-3 business days',
        description: 'Faster shipping for urgent domestic deliveries',
        regions: ['US'],
        is_active: true
      },
      {
        name: 'Free Shipping',
        type: 'free',
        cost: 0.00,
        estimated_days: '7-10 business days',
        description: 'Free shipping for orders over $50',
        regions: ['US'],
        is_active: true
      }
    ];

    for (const method of shippingMethods) {
      // Check if shipping method exists by name
      const { data: existingMethod, error: methodCheckError } = await supabase
        .from('shipping_methods')
        .select('id')
        .eq('name', method.name)
        .limit(1)
        .maybeSingle();

      if (methodCheckError) {
        console.error('Error checking shipping method:', methodCheckError);
        continue;
      }

      if (existingMethod) {
        console.log(`ℹ️  Shipping method already exists: ${method.name}`);
        continue;
      }

      const { error } = await supabase
        .from('shipping_methods')
        .insert(method);
      
      if (error) {
        console.error('Error creating shipping method:', error);
      } else {
        console.log(`✅ Created shipping method: ${method.name}`);
      }
    }

    console.log('🎉 Database initialization completed successfully!');
    console.log('📝 Next steps:');
    console.log('1. Run the SQL schema from supabase/schema.sql in your Supabase project');
    console.log('2. Set up your environment variables in Vercel');
    console.log('3. Deploy your application');

  } catch (error) {
    console.error('❌ Error initializing database:', error);
  }
}

// Run the initialization
initializeDatabase();
