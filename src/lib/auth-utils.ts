/**
 * Authentication utility functions
 */

/**
 * Generate a login URL with returnTo parameter
 * @param returnTo - The URL to redirect to after login
 * @returns Login URL with returnTo parameter
 */
export function getLoginUrl(returnTo?: string): string {
  if (!returnTo) {
    return '/login';
  }
  
  // Validate returnTo URL to prevent open redirects
  try {
    const url = new URL(returnTo, typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
    
    // Only allow same-origin URLs
    if (url.origin === (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000')) {
      return `/login?returnTo=${encodeURIComponent(returnTo)}`;
    }
  } catch (error) {
    console.warn('Invalid returnTo URL:', returnTo);
  }
  
  // Fallback to default login URL
  return '/login';
}

/**
 * Generate a signup URL with returnTo parameter
 * @param returnTo - The URL to redirect to after signup
 * @returns Signup URL with returnTo parameter
 */
export function getSignupUrl(returnTo?: string): string {
  if (!returnTo) {
    return '/signup';
  }
  
  // Validate returnTo URL to prevent open redirects
  try {
    const url = new URL(returnTo, typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
    
    // Only allow same-origin URLs
    if (url.origin === (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000')) {
      return `/signup?returnTo=${encodeURIComponent(returnTo)}`;
    }
  } catch (error) {
    console.warn('Invalid returnTo URL:', returnTo);
  }
  
  // Fallback to default signup URL
  return '/signup';
}

/**
 * Get the current page URL for returnTo parameter
 * @returns Current page URL
 */
export function getCurrentUrl(): string {
  if (typeof window === 'undefined') {
    return '/';
  }
  
  return window.location.pathname + window.location.search;
}

/**
 * Check if user needs to login (redirect to login with returnTo)
 * @param isAuthenticated - Whether user is authenticated
 * @param redirectTo - Optional specific redirect URL
 * @returns Login URL with returnTo if not authenticated, null if authenticated
 */
export function checkAuthRedirect(isAuthenticated: boolean, redirectTo?: string): string | null {
  if (isAuthenticated) {
    return null;
  }
  
  const returnTo = redirectTo || getCurrentUrl();
  return getLoginUrl(returnTo);
}
