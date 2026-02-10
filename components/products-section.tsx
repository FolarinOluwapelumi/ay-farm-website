'use client';

import { FocusRail, type FocusRailItem } from '@/components/ui/focus-rail';

export function ProductsSection() {
  const products: FocusRailItem[] = [
    {
      id: 'maize',
      title: 'Maize',
      description: 'High-quality maize cultivated for food processing, livestock feed, and commercial supply. Grown using advanced irrigation systems.',
      meta: 'CROP PRODUCTION',
      imageSrc: '/corn.webp',
    },
    {
      id: 'cassava',
      title: 'Cassava',
      description: 'Fresh cassava grown for garri, fufu, and other cassava-based products. Premium quality tubers for both local and wholesale markets.',
      meta: 'CROP PRODUCTION',
      imageSrc: '/cassava-1.png',
    },
    {
      id: 'yam',
      title: 'Yam',
      description: 'Healthy yam tubers supplied to local and wholesale markets. Carefully harvested and stored to maintain quality and freshness.',
      meta: 'CROP PRODUCTION',
      imageSrc: '/yam.jfif',
    },
    {
      id: 'vegetables',
      title: 'Vegetables',
      description: 'Tomatoes, pepper, and okra cultivated for regular market and household supply. Fresh harvest daily using sustainable practices.',
      meta: 'CROP PRODUCTION',
      imageSrc: '/vegetable.jfif',
    },
    {
      id: 'poultry',
      title: 'Poultry',
      description: 'Layers and broilers raised under proper feeding and vaccination programs. Premium quality eggs and meat for reliable supply.',
      meta: 'LIVESTOCK PRODUCTION',
      imageSrc: 'poultry.jfif',
    },
    {
      id: 'goats',
      title: 'Goats',
      description: 'Goats raised for quality meat supply, suitable for markets and events. Healthy stock with proper health management and nutrition.',
      meta: 'LIVESTOCK PRODUCTION',
      imageSrc: '/goat.jfif',
    },
    {
      id: 'cattle',
      title: 'Cattle',
      description: 'Cattle raised for beef and potential dairy production with proper health management. Premium quality livestock for market supply.',
      meta: 'LIVESTOCK PRODUCTION',
      imageSrc: '/cattle.jfif',
    },
    {
      id: 'eggs',
      title: 'Eggs',
      description: 'Fresh, high-quality eggs from our layer farm. Produced under the highest standards of hygiene and animal welfare practices.',
      meta: 'LIVESTOCK PRODUCTION',
      imageSrc: '/egg.jfif',
    },
  ];

  return (
    <section className="py-12 sm:px-6 lg:px-8 bg-white ">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR PRODUCTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quality Agricultural <span className="text-green-600">Products</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our range of premium crops and livestock from sustainable farm operations in Igbẹ́ti, Oyo State
          </p>
        </div>

        {/* FocusRail Component */}
        <FocusRail 
          items={products}
          autoPlay={false}
          loop={true}
          className="bg-gradient-to-br from-green-100 to-green-300 overflow-hidden py-10"
        />
      </div>
    </section>
  );
}
