// Mock Supabase client for demo purposes
const supabase = {
  from: (table: string) => ({
    select: (columns?: string) => ({
      order: (column: string, options?: { ascending?: boolean }) => ({
        eq: (column: string, value: any) => ({ 
          single: () => ({ data: null, error: null }),
          limit: (count: number) => ({ single: () => ({ data: null, error: null }) })
        }),
        limit: (count: number) => ({ single: () => ({ data: null, error: null }) })
      }),
      eq: (column: string, value: any) => ({ 
        single: () => ({ data: null, error: null }),
        limit: (count: number) => ({ single: () => ({ data: null, error: null }) })
      }),
      single: () => ({ data: null, error: null }),
      limit: (count: number) => ({ single: () => ({ data: null, error: null }) })
    }),
    insert: (data: any) => ({ 
      select: (columns?: string) => ({ single: () => ({ data: null, error: null }) })
    }),
    update: (data: any) => ({ 
      eq: (column: string, value: any) => ({ 
        select: (columns?: string) => ({ single: () => ({ data: null, error: null }) })
      })
    }),
    delete: () => ({ 
      eq: (column: string, value: any) => ({ error: null })
    })
  }),
  auth: {
    signInWithPassword: (credentials: { email: string; password: string }) => ({ data: null, error: null }),
    signUp: (credentials: { email: string; password: string; options?: { data?: { first_name?: string; last_name?: string; phone?: string } } }) => ({ data: null, error: null }),
    signOut: () => ({ error: null }),
    getUser: () => ({ user: null, error: null }),
    getSession: () => ({ data: { session: null }, error: null }),
    setSession: (session: { access_token: string; refresh_token: string }) => ({ data: null, error: null }),
    updateUser: (attributes: { password?: string }) => ({ data: null, error: null }),
    resetPasswordForEmail: (email: string, options?: { redirectTo?: string }) => ({ data: null, error: null })
  }
};

// Log successful initialization
console.log('✅ Supabase client initialized successfully (Mock Mode)');

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
  // Return products from the static import
  try {
    console.log('🔄 Fetching products...');
    console.log('✅ Products imported successfully:', staticProducts.length, 'products');
    
    // Convert the products to match the Supabase Product interface
    const convertedProducts = staticProducts.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      original_price: product.originalPrice,
      originalPrice: product.originalPrice, // Also include for ProductCard compatibility
      image: product.image,
      images: product.images,
      category: product.category,
      description: product.description,
      rating: product.rating,
      reviews: product.reviews,
      in_stock: product.inStock,
      inStock: product.inStock, // Also include for ProductCard compatibility
      brand: product.brand,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }));
    
    console.log('✅ Products converted successfully:', convertedProducts.length, 'products');
    return convertedProducts;
  } catch (error) {
    console.error('❌ Error processing products:', error);
    // Return empty array if processing fails
    return [];
  }
};

export const getProduct = async (id: string): Promise<Product | null> => {
  // Return mock product for demo
  const products = await getProducts();
  return products.find(p => p.id === id) || null;
};

export const createProduct = async (productData: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<Product | null> => {
  // Mock implementation - in a real app, this would save to database
  const newProduct: Product = {
    ...productData,
    id: Date.now().toString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  console.log('Mock: Product created', newProduct);
  return newProduct;
};

export const updateProduct = async (id: string, updates: Partial<Product>): Promise<Product | null> => {
  // Mock implementation - in a real app, this would update the database
  const products = await getProducts();
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return null;
  }
  
  const updatedProduct = {
    ...products[productIndex],
    ...updates,
    updated_at: new Date().toISOString()
  };
  
  console.log('Mock: Product updated', updatedProduct);
  return updatedProduct;
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  // Mock implementation - in a real app, this would delete from database
  const products = await getProducts();
  const productExists = products.some(p => p.id === id);
  
  if (!productExists) {
    return false;
  }
  
  console.log('Mock: Product deleted', id);
  return true;
};

export const getCategories = async (): Promise<Category[]> => {
  // Use static products to get all categories
  console.log('🔄 Fetching categories...');
  
  // Extract unique categories from products
  const uniqueCategories = [...new Set(staticProducts.map(p => p.category))];
  console.log('✅ Categories extracted:', uniqueCategories);
  
  // Create category objects with descriptions
  const categoryDescriptions: Record<string, string> = {
    'Electronics': 'Latest gadgets and electronic devices',
    'Clothing': 'Fashion and apparel for all occasions',
    'Sports': 'Sports equipment and athletic gear',
    'Home & Kitchen': 'Home essentials and kitchen appliances',
    'Accessories': 'Stylish bags, jewelry, and accessories'
  };
  
  const categories = uniqueCategories.map((category, index) => ({
    id: String(index + 1),
    name: category,
    description: categoryDescriptions[category] || `${category} products`,
    created_at: '2024-01-01T00:00:00Z'
  }));
  
  console.log('✅ Categories created:', categories.length, 'categories');
  return categories;
};

export const getOrders = async (): Promise<Order[]> => {
  // Mock implementation - return empty array for demo
  console.log('Mock: Fetching orders');
  return [];
};

export const getOrder = async (id: string): Promise<Order | null> => {
  // Mock implementation - return null for demo
  console.log('Mock: Fetching order', id);
  return null;
};

export const createOrder = async (orderData: Omit<Order, 'id' | 'order_number' | 'created_at' | 'updated_at'>): Promise<Order | null> => {
  // Mock implementation - in a real app, this would save to database
  const newOrder: Order = {
    ...orderData,
    id: Date.now().toString(),
    order_number: `ORD-${Date.now()}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  console.log('Mock: Order created', newOrder);
  return newOrder;
};

export const updateOrder = async (id: string, updates: Partial<Order>): Promise<Order | null> => {
  // Mock implementation - in a real app, this would update the database
  console.log('Mock: Order updated', id, updates);
  return null;
};

export const getUsers = async (): Promise<User[]> => {
  // Mock implementation - return empty array for demo
  console.log('Mock: Fetching users');
  return [];
};

export const getUser = async (id: string): Promise<User | null> => {
  // Mock implementation - return null for demo
  console.log('Mock: Fetching user', id);
  return null;
};

export const createUser = async (userData: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User | null> => {
  // Mock implementation - in a real app, this would save to database
  const newUser: User = {
    ...userData,
    id: Date.now().toString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  console.log('Mock: User created', newUser);
  return newUser;
};

export const getCustomers = async (): Promise<Customer[]> => {
  // Mock implementation - return empty array for demo
  console.log('Mock: Fetching customers');
  return [];
};

export const getCustomer = async (id: string): Promise<Customer | null> => {
  // Mock implementation - return null for demo
  console.log('Mock: Fetching customer', id);
  return null;
};

export const createCustomer = async (customerData: Omit<Customer, 'id' | 'created_at' | 'updated_at'>): Promise<Customer | null> => {
  // Mock implementation - in a real app, this would save to database
  const newCustomer: Customer = {
    ...customerData,
    id: Date.now().toString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  console.log('Mock: Customer created', newCustomer);
  return newCustomer;
};

export const getInventory = async (): Promise<InventoryItem[]> => {
  // Mock implementation - return empty array for demo
  console.log('Mock: Fetching inventory');
  return [];
};

export const getDiscountCodes = async (): Promise<DiscountCode[]> => {
  // Mock implementation - return empty array for demo
  console.log('Mock: Fetching discount codes');
  return [];
};

export const getShippingMethods = async (): Promise<ShippingMethod[]> => {
  // Mock implementation - return empty array for demo
  console.log('Mock: Fetching shipping methods');
  return [];
};

export const getSupportTickets = async (): Promise<SupportTicket[]> => {
  // Mock implementation - return empty array for demo
  console.log('Mock: Fetching support tickets');
  return [];
};

// Analytics functions
export const getAnalytics = async () => {
  // Mock implementation - return mock analytics data
  console.log('Mock: Fetching analytics');
  return {
    totalSales: 125000,
    totalOrders: 450,
    totalCustomers: 320,
    totalProducts: 20,
    conversionRate: 3.2,
    cartAbandonment: 68.5
  };
};

// Authentication functions
export const signIn = async (email: string, password: string) => {
  // Mock implementation - in a real app, this would authenticate with Supabase
  console.log('Mock: Signing in', email);
  return { data: null, error: null };
};

export const signOut = async () => {
  // Mock implementation - in a real app, this would sign out from Supabase
  console.log('Mock: Signing out');
  return { error: null };
};

export const getCurrentUser = async () => {
  // Mock implementation - in a real app, this would get current user from Supabase
  console.log('Mock: Getting current user');
  return { user: null, error: null };
};
