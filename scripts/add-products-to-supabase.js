const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Import products data
const productsData = require('../src/data/products.ts');

// Product data from the static file
const products = [
  {
    name: 'Sony WH-1000XM4 Wireless Headphones',
    description: 'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Experience crystal-clear sound with 30-hour battery life and quick charge capability.',
    price: 279.99,
    original_price: 349.99,
    category: 'Electronics',
    brand: 'Sony',
    image: '/products_images/product1.jpg',
    images: ['/products_images/product1.jpg', '/products_images/product1.jpg', '/products_images/product1.jpg'],
    rating: 4.8,
    reviews: 2847,
    in_stock: true
  },
  {
    name: 'Apple Watch Series 9',
    description: 'The most advanced Apple Watch with health and fitness features. Track your workouts, monitor your heart rate, and stay connected with cellular connectivity. Features a larger display and faster performance.',
    price: 399.99,
    original_price: 429.99,
    category: 'Electronics',
    brand: 'Apple',
    image: '/products_images/product2.jpg',
    images: ['/products_images/product2.jpg', '/products_images/product2.jpg', '/products_images/product2.jpg'],
    rating: 4.7,
    reviews: 1923,
    in_stock: true
  },
  {
    name: 'Samsung Galaxy S24',
    description: 'Latest flagship smartphone with AI-powered features. Capture stunning photos with the advanced camera system, enjoy smooth performance with the latest processor, and experience the future of mobile technology.',
    price: 999.99,
    original_price: 1099.99,
    category: 'Electronics',
    brand: 'Samsung',
    image: '/products_images/product3.jpg',
    images: ['/products_images/product3.jpg', '/products_images/product3.jpg', '/products_images/product3.jpg'],
    rating: 4.6,
    reviews: 2100,
    in_stock: true
  },
  {
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Max Air cushioning. Perfect for daily wear and athletic activities. Features breathable mesh upper and responsive cushioning for all-day comfort.',
    price: 129.99,
    original_price: 150.00,
    category: 'Sports',
    brand: 'Nike',
    image: '/products_images/product4.jpg',
    images: ['/products_images/product4.jpg', '/products_images/product4.jpg', '/products_images/product4.jpg'],
    rating: 4.6,
    reviews: 1234,
    in_stock: true
  },
  {
    name: 'MacBook Pro 16-inch',
    description: 'Professional laptop with M3 Pro chip for ultimate performance. Perfect for creative professionals, developers, and power users. Features a stunning Liquid Retina XDR display and all-day battery life.',
    price: 2499.99,
    original_price: 2799.99,
    category: 'Electronics',
    brand: 'Apple',
    image: '/products_images/product5.jpg',
    images: ['/products_images/product5.jpg', '/products_images/product5.jpg', '/products_images/product5.jpg'],
    rating: 4.9,
    reviews: 445,
    in_stock: true
  },
  {
    name: 'Dyson V15 Detect Cordless Vacuum',
    description: 'Advanced cordless vacuum with laser dust detection. Features powerful suction, intelligent cleaning modes, and up to 60 minutes of runtime. Perfect for deep cleaning and maintaining a spotless home.',
    price: 649.99,
    original_price: 749.99,
    category: 'Home & Kitchen',
    brand: 'Dyson',
    image: '/products_images/product6.jpg',
    images: ['/products_images/product6.jpg', '/products_images/product6.jpg', '/products_images/product6.jpg'],
    rating: 4.8,
    reviews: 892,
    in_stock: true
  },
  {
    name: 'Canon EOS R5 Camera',
    description: 'Professional mirrorless camera with 45MP full-frame sensor. Features 8K video recording, advanced autofocus, and weather-sealed construction. Perfect for professional photography and videography.',
    price: 3899.99,
    original_price: 4299.99,
    category: 'Electronics',
    brand: 'Canon',
    image: '/products_images/product7.jpg',
    images: ['/products_images/product7.1.jpg', '/products_images/product7.2.jpg', '/products_images/product7.jpg'],
    rating: 4.9,
    reviews: 234,
    in_stock: true
  },
  {
    name: 'Tesla Model 3 Accessories Kit',
    description: 'Complete accessories kit for Tesla Model 3. Includes floor mats, center console organizer, screen protector, and premium interior accessories. Enhance your Tesla experience with these high-quality accessories.',
    price: 199.99,
    original_price: 249.99,
    category: 'Accessories',
    brand: 'Tesla',
    image: '/products_images/product8.jpg',
    images: ['/products_images/product8.1.jpg', '/products_images/product8.2.jpg', '/products_images/product8.3.jpg'],
    rating: 4.7,
    reviews: 567,
    in_stock: true
  },
  {
    name: 'Adidas Ultraboost 22',
    description: 'Premium running shoes with Boost midsole technology. Features responsive cushioning, breathable upper, and Continental rubber outsole for superior grip. Perfect for long-distance running and daily wear.',
    price: 180.00,
    original_price: 200.00,
    category: 'Sports',
    brand: 'Adidas',
    image: '/products_images/product9.jpg',
    images: ['/products_images/product9.jpg', '/products_images/product9.jpg', '/products_images/product9.jpg'],
    rating: 4.5,
    reviews: 1456,
    in_stock: true
  },
  {
    name: 'KitchenAid Stand Mixer',
    description: 'Professional stand mixer with 5-quart bowl capacity. Features 10 speeds, multiple attachments, and powerful motor. Perfect for baking enthusiasts and professional kitchens.',
    price: 329.99,
    original_price: 399.99,
    category: 'Home & Kitchen',
    brand: 'KitchenAid',
    image: '/products_images/product10.jpg',
    images: ['/products_images/product10.jpg', '/products_images/product10.jpg', '/products_images/product10.jpg'],
    rating: 4.8,
    reviews: 1234,
    in_stock: true
  },
  {
    name: 'Rolex Submariner Watch',
    description: 'Luxury diving watch with automatic movement and water resistance up to 300 meters. Features a unidirectional rotating bezel, luminescent markers, and iconic design. A timeless piece of horological excellence.',
    price: 8999.99,
    original_price: 9999.99,
    category: 'Accessories',
    brand: 'Rolex',
    image: '/products_images/product11.jpg',
    images: ['/products_images/product11.jpg', '/products_images/product11.jpg', '/products_images/product11.jpg'],
    rating: 4.9,
    reviews: 89,
    in_stock: true
  },
  {
    name: 'Louis Vuitton Neverfull Bag',
    description: 'Iconic tote bag in classic Monogram canvas. Features spacious interior, adjustable straps, and timeless design. Perfect for everyday use and travel. A symbol of luxury and sophistication.',
    price: 1890.00,
    original_price: 2100.00,
    category: 'Accessories',
    brand: 'Louis Vuitton',
    image: '/products_images/product12.jpg',
    images: ['/products_images/product12.jpg', '/products_images/product12.jpg', '/products_images/product12.jpg'],
    rating: 4.8,
    reviews: 234,
    in_stock: true
  },
  {
    name: 'Patagonia Down Jacket',
    description: 'Sustainable down jacket made from recycled materials. Features 800-fill down insulation, water-resistant shell, and ethical manufacturing. Perfect for outdoor adventures and cold weather.',
    price: 199.99,
    original_price: 249.99,
    category: 'Clothing',
    brand: 'Patagonia',
    image: '/products_images/product13.jpg',
    images: ['/products_images/product13.jpg', '/products_images/product13.jpg', '/products_images/product13.jpg'],
    rating: 4.7,
    reviews: 892,
    in_stock: true
  },
  {
    name: 'Allbirds Tree Runners',
    description: 'Sustainable running shoes made from eucalyptus tree fiber. Features natural odor control, machine washable, and carbon-neutral manufacturing. Comfortable and eco-friendly footwear.',
    price: 98.00,
    original_price: 120.00,
    category: 'Sports',
    brand: 'Allbirds',
    image: '/products_images/product14.jpg',
    images: ['/products_images/product14.jpg', '/products_images/product14.jpg', '/products_images/product14.jpg'],
    rating: 4.6,
    reviews: 1456,
    in_stock: true
  },
  {
    name: 'Vitamix A3500 Blender',
    description: 'Professional-grade blender with 64-ounce container and 5 program settings. Features variable speed control, self-cleaning, and powerful motor. Perfect for smoothies, soups, and food processing.',
    price: 549.99,
    original_price: 649.99,
    category: 'Home & Kitchen',
    brand: 'Vitamix',
    image: '/products_images/product15.jpg',
    images: ['/products_images/product15.jpg', '/products_images/product15.jpg', '/products_images/product15.jpg'],
    rating: 4.9,
    reviews: 567,
    in_stock: true
  },
  {
    name: 'Bose QuietComfort 45 Headphones',
    description: 'Premium noise-canceling headphones with world-class noise cancellation. Features 24-hour battery life, comfortable design, and superior sound quality. Perfect for travel and daily use.',
    price: 329.99,
    original_price: 379.99,
    category: 'Electronics',
    brand: 'Bose',
    image: '/products_images/product16.jpg',
    images: ['/products_images/product16.jpg', '/products_images/product16.jpg', '/products_images/product16.jpg'],
    rating: 4.7,
    reviews: 1234,
    in_stock: true
  },
  {
    name: 'Lululemon Align Leggings',
    description: 'Buttery-soft leggings made from Nulu fabric. Features high-rise waist, four-way stretch, and sweat-wicking technology. Perfect for yoga, running, and everyday wear.',
    price: 98.00,
    original_price: 118.00,
    category: 'Clothing',
    brand: 'Lululemon',
    image: '/products_images/product17.jpg',
    images: ['/products_images/product17.jpg', '/products_images/product17.jpg', '/products_images/product17.jpg'],
    rating: 4.8,
    reviews: 2345,
    in_stock: true
  },
  {
    name: 'Yeti Rambler Tumbler',
    description: 'Insulated tumbler that keeps drinks cold for hours. Features double-wall vacuum insulation, no-sweat design, and dishwasher safe. Perfect for coffee, tea, and cold beverages.',
    price: 35.00,
    original_price: 45.00,
    category: 'Accessories',
    brand: 'Yeti',
    image: '/products_images/product18.jpg',
    images: ['/products_images/product18.jpg', '/products_images/product18.jpg', '/products_images/product18.jpg'],
    rating: 4.9,
    reviews: 3456,
    in_stock: true
  },
  {
    name: 'Peloton Bike+',
    description: 'Premium exercise bike with rotating touchscreen and auto-follow resistance. Features live and on-demand classes, leaderboard, and community features. Perfect for home fitness and cycling enthusiasts.',
    price: 2495.00,
    original_price: 2995.00,
    category: 'Sports',
    brand: 'Peloton',
    image: '/products_images/product19.jpg',
    images: ['/products_images/product19.jpg', '/products_images/product19.jpg', '/products_images/product19.jpg'],
    rating: 4.6,
    reviews: 1234,
    in_stock: true
  },
  {
    name: 'Herman Miller Aeron Chair',
    description: 'Ergonomic office chair designed for comfort and productivity. Features adjustable lumbar support, breathable mesh, and multiple adjustment options. Perfect for home office and professional use.',
    price: 1295.00,
    original_price: 1495.00,
    category: 'Home & Kitchen',
    brand: 'Herman Miller',
    image: '/products_images/product20.jpg',
    images: ['/products_images/product20.jpg', '/products_images/product20.jpg', '/products_images/product20.jpg'],
    rating: 4.8,
    reviews: 567,
    in_stock: true
  }
];

async function addProductsToSupabase() {
  try {
    console.log('🔄 Starting to add products to Supabase...');
    
    // First, let's check if products already exist
    const { data: existingProducts, error: fetchError } = await supabase
      .from('products')
      .select('id, name')
      .limit(1);

    if (fetchError) {
      console.error('❌ Error checking existing products:', fetchError);
      return;
    }

    if (existingProducts && existingProducts.length > 0) {
      console.log('⚠️  Products already exist in the database. Skipping insertion.');
      console.log('   If you want to update products, please delete them first or use update script.');
      return;
    }

    // Add categories first
    console.log('🔄 Adding categories...');
    const categories = [
      { name: 'Electronics', description: 'Latest gadgets and electronic devices' },
      { name: 'Clothing', description: 'Fashion and apparel for all occasions' },
      { name: 'Sports', description: 'Sports equipment and athletic gear' },
      { name: 'Home & Kitchen', description: 'Home essentials and kitchen appliances' },
      { name: 'Accessories', description: 'Stylish bags, jewelry, and accessories' }
    ];

    const { data: categoriesData, error: categoriesError } = await supabase
      .from('categories')
      .insert(categories)
      .select();

    if (categoriesError) {
      console.error('❌ Error adding categories:', categoriesError);
    } else {
      console.log('✅ Categories added successfully:', categoriesData?.length || 0);
    }

    // Add products
    console.log('🔄 Adding products to Supabase...');
    const { data, error } = await supabase
      .from('products')
      .insert(products)
      .select();

    if (error) {
      console.error('❌ Error adding products:', error);
      return;
    }

    console.log('✅ Products added successfully:', data?.length || 0, 'products');
    
    // Add inventory for each product
    console.log('🔄 Adding inventory records...');
    const inventoryItems = products.map((product, index) => ({
      product_id: data[index]?.id,
      sku: `SKU-${String(index + 1).padStart(3, '0')}`,
      current_stock: Math.floor(Math.random() * 100) + 10, // Random stock between 10-110
      min_stock: 5,
      max_stock: 200,
      cost: product.price * 0.6, // Cost is 60% of selling price
      supplier: `${product.brand} Supplier`
    }));

    const { data: inventoryData, error: inventoryError } = await supabase
      .from('inventory')
      .insert(inventoryItems)
      .select();

    if (inventoryError) {
      console.error('❌ Error adding inventory:', inventoryError);
    } else {
      console.log('✅ Inventory records added successfully:', inventoryData?.length || 0);
    }

    // Add some sample discount codes
    console.log('🔄 Adding discount codes...');
    const discountCodes = [
      {
        code: 'WELCOME10',
        description: 'Welcome discount for new customers',
        discount_type: 'percentage',
        discount_value: 10,
        min_order_amount: 50,
        max_uses: 1000,
        used_count: 0,
        is_active: true,
        valid_from: new Date().toISOString(),
        valid_until: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days from now
      },
      {
        code: 'SAVE20',
        description: 'Save 20% on orders over $100',
        discount_type: 'percentage',
        discount_value: 20,
        min_order_amount: 100,
        max_uses: 500,
        used_count: 0,
        is_active: true,
        valid_from: new Date().toISOString(),
        valid_until: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString() // 60 days from now
      },
      {
        code: 'FREESHIP',
        description: 'Free shipping on any order',
        discount_type: 'fixed',
        discount_value: 15,
        min_order_amount: 0,
        max_uses: 2000,
        used_count: 0,
        is_active: true,
        valid_from: new Date().toISOString(),
        valid_until: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString() // 90 days from now
      }
    ];

    const { data: discountData, error: discountError } = await supabase
      .from('discount_codes')
      .insert(discountCodes)
      .select();

    if (discountError) {
      console.error('❌ Error adding discount codes:', discountError);
    } else {
      console.log('✅ Discount codes added successfully:', discountData?.length || 0);
    }

    // Add shipping methods
    console.log('🔄 Adding shipping methods...');
    const shippingMethods = [
      {
        name: 'Standard Shipping',
        type: 'standard',
        cost: 5.00,
        estimated_days: '5-7 business days',
        description: 'Economical shipping option for domestic orders',
        is_active: true,
        regions: ['US', 'CA']
      },
      {
        name: 'Express Shipping',
        type: 'express',
        cost: 15.00,
        estimated_days: '2-3 business days',
        description: 'Faster shipping for urgent domestic deliveries',
        is_active: true,
        regions: ['US']
      },
      {
        name: 'Free Shipping',
        type: 'free',
        cost: 0.00,
        estimated_days: '7-10 business days',
        description: 'Free shipping for orders over $50',
        is_active: true,
        regions: ['US']
      }
    ];

    const { data: shippingData, error: shippingError } = await supabase
      .from('shipping_methods')
      .insert(shippingMethods)
      .select();

    if (shippingError) {
      console.error('❌ Error adding shipping methods:', shippingError);
    } else {
      console.log('✅ Shipping methods added successfully:', shippingData?.length || 0);
    }

    console.log('🎉 Database setup completed successfully!');
    console.log('   - Products:', data?.length || 0);
    console.log('   - Categories:', categoriesData?.length || 0);
    console.log('   - Inventory items:', inventoryData?.length || 0);
    console.log('   - Discount codes:', discountData?.length || 0);
    console.log('   - Shipping methods:', shippingData?.length || 0);

  } catch (error) {
    console.error('❌ Error in database setup:', error);
  }
}

// Run the script
addProductsToSupabase();
