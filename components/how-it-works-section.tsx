'use client';

import { ArrowRight, Leaf, Droplet, Package } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: Leaf,
      title: 'Preparation & Planning',
      description: 'We meticulously plan our farming calendar, prepare soil, and select the best seed varieties for optimal growth and yield.'
    },
    {
      number: '02',
      icon: Droplet,
      title: 'Cultivation & Care',
      description: 'Using modern irrigation and monitoring systems, we nurture crops and livestock through proper nutrition and health management.'
    },
    {
      number: '03',
      icon: Package,
      title: 'Harvest & Processing',
      description: 'We harvest at peak maturity and process products using best practices to ensure quality, freshness, and food safety.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR PROCESS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-green-600">Works</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our proven process for producing quality agricultural products
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines - Desktop Only */}
          <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
                  {/* Step Number */}
                  <div className="inline-block bg-gradient-to-br from-green-600 to-green-700 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-green-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>

                {/* Arrow - Hide on Last Item */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-20 text-green-600">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
