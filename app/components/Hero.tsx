'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  dictionary: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      applyNow?: string;
      learnMore?: string;
    };
  };
  locale: string;
}

export default function Hero({ dictionary, locale }: HeroProps) {
  return (
    <section className="pt-36 pb-10 sm:pt-40 md:pt-44 lg:pt-48 sm:pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {dictionary.hero.title}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary-600 mt-4">
              {dictionary.hero.subtitle}
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg">
              Professional interpretation services in over 100 languages, available 24/7 for your business, legal, and healthcare needs.
            </p>
            <div className="mt-8 sm:mt-10">
              <Link
                href={`/${locale}/contact`}
                className="btn-primary inline-block text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors"
              >
                {dictionary.hero.cta}
              </Link>
            </div>
            
            {/* Feature Badges - Simplified horizontal layout */}
            <div className="mt-10 flex flex-wrap gap-3">
              <div className="bg-primary-50 px-4 py-2 rounded-full flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                  <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium">100+ Languages</span>
              </div>
              <div className="bg-primary-50 px-4 py-2 rounded-full flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                  <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="bg-primary-50 px-4 py-2 rounded-full flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                  <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium">Certified Experts</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-tr from-primary-600/90 to-secondary-600/90 rounded-3xl shadow-xl overflow-hidden">
              <div className="h-full w-full flex items-center justify-center relative">
                {/* Image with overlay and gradient */}
                <img 
                  src="/images/global-communications.jpg" 
                  alt="Global communication network"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/60 to-secondary-600/60"></div>
                
                {/* Clean overlay without text or logo */}
                <div className="relative z-10">
                  {/* Empty for clean design */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service stats - Positioned at the bottom with cleaner styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-16 py-8 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600">100+</div>
            <div className="text-gray-600 mt-2 text-sm md:text-base">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600">24/7</div>
            <div className="text-gray-600 mt-2 text-sm md:text-base">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600">10k+</div>
            <div className="text-gray-600 mt-2 text-sm md:text-base">Certified Interpreters</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600">99%</div>
            <div className="text-gray-600 mt-2 text-sm md:text-base">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 