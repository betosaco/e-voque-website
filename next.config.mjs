/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 recommendation: explicitly disable legacy i18n config when using app router
  i18n: null,
  
  // Disable ESLint during build
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
  // Configure allowed image domains
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  
  // Set minification option 
  // Note: swcMinify is now enabled by default in Next.js 15
  
  // Configure server component settings
  // Use serverExternalPackages instead of serverComponentsExternalPackages
  serverExternalPackages: [],
  
  // Fix for potential route parameter issues
  typescript: {
    // Allow dynamic route parameters to be properly typed
    ignoreBuildErrors: false,
  },
};

export default nextConfig; 