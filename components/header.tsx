'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLAnchorElement>>({});

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Why Us', href: '#why-us' }
  ];

  // Update underline position when active tab changes
  useEffect(() => {
    const activeElement = tabRefs.current[activeTab];
    if (activeElement && navRef.current) {
      const { offsetLeft, offsetWidth } = activeElement;
      setUnderlineStyle({
        width: offsetWidth,
        left: offsetLeft
      });
    }
  }, [activeTab]);

  // Set initial underline position
  useEffect(() => {
    setTimeout(() => {
      setActiveTab('Home');
    }, 100);
  }, []);

  // Handle click to scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    e.preventDefault();
    setActiveTab(label);
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle contact button click
  const handleContactClick = () => {
    setActiveTab('');
    setIsMenuOpen(false);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && window.innerWidth < 768) {
        const sidebar = document.querySelector('.mobile-sidebar');
        if (sidebar && !sidebar.contains(e.target as Node)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with animation */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 font-bold text-2xl text-gray-900 cursor-pointer"
              onClick={() => handleNavClick({ preventDefault: () => {} } as any, 'Home', '#home')}
            >
              <motion.span 
                className="text-3xl"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                🌾
              </motion.span>
              <span>AY Farm</span>
            </motion.div>

            {/* Desktop Navigation with animated underline */}
            <nav className="hidden md:flex items-center gap-8 relative" ref={navRef}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  ref={(el) => {
                    if (el) tabRefs.current[link.label] = el;
                  }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.label, link.href)}
                  className={`relative px-2 py-1 text-lg font-medium transition-all duration-300 ${
                    activeTab === link.label 
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-500'
                  }`}
                >
                  {link.label}
                  
                  {/* Hover effect */}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </a>
              ))}
              
              {/* Animated underline for active tab */}
              <motion.div
                className="absolute bottom-0 h-1 bg-green-600 rounded-full"
                initial={false}
                animate={{
                  width: underlineStyle.width,
                  left: underlineStyle.left,
                  opacity: activeTab ? 1 : 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }}
              />
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleContactClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-7 h-7 text-gray-900" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-7 h-7 text-gray-900" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            
            {/* Sidebar */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300 
              }}
              className="mobile-sidebar fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-2xl z-40 md:hidden"
            >
              <div className="flex flex-col h-full p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-gray-900" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-4 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.label, link.href)}
                        className={`flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all ${
                          activeTab === link.label
                            ? 'bg-green-50 text-green-600 border-l-4 border-green-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span>{link.label}</span>
                        {activeTab === link.label && (
                          <motion.div
                            layoutId="mobile-active-indicator"
                            className="w-2 h-2 bg-green-600 rounded-full"
                          />
                        )}
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Button in Sidebar */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Button
                    onClick={handleContactClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-semibold shadow-lg"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}