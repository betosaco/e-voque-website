'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  dictionary: {
    nav: {
      home: string;
      about: string;
      services: string;
      wellness: string;
      contact: string;
    };
    hero?: {
      applyNow?: string;
    };
  };
  locale: string;
}

export default function Navbar({ dictionary, locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === `/${locale}`;
  
  // Track active section for the homepage
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Only track active sections on the homepage
      if (isHomePage) {
        const sections = ['about', 'services', 'benefits', 'wellness', 'contact'];
        
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            // If the section is in view and near the top
            if (rect.top <= 200 && rect.bottom >= 200) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Only scroll to section if explicitly on homepage
  // This function is no longer used since we're always navigating to inner pages
  
  // Helper to check if a navbar item is active
  const isActive = (path: string, sectionId?: string): boolean => {
    if (isHomePage && sectionId) {
      return activeSection === sectionId;
    }
    // Improved active state detection for inner pages
    return pathname === path || pathname.startsWith(path + '/');
  };

  const NavLink = ({ 
    pagePath, 
    sectionId, 
    children 
  }: { 
    pagePath: string, 
    sectionId?: string, 
    children: React.ReactNode 
  }) => {
    const href = pagePath;
    const active = isActive(pagePath, sectionId);
    
    const onClick = () => {
      setIsOpen(false);
    };

    return (
      <Link
        href={href}
        className={`font-medium transition-colors ${
          active 
            ? 'text-primary-500 font-bold'
            : 'text-gray-700 hover:text-primary-500'
        }`}
        onClick={onClick}
      >
        {children}
        {active && (
          <div className="h-0.5 bg-primary-500 mt-1 rounded-full" />
        )}
      </Link>
    );
  };

  // Get the "Apply Now" text from dictionary or use a default
  const applyNowText = dictionary.hero?.applyNow || "Apply here";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation row */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <span className="text-2xl font-bold text-primary-500">E-Voque</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink pagePath={`/${locale}`}>
              {dictionary.nav.home}
            </NavLink>
            <NavLink 
              pagePath={`/${locale}/about`} 
              sectionId="about"
            >
              {dictionary.nav.about}
            </NavLink>
            <NavLink 
              pagePath={`/${locale}/services`} 
              sectionId="services"
            >
              {dictionary.nav.services}
            </NavLink>
            <NavLink 
              pagePath={`/${locale}/benefits`} 
              sectionId="benefits"
            >
              {dictionary.nav.wellness}
            </NavLink>
            <NavLink 
              pagePath={`/${locale}/contact`} 
              sectionId="contact"
            >
              {dictionary.nav.contact}
            </NavLink>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="ml-4 text-gray-700 hover:text-primary-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Second row with Apply Now button - full width */}
      <div className="w-full mt-4 py-4 bg-primary-500 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
        <div className="text-white text-xl font-semibold">Start working with us now!</div>
        <Link
          href={`/${locale}/apply`}
          className="bg-white hover:bg-gray-100 text-primary-500 font-bold px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300 text-base"
        >
          {applyNowText}
          <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              <Link
                href={`/${locale}`}
                className={`block px-3 py-2 rounded-md ${
                  isActive(`/${locale}`) 
                    ? 'bg-primary-50 text-primary-500 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.home}
              </Link>
              <Link
                href={`/${locale}/about`}
                className={`block px-3 py-2 rounded-md ${
                  isActive(`/${locale}/about`) 
                    ? 'bg-primary-50 text-primary-500 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.about}
              </Link>
              <Link
                href={`/${locale}/services`}
                className={`block px-3 py-2 rounded-md ${
                  isActive(`/${locale}/services`) 
                    ? 'bg-primary-50 text-primary-500 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.services}
              </Link>
              <Link
                href={`/${locale}/benefits`}
                className={`block px-3 py-2 rounded-md ${
                  isActive(`/${locale}/benefits`) 
                    ? 'bg-primary-50 text-primary-500 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.wellness}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className={`block px-3 py-2 rounded-md ${
                  isActive(`/${locale}/contact`) 
                    ? 'bg-primary-50 text-primary-500 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.contact}
              </Link>
              <Link
                href={`/${locale}/apply`}
                className="block px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg w-full text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                {applyNowText}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 