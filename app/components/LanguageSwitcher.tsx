'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales } from '../i18n';
import { useState } from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Extract the current locale from the pathname
  const currentPathnameParts = pathname.split('/');
  const currentLocale = currentPathnameParts[1] || 'en'; // Default to 'en' if not found

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (locale: string) => {
    if (!pathname) return;
    
    // Replace the current locale in the pathname with the new locale
    const newPathnameParts = [...currentPathnameParts];
    newPathnameParts[1] = locale;
    const newPathname = newPathnameParts.join('/');
    
    router.push(newPathname);
    setIsOpen(false);
  };

  const getLanguageName = (locale: string) => {
    switch (locale) {
      case 'en':
        return 'English';
      case 'es':
        return 'Español';
      default:
        return locale.toUpperCase();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
        aria-expanded={isOpen}
      >
        <GlobeAltIcon className="h-5 w-5" />
        <span>{getLanguageName(currentLocale)}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-lg z-10">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => changeLanguage(locale)}
              className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-100 ${
                locale === currentLocale ? 'font-bold' : 'font-normal'
              }`}
            >
              {getLanguageName(locale)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 