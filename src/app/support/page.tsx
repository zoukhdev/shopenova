'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, Mail, Clock, HelpCircle, FileText, CreditCard, Truck, Package, User } from 'lucide-react';

export default function SupportPage() {
  const [selectedTopic, setSelectedTopic] = useState('');

  const supportTopics = [
    {
      id: 'order',
      title: 'Order Issues',
      description: 'Track orders, modify orders, or report problems',
      icon: <Package className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 'shipping',
      title: 'Shipping & Delivery',
      description: 'Shipping questions, delivery issues, or tracking',
      icon: <Truck className="w-6 h-6" />,
      color: 'green'
    },
    {
      id: 'returns',
      title: 'Returns & Refunds',
      description: 'Return items, exchange products, or refund requests',
      icon: <FileText className="w-6 h-6" />,
      color: 'purple'
    },
    {
      id: 'payment',
      title: 'Payment & Billing',
      description: 'Payment issues, billing questions, or refunds',
      icon: <CreditCard className="w-6 h-6" />,
      color: 'orange'
    },
    {
      id: 'account',
      title: 'Account & Profile',
      description: 'Account settings, password reset, or profile updates',
      icon: <User className="w-6 h-6" />,
      color: 'indigo'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Website issues, app problems, or technical questions',
      icon: <HelpCircle className="w-6 h-6" />,
      color: 'red'
    }
  ];

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w-8 h-8" />,
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'blue'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with a support representative',
      icon: <Phone className="w-8 h-8" />,
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      color: 'green'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message and we&apos;ll respond quickly',
      icon: <Mail className="w-8 h-8" />,
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'purple'
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Support</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We&apos;re here to help! Get assistance with your orders, account, or any questions you may have.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Help */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">How Can We Help You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedTopic === topic.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <div className={`w-12 h-12 bg-${topic.color}-100 dark:bg-${topic.color}-900/30 rounded-lg flex items-center justify-center mb-4`}>
                  <div className={`text-${topic.color}-600 dark:text-${topic.color}-400`}>
                    {topic.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{topic.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{topic.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 text-center transition-colors duration-300">
                <div className={`w-16 h-16 bg-${method.color}-100 dark:bg-${method.color}-900/30 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className={`text-${method.color}-600 dark:text-${method.color}-400`}>
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{method.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{method.description}</p>
                <div className="flex items-center justify-center mb-6">
                  <Clock className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{method.availability}</span>
                </div>
                <button className={`w-full bg-${method.color}-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-${method.color}-700 transition-colors`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Support Hours */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Support Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Live Chat</h3>
                <p className="text-gray-600 dark:text-gray-400">24/7 Available</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Phone Support</h3>
                <p className="text-gray-600 dark:text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                <p className="text-gray-600 dark:text-gray-400">Sat-Sun: 10AM-4PM EST</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Email Support</h3>
                <p className="text-gray-600 dark:text-gray-400">24/7 Available</p>
                <p className="text-gray-600 dark:text-gray-400">Response within 24 hours</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Emergency Support</h3>
                <p className="text-gray-600 dark:text-gray-400">24/7 for urgent issues</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Common Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Can&apos;t find your order?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Check your email for order confirmation or log into your account to view order history.
              </p>
              <Link href="/orders" className="text-blue-600 dark:text-blue-400 hover:underline">View Order History</Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Payment not processing?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Try a different payment method or check with your bank. Contact us if the issue persists.
              </p>
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Support</Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Need to return an item?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Start a return request from your account or contact us for assistance with the return process.
              </p>
              <Link href="/returns" className="text-blue-600 dark:text-blue-400 hover:underline">Start Return</Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Account access issues?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Reset your password or contact us to regain access to your account.
              </p>
              <Link href="/forgot-password" className="text-blue-600 dark:text-blue-400 hover:underline">Reset Password</Link>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Still Need Help?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Our support team is dedicated to helping you. Don&apos;t hesitate to reach out with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/faq"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Browse FAQ
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
