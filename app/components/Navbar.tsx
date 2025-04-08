'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <Link
              href={`/${locale}`}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {dictionary.nav.home}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {dictionary.nav.about}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {dictionary.nav.services}
            </Link>
            <Link
              href={`/${locale}/wellness`}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {dictionary.nav.wellness}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {dictionary.nav.contact}
            </Link>
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
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.home}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.about}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.services}
              </Link>
              <Link
                href={`/${locale}/wellness`}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {dictionary.nav.wellness}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
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