// API service layer for making HTTP requests
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  description: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  brand?: string;
  created_at?: string;
  updated_at?: string;
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

export interface Analytics {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
  conversionRate: number;
  cartAbandonment: number;
}

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  is_active: boolean;
  created_at: string;
  updated_at?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string;
  created_at?: string;
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

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${API_BASE_URL}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        return { error: data.error || 'Request failed' };
      }

      return { data };
    } catch (error) {
      console.error('API request failed:', error);
      return { error: 'Network error' };
    }
  }

  // Products API
  async getProducts(params?: { category?: string; search?: string }) {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.search) queryParams.append('search', params.search);
    
    const queryString = queryParams.toString();
    const endpoint = `/api/products${queryString ? `?${queryString}` : ''}`;
    
    return this.request<{ products: Product[] }>(endpoint);
  }

  async getProduct(id: string) {
    return this.request<{ product: Product }>(`/api/products/${id}`);
  }

  async createProduct(product: Omit<Product, 'id'>) {
    return this.request<{ product: Product }>('/api/products', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  }

  async updateProduct(id: string, updates: Partial<Product>) {
    return this.request<{ product: Product }>(`/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteProduct(id: string) {
    return this.request<{ message: string }>(`/api/products/${id}`, {
      method: 'DELETE',
    });
  }

  // Orders API
  async getOrders(params?: { status?: string; customerId?: string }) {
    const queryParams = new URLSearchParams();
    if (params?.status) queryParams.append('status', params.status);
    if (params?.customerId) queryParams.append('customerId', params.customerId);
    
    const queryString = queryParams.toString();
    const endpoint = `/api/orders${queryString ? `?${queryString}` : ''}`;
    
    return this.request<{ orders: Order[] }>(endpoint);
  }

  async getOrder(id: string) {
    return this.request<{ order: Order }>(`/api/orders/${id}`);
  }

  async createOrder(order: Omit<Order, 'id' | 'order_number' | 'created_at' | 'updated_at'>) {
    return this.request<{ order: Order }>('/api/orders', {
      method: 'POST',
      body: JSON.stringify(order),
    });
  }

  async updateOrder(id: string, updates: Partial<Order>) {
    return this.request<{ order: Order }>(`/api/orders/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  // Analytics API
  async getAnalytics() {
    return this.request<{ analytics: Analytics }>('/api/analytics');
  }

  // Auth API
  async login(email: string, password: string) {
    return this.request<{ user: User; token: string; message: string }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  // Categories API
  async getCategories() {
    return this.request<{ categories: Category[] }>('/api/categories');
  }

  async getCategory(id: string) {
    return this.request<{ category: Category }>(`/api/categories/${id}`);
  }

  // Customers API
  async getCustomers() {
    return this.request<{ customers: Customer[] }>('/api/customers');
  }

  async getCustomer(id: string) {
    return this.request<{ customer: Customer }>(`/api/customers/${id}`);
  }

  async createCustomer(customer: Omit<Customer, 'id' | 'created_at' | 'updated_at'>) {
    return this.request<{ customer: Customer }>('/api/customers', {
      method: 'POST',
      body: JSON.stringify(customer),
    });
  }
}

export const apiService = new ApiService();
