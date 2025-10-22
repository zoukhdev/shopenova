import { NextRequest, NextResponse } from 'next/server';
import { getCustomers, createCustomer } from '../../../lib/supabase';

// GET /api/customers - Get all customers
export async function GET(request: NextRequest) {
  try {
    const customers = await getCustomers();
    return NextResponse.json({ customers });
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch customers' },
      { status: 500 }
    );
  }
}

// POST /api/customers - Create a new customer
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.first_name || !body.last_name || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields: first_name, last_name, email' },
        { status: 400 }
      );
    }
    
    const customer = await createCustomer({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone: body.phone,
      address: body.address,
    });
    
    if (!customer) {
      return NextResponse.json(
        { error: 'Failed to create customer' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ customer }, { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json(
      { error: 'Failed to create customer' },
      { status: 500 }
    );
  }
}
