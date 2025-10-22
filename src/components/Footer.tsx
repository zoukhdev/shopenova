import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">ShopNova</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Your one-stop destination for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">Products</Link></li>
              <li><Link href="/categories" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">Categories</Link></li>
              <li><Link href="/about" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">Returns</Link></li>
              <li><Link href="/faq" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">FAQ</Link></li>
              <li><Link href="/support" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 ZoukhDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
