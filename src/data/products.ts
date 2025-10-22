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
    image: '/products images/product1.jpg',
    category: 'Electronics',
    description: 'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Experience crystal-clear sound with 30-hour battery life and quick charge capability.',
    images: [
      '/products images/product1.jpg',
      '/products images/product1.jpg',
      '/products images/product1.jpg',
    ],
    rating: 4.8,
    reviews: 2847,
    inStock: true,
    brand: 'Sony',
    features: ['30-hour battery life', 'Quick charge', 'Touch controls', 'Voice assistant', 'Industry-leading noise canceling'],
    specifications: {
      'Battery Life': '30 hours',
      'Charging Time': '3 hours',
      'Weight': '254g',
      'Connectivity': 'Bluetooth 5.0',
      'Noise Canceling': 'Industry-leading'
    }
  },
  {
    id: '2',
    name: 'Apple Watch Series 9',
    price: 399.99,
    image: '/products images/product2.jpg',
    category: 'Electronics',
    description: 'The most advanced Apple Watch yet. Features a powerful S9 chip, enhanced health monitoring, and always-on Retina display. Track your fitness goals with precision and stay connected with advanced health features.',
    images: [
      '/products images/product2.jpg',
      '/products images/product2.jpg',
      '/products images/product2.jpg',
    ],
    rating: 4.7,
    reviews: 1923,
    inStock: true,
    brand: 'Apple',
    features: ['ECG monitoring', 'Fall detection', 'Water resistant', 'GPS', 'Always-on display'],
    specifications: {
      'Display': 'Always-on Retina',
      'Battery Life': '18 hours',
      'Water Resistance': '50 meters',
      'Size': '45mm',
      'Chip': 'S9'
    }
  },
  {
    id: '3',
    name: 'Premium Cotton T-Shirt',
    price: 24.99,
    originalPrice: 34.99,
    image: '/products images/product3.jpg',
    category: 'Clothing',
    description: 'Ultra-soft 100% organic cotton t-shirt. Pre-shrunk and colorfast. Available in multiple colors and sizes. Made from ethically sourced cotton with a modern, relaxed fit.',
    images: [
      '/products images/product3.jpg',
      '/products images/product3.jpg',
      '/products images/product3.jpg',
    ],
    rating: 4.5,
    reviews: 567,
    inStock: true,
    brand: 'EcoWear',
    features: ['100% organic cotton', 'Pre-shrunk', 'Machine washable', 'Multiple colors', 'Ethically sourced'],
    specifications: {
      'Material': '100% Organic Cotton',
      'Care': 'Machine wash cold',
      'Fit': 'Regular fit',
      'Origin': 'Made in USA',
      'Sustainability': 'Ethically sourced'
    }
  },
  {
    id: '4',
    name: 'Nike Air Max 270 Running Shoes',
    price: 129.99,
    originalPrice: 150.00,
    image: '/products images/product4.jpg',
    category: 'Sports',
    description: 'Max Air unit delivers lightweight cushioning. Mesh upper provides breathability. Perfect for running and everyday wear. Engineered for maximum performance and comfort.',
    images: [
      '/products images/product4.jpg',
      '/products images/product4.jpg',
      '/products images/product4.jpg',
    ],
    rating: 4.6,
    reviews: 1234,
    inStock: true,
    brand: 'Nike',
    features: ['Max Air cushioning', 'Breathable mesh', 'Lightweight', 'Durable rubber outsole', 'Performance engineered'],
    specifications: {
      'Weight': '10.2 oz',
      'Drop': '8mm',
      'Surface': 'Road',
      'Arch Support': 'Neutral',
      'Performance': 'Engineered for running'
    }
  },
  {
    id: '5',
    name: 'Breville Barista Express Espresso Machine',
    price: 599.99,
    originalPrice: 699.99,
    image: '/products images/product5.jpg',
    category: 'Home & Kitchen',
    description: 'Create café-quality coffee at home. Built-in conical burr grinder, precise espresso extraction, and microfoam milk texturing.',
    images: [
      '/products images/product5.jpg',
      '/products images/product5.jpg',
      '/products images/product5.jpg',
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
    image: '/products images/product6.jpg',
    category: 'Accessories',
    description: 'Classic backpack with modern functionality. Laptop compartment, multiple pockets, and signature striped fabric liner.',
    images: [
      '/products images/product6.jpg',
      '/products images/product6.jpg',
      '/products images/product6.jpg',
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
    image: '/products images/product7.jpg',
    category: 'Electronics',
    description: 'Crystal UHD 4K Smart TV with HDR. Built-in streaming apps, voice control, and smart home integration.',
    images: [
      '/products images/product7.jpg',
      '/products images/product7.jpg',
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
    image: '/products images/product8.jpg',
    category: 'Home & Kitchen',
    description: 'Classic stand mixer with 5-quart stainless steel bowl. Perfect for baking, mixing, and kneading dough. Professional-grade performance for home bakers.',
    images: [
      '/products images/product8.jpg',
      '/products images/product8.jpg',
    ],
    rating: 4.8,
    reviews: 2234,
    inStock: false,
    brand: 'KitchenAid',
    features: ['5-quart bowl', '10 speeds', 'Planetary mixing action', 'Multiple attachments', 'Professional-grade'],
    specifications: {
      'Bowl Capacity': '5 quarts',
      'Speeds': '10 speeds',
      'Power': '300W',
      'Color': 'Empire Red',
      'Performance': 'Professional-grade'
    }
  },
  {
    id: '9',
    name: 'MacBook Pro 16-inch M3 Pro',
    price: 2499.99,
    originalPrice: 2799.99,
    image: '/products images/product9.jpg',
    category: 'Electronics',
    description: 'The most powerful MacBook Pro ever. M3 Pro chip delivers incredible performance for professionals.',
    images: [
      '/products images/product9.jpg',
      '/products images/product9.jpg',
      '/products images/product9.jpg',
    ],
    rating: 4.9,
    reviews: 3421,
    inStock: true,
    brand: 'Apple',
    features: ['M3 Pro chip', '16-inch Liquid Retina XDR display', 'Up to 22 hours battery', 'Advanced camera system'],
    specifications: {
      'Processor': 'Apple M3 Pro',
      'Display': '16.2-inch Liquid Retina XDR',
      'Storage': '512GB SSD',
      'Memory': '18GB unified memory'
    }
  },
  {
    id: '10',
    name: 'Nike Air Jordan 1 Retro High',
    price: 170.00,
    originalPrice: 200.00,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
    category: 'Sports',
    description: 'The iconic Air Jordan 1 in classic colorway. Premium leather construction with timeless style.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400',
    ],
    rating: 4.7,
    reviews: 2156,
    inStock: true,
    brand: 'Nike',
    features: ['Premium leather', 'Air-Sole unit', 'Classic design', 'High-top silhouette'],
    specifications: {
      'Upper': 'Premium leather',
      'Cushioning': 'Air-Sole unit',
      'Outsole': 'Rubber',
      'Style': 'High-top'
    }
  },
  {
    id: '11',
    name: 'Dyson V15 Detect Cordless Vacuum',
    price: 749.99,
    originalPrice: 849.99,
    image: '/products images/product5.jpg',
    category: 'Home & Kitchen',
    description: 'Advanced cordless vacuum with laser dust detection and powerful suction for deep cleaning.',
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
      'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2be?w=400',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
    ],
    rating: 4.8,
    reviews: 1876,
    inStock: true,
    brand: 'Dyson',
    features: ['Laser dust detection', '60-minute runtime', 'Powerful suction', 'HEPA filtration'],
    specifications: {
      'Runtime': '60 minutes',
      'Suction': '230 AW',
      'Filtration': 'HEPA',
      'Weight': '3.0 kg'
    }
  },
  {
    id: '12',
    name: 'Ray-Ban Aviator Classic Sunglasses',
    price: 154.00,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
    category: 'Accessories',
    description: 'The original aviator sunglasses with timeless style and superior UV protection.',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
    ],
    rating: 4.6,
    reviews: 1234,
    inStock: true,
    brand: 'Ray-Ban',
    features: ['100% UV protection', 'Crystal lenses', 'Metal frame', 'Classic aviator style'],
    specifications: {
      'Lens Material': 'Crystal',
      'Frame': 'Metal',
      'UV Protection': '100%',
      'Style': 'Aviator'
    }
  },
  {
    id: '13',
    name: 'Canon EOS R6 Mark II Camera',
    price: 2499.99,
    originalPrice: 2799.99,
    image: '/products images/product10.jpg',
    category: 'Electronics',
    description: 'Professional mirrorless camera with 24.2MP full-frame sensor and advanced autofocus.',
    images: [
      '/products images/product10.jpg',
      '/products images/product10.jpg',
      '/products images/product10.jpg',
    ],
    rating: 4.9,
    reviews: 987,
    inStock: true,
    brand: 'Canon',
    features: ['24.2MP full-frame sensor', '4K video recording', 'Advanced autofocus', 'Weather sealed'],
    specifications: {
      'Sensor': '24.2MP Full-frame',
      'Video': '4K 60p',
      'Autofocus': 'Dual Pixel CMOS AF II',
      'ISO': '100-102400'
    }
  },
  {
    id: '14',
    name: 'Levi\'s 501 Original Jeans',
    price: 89.99,
    originalPrice: 120.00,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
    category: 'Clothing',
    description: 'The original blue jean. Classic 501 fit with straight leg and button fly.',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
    ],
    rating: 4.5,
    reviews: 3456,
    inStock: true,
    brand: 'Levi\'s',
    features: ['100% cotton denim', 'Straight fit', 'Button fly', 'Classic 501 style'],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Straight',
      'Fly': 'Button',
      'Style': 'Classic 501'
    }
  },
  {
    id: '15',
    name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    price: 99.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    category: 'Home & Kitchen',
    description: '7-in-1 electric pressure cooker that replaces 7 kitchen appliances in one.',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    ],
    rating: 4.7,
    reviews: 4567,
    inStock: true,
    brand: 'Instant Pot',
    features: ['7-in-1 functionality', 'Pressure cooking', 'Slow cooking', 'Rice cooking'],
    specifications: {
      'Capacity': '6 quarts',
      'Functions': '7-in-1',
      'Power': '1000W',
      'Material': 'Stainless steel'
    }
  },
  {
    id: '16',
    name: 'Adidas Ultraboost 22 Running Shoes',
    price: 180.00,
    originalPrice: 220.00,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Sports',
    description: 'Premium running shoes with responsive Boost midsole and Primeknit upper.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400',
    ],
    rating: 4.6,
    reviews: 2789,
    inStock: true,
    brand: 'Adidas',
    features: ['Boost midsole', 'Primeknit upper', 'Continental rubber outsole', 'Responsive cushioning'],
    specifications: {
      'Midsole': 'Boost',
      'Upper': 'Primeknit',
      'Outsole': 'Continental rubber',
      'Weight': '10.2 oz'
    }
  },
  {
    id: '17',
    name: 'Bose QuietComfort 45 Headphones',
    price: 329.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'Electronics',
    description: 'Premium noise-canceling headphones with world-class sound and all-day comfort.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    ],
    rating: 4.8,
    reviews: 1923,
    inStock: true,
    brand: 'Bose',
    features: ['Noise canceling', '24-hour battery', 'Comfortable fit', 'Premium sound'],
    specifications: {
      'Battery Life': '24 hours',
      'Noise Canceling': 'Yes',
      'Connectivity': 'Bluetooth 5.1',
      'Weight': '240g'
    }
  },
  {
    id: '18',
    name: 'Patagonia Better Sweater Fleece Jacket',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    category: 'Clothing',
    description: 'Sustainable fleece jacket made from recycled polyester with classic styling.',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    ],
    rating: 4.7,
    reviews: 1456,
    inStock: true,
    brand: 'Patagonia',
    features: ['Recycled polyester', 'Classic fit', 'Full-zip', 'Sustainable materials'],
    specifications: {
      'Material': 'Recycled polyester',
      'Fit': 'Classic',
      'Zipper': 'Full-zip',
      'Sustainability': 'Fair Trade Certified'
    }
  },
  {
    id: '19',
    name: 'Vitamix A3500 Ascent Series Blender',
    price: 549.99,
    originalPrice: 649.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    category: 'Home & Kitchen',
    description: 'Professional-grade blender with variable speed control and built-in wireless connectivity.',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    ],
    rating: 4.9,
    reviews: 2341,
    inStock: true,
    brand: 'Vitamix',
    features: ['Variable speed control', 'Self-detect containers', 'Wireless connectivity', 'Professional performance'],
    specifications: {
      'Power': '2.2 peak HP',
      'Speed': 'Variable 1-10',
      'Container': '64 oz',
      'Connectivity': 'Wireless'
    }
  },
  {
    id: '20',
    name: 'Rolex Submariner Watch',
    price: 8999.99,
    originalPrice: 10999.99,
    image: '/products images/product11.jpg',
    category: 'Accessories',
    description: 'Iconic diving watch with automatic movement and water resistance to 300 meters.',
    images: [
      '/products images/product11.jpg',
      '/products images/product11.jpg',
      '/products images/product11.jpg',
    ],
    rating: 4.9,
    reviews: 567,
    inStock: true,
    brand: 'Rolex',
    features: ['Automatic movement', 'Water resistant 300m', 'Ceramic bezel', 'Oystersteel case'],
    specifications: {
      'Movement': 'Automatic',
      'Water Resistance': '300 meters',
      'Case': 'Oystersteel',
      'Bezel': 'Ceramic'
    }
  }
];
