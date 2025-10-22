import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip middleware for admin login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check for admin token in cookies or headers
    const token = request.cookies.get('adminToken')?.value || 
                  request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token) {
      // Redirect to admin login if no token
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // In production, you would validate the JWT token here
    // For now, we'll just check if it exists
    try {
      // Basic token validation (in production, use proper JWT verification)
      const tokenData = JSON.parse(Buffer.from(token, 'base64').toString());
      
      // Check if token is expired
      if (tokenData.exp && Date.now() > tokenData.exp) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }

      // Token is valid, continue to admin page
      return NextResponse.next();
    } catch (error) {
      // Invalid token, redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};
