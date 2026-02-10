'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    ' 10+ years of farming experience',
    '50+ hectares of productive farmland',
    '100% organic and sustainable practices',
    'Certified quality standards',
    'Direct market supply & distribution',
    'Trained agricultural professionals'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ABOUT AY FARM
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Pioneering Quality <span className="text-green-600">Agriculture in Oyo State</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              AY Farm was founded with a vision to produce premium quality crops and livestock products while maintaining sustainable farming practices. Our dedicated team combines traditional farming wisdom with modern agricultural technology.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Located in Oyo State, Nigeria, we have established ourselves as a trusted supplier of fresh agricultural products to local markets, retailers, and direct consumers. Our commitment to quality and sustainability sets us apart.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base font-semibold rounded-lg mt-4">
              View Our Story
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-125 rounded-2xl overflow-hidden bg-green-300 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <div className="text-6xl">🚜</div>
                <p className="text-2xl font-bold">AY Farm</p>
                <p className="text-blue-100">Oyo State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
