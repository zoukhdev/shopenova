'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../lib/cartSlice';
import { removeFromWishlist } from '../../lib/wishlistSlice';
import { RootState } from '../../lib/store';
import { useLanguage } from '../../contexts/LanguageContext';
import toast from 'react-hot-toast';

export default function WishlistPage() {
  const dispatch = useDispatch();
  const { t } = useLanguage();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeFromWishlist(id));
    toast.success(t('wishlist.removed_from_wishlist'));
  };

  const handleAddToCart = (item: any) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    toast.success(`${item.name} ${t('wishlist.added_to_cart')}`);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('wishlist.empty.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{t('wishlist.empty.subtitle')}</p>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t('wishlist.empty.button')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t('wishlist.title')}</h1>
          <span className="text-gray-600 dark:text-gray-400">{wishlistItems.length} {t('wishlist.items_count')}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/20 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 hover-lift group">
              <div className="relative">
                <Link href={`/products/${item.id}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.originalPrice && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                </Link>
                
                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={16} className="text-red-600" />
                </button>
              </div>
              
              <div className="p-4">
                <Link href={`/products/${item.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                </Link>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.brand} • {item.category}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                    ({item.rating}) ({item.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[40px]"
                  >
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-lift shadow-lg"
          >
            {t('wishlist.continue_shopping')}
          </Link>
        </div>
      </div>
    </div>
  );
}
