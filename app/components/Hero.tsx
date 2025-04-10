'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface HeroProps {
  dictionary: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      applyNow?: string;
      learnMore?: string;
      carousel?: {
        image1?: {
          title?: string;
          description?: string;
        };
        image2?: {
          title?: string;
          description?: string;
        };
        image3?: {
          title?: string;
          description?: string;
        };
      };
    };
  };
  locale: string;
}

export default function Hero({ dictionary, locale }: HeroProps) {
  // Carousel state
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Carousel images data with real images and fallback handling
  const carouselImages = [
    {
      title: dictionary.hero.carousel?.image1?.title || "Professional Interpretation",
      description: dictionary.hero.carousel?.image1?.description || "Connect with certified interpreters in over 100 languages",
      image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=3840&auto=format&fit=crop",
      color: "from-primary-600/80 to-indigo-700/80",
      placeholderText: "Professional interpreters in action during a multilingual conference",
      icon: (
        <svg className="w-32 h-32 mx-auto text-primary-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
        </svg>
      )
    },
    {
      title: dictionary.hero.carousel?.image2?.title || "Medical Interpretation",
      description: dictionary.hero.carousel?.image2?.description || "Specialized interpreters for healthcare settings",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=3880&auto=format&fit=crop",
      color: "from-blue-600/80 to-blue-800/80",
      placeholderText: "Doctor and patient communicating through an interpreter in a hospital setting",
      icon: (
        <svg className="w-32 h-32 mx-auto text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      )
    },
    {
      title: dictionary.hero.carousel?.image3?.title || "Legal Interpretation",
      description: dictionary.hero.carousel?.image3?.description || "Accurate interpretation for legal proceedings",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=3840&auto=format&fit=crop",
      color: "from-indigo-600/80 to-purple-700/80",
      placeholderText: "Courtroom setting with interpreter assisting during legal proceedings",
      icon: (
        <svg className="w-32 h-32 mx-auto text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
        </svg>
      )
    }
  ];

  // Reset and start the timer for auto-rotation
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    timerRef.current = setInterval(() => {
      if (!isAnimating) {
        changeSlide((currentImage + 1) % carouselImages.length);
      }
    }, 5000); // Change image every 5 seconds
  };

  // Auto-rotate carousel
  useEffect(() => {
    resetTimer();
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentImage, isAnimating]);

  // Smooth transition between slides
  const changeSlide = (index: number) => {
    if (index === currentImage || isAnimating) return;
    
    setIsAnimating(true);
    setCurrentImage(index);
    
    // Animation cooldown to prevent rapid switching
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  // Navigate to previous image
  const prevImage = () => {
    const index = currentImage === 0 ? carouselImages.length - 1 : currentImage - 1;
    changeSlide(index);
    resetTimer();
  };

  // Navigate to next image
  const nextImage = () => {
    const index = currentImage === carouselImages.length - 1 ? 0 : currentImage + 1;
    changeSlide(index);
    resetTimer();
  };

  return (
    <section className="pt-32 pb-10 sm:pt-36 md:pt-44 lg:pt-52 sm:pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {dictionary.hero.title}
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600">
              {dictionary.hero.subtitle}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href={`/${locale}/contact`}
                className="btn-primary text-base sm:text-lg px-5 sm:px-6 py-2.5 sm:py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors"
              >
                {dictionary.hero.cta}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="btn-secondary text-base sm:text-lg px-5 sm:px-6 py-2.5 sm:py-3 bg-white border border-primary-500 text-primary-500 hover:bg-primary-50 font-medium rounded-md transition-colors"
              >
                {dictionary.hero.learnMore || "Learn More"}
              </Link>
            </div>
            
            {/* Feature Badges */}
            <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-2 sm:gap-4">
              <div className="bg-primary-50 p-2 sm:p-3 rounded-lg flex items-center">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium">Instant Connection</span>
              </div>
              <div className="bg-primary-50 p-2 sm:p-3 rounded-lg flex items-center">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium">24/7 Support</span>
              </div>
              <div className="bg-primary-50 p-2 sm:p-3 rounded-lg flex items-center">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium">100+ Languages</span>
              </div>
              <div className="bg-primary-50 p-2 sm:p-3 rounded-lg flex items-center">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium">Secure & Confidential</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2 mb-6 md:mb-0"
          >
            {/* Enhanced Image Carousel - SIMPLIFIED IMPLEMENTATION */}
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="h-full w-full relative">
                {/* Slides container */}
                <div className="h-full w-full relative">
                  {carouselImages.map((image, index) => {
                    // Calculate direction
                    let direction = 0;
                    if (index === currentImage) {
                      direction = 0;
                    } else if (
                      (index > currentImage && !(currentImage === 0 && index === carouselImages.length - 1)) || 
                      (currentImage === carouselImages.length - 1 && index === 0)
                    ) {
                      direction = 1; // Right
                    } else {
                      direction = -1; // Left
                    }
                    
                    // Determine initial and animate properties
                    const initial = { 
                      x: index === currentImage ? 0 : (direction > 0 ? '100%' : '-100%'),
                      opacity: index === currentImage ? 1 : 0
                    };
                    
                    const animate = { 
                      x: index === currentImage ? 0 : (direction > 0 ? '100%' : '-100%'),
                      opacity: index === currentImage ? 1 : 0,
                      zIndex: index === currentImage ? 1 : 0
                    };
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute inset-0 h-full w-full"
                        initial={initial}
                        animate={animate}
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.5 }
                        }}
                      >
                        {/* Background gradient with optional image overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-tr ${image.color}`}>
                          {image.image && (
                            <img 
                              src={image.image} 
                              alt={image.title}
                              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
                            />
                          )}
                        </div>
                        
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="opacity-40">
                            {image.icon}
                          </div>
                        </div>
                        
                        {/* Placeholder text - now only shown if no image is available */}
                        {!image.image && image.placeholderText && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="font-mono text-white/90 text-sm md:text-base text-center border-4 border-dashed border-white/60 p-6 rounded-lg bg-black/30 backdrop-blur-sm max-w-[85%] shadow-lg">
                              <div className="bg-white/20 py-2 px-3 rounded-md mb-3 inline-block">
                                <span className="text-white font-bold text-lg">FUTURE IMAGE</span>
                              </div>
                              <p className="text-lg">{image.placeholderText}</p>
                              <div className="mt-3 bg-white/10 px-3 py-1 rounded-full inline-block">
                                <span className="text-white/80 text-sm">Image {index + 1} of {carouselImages.length}</span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                          <motion.div
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {image.title}
                          </motion.div>
                          <motion.div
                            className="text-lg text-white max-w-md"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            {image.description}
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Navigation controls */}
                <div className="absolute inset-x-0 bottom-4 z-30 flex justify-center space-x-3">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => changeSlide(index)}
                      disabled={isAnimating}
                      className={`transition-all duration-300 focus:outline-none ${
                        index === currentImage 
                          ? 'w-8 h-2 bg-white rounded-full' 
                          : 'w-2 h-2 bg-white/50 hover:bg-white/70 rounded-full'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Arrow buttons */}
                <button 
                  onClick={prevImage}
                  disabled={isAnimating}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transform transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                
                <button 
                  onClick={nextImage}
                  disabled={isAnimating}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transform transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Placeholder indicator - note for developers - removing since we now have images */}
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md text-sm text-green-700">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <p className="font-medium">Image Carousel Active</p>
                  <p className="mt-1">Carousel with 3 rotating images loaded. Images rotate every 5 seconds or can be navigated manually.</p>
                </div>
              </div>
            </div>
            
            {/* Small feature images - keeping these from the original design */}
            <motion.div
              className="absolute -top-5 -right-5 w-36 h-36 bg-white rounded-lg shadow-lg overflow-hidden z-10 hidden md:block"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-blue-100 flex flex-col items-center justify-center p-2">
                <svg className="w-8 h-8 text-blue-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-xs text-center font-medium text-blue-700">Medical Interpretation</span>
                <span className="text-xs text-center text-blue-500 mt-1">24/7 Support</span>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-5 -left-5 w-36 h-36 bg-white rounded-lg shadow-lg overflow-hidden z-10 hidden md:block"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-indigo-100 flex flex-col items-center justify-center p-2">
                <svg className="w-8 h-8 text-indigo-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
                <span className="text-xs text-center font-medium text-indigo-700">Legal Interpretation</span>
                <span className="text-xs text-center text-indigo-500 mt-1">Certified Experts</span>
              </div>
            </motion.div>
            
            {/* Additional decorative element with image placeholder */}
            <motion.div
              className="absolute -bottom-2 right-10 w-28 h-28 bg-white rounded-lg shadow-lg overflow-hidden rotate-12 z-10 hidden md:block"
              animate={{
                rotate: [12, 5, 12],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-green-100 flex flex-col items-center justify-center p-2">
                <svg className="w-8 h-8 text-green-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-xs text-center font-medium text-green-700">Business Translation</span>
                <span className="text-xs text-center text-green-500 mt-1">Global Reach</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Service stats - Updated for better mobile display */}
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