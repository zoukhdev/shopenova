'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ShoppingCart, Truck, CreditCard, Shield, User, Package } from 'lucide-react';

export default function FAQPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const faqData = {
    'general': {
      title: 'General Questions',
      icon: <HelpCircle className="w-6 h-6" />,
      questions: [
        {
          q: 'What is ShopNova?',
          a: 'ShopNova is a leading online marketplace offering a wide range of products including electronics, clothing, home goods, and more. We provide quality products with fast shipping and excellent customer service.'
        },
        {
          q: 'How do I create an account?',
          a: 'Creating an account is easy! Click on &quot;Sign Up&quot; in the top right corner, enter your email address and create a password. You can also sign up using your Google or Facebook account for faster registration.'
        },
        {
          q: 'Is my personal information secure?',
          a: 'Yes, we take your privacy seriously. We use industry-standard encryption to protect your personal information and never share your data with third parties without your consent.'
        },
        {
          q: 'Do you have a mobile app?',
          a: 'Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store for a better shopping experience.'
        }
      ]
    },
    'orders': {
      title: 'Orders & Shopping',
      icon: <ShoppingCart className="w-6 h-6" />,
      questions: [
        {
          q: 'How do I place an order?',
          a: 'Simply browse our products, add items to your cart, and proceed to checkout. Enter your shipping information, select a payment method, and confirm your order. You\'ll receive a confirmation email once your order is placed.'
        },
        {
          q: 'Can I modify or cancel my order?',
          a: 'You can modify or cancel your order within 1 hour of placing it, as long as it hasn\'t been processed for shipping. After that, you\'ll need to contact customer service for assistance.'
        },
        {
          q: 'How do I track my order?',
          a: 'Once your order ships, you&apos;ll receive a tracking number via email. You can also track your order by logging into your account and going to &quot;My Orders&quot; section.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely.'
        },
        {
          q: 'Do you offer gift cards?',
          a: 'Yes! We offer digital gift cards that can be purchased in various denominations. Gift cards never expire and can be used for any purchase on our website.'
        }
      ]
    },
    'shipping': {
      title: 'Shipping & Delivery',
      icon: <Truck className="w-6 h-6" />,
      questions: [
        {
          q: 'What are your shipping options?',
          a: 'We offer Standard Shipping (5-7 business days), Express Shipping (2-3 business days), and Next Day Delivery (1 business day) for select areas. Free shipping is available on orders over $50.'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs fees may apply depending on your location.'
        },
        {
          q: 'Can I change my shipping address?',
          a: 'You can change your shipping address within 1 hour of placing your order. After that, contact customer service immediately as we may be able to update it before shipping.'
        },
        {
          q: 'What if my package is lost or stolen?',
          a: 'If your package is lost or stolen, contact us immediately. We\'ll work with the shipping carrier to locate your package or provide a replacement/refund as appropriate.'
        },
        {
          q: 'Do you offer same-day delivery?',
          a: 'Same-day delivery is available in select metropolitan areas for orders placed before 2 PM. Check our delivery options at checkout to see if it\'s available in your area.'
        }
      ]
    },
    'returns': {
      title: 'Returns & Refunds',
      icon: <Package className="w-6 h-6" />,
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day return policy for most items. Items must be in original condition with all packaging and tags. Some items like personalized products may not be returnable.'
        },
        {
          q: 'How do I return an item?',
          a: 'Log into your account, go to &quot;My Orders&quot;, and click &quot;Return Item&quot; next to the order you want to return. Print the prepaid return label and send the item back to us.'
        },
        {
          q: 'How long do refunds take?',
          a: 'Refunds are typically processed within 1-2 business days after we receive your return. Credit card refunds may take 3-5 business days to appear on your statement.'
        },
        {
          q: 'Do you offer exchanges?',
          a: 'Yes! We offer free size exchanges and color/style exchanges for the same item. Exchanges are subject to availability and must be within 30 days of delivery.'
        },
        {
          q: 'Who pays for return shipping?',
          a: 'We provide free return shipping for most items. However, return shipping costs may apply for certain items or if the return is due to customer preference rather than a defect.'
        }
      ]
    },
    'account': {
      title: 'Account & Profile',
      icon: <User className="w-6 h-6" />,
      questions: [
        {
          q: 'How do I update my account information?',
          a: 'Log into your account and go to &quot;Account Settings&quot; to update your personal information, shipping addresses, payment methods, and notification preferences.'
        },
        {
          q: 'I forgot my password. How do I reset it?',
          a: 'Click &quot;Forgot Password&quot; on the login page and enter your email address. We&apos;ll send you a link to reset your password. Check your spam folder if you don&apos;t see the email.'
        },
        {
          q: 'How do I delete my account?',
          a: 'To delete your account, contact customer service. Please note that account deletion is permanent and cannot be undone. Any pending orders will be completed before deletion.'
        },
        {
          q: 'Can I have multiple addresses saved?',
          a: 'Yes! You can save multiple shipping addresses in your account. You can also set a default address for faster checkout.'
        },
        {
          q: 'How do I manage my email notifications?',
          a: 'Go to "Account Settings" and click on "Email Preferences" to manage which emails you receive from us, including order updates, promotions, and newsletters.'
        }
      ]
    },
    'security': {
      title: 'Security & Privacy',
      icon: <Shield className="w-6 h-6" />,
      questions: [
        {
          q: 'How do you protect my payment information?',
          a: 'We use SSL encryption and work with trusted payment processors to ensure your payment information is secure. We never store your full credit card details on our servers.'
        },
        {
          q: 'What is your privacy policy?',
          a: 'Our privacy policy explains how we collect, use, and protect your personal information. You can read our full privacy policy in the footer of our website.'
        },
        {
          q: 'Do you sell my information to third parties?',
          a: 'No, we never sell your personal information to third parties. We only share information as necessary to process your orders and provide customer service.'
        },
        {
          q: 'How can I report a security concern?',
          a: 'If you notice any suspicious activity or have security concerns, please contact us immediately at security@eshop.com. We take all security reports seriously.'
        }
      ]
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about shopping, shipping, returns, and more.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQ..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
            <HelpCircle className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {Object.entries(faqData).map(([key, section]) => (
            <div key={key} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 transition-colors duration-300">
              <button
                onClick={() => toggleSection(key)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-xl"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{section.title}</h2>
                </div>
                {openSections[key] ? (
                  <ChevronUp className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                )}
              </button>

              {openSections[key] && (
                <div className="px-8 pb-6">
                  <div className="space-y-6">
                    {section.questions.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{faq.q}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <section className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our customer service team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/support"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Live Chat
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
