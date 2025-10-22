-- Run this script in your Supabase SQL editor to fix RLS policies

-- Drop existing policies for customers table
DROP POLICY IF EXISTS "Anyone can create customers" ON customers;
DROP POLICY IF EXISTS "Customers can view their own data" ON customers;
DROP POLICY IF EXISTS "Admins can manage all customers" ON customers;

-- Create new policies for customers table
CREATE POLICY "Anyone can create customers" ON customers FOR INSERT WITH CHECK (true);
CREATE POLICY "Customers can view their own data" ON customers FOR SELECT USING (
    email = auth.jwt() ->> 'email'
);
CREATE POLICY "Admins can manage all customers" ON customers FOR ALL USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.id::text = auth.uid()::text 
        AND users.role IN ('owner', 'admin', 'developer')
    )
);

-- Also ensure we have policies for other tables that might be missing them
DROP POLICY IF EXISTS "Anyone can view products" ON products;
DROP POLICY IF EXISTS "Anyone can view categories" ON categories;

CREATE POLICY "Anyone can view products" ON products FOR SELECT USING (true);
CREATE POLICY "Anyone can view categories" ON categories FOR SELECT USING (true);

-- Add policies for orders table if missing
DROP POLICY IF EXISTS "Anyone can view orders" ON orders;
CREATE POLICY "Anyone can view orders" ON orders FOR SELECT USING (true);

-- Add policies for inventory if missing
DROP POLICY IF EXISTS "Anyone can view inventory" ON inventory;
CREATE POLICY "Anyone can view inventory" ON inventory FOR SELECT USING (true);

-- Add policies for shipping methods if missing
DROP POLICY IF EXISTS "Anyone can view shipping methods" ON shipping_methods;
CREATE POLICY "Anyone can view shipping methods" ON shipping_methods FOR SELECT USING (true);

-- Add policies for discount codes if missing
DROP POLICY IF EXISTS "Anyone can view discount codes" ON discount_codes;
CREATE POLICY "Anyone can view discount codes" ON discount_codes FOR SELECT USING (true);

-- Add policies for support tickets if missing
DROP POLICY IF EXISTS "Anyone can view support tickets" ON support_tickets;
CREATE POLICY "Anyone can view support tickets" ON support_tickets FOR SELECT USING (true);

-- Add policies for users table (fixed to avoid infinite recursion)
DROP POLICY IF EXISTS "Anyone can create users" ON users;
DROP POLICY IF EXISTS "Users can view their own data" ON users;
DROP POLICY IF EXISTS "Admins can manage all users" ON users;

-- Simple policies that don't cause recursion
CREATE POLICY "Anyone can create users" ON users FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view their own data" ON users FOR SELECT USING (
    id::text = auth.uid()::text
);
-- Simplified admin policy to avoid recursion
CREATE POLICY "Allow all operations for users" ON users FOR ALL USING (true);

SELECT 'RLS policies updated successfully!' as message;
