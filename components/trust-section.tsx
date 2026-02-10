'use client';

import { Card } from '@/components/ui/card';
import { Award, Users, Leaf } from 'lucide-react';

export function TrustSection() {
  const credentials = [
    {
      icon: Award,
      stat: '10+',
      label: 'Years Experience',
      description: 'A decade of excellence in sustainable agriculture'
    },
    {
      icon: Users,
      stat: '1000+',
      label: 'Happy Customers',
      description: 'Trusted by families and businesses across Oyo State'
    },
    {
      icon: Leaf,
      stat: '100%',
      label: 'Sustainable',
      description: 'Committed to eco-friendly farming practices'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <Card key={index} className="p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{credential.stat}</div>
                <div className="text-lg font-semibold text-green-600 mb-2">{credential.label}</div>
                <p className="text-gray-600 text-sm">{credential.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
