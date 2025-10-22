# ShopNova - Modern E-commerce Website

A fully-featured, modern e-commerce website built with Next.js 15, TypeScript, Tailwind CSS, and Redux Toolkit.

## 🚀 Features

### Core E-commerce Features
- **Product Catalog**: Browse products with advanced filtering and sorting
- **Shopping Cart**: Add/remove items, update quantities, persistent cart state
- **Checkout Process**: Complete order flow with form validation
- **Product Details**: Detailed product pages with image galleries and specifications
- **Categories**: Organized product categories with dedicated pages
- **Search**: Advanced search functionality across products, brands, and descriptions
- **Wishlist**: Save favorite products for later

### UI/UX Enhancements
- **Modern Design**: Clean, professional design with gradient backgrounds
- **Responsive Layout**: Fully responsive across all device sizes
- **Animations**: Smooth transitions, hover effects, and loading animations
- **Toast Notifications**: User feedback for all actions
- **Loading States**: Visual feedback during operations
- **Interactive Elements**: Hover effects, button states, and micro-interactions

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Redux Toolkit**: Centralized state management for cart and user data
- **Next.js 15**: Latest Next.js features with App Router
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Image Optimization**: Next.js Image component for optimized loading
- **SEO Ready**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Animations**: Framer Motion (ready for use)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── cart/              # Shopping cart page
│   ├── categories/        # Category pages
│   ├── checkout/          # Checkout process
│   ├── contact/           # Contact page
│   ├── order-success/     # Order confirmation
│   ├── products/          # Product pages
│   ├── wishlist/          # Wishlist page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Navigation header
│   ├── ProductCard.tsx    # Product display card
│   └── ReduxProvider.tsx  # Redux store provider
├── data/                  # Static data
│   ├── categories.ts      # Product categories
│   └── products.ts        # Product catalog
└── lib/                   # Utilities and store
    ├── cartSlice.ts       # Redux cart slice
    └── store.ts           # Redux store configuration
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#2563eb) to Purple (#7c3aed) gradients
- **Secondary**: Green, Orange, Red for status indicators
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Geist Sans (modern, clean)
- **Hierarchy**: Clear heading structure with proper sizing
- **Readability**: Optimized line heights and spacing

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Gradient backgrounds, hover states, loading indicators
- **Forms**: Clean inputs with focus states and validation
- **Navigation**: Sticky header with mobile-responsive menu

## 🛒 E-commerce Features

### Product Management
- **Rich Product Data**: Name, price, images, ratings, reviews, specifications
- **Product Variants**: Support for different sizes, colors, etc.
- **Inventory Status**: In-stock/out-of-stock indicators
- **Discounts**: Original price vs. sale price with percentage savings

### Shopping Experience
- **Advanced Search**: Search by name, brand, description
- **Filtering**: By category, price range, ratings
- **Sorting**: By name, price, rating
- **View Modes**: Grid and list view options
- **Pagination**: Efficient product loading

### Cart & Checkout
- **Persistent Cart**: Items saved across sessions
- **Quantity Management**: Increase/decrease item quantities
- **Price Calculation**: Subtotal, tax, shipping, total
- **Form Validation**: Complete checkout form with validation
- **Order Confirmation**: Success page with order details

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1024px (2-3 columns)
- **Desktop**: > 1024px (4+ columns, full features)

### Mobile Features
- **Collapsible Menu**: Hamburger menu for navigation
- **Touch-Friendly**: Large buttons and touch targets
- **Optimized Images**: Responsive image sizing
- **Swipe Gestures**: Ready for touch interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Improvements Made

### 1. Enhanced UI/UX
- Modern gradient designs and animations
- Improved typography and spacing
- Better mobile responsiveness
- Interactive hover effects and transitions

### 2. Advanced Features
- Toast notifications for user feedback
- Loading states and animations
- Advanced search and filtering
- Wishlist functionality
- Complete checkout process

### 3. Better Data Structure
- Rich product information with ratings and reviews
- Product specifications and features
- Brand information and categories
- Discount pricing support

### 4. Performance Optimizations
- Image optimization with Next.js Image
- Efficient state management with Redux
- Lazy loading and code splitting
- Optimized bundle size

### 5. Developer Experience
- Full TypeScript support
- Clean, maintainable code structure
- Comprehensive component library
- Easy to extend and customize

## 🔮 Future Enhancements

### Planned Features
- **User Authentication**: Login/register system
- **Order History**: Track past orders
- **Product Reviews**: User-generated reviews
- **Payment Integration**: Stripe/PayPal integration
- **Admin Dashboard**: Product management interface
- **Email Notifications**: Order confirmations and updates
- **Inventory Management**: Stock tracking
- **Multi-language Support**: Internationalization

### Technical Improvements
- **Database Integration**: Replace static data with database
- **API Routes**: Backend API for dynamic data
- **Caching**: Redis for improved performance
- **Testing**: Unit and integration tests
- **PWA**: Progressive Web App features
- **Analytics**: User behavior tracking

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@eshop.com or create an issue in the repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**