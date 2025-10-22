'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../lib/cartSlice';
import { apiService, Product } from '../../../lib/api';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ShoppingCart, Star, Heart, Truck, Shield, RotateCcw, Minus, Plus, Check, X, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProductDetailPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProduct();
  }, [params.id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await apiService.getProduct(params.id as string);
      if (response.data) {
        setProduct(response.data.product);
        // Fetch related products
        fetchRelatedProducts(response.data.product.category);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async (category: string) => {
    try {
      const response = await apiService.getProducts({ category });
      if (response.data) {
        setRelatedProducts(response.data.products.slice(0, 4));
      }
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">{t('product.loading')}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <X className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('product.not_found.title')}</h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">{t('product.not_found.subtitle')}</p>
                <Link
                  href="/products"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t('product.not_found.button')}
                </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    }));
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Ensure images array exists and has at least one image
  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
        >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('product.back_to_products')}
        </button>

        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('product.breadcrumb.home')}</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('product.breadcrumb.products')}</Link></li>
            <li>/</li>
            <li><Link href={`/categories/${product.category.toLowerCase()}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{product.category}</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-gray-100">{product.name}</li>
          </ol>
        </nav>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 overflow-hidden transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div>
              <div className="aspect-square relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={productImages[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {discountPercentage > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{discountPercentage}% OFF
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{product.brand}</span>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">{product.name}</h1>
              </div>
              
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(product.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    ({product.rating}) {product.reviews && `${product.reviews} reviews`}
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 dark:text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                {product.originalPrice && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">You save ${(product.originalPrice - product.price).toFixed(2)}</p>
                )}
              </div>

              <p className="text-gray-700 dark:text-gray-400 mb-6 leading-relaxed">{product.description}</p>

              {/* Features */}
              {product.features && (
                <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{t('product.key_features')}</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-400">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity and Actions */}
              <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('product.quantity')}
                      </label>
                <div className="flex items-center space-x-3 mb-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-16 text-center text-lg font-medium text-gray-900 dark:text-gray-100">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {t('product.add_to_cart')}
                  </button>
                  <button
                    onClick={handleWishlistToggle}
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <Heart className={`w-5 h-5 mr-2 ${isWishlisted ? 'text-red-500 fill-current' : ''}`} />
                    {isWishlisted ? t('product.wishlisted') : t('product.add_to_wishlist')}
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Truck className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="text-sm text-gray-700 dark:text-gray-400">{t('product.free_shipping')}</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-400">{t('product.secure_payment')}</span>
                  </div>
                  <div className="flex items-center">
                    <RotateCcw className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-400">{t('product.returns')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">{t('product.specifications')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{key}</span>
                    <span className="text-gray-600 dark:text-gray-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">{t('product.related_products')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts
                .filter(p => p.id !== product.id)
                .map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/20 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 hover-lift group">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                        <Link href={`/products/${relatedProduct.id}`}>{relatedProduct.name}</Link>
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{relatedProduct.category}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          ${relatedProduct.price.toFixed(2)}
                        </span>
                        <Link
                          href={`/products/${relatedProduct.id}`}
                          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ShoppingCart size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
