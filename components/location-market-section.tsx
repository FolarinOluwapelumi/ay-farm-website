'use client';

import { Card } from '@/components/ui/card';
import { MapPin, Truck, Target } from 'lucide-react';

export function LocationMarketSection() {
  const locations = [
    {
      icon: MapPin,
      title: 'Farm Location',
      description: 'Located in the fertile agricultural region of Oyo State, Nigeria. Our 50+ hectares of prime farmland benefit from excellent climate conditions and reliable water sources.'
    },
    {
      icon: Truck,
      title: 'Distribution Network',
      description: 'We supply local markets in Ibadan, Oyo City, and surrounding communities. We also work with retailers and wholesale buyers across the Southwest region.'
    },
    {
      icon: Target,
      title: 'Market Reach',
      description: 'Our products reach consumers through direct sales, local market outlets, and partnerships with agricultural cooperatives and distribution networks.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            LOCATION & MARKET
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Reach & <span className="text-green-600">Presence</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Serving quality agricultural products across Oyo State and beyond
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => {
            const Icon = location.icon;
            return (
              <Card key={index} className="p-8 border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all">
                <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{location.title}</h3>
                <p className="text-gray-600 leading-relaxed">{location.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
          <div className="text-center space-y-3">
            <MapPin className="w-16 h-16 text-green-700 mx-auto" />
            <p className="text-green-900 font-semibold text-lg">Oyo State, Nigeria</p>
            <p className="text-green-800">AY Farm Location</p>
          </div>
        </div>
      </div>
    </section>
  );
}
