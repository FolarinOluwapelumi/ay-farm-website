'use client';

import { Facebook, MessageCircle, Instagram } from 'lucide-react';

export function ContactSection() {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/2348126092372',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/ayintegratedfarm.570',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/ayintegratedfarm.570',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col items-center justify-center p-4 font-sans w-full">
      <div className="w-full max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Ready to Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700">Premium Farm Products?</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get in touch with us today to place an order or learn more about our farming practices and product offerings.
        </p>
      </div>

      <div className="relative w-full max-w-2xl">
        {/* 3D Glowing Container */}
        <div
          className="rounded-3xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-2xl backdrop-blur-3xl overflow-hidden p-8 transition-all duration-500 hover:scale-105"
          style={{
            boxShadow: '0 0 50px rgba(22, 163, 74, 0.4), 0 0 80px rgba(34, 197, 94, 0.2)',
          }}
        >
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.name} href={social.href} className="social-icon">
                  <div
                    className="icon-container"
                    style={{
                      background: `linear-gradient(135deg, rgba(22, 163, 74, 0.1), rgba(34, 197, 94, 0.1))`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="icon-label text-gray-900">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .icon-container {
          display: inline-flex;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          justify-content: center;
          align-items: center;
          background: rgba(22, 163, 74, 0.08);
          box-shadow: 0 8px 32px rgba(22, 163, 74, 0.1);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(22, 163, 74, 0.2);
        }

        .social-icon:hover .icon-container {
          transform: translateY(-10px) scale(1.1);
          background: rgba(22, 163, 74, 0.15);
          box-shadow: 0 0 20px rgba(22, 163, 74, 0.4);
        }

        .social-icon:hover .icon-label {
          opacity: 1;
          color: #059669;
          font-weight: 600;
        }

        .icon-label {
          margin-top: 8px;
          color: #374151;
          font-weight: 500;
          opacity: 0.9;
          transition: all 0.3s ease;
        }

        .social-icon svg {
          transition: all 0.3s ease;
        }

        .social-icon:hover svg {
          animation: shake 0.5s;
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0) rotate(0);
          }
          20% {
            transform: translateX(-5px) rotate(-5deg);
          }
          40% {
            transform: translateX(5px) rotate(5deg);
          }
          60% {
            transform: translateX(-5px) rotate(-5deg);
          }
          80% {
            transform: translateX(5px) rotate(5deg);
          }
        }

        .icon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(22, 163, 74, 0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .social-icon:hover .icon-container::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
