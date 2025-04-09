import { getDictionary, Locale, locales, Dictionary } from '../i18n';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

// Create an interface for the PageContent component props
interface PageContentProps {
  locale: string;
  dictionary: Dictionary;
}

/**
 * Home page component using Next.js 15 recommended pattern for route parameters
 * Properly awaits the params object before accessing its properties
 */
export default async function Home(props: PageProps) {
  // Await the params object before accessing its properties
  const params = await props.params;
  const locale = params.locale;
  
  // Define safeLocale
  // Define safeLocale
  const safeLocale = typeof locale === "string" ? locale : "en";
  
  
  if (!locale || typeof locale !== 'string') {
    return notFound();
  }

  // Safely access locale directly
  
  // Validate locale against supported locales
  if (!locales.includes(safeLocale as Locale)) {
    return notFound();
  }
  
  // Get dictionary
  const dictionary = await getDictionary(safeLocale as Locale);
  
  // Pass data to the client component
  return <PageContent locale={safeLocale} dictionary={dictionary} />;
}

// Separate component to avoid direct rendering with params
async function PageContent({ locale, dictionary }: PageContentProps) {
  // Dynamic imports
  const Navbar = (await import('../components/Navbar')).default;
  const Hero = (await import('../components/Hero')).default;
  const AboutUs = (await import('../components/AboutUs')).default;
  const Services = (await import('../components/Services')).default;
  const Benefits = (await import('../components/Benefits')).default;
  const WellnessBenefits = (await import('../components/WellnessBenefits')).default;
  const Contact = (await import('../components/Contact')).default;
  const Footer = (await import('../components/Footer')).default;
  
  return (
    <main className="overflow-x-hidden">
      <Navbar dictionary={dictionary} locale={locale} />
      <Hero dictionary={dictionary} locale={locale} />
      <section id="about">
        <AboutUs dictionary={dictionary} />
      </section>
      <section id="services">
        <Services dictionary={dictionary} />
      </section>
      <section id="benefits">
        <Benefits dictionary={dictionary} />
      </section>
      <section id="wellness">
        <WellnessBenefits dictionary={dictionary} />
      </section>
      <section id="contact">
        <Contact dictionary={dictionary} />
      </section>
      <Footer dictionary={dictionary} locale={locale} />
    </main>
  );
} 
