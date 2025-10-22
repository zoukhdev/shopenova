import { NextRequest, NextResponse } from 'next/server';
import { signIn } from '../../../../lib/supabase';

// POST /api/auth/login - User login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    // Check for demo credentials first (for development/testing)
    const demoUsers = [
      // Admin users (for admin dashboard)
      { email: 'admin@eshop.com', password: 'admin123', role: 'owner', firstName: 'Admin', lastName: 'User' },
      { email: 'manager@eshop.com', password: 'manager123', role: 'developer', firstName: 'Manager', lastName: 'User' },
      // Customer users (for customer login)
      { email: 'customer@eshop.com', password: 'customer123', role: 'customer', firstName: 'Demo', lastName: 'Customer' },
      { email: 'john@example.com', password: 'john123', role: 'customer', firstName: 'John', lastName: 'Doe' },
      { email: 'jane@example.com', password: 'jane123', role: 'customer', firstName: 'Jane', lastName: 'Smith' }
    ];
    
    const demoUser = demoUsers.find(user => user.email === email && user.password === password);
    
    if (demoUser) {
      // Create demo user data
      const userData = {
        id: 'demo-' + Date.now(),
        email: demoUser.email,
        first_name: demoUser.firstName,
        last_name: demoUser.lastName,
        role: demoUser.role,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      // Create a session token
      const token = Buffer.from(JSON.stringify({
        userId: userData.id,
        email: userData.email,
        role: userData.role,
        firstName: userData.first_name,
        lastName: userData.last_name,
        exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
      })).toString('base64');
      
      return NextResponse.json({
        user: userData,
        token,
        message: 'Login successful (demo mode)'
      });
    }
    
    // For non-demo users, return authentication failed
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
    
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}