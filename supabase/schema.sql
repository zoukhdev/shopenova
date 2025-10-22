-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types (if they don't exist)
DO $$ BEGIN
    CREATE TYPE order_status AS ENUM ('pending', 'processing', 'shipped', 'delivered', 'cancelled');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('owner', 'admin', 'developer', 'inventory_manager', 'marketing_manager', 'staff');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Products table
CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2),
    category VARCHAR(100) NOT NULL,
    brand VARCHAR(100),
    image TEXT,
    images TEXT[],
    rating DECIMAL(3,2) DEFAULT 0,
    reviews INTEGER DEFAULT 0,
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users table (for admin dashboard)
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role user_role DEFAULT 'staff',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customers table
CREATE TABLE IF NOT EXISTS customers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
    order_number VARCHAR(50) NOT NULL UNIQUE,
    status order_status DEFAULT 'pending',
    total_amount DECIMAL(10,2) NOT NULL,
    shipping_address JSONB NOT NULL,
    billing_address JSONB,
    payment_method VARCHAR(50),
    payment_status VARCHAR(50) DEFAULT 'pending',
    shipping_method VARCHAR(100),
    tracking_number VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inventory table
CREATE TABLE IF NOT EXISTS inventory (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    sku VARCHAR(100) NOT NULL UNIQUE,
    current_stock INTEGER NOT NULL DEFAULT 0,
    min_stock INTEGER NOT NULL DEFAULT 0,
    max_stock INTEGER NOT NULL DEFAULT 100,
    cost DECIMAL(10,2),
    supplier VARCHAR(255),
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Discount codes table
CREATE TABLE IF NOT EXISTS discount_codes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    code VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    discount_type VARCHAR(20) NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
    discount_value DECIMAL(10,2) NOT NULL,
    min_order_amount DECIMAL(10,2),
    max_uses INTEGER,
    used_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    valid_from TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    valid_until TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Shipping methods table
CREATE TABLE IF NOT EXISTS shipping_methods (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    cost DECIMAL(10,2) NOT NULL,
    estimated_days VARCHAR(50) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    regions TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer service tickets table
CREATE TABLE IF NOT EXISTS support_tickets (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
    subject VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'open',
    priority VARCHAR(20) DEFAULT 'medium',
    assigned_to UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories
INSERT INTO categories (name, description) VALUES
('Electronics', 'Electronic devices and accessories'),
('Clothing', 'Fashion and apparel'),
('Sports', 'Sports equipment and gear'),
('Home & Kitchen', 'Home improvement and kitchen items'),
('Accessories', 'Various accessories and gadgets')
ON CONFLICT (name) DO NOTHING;

-- Insert default admin user (password: admin123)
INSERT INTO users (email, password_hash, first_name, last_name, role) VALUES
('admin@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin', 'User', 'owner')
ON CONFLICT (email) DO NOTHING;

-- Insert sample products (only if they don't exist)
INSERT INTO products (name, description, price, original_price, category, brand, image, rating, reviews, in_stock) 
SELECT * FROM (VALUES
('Sony WH-1000XM4 Headphones', 'Industry-leading noise canceling with Dual Noise Sensor technology', 279.99, 349.99, 'Electronics', 'Sony', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', 4.8, 2847, true),
('Apple Watch Series 9', 'The most advanced Apple Watch with health and fitness features', 399.99, 429.99, 'Electronics', 'Apple', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', 4.7, 1923, true),
('Samsung Galaxy S24', 'Latest flagship smartphone with AI-powered features', 999.99, 1099.99, 'Electronics', 'Samsung', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', 4.6, 2100, true),
('Nike Air Max 270', 'Comfortable running shoes with Max Air cushioning', 129.99, 150.00, 'Sports', 'Nike', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', 4.6, 1234, true),
('MacBook Pro 16-inch', 'Professional laptop with M3 Pro chip', 2499.99, 2799.99, 'Electronics', 'Apple', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', 4.9, 445, true)
) AS v(name, description, price, original_price, category, brand, image, rating, reviews, in_stock)
WHERE NOT EXISTS (SELECT 1 FROM products WHERE products.name = v.name);

-- Update existing products with local image paths to use Unsplash URLs
UPDATE products SET image = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' WHERE image = '/images/sony-headphones.jpg';
UPDATE products SET image = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' WHERE image = '/images/apple-watch.jpg';
UPDATE products SET image = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400' WHERE image = '/images/samsung-phone.jpg';
UPDATE products SET image = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' WHERE image = '/images/nike-shoes.jpg';
UPDATE products SET image = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400' WHERE image = '/images/macbook-pro.jpg';

-- Insert sample shipping methods (only if they don't exist)
INSERT INTO shipping_methods (name, type, cost, estimated_days, description, regions)
SELECT * FROM (VALUES
('Standard Shipping', 'standard', 5.00, '5-7 business days', 'Economical shipping option for domestic orders', ARRAY['US', 'CA']),
('Express Shipping', 'express', 15.00, '2-3 business days', 'Faster shipping for urgent domestic deliveries', ARRAY['US']),
('Free Shipping', 'free', 0.00, '7-10 business days', 'Free shipping for orders over $50', ARRAY['US'])
) AS v(name, type, cost, estimated_days, description, regions)
WHERE NOT EXISTS (SELECT 1 FROM shipping_methods WHERE shipping_methods.name = v.name);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_products_in_stock ON products(in_stock);
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);
CREATE INDEX IF NOT EXISTS idx_inventory_product_id ON inventory(product_id);
CREATE INDEX IF NOT EXISTS idx_inventory_sku ON inventory(sku);
CREATE INDEX IF NOT EXISTS idx_discount_codes_code ON discount_codes(code);
CREATE INDEX IF NOT EXISTS idx_discount_codes_active ON discount_codes(is_active);
CREATE INDEX IF NOT EXISTS idx_support_tickets_customer_id ON support_tickets(customer_id);
CREATE INDEX IF NOT EXISTS idx_support_tickets_status ON support_tickets(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at (drop and recreate to handle duplicates)
DROP TRIGGER IF EXISTS update_products_updated_at ON products;
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
DROP TRIGGER IF EXISTS update_customers_updated_at ON customers;
DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
DROP TRIGGER IF EXISTS update_support_tickets_updated_at ON support_tickets;

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_support_tickets_updated_at BEFORE UPDATE ON support_tickets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE discount_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE shipping_methods ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to products and categories (drop and recreate to handle duplicates)
DROP POLICY IF EXISTS "Products are viewable by everyone" ON products;
DROP POLICY IF EXISTS "Categories are viewable by everyone" ON categories;
DROP POLICY IF EXISTS "Shipping methods are viewable by everyone" ON shipping_methods;
DROP POLICY IF EXISTS "Users can view their own data" ON users;
DROP POLICY IF EXISTS "Admins can manage all data" ON products;

CREATE POLICY "Products are viewable by everyone" ON products FOR SELECT USING (true);
CREATE POLICY "Categories are viewable by everyone" ON categories FOR SELECT USING (true);
CREATE POLICY "Shipping methods are viewable by everyone" ON shipping_methods FOR SELECT USING (is_active = true);

-- Create policies for admin access
CREATE POLICY "Users can view their own data" ON users FOR SELECT USING (auth.uid()::text = id::text);
CREATE POLICY "Admins can manage all data" ON products FOR ALL USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.id::text = auth.uid()::text 
        AND users.role IN ('owner', 'admin', 'developer')
    )
);

-- Create policies for customers (drop and recreate to handle duplicates)
DROP POLICY IF EXISTS "Customers can view their own orders" ON orders;
DROP POLICY IF EXISTS "Customers can create orders" ON orders;

CREATE POLICY "Customers can view their own orders" ON orders FOR SELECT USING (
    customer_id IN (
        SELECT id FROM customers WHERE email = auth.jwt() ->> 'email'
    )
);

CREATE POLICY "Customers can create orders" ON orders FOR INSERT WITH CHECK (
    customer_id IN (
        SELECT id FROM customers WHERE email = auth.jwt() ->> 'email'
    )
);

-- Create policies for customers table (drop and recreate to handle duplicates)
DROP POLICY IF EXISTS "Anyone can create customers" ON customers;
DROP POLICY IF EXISTS "Customers can view their own data" ON customers;
DROP POLICY IF EXISTS "Admins can manage all customers" ON customers;

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

-- Create policies for users table (fixed to avoid infinite recursion)
DROP POLICY IF EXISTS "Anyone can create users" ON users;
DROP POLICY IF EXISTS "Users can view their own data" ON users;
DROP POLICY IF EXISTS "Admins can manage all users" ON users;
DROP POLICY IF EXISTS "Allow all operations for users" ON users;

-- Simple policies that don't cause recursion
CREATE POLICY "Anyone can create users" ON users FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view their own data" ON users FOR SELECT USING (
    id::text = auth.uid()::text
);
-- Simplified admin policy to avoid recursion
CREATE POLICY "Allow all operations for users" ON users FOR ALL USING (true);
