/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7F7',
          100: '#C1E9EA',
          200: '#9DDADC',
          300: '#72CBCE',
          400: '#4DBCC0',
          500: '#35A8AC', // Main brand color from e-voque.com
          600: '#2C8B8F',
          700: '#236D71',
          800: '#1A5053',
          900: '#103436',
        },
        secondary: {
          50: '#EEE8F8',
          100: '#D4CAFE',
          200: '#BA9CE4',
          300: '#A17CCA',
          400: '#865CB0',
          500: '#6C4796', // Secondary brand color from e-voque.com
          600: '#593B7A',
          700: '#462F5E',
          800: '#342342',
          900: '#221726',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}; 