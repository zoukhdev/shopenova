export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  icon: string;
  productCount: number;
  featured: boolean;
}

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600',
    description: 'Latest gadgets, smartphones, laptops, and cutting-edge technology',
    icon: '📱',
    productCount: 3,
    featured: true,
  },
  {
    id: 'clothing',
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
    description: 'Trendy fashion for men, women, and kids from top brands',
    icon: '👕',
    productCount: 1,
    featured: true,
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
    description: 'Premium sports equipment and outdoor gear for active lifestyles',
    icon: '🏃‍♂️',
    productCount: 1,
    featured: true,
  },
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    description: 'Essential appliances and tools for your home and kitchen',
    icon: '🏠',
    productCount: 2,
    featured: true,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
    description: 'Stylish bags, jewelry, and accessories to complete your look',
    icon: '🎒',
    productCount: 1,
    featured: false,
  },
];
