'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../lib/store';
import { removeFromCart, updateQuantity } from '../../lib/cartSlice';
import { useLanguage } from '../../contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const dispatch = useDispatch();
  const { t } = useLanguage();
  const { items, total } = useSelector((state: RootState) => state.cart) as { items: CartItem[]; total: number };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('cart.empty.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{t('cart.empty.subtitle')}</p>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t('cart.empty.button')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">{t('cart.title')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 overflow-hidden transition-colors duration-300">
              {items.map((item) => (
                <div key={item.id} className="border-b border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-bold">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-4 font-semibold text-gray-900 dark:text-gray-100">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="ml-6 text-right">
                      <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 mt-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 p-6 transition-colors duration-300">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('cart.order_summary')}</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{t('cart.subtotal')}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{t('cart.shipping')}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{t('cart.free_shipping')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{t('cart.tax')}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">${(total * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-gray-100">
                  <span>{t('cart.total')}</span>
                  <span>${(total * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-6 block text-center"
              >
                {t('cart.proceed_checkout')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
