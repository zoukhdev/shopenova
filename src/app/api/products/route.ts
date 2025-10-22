import { NextRequest, NextResponse } from 'next/server';
import { getProducts, createProduct } from '../../../lib/supabase';

// GET /api/products - Get all products
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    let products = await getProducts();
    
    // Filter by category if provided
    if (category) {
      products = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }
    
    // Filter by search term if provided
    if (search) {
      const searchLower = search.toLowerCase();
      products = products.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.brand?.toLowerCase().includes(searchLower)
      );
    }
    
    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST /api/products - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json(
        { error: 'Missing required fields: name, price, category' },
        { status: 400 }
      );
    }
    
    const product = await createProduct({
      name: body.name,
      price: body.price,
      original_price: body.original_price,
      image: body.image || '',
      category: body.category,
      description: body.description || '',
      images: body.images || [],
      rating: body.rating,
      reviews: body.reviews,
      in_stock: body.in_stock !== undefined ? body.in_stock : true,
      brand: body.brand,
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Failed to create product' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
