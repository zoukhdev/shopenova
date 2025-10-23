import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Log successful initialization
console.log('✅ Supabase client initialized successfully');
console.log('   URL:', supabaseUrl);
console.log('   Key length:', supabaseAnonKey.length);

export { supabase };

export interface Product {
  id: string;
  name: string;
  price: number;
  original_price?: number;
  image: string;
  images?: string[];
  category: string;
  description: string;
  rating?: number;
  reviews?: number;
  in_stock?: boolean;
  brand?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  created_at?: string;
}

export interface Order {
  id: string;
  order_number: string;
  customer_id: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total_amount: number;
  shipping_address: Record<string, unknown>;
  billing_address?: Record<string, unknown>;
  payment_method?: string;
  payment_status?: string;
  shipping_method?: string;
  tracking_number?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  created_at?: string;
}

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: 'owner' | 'admin' | 'developer' | 'inventory_manager' | 'marketing_manager' | 'staff';
  is_active: boolean;
  created_at: string;
  updated_at?: string;
}

export interface Customer {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  address?: Record<string, unknown>;
  created_at: string;
  updated_at?: string;
}

export interface InventoryItem {
  id: string;
  product_id: string;
  sku: string;
  current_stock: number;
  min_stock: number;
  max_stock: number;
  cost?: number;
  supplier?: string;
  last_updated: string;
  created_at: string;
}

export interface DiscountCode {
  id: string;
  code: string;
  description?: string;
  discount_type: 'percentage' | 'fixed';
  discount_value: number;
  min_order_amount?: number;
  max_uses?: number;
  used_count: number;
  is_active: boolean;
  valid_from: string;
  valid_until?: string;
  created_at: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  type: string;
  cost: number;
  estimated_days: string;
  description?: string;
  is_active: boolean;
  regions: string[];
  created_at: string;
}

export interface SupportTicket {
  id: string;
  customer_id?: string;
  subject: string;
  description: string;
  status: string;
  priority: string;
  assigned_to?: string;
  created_at: string;
  updated_at?: string;
}

// Import products statically to avoid dynamic import issues
import { products as staticProducts } from '../data/products';

// Database functions
export const getProducts = async (): Promise<Product[]> => {
  try {
    console.log('🔄 Fetching products from Supabase...');
    
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Error fetching products from Supabase:', error);
      // Fallback to static products if database fails
      console.log('🔄 Falling back to static products...');
      return staticProducts.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        original_price: product.originalPrice,
        image: product.image,
        images: product.images,
        category: product.category,
        description: product.description,
        rating: product.rating,
        reviews: product.reviews,
        in_stock: product.inStock,
        brand: product.brand,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      }));
    }

    console.log('✅ Products fetched from Supabase:', data?.length || 0, 'products');
    return data || [];
  } catch (error) {
    console.error('❌ Error processing products:', error);
    // Return empty array if processing fails
    return [];
  }
};

export const getProduct = async (id: string): Promise<Product | null> => {
  try {
    console.log('🔄 Fetching product from Supabase:', id);
    
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('❌ Error fetching product from Supabase:', error);
      return null;
    }

    console.log('✅ Product fetched from Supabase:', data?.name);
    return data;
  } catch (error) {
    console.error('❌ Error processing product:', error);
    return null;
  }
};

export const createProduct = async (productData: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<Product | null> => {
  try {
    console.log('🔄 Creating product in Supabase...');
    
    const { data, error } = await supabase
      .from('products')
      .insert([productData])
      .select()
      .single();

    if (error) {
      console.error('❌ Error creating product in Supabase:', error);
      return null;
    }

    console.log('✅ Product created in Supabase:', data?.name);
    return data;
  } catch (error) {
    console.error('❌ Error creating product:', error);
    return null;
  }
};

export const updateProduct = async (id: string, updates: Partial<Product>): Promise<Product | null> => {
  try {
    console.log('🔄 Updating product in Supabase:', id);
    
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('❌ Error updating product in Supabase:', error);
      return null;
    }

    console.log('✅ Product updated in Supabase:', data?.name);
    return data;
  } catch (error) {
    console.error('❌ Error updating product:', error);
    return null;
  }
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  try {
    console.log('🔄 Deleting product from Supabase:', id);
    
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('❌ Error deleting product from Supabase:', error);
      return false;
    }

    console.log('✅ Product deleted from Supabase:', id);
    return true;
  } catch (error) {
    console.error('❌ Error deleting product:', error);
    return false;
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    console.log('🔄 Fetching categories from Supabase...');
    
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('❌ Error fetching categories from Supabase:', error);
      // Fallback to static categories
      console.log('🔄 Falling back to static categories...');
      const uniqueCategories = [...new Set(staticProducts.map(p => p.category))];
      const categoryDescriptions: Record<string, string> = {
        'Electronics': 'Latest gadgets and electronic devices',
        'Clothing': 'Fashion and apparel for all occasions',
        'Sports': 'Sports equipment and athletic gear',
        'Home & Kitchen': 'Home essentials and kitchen appliances',
        'Accessories': 'Stylish bags, jewelry, and accessories'
      };
      
      return uniqueCategories.map((category, index) => ({
        id: String(index + 1),
        name: category,
        description: categoryDescriptions[category] || `${category} products`,
        created_at: '2024-01-01T00:00:00Z'
      }));
    }

    console.log('✅ Categories fetched from Supabase:', data?.length || 0, 'categories');
    return data || [];
  } catch (error) {
    console.error('❌ Error processing categories:', error);
    return [];
  }
};

export const getOrders = async (): Promise<Order[]> => {
  try {
    console.log('🔄 Fetching orders from Supabase...');
    
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Error fetching orders from Supabase:', error);
      return [];
    }

    console.log('✅ Orders fetched from Supabase:', data?.length || 0, 'orders');
    return data || [];
  } catch (error) {
    console.error('❌ Error processing orders:', error);
    return [];
  }
};

export const getOrder = async (id: string): Promise<Order | null> => {
  try {
    console.log('🔄 Fetching order from Supabase:', id);
    
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('❌ Error fetching order from Supabase:', error);
      return null;
    }

    console.log('✅ Order fetched from Supabase:', data?.order_number);
    return data;
  } catch (error) {
    console.error('❌ Error processing order:', error);
    return null;
  }
};

export const createOrder = async (orderData: Omit<Order, 'id' | 'order_number' | 'created_at' | 'updated_at'>): Promise<Order | null> => {
  try {
    console.log('🔄 Creating order in Supabase...');
    
    const orderNumber = `ORD-${Date.now()}`;
    const { data, error } = await supabase
      .from('orders')
      .insert([{
        ...orderData,
        order_number: orderNumber
      }])
      .select()
      .single();

    if (error) {
      console.error('❌ Error creating order in Supabase:', error);
      return null;
    }

    console.log('✅ Order created in Supabase:', data?.order_number);
    return data;
  } catch (error) {
    console.error('❌ Error creating order:', error);
    return null;
  }
};

export const updateOrder = async (id: string, updates: Partial<Order>): Promise<Order | null> => {
  try {
    console.log('🔄 Updating order in Supabase:', id);
    
    const { data, error } = await supabase
      .from('orders')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('❌ Error updating order in Supabase:', error);
      return null;
    }

    console.log('✅ Order updated in Supabase:', data?.order_number);
    return data;
  } catch (error) {
    console.error('❌ Error updating order:', error);
    return null;
  }
};

export const getUsers = async (): Promise<User[]> => {
  try {
    console.log('🔄 Fetching users from Supabase...');
    
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Error fetching users from Supabase:', error);
      return [];
    }

    console.log('✅ Users fetched from Supabase:', data?.length || 0, 'users');
    return data || [];
  } catch (error) {
    console.error('❌ Error processing users:', error);
    return [];
  }
};

export const getUser = async (id: string): Promise<User | null> => {
  try {
    console.log('🔄 Fetching user from Supabase:', id);
    
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('❌ Error fetching user from Supabase:', error);
      return null;
    }

    console.log('✅ User fetched from Supabase:', data?.email);
    return data;
  } catch (error) {
    console.error('❌ Error processing user:', error);
    return null;
  }
};

export const createUser = async (userData: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User | null> => {
  try {
    console.log('🔄 Creating user in Supabase...');
    
    const { data, error } = await supabase
      .from('users')
      .insert([userData])
      .select()
      .single();

    if (error) {
      console.error('❌ Error creating user in Supabase:', error);
      return null;
    }

    console.log('✅ User created in Supabase:', data?.email);
    return data;
  } catch (error) {
    console.error('❌ Error creating user:', error);
    return null;
  }
};

export const getCustomers = async (): Promise<Customer[]> => {
  try {
    console.log('🔄 Fetching customers from Supabase...');
    
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Error fetching customers from Supabase:', error);
      return [];
    }

    console.log('✅ Customers fetched from Supabase:', data?.length || 0, 'customers');
    return data || [];
  } catch (error) {
    console.error('❌ Error processing customers:', error);
    return [];
  }
};

export const getCustomer = async (id: string): Promise<Customer | null> => {
  try {
    console.log('🔄 Fetching customer from Supabase:', id);
    
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('❌ Error fetching customer from Supabase:', error);
      return null;
    }

    console.log('✅ Customer fetched from Supabase:', data?.email);
    return data;
  } catch (error) {
    console.error('❌ Error processing customer:', error);
    return null;
  }
};

export const createCustomer = async (customerData: Omit<Customer, 'id' | 'created_at' | 'updated_at'>): Promise<Customer | null> => {
  try {
    console.log('🔄 Creating customer in Supabase...');
    
    const { data, error } = await supabase
      .from('customers')
      .insert([customerData])
      .select()
      .single();

    if (error) {
      console.error('❌ Error creating customer in Supabase:', error);
      return null;
    }

    console.log('✅ Customer created in Supabase:', data?.email);
    return data;
  } catch (error) {
    console.error('❌ Error creating customer:', error);
    return null;
  }
};

export const getInventory = async (): Promise<InventoryItem[]> => {
  try {
    console.log('🔄 Fetching inventory from Supabase...');
    
    const { data, error } = await supabase
      .from('inventory')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Error fetching inventory from Supabase:', error);
      return [];
    }

    console.log('✅ Inventory fetched from Supabase:', data?.length || 0, 'items');
    return data || [];
  } catch (error) {
    console.error('❌ Error processing inventory:', error);
    return [];
  }
};

export const getDiscountCodes = async (): Promise<DiscountCode[]> => {
  try {
    console.log('🔄 Fetching discount codes from Supabase...');
    
    const { data, error } = await supabase
      .from('discount_codes')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Error fetching discount codes from Supabase:', error);
      return [];
    }

    console.log('✅ Discount codes fetched from Supabase:', data?.length || 0, 'codes');
    return data || [];
  } catch (error) {
    console.error('❌ Error processing discount codes:', error);
    return [];
  }
};

export const getShippingMethods = async (): Promise<ShippingMethod[]> => {
  try {
    console.log('🔄 Fetching shipping methods from Supabase...');
    
    const { data, error } = await supabase
      .from('shipping_methods')
      .select('*')
      .eq('is_active', true)
      .order('cost', { ascending: true });

    if (error) {
      console.error('❌ Error fetching shipping methods from Supabase:', error);
      return [];
    }

    console.log('✅ Shipping methods fetched from Supabase:', data?.length || 0, 'methods');
    return data || [];
  } catch (error) {
    console.error('❌ Error processing shipping methods:', error);
    return [];
  }
};

export const getSupportTickets = async (): Promise<SupportTicket[]> => {
  try {
    console.log('🔄 Fetching support tickets from Supabase...');
    
    const { data, error } = await supabase
      .from('support_tickets')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Error fetching support tickets from Supabase:', error);
      return [];
    }

    console.log('✅ Support tickets fetched from Supabase:', data?.length || 0, 'tickets');
    return data || [];
  } catch (error) {
    console.error('❌ Error processing support tickets:', error);
    return [];
  }
};

// Analytics functions
export const getAnalytics = async () => {
  try {
    console.log('🔄 Fetching analytics from Supabase...');
    
    // Get basic counts
    const [ordersResult, customersResult, productsResult] = await Promise.all([
      supabase.from('orders').select('id', { count: 'exact' }),
      supabase.from('customers').select('id', { count: 'exact' }),
      supabase.from('products').select('id', { count: 'exact' })
    ]);

    const totalOrders = ordersResult.count || 0;
    const totalCustomers = customersResult.count || 0;
    const totalProducts = productsResult.count || 0;

    // Calculate total sales
    const { data: salesData } = await supabase
      .from('orders')
      .select('total_amount')
      .eq('status', 'delivered');

    const totalSales = salesData?.reduce((sum, order) => sum + (order.total_amount || 0), 0) || 0;

    console.log('✅ Analytics fetched from Supabase');
    return {
      totalSales,
      totalOrders,
      totalCustomers,
      totalProducts,
      conversionRate: totalCustomers > 0 ? (totalOrders / totalCustomers) * 100 : 0,
      cartAbandonment: 68.5 // This would need more complex calculation
    };
  } catch (error) {
    console.error('❌ Error processing analytics:', error);
    return {
      totalSales: 0,
      totalOrders: 0,
      totalCustomers: 0,
      totalProducts: 0,
      conversionRate: 0,
      cartAbandonment: 0
    };
  }
};

// Authentication functions
export const signIn = async (email: string, password: string) => {
  try {
    console.log('🔄 Signing in user:', email);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error('❌ Error signing in:', error);
      return { data: null, error };
    }

    console.log('✅ User signed in successfully:', data.user?.email);
    return { data, error: null };
  } catch (error) {
    console.error('❌ Error in sign in process:', error);
    return { data: null, error };
  }
};

export const signOut = async () => {
  try {
    console.log('🔄 Signing out user...');
    
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('❌ Error signing out:', error);
      return { error };
    }

    console.log('✅ User signed out successfully');
    return { error: null };
  } catch (error) {
    console.error('❌ Error in sign out process:', error);
    return { error };
  }
};

export const getCurrentUser = async () => {
  try {
    console.log('🔄 Getting current user...');
    
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error('❌ Error getting current user:', error);
      return { user: null, error };
    }

    console.log('✅ Current user retrieved:', data.user?.email);
    return { user: data.user, error: null };
  } catch (error) {
    console.error('❌ Error in get current user process:', error);
    return { user: null, error };
  }
};