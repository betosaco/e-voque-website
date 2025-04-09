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
      
      // Update active section based on scroll position when on homepage
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

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
  };
  
  // Helper to check if a navbar item is active
  const isActive = (path: string, sectionId?: string): boolean => {
    if (isHomePage && sectionId) {
      return activeSection === sectionId;
    }
    return pathname === path;
  };

  const NavLink = ({ href, sectionId, children }: { href: string, sectionId?: string, children: React.ReactNode }) => {
    const active = isActive(href, sectionId);
    
    const onClick = (e: React.MouseEvent) => {
      if (isHomePage && sectionId) {
        e.preventDefault();
        scrollToSection(sectionId);
      } else {
        setIsOpen(false);
      }
    };

    return (
      <Link
        href={href}
        className={`font-medium transition-colors ${
          active 
            ? 'text-primary-600 font-bold'
            : 'text-gray-700 hover:text-primary-600'
        }`}
        onClick={onClick}
      >
        {children}
        {active && (
          <div className="h-0.5 bg-primary-600 mt-1 rounded-full" />
        )}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">E-Voque</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href={`/${locale}`}>
              {dictionary.nav.home}
            </NavLink>
            <NavLink 
              href={isHomePage ? `/${locale}#about` : `/${locale}/about`} 
              sectionId="about"
            >
              {dictionary.nav.about}
            </NavLink>
            <NavLink 
              href={isHomePage ? `/${locale}#services` : `/${locale}/services`} 
              sectionId="services"
            >
              {dictionary.nav.services}
            </NavLink>
            <NavLink 
              href={isHomePage ? `/${locale}#benefits` : `/${locale}/benefits`} 
              sectionId="benefits"
            >
              {dictionary.nav.wellness}
            </NavLink>
            <NavLink 
              href={isHomePage ? `/${locale}#contact` : `/${locale}/contact`} 
              sectionId="contact"
            >
              {dictionary.nav.contact}
            </NavLink>
            <LanguageSwitcher />
            <Link
              href={`/${locale}/contact`}
              className="btn-primary"
            >
              {dictionary.nav.contact}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="ml-4 text-gray-700 hover:text-primary-600 focus:outline-none"
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
                    ? 'bg-primary-50 text-primary-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.home}
              </Link>
              <Link
                href={isHomePage ? `/${locale}#about` : `/${locale}/about`}
                className={`block px-3 py-2 rounded-md ${
                  isActive(`/${locale}/about`, 'about') 
                    ? 'bg-primary-50 text-primary-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => isHomePage ? scrollToSection('about') : setIsOpen(false)}
              >
                {dictionary.nav.about}
              </Link>
              <Link
                href={isHomePage ? `/${locale}#services` : `/${locale}/services`}
                className={`block px-3 py-2 rounded-md ${
                  isActive(`/${locale}/services`, 'services') 
                    ? 'bg-primary-50 text-primary-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => isHomePage ? scrollToSection('services') : setIsOpen(false)}
              >
                {dictionary.nav.services}
              </Link>
              <Link
                href={isHomePage ? `/${locale}#benefits` : `/${locale}/benefits`}
                className={`block px-3 py-2 rounded-md ${
                  isActive(`/${locale}/benefits`, 'benefits') 
                    ? 'bg-primary-50 text-primary-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => isHomePage ? scrollToSection('benefits') : setIsOpen(false)}
              >
                {dictionary.nav.wellness}
              </Link>
              <Link
                href={isHomePage ? `/${locale}#contact` : `/${locale}/contact`}
                className={`block px-3 py-2 rounded-md ${
                  isActive(`/${locale}/contact`, 'contact') 
                    ? 'bg-primary-50 text-primary-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => isHomePage ? scrollToSection('contact') : setIsOpen(false)}
              >
                {dictionary.nav.contact}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="block px-3 py-2 btn-primary w-full text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.contact}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 