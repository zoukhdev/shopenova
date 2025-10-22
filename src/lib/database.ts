// Database configuration and utilities
import { createClient } from '@supabase/supabase-js';

// For development, we'll use a local JSON file as database
// In production, you can replace this with Supabase, PostgreSQL, or any other database

export interface Database {
  products: Product[];
  categories: Category[];
  orders: Order[];
  customers: Customer[];
  users: User[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  images: string[];
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  brand?: string;
  features?: string[];
  specifications?: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  icon: string;
  productCount: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  shippingAddress: ShippingAddress;
  orderDate: string;
  estimatedDelivery: string;
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
  joinDate: string;
  totalOrders: number;
  totalSpent: number;
  loyaltyPoints: number;
  addresses: CustomerAddress[];
  createdAt: string;
  updatedAt: string;
}

export interface CustomerAddress {
  id: string;
  type: 'home' | 'work' | 'other';
  name: string;
  address: string;
  city: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  email: string;
  password: string; // In production, this should be hashed
  role: 'admin' | 'manager' | 'staff' | 'customer';
  firstName: string;
  lastName: string;
  avatar?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Mock database for development
const mockDatabase: Database = {
  products: [],
  categories: [],
  orders: [],
  customers: [],
  users: [
    {
      id: '1',
      email: 'admin@eshop.com',
      password: 'admin123', // In production, use proper hashing
      role: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      email: 'manager@eshop.com',
      password: 'manager123',
      role: 'manager',
      firstName: 'Manager',
      lastName: 'User',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  ]
};

// Database operations
export class DatabaseService {
  // Products
  static async getProducts(): Promise<Product[]> {
    return mockDatabase.products;
  }

  static async getProduct(id: string): Promise<Product | null> {
    return mockDatabase.products.find(p => p.id === id) || null;
  }

  static async createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockDatabase.products.push(newProduct);
    return newProduct;
  }

  static async updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
    const index = mockDatabase.products.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    mockDatabase.products[index] = {
      ...mockDatabase.products[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return mockDatabase.products[index];
  }

  static async deleteProduct(id: string): Promise<boolean> {
    const index = mockDatabase.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    mockDatabase.products.splice(index, 1);
    return true;
  }

  // Categories
  static async getCategories(): Promise<Category[]> {
    return mockDatabase.categories;
  }

  static async getCategory(id: string): Promise<Category | null> {
    return mockDatabase.categories.find(c => c.id === id) || null;
  }

  // Orders
  static async getOrders(): Promise<Order[]> {
    return mockDatabase.orders;
  }

  static async getOrder(id: string): Promise<Order | null> {
    return mockDatabase.orders.find(o => o.id === id) || null;
  }

  static async createOrder(order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order> {
    const newOrder: Order = {
      ...order,
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockDatabase.orders.push(newOrder);
    return newOrder;
  }

  static async updateOrder(id: string, updates: Partial<Order>): Promise<Order | null> {
    const index = mockDatabase.orders.findIndex(o => o.id === id);
    if (index === -1) return null;
    
    mockDatabase.orders[index] = {
      ...mockDatabase.orders[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return mockDatabase.orders[index];
  }

  // Customers
  static async getCustomers(): Promise<Customer[]> {
    return mockDatabase.customers;
  }

  static async getCustomer(id: string): Promise<Customer | null> {
    return mockDatabase.customers.find(c => c.id === id) || null;
  }

  static async createCustomer(customer: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>): Promise<Customer> {
    const newCustomer: Customer = {
      ...customer,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockDatabase.customers.push(newCustomer);
    return newCustomer;
  }

  // Users (for admin authentication)
  static async getUserByEmail(email: string): Promise<User | null> {
    return mockDatabase.users.find(u => u.email === email) || null;
  }

  static async getUser(id: string): Promise<User | null> {
    return mockDatabase.users.find(u => u.id === id) || null;
  }

  // Analytics
  static async getAnalytics() {
    const orders = mockDatabase.orders;
    const products = mockDatabase.products;
    const customers = mockDatabase.customers;

    const totalSales = orders.reduce((sum, order) => sum + order.total, 0);
    const totalOrders = orders.length;
    const totalCustomers = customers.length;
    const totalProducts = products.length;

    const conversionRate = totalCustomers > 0 ? (totalOrders / totalCustomers) * 100 : 0;
    const cartAbandonment = 68.2; // Mock data

    return {
      totalSales,
      totalOrders,
      totalCustomers,
      totalProducts,
      conversionRate,
      cartAbandonment,
    };
  }

  // Initialize with sample data
  static async initializeSampleData() {
    if (mockDatabase.products.length === 0) {
      // Import sample data from your existing data files
      const { products } = await import('../data/products');
      const { categories } = await import('../data/categories');

      mockDatabase.products = products.map(product => ({
        ...product,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));

      mockDatabase.categories = categories.map(category => ({
        ...category,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));

      // Add some sample orders
      mockDatabase.orders = [
        {
          id: 'ORD-001',
          customerId: '1',
          items: [
            {
              productId: '1',
              name: 'Sony WH-1000XM4 Wireless Headphones',
              quantity: 1,
              price: 279.99,
              image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
            }
          ],
          total: 279.99,
          status: 'delivered',
          paymentStatus: 'paid',
          shippingAddress: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            phone: '+1-555-123-4567',
            address: '123 Main St',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
          },
          orderDate: '2025-01-15',
          estimatedDelivery: '2025-01-18',
          trackingNumber: 'TRK123456789',
          createdAt: new Date('2025-01-15').toISOString(),
          updatedAt: new Date('2025-01-15').toISOString(),
        }
      ];

      // Add sample customer
      mockDatabase.customers = [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          phone: '+1-555-123-4567',
          joinDate: '2024-01-01',
          totalOrders: 1,
          totalSpent: 279.99,
          loyaltyPoints: 280,
          addresses: [
            {
              id: '1',
              type: 'home',
              name: 'John Doe',
              address: '123 Main St',
              city: 'New York, NY 10001',
              isDefault: true,
            }
          ],
          createdAt: new Date('2024-01-01').toISOString(),
          updatedAt: new Date('2024-01-01').toISOString(),
        }
      ];
    }
  }
}

// Initialize sample data when the module is imported
DatabaseService.initializeSampleData();
