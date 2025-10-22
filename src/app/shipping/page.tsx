'use client';

import { Truck, Clock, Shield, MapPin, Package, CheckCircle } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Shipping Information</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Fast, reliable shipping to get your orders to you quickly and safely.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Shipping Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Shipping Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 text-center transition-colors duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Standard Shipping</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">5-7 business days</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">$5.99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Free on orders over $50</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 text-center transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Express Shipping</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">2-3 business days</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">$12.99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Free on orders over $100</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 text-center transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Next Day Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">1 business day</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">$24.99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Available in select areas</p>
            </div>
          </div>
        </section>

        {/* Shipping Details */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Shipping Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Processing Time</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Orders are processed within 1-2 business days. You&apos;ll receive a confirmation email once your order ships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Tracking Information</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Track your package in real-time with our tracking system. You&apos;ll receive updates via email and SMS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Delivery Confirmation</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We require a signature for all deliveries to ensure your package reaches you safely.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">International Shipping</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We ship to over 50 countries worldwide. International orders may take 7-14 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Shipping Restrictions</h2>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">Important Notes</h3>
                <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
                  <li>• Some items may have shipping restrictions</li>
                  <li>• Hazardous materials cannot be shipped</li>
                  <li>• Large items may require special handling</li>
                  <li>• International orders may be subject to customs fees</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Delivery Areas</h3>
                <p className="text-blue-700 dark:text-blue-300 mb-3">
                  We deliver to all 50 US states and territories. International shipping available to:
                </p>
                <ul className="grid grid-cols-2 gap-1 text-blue-700 dark:text-blue-300 text-sm">
                  <li>• Canada</li>
                  <li>• United Kingdom</li>
                  <li>• Australia</li>
                  <li>• Germany</li>
                  <li>• France</li>
                  <li>• Japan</li>
                  <li>• And 40+ more countries</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Shipping Timeline</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Order Placed</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">You place your order</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Processing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">1-2 business days</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Shipped</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tracking info sent</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Delivered</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Package arrives safely</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Need Help with Shipping?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Have questions about shipping? Our customer service team is here to help you with any shipping-related inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/faq"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              View FAQ
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
