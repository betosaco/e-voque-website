'use client';

import Link from 'next/link';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram 
} from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

interface FooterProps {
  dictionary: {
    nav: {
      home: string;
      about: string;
      services: string;
      contact: string;
      wellness?: string; // Making wellness optional to handle older dictionary versions
    };
    footer: {
      rights: string;
      privacy: string;
      terms: string;
    };
  };
  locale: string;
}

export default function Footer({ dictionary, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl pt-10 pb-6 px-4 sm:px-6 lg:px-8">
        {/* Top section with logo, social links, and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-800">
          {/* Logo and social links */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-300">E-Voque</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-md">
              Professional over-the-phone interpretation services connecting businesses and individuals with expert interpreters in over 100 languages.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url}
                  className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-800 text-primary-300 hover:bg-primary-700 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.url.split('https://')[1].split('.com')[0]} page`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">Stay Updated</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights on interpretation services.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 flex-grow text-sm sm:text-base"
                required
              />
              <button 
                type="submit" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md transition-colors text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom section with links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-8 py-8">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary-300">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/benefits`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.nav.wellness || "Benefits"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary-300">Services</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href={`/${locale}/services#medical`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  Medical Interpretation
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#legal`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  Legal Interpretation
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#business`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  Business Interpretation
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#emergency`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary-300">Legal</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href={`/${locale}/privacy`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-sm sm:text-base text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary-300">Contact</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-300 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-400">Alcanfores 410, Miraflores, Lima, Peru</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-300 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-300 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-400">info@e-voque.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-gray-800 text-center sm:flex sm:justify-between sm:items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} E-Voque. {dictionary.footer.rights}.
          </p>
          <div className="mt-4 sm:mt-0 flex justify-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
} 