'use client';

import { Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-white">
                🌾 AY Farm
              </div>
              <p className="text-gray-400 text-sm">
                Producing quality crops and livestock using sustainable farming practices in Oyo State, Nigeria.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="font-bold text-white mb-4">Our Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Crops</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Livestock</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Bulk Orders</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Wholesale</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-bold text-white mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-gray-400">Oyo State, Nigeria</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-gray-400">+234 8126092372</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-sm text-gray-400">
                Copyright © {currentYear} AY Farms. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-400 justify-start md:justify-end">
                <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
