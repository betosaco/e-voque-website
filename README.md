# E-Voque Website

A modern, multilingual website for E-Voque, a provider of over-the-phone interpretation services connecting businesses and individuals with professional interpreters.

## Features

- **Multilingual Support**: Available in multiple languages with easy language switching
- **Responsive Design**: Fully responsive layout for all devices
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **Component-Based**: Modular architecture for easy maintenance

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/e-voque-website.git
   cd e-voque-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app` - The main application code
  - `/[locale]` - Pages for each language
  - `/components` - Reusable UI components
  - `/i18n` - Internationalization configuration and dictionaries

## Deployment

The site is deployed on Vercel. Every push to the main branch triggers a new deployment.

## License

[MIT](LICENSE)
