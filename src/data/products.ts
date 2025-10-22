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
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Sony WH-1000XM4 Wireless Headphones',
    price: 279.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'Electronics',
    description: 'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    ],
    rating: 4.8,
    reviews: 2847,
    inStock: true,
    brand: 'Sony',
    features: ['30-hour battery life', 'Quick charge', 'Touch controls', 'Voice assistant'],
    specifications: {
      'Battery Life': '30 hours',
      'Charging Time': '3 hours',
      'Weight': '254g',
      'Connectivity': 'Bluetooth 5.0'
    }
  },
  {
    id: '2',
    name: 'Apple Watch Series 9',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'Electronics',
    description: 'The most advanced Apple Watch yet. Features a powerful S9 chip, enhanced health monitoring, and always-on Retina display.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    ],
    rating: 4.7,
    reviews: 1923,
    inStock: true,
    brand: 'Apple',
    features: ['ECG monitoring', 'Fall detection', 'Water resistant', 'GPS'],
    specifications: {
      'Display': 'Always-on Retina',
      'Battery Life': '18 hours',
      'Water Resistance': '50 meters',
      'Size': '45mm'
    }
  },
  {
    id: '3',
    name: 'Premium Cotton T-Shirt',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'Clothing',
    description: 'Ultra-soft 100% organic cotton t-shirt. Pre-shrunk and colorfast. Available in multiple colors and sizes.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
    ],
    rating: 4.5,
    reviews: 567,
    inStock: true,
    brand: 'EcoWear',
    features: ['100% organic cotton', 'Pre-shrunk', 'Machine washable', 'Multiple colors'],
    specifications: {
      'Material': '100% Organic Cotton',
      'Care': 'Machine wash cold',
      'Fit': 'Regular fit',
      'Origin': 'Made in USA'
    }
  },
  {
    id: '4',
    name: 'Nike Air Max 270 Running Shoes',
    price: 129.99,
    originalPrice: 150.00,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Sports',
    description: 'Max Air unit delivers lightweight cushioning. Mesh upper provides breathability. Perfect for running and everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400',
    ],
    rating: 4.6,
    reviews: 1234,
    inStock: true,
    brand: 'Nike',
    features: ['Max Air cushioning', 'Breathable mesh', 'Lightweight', 'Durable rubber outsole'],
    specifications: {
      'Weight': '10.2 oz',
      'Drop': '8mm',
      'Surface': 'Road',
      'Arch Support': 'Neutral'
    }
  },
  {
    id: '5',
    name: 'Breville Barista Express Espresso Machine',
    price: 599.99,
    originalPrice: 699.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    category: 'Home & Kitchen',
    description: 'Create café-quality coffee at home. Built-in conical burr grinder, precise espresso extraction, and microfoam milk texturing.',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
      'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=400',
    ],
    rating: 4.9,
    reviews: 892,
    inStock: true,
    brand: 'Breville',
    features: ['Built-in grinder', 'Precise temperature control', 'Steam wand', '15-bar pump'],
    specifications: {
      'Power': '1600W',
      'Water Tank': '2L',
      'Pump Pressure': '15 bar',
      'Grinder': 'Conical burr'
    }
  },
  {
    id: '6',
    name: 'Herschel Supply Co. Laptop Backpack',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'Accessories',
    description: 'Classic backpack with modern functionality. Laptop compartment, multiple pockets, and signature striped fabric liner.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      'https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    ],
    rating: 4.4,
    reviews: 445,
    inStock: true,
    brand: 'Herschel',
    features: ['Laptop compartment', 'Multiple pockets', 'Padded straps', 'Signature striped liner'],
    specifications: {
      'Capacity': '25L',
      'Laptop Size': 'Up to 15"',
      'Material': 'Polyester',
      'Dimensions': '48 x 30 x 18 cm'
    }
  },
  {
    id: '7',
    name: 'Samsung 55" 4K Smart TV',
    price: 799.99,
    originalPrice: 999.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
    category: 'Electronics',
    description: 'Crystal UHD 4K Smart TV with HDR. Built-in streaming apps, voice control, and smart home integration.',
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
      'https://images.unsplash.com/photo-1461151304267-b35e2241aad8?w=400',
    ],
    rating: 4.6,
    reviews: 1567,
    inStock: true,
    brand: 'Samsung',
    features: ['4K UHD resolution', 'HDR support', 'Smart TV platform', 'Voice control'],
    specifications: {
      'Screen Size': '55"',
      'Resolution': '3840 x 2160',
      'HDR': 'HDR10+',
      'Smart Platform': 'Tizen OS'
    }
  },
  {
    id: '8',
    name: 'KitchenAid Stand Mixer',
    price: 329.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    category: 'Home & Kitchen',
    description: 'Classic stand mixer with 5-quart stainless steel bowl. Perfect for baking, mixing, and kneading dough.',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    ],
    rating: 4.8,
    reviews: 2234,
    inStock: false,
    brand: 'KitchenAid',
    features: ['5-quart bowl', '10 speeds', 'Planetary mixing action', 'Multiple attachments'],
    specifications: {
      'Bowl Capacity': '5 quarts',
      'Speeds': '10 speeds',
      'Power': '300W',
      'Color': 'Empire Red'
    }
  }
];
