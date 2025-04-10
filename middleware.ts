import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales } from './app/i18n';

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;
  
  // Skip Next.js internal paths and static files
  if (
    pathname.startsWith('/_next') || 
    pathname.includes('/api/') ||
    pathname.startsWith('/images/') ||
    pathname.endsWith('.jpg') || 
    pathname.endsWith('.png') || 
    pathname.endsWith('.svg') || 
    pathname.endsWith('.ico')
  ) {
    return NextResponse.next();
  }

  // Root path redirect - always go to /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If the pathname doesn't have a locale, redirect to default locale (en)
  if (!pathnameHasLocale) {
    // Create new URL with the /en prefix
    const url = new URL(`/en${pathname}`, request.url);
    
    // Forward the search params
    url.search = request.nextUrl.search;
    
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Run this middleware on all routes except static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 