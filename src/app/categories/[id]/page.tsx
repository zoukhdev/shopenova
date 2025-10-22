'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ProductCard from '../../../components/ProductCard';
import { apiService, Product } from '../../../lib/api';
import { categories } from '../../../data/categories';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Find the category
  const category = categories.find(cat => cat.id === categoryId);
  
  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiService.getProducts();
      if (response.data) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter products by category
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === categoryId.replace('-', ' ').toLowerCase()
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Category Not Found</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">The category you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/categories"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Category Header */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-blue-100">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
              <li>/</li>
              <li className="text-white">{category.name}</li>
            </ol>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{category.name}</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              {category.description}
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3 inline-block">
              <span className="text-lg font-semibold">
                {categoryProducts.length} {categoryProducts.length === 1 ? 'Product' : 'Products'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {category.name} Products
                </h2>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 dark:text-gray-400">
                    Showing {categoryProducts.length} products
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📦</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">No Products Found</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                We don&apos;t have any products in this category yet. Check back soon!
              </p>
              <Link
                href="/products"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories
              .filter(cat => cat.id !== categoryId)
              .slice(0, 4)
              .map((relatedCategory) => (
                <Link
                  key={relatedCategory.id}
                  href={`/categories/${relatedCategory.id}`}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">📱</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {relatedCategory.name}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
