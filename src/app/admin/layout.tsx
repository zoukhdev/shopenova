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
  const { isAuthenticated, user } = useAuth();
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated and has admin role
    const isAdmin = isAuthenticated && user && (
      user.role === 'owner' || 
      user.role === 'admin' || 
      user.role === 'developer' ||
      user.role === 'inventory_manager' ||
      user.role === 'marketing_manager' ||
      user.role === 'staff'
    );

    if (isAdmin) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
      // Redirect to admin login if not authenticated
      if (typeof window !== 'undefined') {
        router.push('/admin/login');
      }
    }
  }, [isAuthenticated, user, router]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
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
