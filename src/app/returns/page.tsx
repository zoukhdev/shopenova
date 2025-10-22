'use client';

import { RotateCcw, Clock, CheckCircle, XCircle, Package, CreditCard, AlertCircle } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Returns & Refunds</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Easy returns and fast refunds. We want you to be completely satisfied with your purchase.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Return Policy Overview */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">30-Day Returns</h3>
                <p className="text-gray-600 dark:text-gray-400">Return most items within 30 days of delivery</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Full Refunds</h3>
                <p className="text-gray-600 dark:text-gray-400">Get your money back for eligible returns</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Free Returns</h3>
                <p className="text-gray-600 dark:text-gray-400">Free return shipping on most items</p>
              </div>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">How to Return an Item</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Start Return</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Log into your account and go to &quot;My Orders&quot; to start a return request.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Print Label</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Print the prepaid return shipping label we provide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Package Item</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Pack the item securely in its original packaging with all accessories.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Ship & Refund</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Drop off at any authorized shipping location and receive your refund.
              </p>
            </div>
          </div>
        </section>

        {/* Return Conditions */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Return Conditions</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Eligible Items</h3>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Items in original condition</li>
                      <li>• All original packaging and tags</li>
                      <li>• All accessories and documentation</li>
                      <li>• Within 30 days of delivery</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Non-Returnable Items</h3>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Personalized or customized items</li>
                      <li>• Perishable goods</li>
                      <li>• Digital products</li>
                      <li>• Items damaged by misuse</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Refund Information</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">Refund Timeline</h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• Processing: 1-2 business days</li>
                    <li>• Credit Card: 3-5 business days</li>
                    <li>• PayPal: 1-3 business days</li>
                    <li>• Bank Transfer: 5-10 business days</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Refund Methods</h3>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• Original payment method</li>
                    <li>• Store credit (faster processing)</li>
                    <li>• Gift card (instant)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exchange Policy */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 transition-colors duration-300">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Exchange Policy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Size Exchanges</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Need a different size? We offer free size exchanges within 30 days of delivery.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Free return shipping</li>
                  <li>• Free exchange shipping</li>
                  <li>• Same item, different size only</li>
                  <li>• Must be in original condition</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Color/Style Exchanges</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Want a different color or style? Exchange for the same item in a different variant.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Subject to availability</li>
                  <li>• Price difference may apply</li>
                  <li>• Free return shipping</li>
                  <li>• Standard exchange shipping rates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-16">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-8">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-4">Important Return Notes</h3>
                <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
                  <li>• Returns must be initiated within 30 days of delivery</li>
                  <li>• Items must be in original, unused condition</li>
                  <li>• Original packaging and tags must be included</li>
                  <li>• We reserve the right to refuse returns that don&apos;t meet our conditions</li>
                  <li>• Refunds will be processed to the original payment method</li>
                  <li>• Return shipping is free for most items (exceptions apply)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Need Help with Returns?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help with any return or exchange questions you may have.
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
