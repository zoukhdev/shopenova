'use client';

import { Users, Award, Globe, Heart, Shield, Truck, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('about.hero.title')}</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            {t('about.hero.subtitle')}
          </p>
          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>Secure Shopping</span>
            </div>
            <div className="flex items-center">
              <Truck className="w-5 h-5 mr-2" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              <span>5-Star Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('about.mission.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              {t('about.mission.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Customer First</h3>
              <p className="text-gray-600 dark:text-gray-400">Every decision we make is guided by what&apos;s best for our customers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Quality Assured</h3>
              <p className="text-gray-600 dark:text-gray-400">We carefully curate every product to ensure the highest quality standards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Global Reach</h3>
              <p className="text-gray-600 dark:text-gray-400">Serving customers worldwide with fast and reliable shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Customer First</h3>
              <p className="text-gray-600 dark:text-gray-400">Our customers are at the heart of everything we do.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">We only offer products that meet our high standards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">We continuously improve our platform and services.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-400">We conduct business with honesty and transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Founded in 2020, ShopNova started as a small online store with a simple mission: to make 
                quality products accessible to everyone. What began as a passion project has grown into 
                a trusted e-commerce platform serving thousands of customers worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We believe that shopping should be convenient, enjoyable, and trustworthy. That&apos;s why we&apos;ve 
                built our platform with cutting-edge technology, ensuring fast loading times, secure payments, 
                and an intuitive user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Today, we&apos;re proud to offer a curated selection of products across multiple categories, 
                all backed by our commitment to customer satisfaction and quality service.
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-96 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Company Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Products Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
