import { getDictionary, Locale, locales } from '../../i18n';
import { notFound } from 'next/navigation';
import BenefitsContent from '../../components/BenefitsContent';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BenefitsPage(props: PageProps) {
  // Await the params object before accessing its properties
  const params = await props.params;
  const locale = params.locale;
  
  // Define safeLocale
  const safeLocale = typeof locale === "string" ? locale : "en";
  
  // Validate locale
  if (!locales.includes(safeLocale as Locale)) {
    notFound();
  }
  
  // Get dictionary
  const dictionary = await getDictionary(safeLocale as Locale);
  
  return <BenefitsContent locale={safeLocale} dictionary={dictionary} />;
} 
