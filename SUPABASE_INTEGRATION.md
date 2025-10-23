# 🚀 Supabase E-commerce Integration Guide

This guide will help you integrate your e-commerce application with Supabase for real database functionality.

## 📋 Prerequisites

- Node.js installed
- A Supabase account (free tier available)
- Your e-commerce project set up

## 🔧 Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - **Name**: `ecommerce-shopsphere`
   - **Database Password**: Choose a strong password
   - **Region**: Select the closest region to your users
6. Click "Create new project"
7. Wait for the project to be created (usually takes 1-2 minutes)

## 🔑 Step 2: Get Your API Keys

1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)
   - **service_role** key (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

## ⚙️ Step 3: Configure Environment Variables

1. Open your project's `.env.local` file
2. Replace the placeholder values with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## 🗄️ Step 4: Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the entire contents of `supabase/schema.sql` from your project
4. Paste it into the SQL Editor
5. Click "Run" to execute the schema
6. You should see success messages for all table creations

### What the schema includes:
- ✅ **Products table** - Store all product information
- ✅ **Categories table** - Product categories
- ✅ **Users table** - Admin users for dashboard
- ✅ **Customers table** - Customer information
- ✅ **Orders & Order Items** - Order management
- ✅ **Inventory table** - Stock management
- ✅ **Discount codes** - Promotional codes
- ✅ **Shipping methods** - Delivery options
- ✅ **Support tickets** - Customer service
- ✅ **Row Level Security (RLS)** - Data protection
- ✅ **Indexes** - Performance optimization

## 📦 Step 5: Add Products to Database

1. Open your terminal in the project directory
2. Run the product insertion script:

```bash
node scripts/add-products-to-supabase.js
```

This will add:
- 🎧 **20 high-quality products** across 5 categories
- 📱 **Electronics**: Sony headphones, Apple Watch, Samsung Galaxy, MacBook Pro
- 🏃 **Sports**: Nike Air Max, Adidas Ultraboost, Peloton Bike
- 🏠 **Home & Kitchen**: Dyson vacuum, KitchenAid mixer, Vitamix blender
- 💎 **Accessories**: Rolex watch, Louis Vuitton bag, Yeti tumbler
- 👕 **Clothing**: Patagonia jacket, Lululemon leggings

## 🧪 Step 6: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Open your browser to `http://localhost:3000`
3. You should now see:
   - ✅ Products loading from Supabase database
   - ✅ Real-time data updates
   - ✅ Working authentication
   - ✅ Functional shopping cart
   - ✅ Admin dashboard with real data

## 🔐 Step 7: Set Up Authentication

### For Admin Users:
1. Go to **Authentication** > **Users** in your Supabase dashboard
2. Click "Add user"
3. Create admin accounts with roles:
   - `admin@eshop.com` (role: owner)
   - `manager@eshop.com` (role: developer)

### For Customer Registration:
1. Customers can register through your app's signup page
2. Supabase will handle email verification automatically
3. Customer data will be stored in the `customers` table

## 📊 Step 8: Admin Dashboard Features

Once set up, your admin dashboard will have:

- 📈 **Analytics**: Real-time sales, orders, customers
- 📦 **Product Management**: Add, edit, delete products
- 👥 **Customer Management**: View customer information
- 📋 **Order Management**: Process and track orders
- 📊 **Inventory**: Stock levels and alerts
- 🎫 **Discount Codes**: Create promotional codes
- 🚚 **Shipping**: Configure delivery methods
- 🎧 **Support**: Customer service tickets

## 🚀 Step 9: Deploy to Production

### For Vercel Deployment:
1. In your Vercel dashboard, go to your project settings
2. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Deploy your application

### For Other Platforms:
- Add the same environment variables to your hosting platform
- Ensure your Supabase project allows connections from your domain

## 🔧 Troubleshooting

### Common Issues:

1. **"Missing Supabase environment variables"**
   - Check your `.env.local` file has the correct keys
   - Restart your development server

2. **"Products not loading"**
   - Verify the database schema was created successfully
   - Check if products were inserted in the database
   - Look at browser console for error messages

3. **"Authentication not working"**
   - Check your Supabase project settings
   - Verify RLS policies are correctly set
   - Ensure user registration is enabled

4. **"API errors"**
   - Check your Supabase project is active
   - Verify API keys are correct
   - Check the Supabase dashboard for any service issues

### Getting Help:
- Check the [Supabase Documentation](https://supabase.com/docs)
- Look at your browser's developer console for errors
- Check the Supabase dashboard logs

## 🎉 Success!

Once everything is set up, you'll have:
- ✅ A fully functional e-commerce site
- ✅ Real-time database integration
- ✅ User authentication and authorization
- ✅ Admin dashboard with analytics
- ✅ Shopping cart and wishlist
- ✅ Order management system
- ✅ Inventory tracking
- ✅ Customer support system

Your e-commerce application is now powered by Supabase! 🚀

## 📞 Support

If you need help with the integration:
1. Check the troubleshooting section above
2. Review the Supabase documentation
3. Check your browser console for specific error messages
4. Verify all environment variables are set correctly

Happy selling! 🛒✨
