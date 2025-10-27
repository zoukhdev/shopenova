'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '../../components/ThemeProvider';
import { LanguageProvider } from '../../contexts/LanguageContext';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';
import { Toaster } from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata and viewport moved to page.tsx since this is a client component

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, user, loading } = useAuth();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log('Admin Layout - Auth Check:', { 
      isAuthenticated, 
      user: user?.email, 
      role: user?.role, 
      loading,
      showSidebar 
    });
    
    // Wait for auth context to finish loading
    if (loading) {
      console.log('Admin Layout - Auth context still loading...');
      return;
    }

    // Check if user is authenticated
    if (isAuthenticated && user) {
      console.log('Admin Layout - User is authenticated:', user.email, user.role);
      setShowSidebar(true);
      setIsCheckingAuth(false);
      return;
    }

    // Check localStorage directly as fallback
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      const isAuthenticatedStorage = localStorage.getItem('isAuthenticated');
      
      if (storedUser && isAuthenticatedStorage === 'true') {
        try {
          const userData = JSON.parse(storedUser);
          console.log('Admin Layout - Found user in localStorage:', userData.email);
          setShowSidebar(true);
          setIsCheckingAuth(false);
          return;
        } catch (error) {
          console.error('Error parsing stored user:', error);
        }
      }
    }
    
    // Only redirect to login if we're not already on the login page
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    if (currentPath !== '/admin/login') {
      console.log('Admin Layout - No authentication found, redirecting to login');
      setShowSidebar(false);
      setIsCheckingAuth(false);
      if (typeof window !== 'undefined') {
        router.push('/admin/login');
      }
    } else {
      console.log('Admin Layout - Already on login page, not redirecting');
      setShowSidebar(false);
      setIsCheckingAuth(false);
    }
  }, [isAuthenticated, user, router, loading]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {isCheckingAuth || loading ? (
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-400">Checking authentication...</p>
                </div>
              </div>
            ) : (
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors duration-200">
                {showSidebar && <AdminSidebar />}
                <div className={`flex-1 flex flex-col ${showSidebar ? 'lg:ml-0' : ''}`}>
                  {showSidebar && <AdminHeader />}
                  <main className={`flex-1 overflow-auto p-1 sm:p-4 lg:p-6 ${showSidebar ? 'pt-16 lg:pt-4' : 'pt-4'}`}>
                    <div className="max-w-full overflow-hidden">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            )}
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: 'var(--toast-bg)',
                  color: 'var(--toast-color)',
                },
                success: {
                  duration: 2000,
                  iconTheme: {
                    primary: '#10B981',
                    secondary: '#fff',
                  },
                },
                error: {
                  duration: 4000,
                  iconTheme: {
                    primary: '#EF4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
