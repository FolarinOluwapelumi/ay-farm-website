'use client';

import { Card } from '@/components/ui/card';
import { Leaf, Zap, TrendingUp, Shield } from 'lucide-react';

export function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'We use eco-friendly farming methods that protect the environment while ensuring high-quality production.'
    },
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'Our farm utilizes modern irrigation systems, precision farming, and automated monitoring systems.'
    },
    {
      icon: TrendingUp,
      title: 'Consistent Quality',
      description: 'Rigorous quality control and standardized farming practices ensure consistent product excellence.'
    },
    {
      icon: Shield,
      title: 'Food Safety',
      description: 'All products meet health and safety standards with proper documentation and traceability.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-green-600">AY Farm</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are committed to excellence in everything we do
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
