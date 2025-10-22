'use client';

import { MessageCircle, Phone, Mail, Clock, Shield, Award, Users, Headphones } from 'lucide-react';

export default function CustomerServicePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Service</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your satisfaction is our priority. We&apos;re committed to providing exceptional customer service every step of the way.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Our Service Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Round-the-clock assistance whenever you need it</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-400">Knowledgeable professionals ready to help</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Secure & Safe</h3>
              <p className="text-gray-600 dark:text-gray-400">Your data and transactions are always protected</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Personal Touch</h3>
              <p className="text-gray-600 dark:text-gray-400">Personalized service tailored to your needs</p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 text-center transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Live Chat</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Get instant help from our support team</p>
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">Available Now</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 text-center transition-colors duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Phone Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Speak directly with a support representative</p>
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 9AM-6PM EST</span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Call Now
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 text-center transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Send us a detailed message and we&apos;ll respond quickly</p>
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Response within 24 hours</span>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">How We Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Order Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Track your orders</li>
                <li>• Modify existing orders</li>
                <li>• Cancel orders</li>
                <li>• Order history assistance</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Account Security</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Password reset assistance</li>
                <li>• Account recovery</li>
                <li>• Security concerns</li>
                <li>• Privacy questions</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Product Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Product information</li>
                <li>• Compatibility questions</li>
                <li>• Usage guidance</li>
                <li>• Technical support</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Billing Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Payment issues</li>
                <li>• Refund requests</li>
                <li>• Invoice questions</li>
                <li>• Payment method updates</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Shipping Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Delivery questions</li>
                <li>• Shipping options</li>
                <li>• Address changes</li>
                <li>• International shipping</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Returns & Exchanges</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Return process guidance</li>
                <li>• Exchange requests</li>
                <li>• Refund status</li>
                <li>• Return policy questions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Customer Satisfaction */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 transition-colors duration-300">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Customer Satisfaction</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-400">Customer Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">&lt;2min</div>
                <div className="text-gray-600 dark:text-gray-400">Average Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Support Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/faq"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              FAQ
            </a>
            <a
              href="/shipping"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Shipping Info
            </a>
            <a
              href="/returns"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Returns
            </a>
            <a
              href="/contact"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
