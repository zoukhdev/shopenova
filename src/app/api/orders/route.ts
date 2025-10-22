import { NextRequest, NextResponse } from 'next/server';
import { getOrders, createOrder } from '../../../lib/supabase';

// GET /api/orders - Get all orders
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const customerId = searchParams.get('customerId');
    
    let orders = await getOrders();
    
    // Filter by status if provided
    if (status) {
      orders = orders.filter(order => order.status === status);
    }
    
    // Filter by customer if provided
    if (customerId) {
      orders = orders.filter(order => order.customer_id === customerId);
    }
    
    return NextResponse.json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// POST /api/orders - Create a new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.customer_id || !body.items || !body.shipping_address) {
      return NextResponse.json(
        { error: 'Missing required fields: customer_id, items, shipping_address' },
        { status: 400 }
      );
    }
    
    // Calculate total
    const total = body.items.reduce((sum: number, item: { price: number; quantity: number }) => sum + (item.price * item.quantity), 0);
    
    const order = await createOrder({
      customer_id: body.customer_id,
      total_amount: total,
      status: 'pending',
      shipping_address: body.shipping_address,
      billing_address: body.billing_address,
      payment_method: body.payment_method,
      payment_status: 'pending',
      shipping_method: body.shipping_method,
      notes: body.notes,
    });
    
    if (!order) {
      return NextResponse.json(
        { error: 'Failed to create order' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ order }, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
