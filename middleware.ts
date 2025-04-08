import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales } from './app/i18n';

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If the pathname doesn't have a locale, redirect to default locale (en)
  if (!pathnameHasLocale) {
    const url = new URL(`/en${pathname === '/' ? '' : pathname}`, request.url);
    
    // Forward the search params
    url.search = request.nextUrl.search;
    
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Run this middleware on all routes
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 