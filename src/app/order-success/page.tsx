'use client';

import Link from 'next/link';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. We&apos;ve received your order and will send you a confirmation email shortly.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s Next?</h2>
            <div className="space-y-4">
              <div className="flex items-center text-left">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Confirmation Email</h3>
                  <p className="text-sm text-gray-600">Check your email for order details</p>
                </div>
              </div>
              <div className="flex items-center text-left">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <Package className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Processing</h3>
                  <p className="text-sm text-gray-600">We&apos;re preparing your order</p>
                </div>
              </div>
              <div className="flex items-center text-left">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Truck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Shipping</h3>
                  <p className="text-sm text-gray-600">Your order will be shipped within 1-2 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              href="/orders"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
