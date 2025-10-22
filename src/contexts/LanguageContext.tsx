'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translations: Record<string, Record<Language, string>> = {
      // Navigation
      'nav.home': { en: 'Home', fr: 'Accueil' },
      'nav.products': { en: 'Products', fr: 'Produits' },
      'nav.categories': { en: 'Categories', fr: 'Catégories' },
      'nav.about': { en: 'About', fr: 'À propos' },
      'nav.contact': { en: 'Contact', fr: 'Contact' },
      'nav.cart': { en: 'Cart', fr: 'Panier' },
      'nav.wishlist': { en: 'Wishlist', fr: 'Liste de souhaits' },
      'nav.search': { en: 'Search', fr: 'Rechercher' },
      
      // Home page
      'home.slider.welcome.title': { en: 'Welcome to ShopNova', fr: 'Bienvenue chez ShopNova' },
      'home.slider.welcome.subtitle': { en: 'Discover amazing products at unbeatable prices', fr: 'Découvrez des produits incroyables à des prix imbattables' },
      'home.slider.welcome.description': { en: 'Shop with confidence and enjoy fast, secure delivery to your doorstep.', fr: 'Achetez en toute confiance et profitez d\'une livraison rapide et sécurisée à votre porte.' },
      'home.slider.electronics.title': { en: 'Latest Electronics', fr: 'Derniers Électroniques' },
      'home.slider.electronics.subtitle': { en: 'Cutting-edge technology at your fingertips', fr: 'Technologie de pointe à portée de main' },
      'home.slider.electronics.description': { en: 'Explore our collection of smartphones, laptops, and smart devices with the latest features.', fr: 'Explorez notre collection de smartphones, ordinateurs portables et appareils intelligents avec les dernières fonctionnalités.' },
      'home.slider.fashion.title': { en: 'Fashion & Style', fr: 'Mode et Style' },
      'home.slider.fashion.subtitle': { en: 'Express yourself with our trendy collection', fr: 'Exprimez-vous avec notre collection tendance' },
      'home.slider.fashion.description': { en: 'From casual wear to formal attire, find the perfect outfit for every occasion.', fr: 'Du décontracté au formel, trouvez la tenue parfaite pour chaque occasion.' },
      'home.slider.home.title': { en: 'Home & Living', fr: 'Maison et Décoration' },
      'home.slider.home.subtitle': { en: 'Transform your space with our home essentials', fr: 'Transformez votre espace avec nos essentiels maison' },
      'home.slider.home.description': { en: 'Create the perfect home with our carefully curated selection of furniture and decor.', fr: 'Créez la maison parfaite avec notre sélection soigneusement choisie de meubles et décorations.' },
      
      // Buttons
      'btn.shop_now': { en: 'Shop Now', fr: 'Acheter Maintenant' },
      'btn.browse_categories': { en: 'Browse Categories', fr: 'Parcourir les Catégories' },
      'btn.view_electronics': { en: 'View Electronics', fr: 'Voir l\'Électronique' },
      'btn.learn_more': { en: 'Learn More', fr: 'En Savoir Plus' },
      'btn.shop_fashion': { en: 'Shop Fashion', fr: 'Acheter la Mode' },
      'btn.view_collection': { en: 'View Collection', fr: 'Voir la Collection' },
      'btn.shop_home': { en: 'Shop Home', fr: 'Acheter Maison' },
      'btn.get_inspired': { en: 'Get Inspired', fr: 'S\'Inspirer' },
      'btn.view_all_products': { en: 'View All Products', fr: 'Voir Tous les Produits' },
      'btn.shop_now_arrow': { en: 'Shop Now →', fr: 'Acheter Maintenant →' },
      
      // Features
      'features.free_shipping': { en: 'Free Shipping', fr: 'Livraison Gratuite' },
      'features.free_shipping_desc': { en: 'Free shipping on orders over $50', fr: 'Livraison gratuite sur les commandes de plus de 50 $' },
      'features.secure_payment': { en: 'Secure Payment', fr: 'Paiement Sécurisé' },
      'features.secure_payment_desc': { en: '100% secure payment gateway', fr: 'Passerelle de paiement 100% sécurisée' },
      'features.support': { en: '24/7 Support', fr: 'Support 24/7' },
      'features.support_desc': { en: 'Dedicated customer support', fr: 'Support client dédié' },
      'features.easy_returns': { en: 'Easy Returns', fr: 'Retours Faciles' },
      'features.easy_returns_desc': { en: 'Hassle-free returns & exchanges', fr: 'Retours et échanges sans tracas' },
      
      // Categories
      'categories.title': { en: 'Shop by Category', fr: 'Acheter par Catégorie' },
      'categories.subtitle': { en: 'Find exactly what you\'re looking for', fr: 'Trouvez exactement ce que vous cherchez' },
      
      // Featured Products
      'featured.title': { en: 'Featured Products', fr: 'Produits Vedettes' },
      'featured.subtitle': { en: 'Handpicked products just for you', fr: 'Produits sélectionnés rien que pour vous' },
      
      // Newsletter
      'newsletter.title': { en: 'Stay Updated', fr: 'Restez Informé' },
      'newsletter.subtitle': { en: 'Subscribe to our newsletter for the latest products and offers', fr: 'Abonnez-vous à notre newsletter pour les derniers produits et offres' },
      'newsletter.placeholder': { en: 'Enter your email', fr: 'Entrez votre email' },
      'newsletter.subscribe': { en: 'Subscribe', fr: 'S\'abonner' },
      
      // Products page
      'products.title': { en: 'All Products', fr: 'Tous les Produits' },
      'products.subtitle': { en: 'Discover our complete collection', fr: 'Découvrez notre collection complète' },
      'products.search_placeholder': { en: 'Search products...', fr: 'Rechercher des produits...' },
      'products.filter_by_category': { en: 'Filter by Category', fr: 'Filtrer par Catégorie' },
      'products.sort_by': { en: 'Sort by', fr: 'Trier par' },
      'products.sort.price_low_high': { en: 'Price: Low to High', fr: 'Prix: Bas à Élevé' },
      'products.sort.price_high_low': { en: 'Price: High to Low', fr: 'Prix: Élevé à Bas' },
      'products.sort.name_az': { en: 'Name: A to Z', fr: 'Nom: A à Z' },
      'products.sort.name_za': { en: 'Name: Z to A', fr: 'Nom: Z à A' },
      'products.sort.newest': { en: 'Newest First', fr: 'Plus Récent' },
      'products.sort.oldest': { en: 'Oldest First', fr: 'Plus Ancien' },
      'products.no_results': { en: 'No products found', fr: 'Aucun produit trouvé' },
      'products.no_results_desc': { en: 'Try adjusting your search or filter criteria', fr: 'Essayez d\'ajuster votre recherche ou vos critères de filtre' },
      'products.results_count': { en: 'products found', fr: 'produits trouvés' },
      
      // Categories page
      'categories.page_title': { en: 'All Categories', fr: 'Toutes les Catégories' },
      'categories.page_subtitle': { en: 'Browse our product categories', fr: 'Parcourez nos catégories de produits' },
      'categories.featured': { en: 'Featured Categories', fr: 'Catégories Vedettes' },
      'categories.all_categories': { en: 'All Categories', fr: 'Toutes les Catégories' },
      'categories.products_count': { en: 'products', fr: 'produits' },
      
      // About page
      'about.title': { en: 'About Us', fr: 'À Propos de Nous' },
      'about.subtitle': { en: 'Learn more about our story and mission', fr: 'En savoir plus sur notre histoire et notre mission' },
      'about.our_story': { en: 'Our Story', fr: 'Notre Histoire' },
      'about.our_mission': { en: 'Our Mission', fr: 'Notre Mission' },
      'about.our_values': { en: 'Our Values', fr: 'Nos Valeurs' },
      'about.team': { en: 'Our Team', fr: 'Notre Équipe' },
      'about.hero.title': { en: 'About ShopNova', fr: 'À Propos de ShopNova' },
      'about.hero.subtitle': { en: 'Your trusted online marketplace', fr: 'Votre marketplace en ligne de confiance' },
      'about.mission.title': { en: 'Our Mission', fr: 'Notre Mission' },
      'about.mission.desc': { en: 'To provide exceptional products and services that enhance our customers\' lives while maintaining the highest standards of quality and customer satisfaction.', fr: 'Fournir des produits et services exceptionnels qui améliorent la vie de nos clients tout en maintenant les plus hauts standards de qualité et de satisfaction client.' },
      'about.story.title': { en: 'Our Story', fr: 'Notre Histoire' },
      'about.story.desc': { en: 'Founded with a vision to revolutionize online shopping, ShopNova has grown from a small startup to a leading e-commerce platform, serving millions of customers worldwide.', fr: 'Fondé avec une vision de révolutionner le shopping en ligne, ShopNova est passé d\'une petite startup à une plateforme e-commerce leader, servant des millions de clients dans le monde entier.' },
      'about.values.title': { en: 'Our Values', fr: 'Nos Valeurs' },
      'about.values.quality': { en: 'Quality', fr: 'Qualité' },
      'about.values.quality_desc': { en: 'We never compromise on quality', fr: 'Nous ne transigeons jamais sur la qualité' },
      'about.values.trust': { en: 'Trust', fr: 'Confiance' },
      'about.values.trust_desc': { en: 'Building lasting relationships', fr: 'Construire des relations durables' },
      'about.values.innovation': { en: 'Innovation', fr: 'Innovation' },
      'about.values.innovation_desc': { en: 'Always pushing boundaries', fr: 'Toujours repousser les limites' },
      'about.stats.customers': { en: 'Happy Customers', fr: 'Clients Satisfaits' },
      'about.stats.products': { en: 'Products', fr: 'Produits' },
      'about.stats.countries': { en: 'Countries', fr: 'Pays' },
      'about.stats.years': { en: 'Years Experience', fr: 'Années d\'Expérience' },
      
      // Contact page
      'contact.title': { en: 'Contact Us', fr: 'Contactez-Nous' },
      'contact.subtitle': { en: 'Get in touch with our team', fr: 'Contactez notre équipe' },
      'contact.form.name': { en: 'Full Name', fr: 'Nom Complet' },
      'contact.form.email': { en: 'Email Address', fr: 'Adresse Email' },
      'contact.form.subject': { en: 'Subject', fr: 'Sujet' },
      'contact.form.message': { en: 'Message', fr: 'Message' },
      'contact.form.send': { en: 'Send Message', fr: 'Envoyer le Message' },
      'contact.info.phone': { en: 'Phone', fr: 'Téléphone' },
      'contact.info.email': { en: 'Email', fr: 'Email' },
      'contact.info.address': { en: 'Address', fr: 'Adresse' },
      'contact.info.hours': { en: 'Business Hours', fr: 'Heures d\'Ouverture' },
      
      // Wishlist page
      'wishlist.title': { en: 'My Wishlist', fr: 'Ma Liste de Souhaits' },
      'wishlist.empty.title': { en: 'Your Wishlist is Empty', fr: 'Votre Liste de Souhaits est Vide' },
      'wishlist.empty.subtitle': { en: 'Save items you love for later!', fr: 'Sauvegardez les articles que vous aimez pour plus tard !' },
      'wishlist.empty.button': { en: 'Start Shopping', fr: 'Commencer à Acheter' },
      'wishlist.items_count': { en: 'items', fr: 'articles' },
      'wishlist.continue_shopping': { en: 'Continue Shopping', fr: 'Continuer les Achats' },
      'wishlist.added_to_cart': { en: 'added to cart!', fr: 'ajouté au panier !' },
      'wishlist.removed_from_wishlist': { en: 'Removed from wishlist', fr: 'Retiré de la liste de souhaits' },
      
      // Cart page
      'cart.title': { en: 'Shopping Cart', fr: 'Panier d\'Achat' },
      'cart.empty.title': { en: 'Your Cart is Empty', fr: 'Votre Panier est Vide' },
      'cart.empty.subtitle': { en: 'Add some products to get started!', fr: 'Ajoutez quelques produits pour commencer !' },
      'cart.empty.button': { en: 'Continue Shopping', fr: 'Continuer les Achats' },
      'cart.order_summary': { en: 'Order Summary', fr: 'Résumé de la Commande' },
      'cart.subtotal': { en: 'Subtotal', fr: 'Sous-total' },
      'cart.shipping': { en: 'Shipping', fr: 'Livraison' },
      'cart.tax': { en: 'Tax', fr: 'Taxe' },
      'cart.total': { en: 'Total', fr: 'Total' },
      'cart.free_shipping': { en: 'Free', fr: 'Gratuit' },
      'cart.proceed_checkout': { en: 'Proceed to Checkout', fr: 'Procéder au Paiement' },
      
      // Product detail page
      'product.back_to_products': { en: 'Back to Products', fr: 'Retour aux Produits' },
      'product.breadcrumb.home': { en: 'Home', fr: 'Accueil' },
      'product.breadcrumb.products': { en: 'Products', fr: 'Produits' },
      'product.breadcrumb.categories': { en: 'Categories', fr: 'Catégories' },
      'product.not_found.title': { en: 'Product Not Found', fr: 'Produit Non Trouvé' },
      'product.not_found.subtitle': { en: 'The product you\'re looking for doesn\'t exist.', fr: 'Le produit que vous recherchez n\'existe pas.' },
      'product.not_found.button': { en: 'Browse Products', fr: 'Parcourir les Produits' },
      'product.loading': { en: 'Loading product...', fr: 'Chargement du produit...' },
      'product.quantity': { en: 'Quantity', fr: 'Quantité' },
      'product.add_to_cart': { en: 'Add to Cart', fr: 'Ajouter au Panier' },
      'product.add_to_wishlist': { en: 'Add to Wishlist', fr: 'Ajouter à la Liste de Souhaits' },
      'product.wishlisted': { en: 'Wishlisted', fr: 'Dans la Liste' },
      'product.share': { en: 'Share', fr: 'Partager' },
      'product.key_features': { en: 'Key Features', fr: 'Caractéristiques Clés' },
      'product.specifications': { en: 'Specifications', fr: 'Spécifications' },
      'product.related_products': { en: 'Related Products', fr: 'Produits Similaires' },
      'product.free_shipping': { en: 'Free Shipping', fr: 'Livraison Gratuite' },
      'product.secure_payment': { en: 'Secure Payment', fr: 'Paiement Sécurisé' },
      'product.returns': { en: '30-Day Returns', fr: 'Retours 30 Jours' },
      'product.you_save': { en: 'You save', fr: 'Vous économisez' },
      'product.reviews': { en: 'reviews', fr: 'avis' },
      
      // Common
      'common.all': { en: 'All', fr: 'Tous' },
      'common.loading': { en: 'Loading...', fr: 'Chargement...' },
      'common.error': { en: 'Error', fr: 'Erreur' },
      'common.success': { en: 'Success', fr: 'Succès' },
      'common.cancel': { en: 'Cancel', fr: 'Annuler' },
      'common.save': { en: 'Save', fr: 'Enregistrer' },
      'common.edit': { en: 'Edit', fr: 'Modifier' },
      'common.delete': { en: 'Delete', fr: 'Supprimer' },
      'common.add': { en: 'Add', fr: 'Ajouter' },
      'common.remove': { en: 'Remove', fr: 'Retirer' },
      'common.view': { en: 'View', fr: 'Voir' },
      'common.close': { en: 'Close', fr: 'Fermer' },
      'common.reset': { en: 'Reset Filters', fr: 'Réinitialiser les Filtres' },
    };

    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
