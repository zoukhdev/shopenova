'use client';

import Link from 'next/link';
import Image from 'next/image';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function CategoriesPage() {
  const { t } = useLanguage();
  
  // Count products per category
  const categoryCounts = categories.map(category => {
    const count = products.filter(product => 
      product.category.toLowerCase() === category.name.toLowerCase()
    ).length;
    return { ...category, count };
  });

  const featuredCategories = categoryCounts.filter(cat => cat.featured);
  const regularCategories = categoryCounts.filter(cat => !cat.featured);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('categories.title')}</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            {t('categories.subtitle')}
          </p>
          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>Trending Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('categories.featured')}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t('categories.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center mb-2">
                      <span className="text-3xl mr-3">{category.icon}</span>
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    </div>
                    <p className="text-blue-100 text-sm mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">
                        {category.count} {category.count === 1 ? 'product' : 'products'}
                      </span>
                      <div className="flex items-center text-white text-sm group-hover:translate-x-1 transition-transform">
                        <span>Shop Now</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('categories.all_categories')}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t('categories.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryCounts.map((category, index) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/20 p-6 hover:shadow-lg dark:hover:shadow-gray-900/30 transition-all duration-300 hover-lift group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.count} {t('categories.products_count')}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Browse all our products or contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
