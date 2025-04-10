'use client';

import Link from 'next/link';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram 
} from 'react-icons/fa';

interface FooterProps {
  dictionary: {
    nav: {
      home: string;
      about: string;
      services: string;
      contact: string;
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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link href={`/${locale}`} className="flex items-center">
              <span className="text-2xl font-bold text-primary-400">E-Voque</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Breaking language barriers through high-quality over-the-phone interpretation.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#about`} className="text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#contact`} className="text-gray-400 hover:text-primary-300 transition-colors">
                  {dictionary.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}#services`} className="text-gray-400 hover:text-primary-300 transition-colors">
                  Medical Interpretation
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="text-gray-400 hover:text-primary-300 transition-colors">
                  Legal Interpretation
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="text-gray-400 hover:text-primary-300 transition-colors">
                  Business Interpretation
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="text-gray-400 hover:text-primary-300 transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                123 Interpretation St<br />
                San Francisco, CA 94105
              </li>
              <li className="text-gray-400">
                <a href="tel:+15551234567" className="hover:text-primary-300 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-gray-400">
                <a href="mailto:info@e-voque.com" className="hover:text-primary-300 transition-colors">
                  info@e-voque.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {currentYear} E-Voque. {dictionary.footer.rights}.
            </div>
            <div className="flex space-x-6">
              <Link href={`/${locale}/privacy`} className="hover:text-primary-300 transition-colors">
                {dictionary.footer.privacy}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-primary-300 transition-colors">
                {dictionary.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 