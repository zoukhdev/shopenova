# Database Setup Guide

## Quick Database Setup for Supabase

### Step 1: Run the Database Schema

1. **Go to your Supabase Dashboard**
2. **Navigate to:** SQL Editor
3. **Click "New Query"**
4. **Copy and paste the entire contents of `supabase/schema.sql`**
5. **Click "Run"**

### Step 2: Verify Tables Were Created

After running the schema, you should see these tables in your Supabase dashboard:
- `products`
- `categories`
- `customers`
- `orders`
- `users`
- `inventory`
- `discount_codes`
- `shipping_methods`
- `support_tickets`

### Step 3: Test Account Creation

Once the database schema is set up:
1. **Go to:** `/signup`
2. **Create a test account**
3. **Check your email** for verification
4. **Login** with your new credentials

### Alternative: Use Demo Mode

If you don't want to set up the full database yet, the demo mode still works:
- **Admin login:** `admin@eshop.com` / `admin123`
- **Customer accounts:** Will work with basic Supabase Auth (no customer records)

### Troubleshooting

**Error: "Failed to create customer"**
- This means the `customers` table doesn't exist
- Run the database schema from `supabase/schema.sql`

**Error: "User not found"**
- Check if email verification was completed
- Verify the user exists in Supabase Auth dashboard

**Error: "Invalid credentials"**
- Make sure you're using the correct email/password
- Check if the account was verified via email
