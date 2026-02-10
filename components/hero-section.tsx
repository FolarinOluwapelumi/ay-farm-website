'use client';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div className="relative w-full bg-gradient-to-b from-blue-50 to-white pt-20 pb-12 md:pt-32 md:pb-20">

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold lg:ml-0">
              SUSTAINABLE AGRICULTURE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Growing Quality <span className="text-green-600">Crops & Livestock</span> in Oyo State
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
              AY Farm is committed to producing premium agricultural products using modern farming techniques and sustainable practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base font-semibold rounded-lg">
                Explore Our Products
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 px-8 py-6 text-base font-semibold rounded-lg hover:bg-gray-50 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 to-green-600 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <div className="text-6xl">🌾</div>
                <p className="text-2xl font-bold">Premium Farm</p>
                <p className="text-green-100">Modern Agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
