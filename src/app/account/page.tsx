'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  User, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  CreditCard, 
  Settings, 
  LogOut, 
  Edit3,
  Package,
  Truck,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    console.log('🔍 Account Page: Checking authentication...');
    console.log('🔍 Account Page: isAuthenticated:', isAuthenticated);
    console.log('🔍 Account Page: user:', user);
    
    if (!isAuthenticated) {
      console.log('🔍 Account Page: Not authenticated, redirecting to login...');
      router.push('/login');
    } else {
      console.log('🔍 Account Page: User is authenticated, staying on account page');
    }
  }, [isAuthenticated, router, user]);

  // Mock user data (you can replace this with real API calls)
  const userData = {
    name: user ? `${user.first_name} ${user.last_name}` : 'Guest User',
    email: user?.email || 'guest@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Unknown',
    totalOrders: 12,
    totalSpent: '$1,234.56',
    loyaltyPoints: 1250,
  };

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: '$89.99',
      items: 3,
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'shipped',
      total: '$156.50',
      items: 2,
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'processing',
      total: '$45.00',
      items: 1,
    },
  ];

  const mockAddresses = [
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      address: '123 Main Street, Apt 4B',
      city: 'New York, NY 10001',
      isDefault: true,
    },
    {
      id: 2,
      type: 'Work',
      name: 'John Doe',
      address: '456 Business Ave, Suite 200',
      city: 'New York, NY 10002',
      isDefault: false,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'shipped':
        return <Truck className="w-4 h-4 text-blue-500" />;
      case 'processing':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <Package className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20';
      case 'shipped':
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20';
      case 'processing':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20';
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    router.push('/');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Show loading state while checking authentication
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Account</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              {/* User Info */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{userData.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{userData.email}</p>
                <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Member since {userData.joinDate}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors mt-6"
              >
                <LogOut className="w-4 h-4 mr-3" />
                Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <ShoppingBag className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Orders</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{userData.totalOrders}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <CreditCard className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Spent</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{userData.totalSpent}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                        <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Loyalty Points</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{userData.loyaltyPoints}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Orders</h3>
                      <Link
                        href="/account?tab=orders"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-sm font-medium"
                        onClick={() => setActiveTab('orders')}
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {mockOrders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            {getStatusIcon(order.status)}
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">Order {order.id}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{order.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900 dark:text-white">{order.total}</p>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Order History</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(order.status)}
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">Order {order.id}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{order.date} • {order.items} items</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900 dark:text-white">{order.total}</p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">My Wishlist</h3>
                </div>
                <div className="p-6">
                  <div className="text-center py-12">
                    <Heart className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Your wishlist is empty</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Start adding items you love to your wishlist</p>
                    <Link
                      href="/products"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Browse Products
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Saved Addresses</h3>
                    <button className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Add Address
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockAddresses.map((address) => (
                      <div key={address.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">{address.type}</h4>
                          {address.isDefault && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-gray-900 dark:text-white">{address.name}</p>
                        <p className="text-gray-600 dark:text-gray-400">{address.address}</p>
                        <p className="text-gray-600 dark:text-gray-400">{address.city}</p>
                        <div className="mt-3 flex space-x-2">
                          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-sm font-medium">
                            Edit
                          </button>
                          <button className="text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 text-sm font-medium">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Payment Tab */}
            {activeTab === 'payment' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h3>
                    <button className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Add Card
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center py-12">
                    <CreditCard className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No payment methods</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Add a payment method for faster checkout</p>
                    <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Add Payment Method
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Account Settings</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            defaultValue="John"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            defaultValue="Doe"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            defaultValue={userData.email}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            defaultValue={userData.phone}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <button className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>

                    {/* Password Change */}
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                      <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">Change Password</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <button className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
