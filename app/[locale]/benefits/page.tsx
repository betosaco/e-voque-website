import { getDictionary, Locale, locales, Dictionary } from '../../i18n';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  HeartIcon,
  UserGroupIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface BenefitsContentProps {
  locale: string;
  dictionary: Dictionary;
}

export default async function BenefitsPage(props: PageProps) {
  // Await the params object before accessing its properties
  const params = await props.params;
  const locale = params.locale;
  
  // Get locale from params
  
  // This is needed since we can't use localeParam directly
  
  // Validate locale
  if (!locales.includes(safeLocale as Locale)) {
    notFound();
  }
  
  // Get dictionary
  const dictionary = await getDictionary(safeLocale as Locale);
  
  return <BenefitsContent locale={safeLocale} dictionary={dictionary} />;
}

// Separate component to avoid direct rendering with params
async function BenefitsContent({ locale, dictionary }: BenefitsContentProps) {
  // Get employee benefits translations
  const t = dictionary.employeeBenefits || {
    // Default fallback if translation is missing
    pageTitle: "Comprehensive Employee Benefits",
    pageSubtitle: "Attract and retain top talent with competitive benefits packages that include health, retirement, and wellness solutions.",
    overviewTitle: "Enhance Your Employee Experience",
    overviewDescription: "Our customizable benefits packages help you create a workplace where employees feel valued, supported, and motivated to perform at their best.",
    exploreButton: "Explore Benefits Solutions",
    strategicTitle: "Strategic Benefits Solutions",
    strategicDescription1: "In today's competitive job market, a comprehensive benefits package is more than just a perk—it's a strategic necessity for attracting and retaining top talent.",
    strategicDescription2: "Our customizable employee benefits solutions help you create a workplace where your team feels valued, supported, and motivated to perform at their best.",
    employeesCovered: "Employees covered",
    corporateClients: "Corporate clients",
    benefitsManagement: "Benefits Management",
    tailoredSolutions: "Tailored solutions for businesses of all sizes",
    solutionsTitle: "Our Benefits Solutions",
    keyFeatures: "Key Features:",
    learnMore: "Learn More",
    ctaTitle: "Elevate Your Employee Benefits Today",
    ctaDescription: "Contact us to learn how our customizable employee benefits solutions, including wellness programs, can help you attract and retain top talent.",
    requestConsultation: "Request a Consultation",
    viewPricing: "View Pricing",
    health: {
      title: "Comprehensive Health Insurance",
      description: "Top-tier health plans that keep your employees and their families protected with minimal out-of-pocket expenses.",
      features: [
        "Medical, dental, and vision coverage",
        "Low deductibles and copays",
        "Prescription drug benefits",
        "Telehealth services included"
      ]
    },
    retirement: {
      title: "Retirement & Financial Planning",
      description: "Help employees secure their future with competitive retirement plans and financial wellness resources.",
      features: [
        "401(k) with employer matching",
        "Financial planning resources",
        "Investment education",
        "Retirement readiness workshops"
      ]
    },
    professional: {
      title: "Professional Development",
      description: "Invest in your employees' growth with education benefits and career advancement opportunities.",
      features: [
        "Tuition reimbursement",
        "Professional certification support",
        "Mentorship programs",
        "Conference and workshop stipends"
      ]
    },
    wellness: {
      title: "Wellness Programs",
      description: "Empower employees to lead healthier lives with our comprehensive wellness platform.",
      features: [
        "Guided meditation and yoga sessions",
        "Fitness and flexibility training",
        "Mental health resources",
        "Stress management techniques"
      ]
    }
  };

  // Employee benefits
  const employeeBenefits = [
    {
      id: "health",
      icon: <ShieldCheckIcon className="h-12 w-12 text-blue-500" />,
      title: t.health.title,
      description: t.health.description,
      benefits: t.health.features,
      color: "bg-gradient-to-r from-blue-50 to-indigo-50",
      iconColor: "text-blue-500",
      image: (
        <div className="h-64 bg-gradient-to-r from-blue-200 to-blue-100 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <ShieldCheckIcon className="w-32 h-32 text-blue-400 opacity-50" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-transparent h-16"></div>
          <div className="absolute bottom-2 left-4 text-white font-medium">{t.health.title}</div>
        </div>
      )
    },
    {
      id: "retirement",
      icon: <CurrencyDollarIcon className="h-12 w-12 text-green-500" />,
      title: t.retirement.title,
      description: t.retirement.description,
      benefits: t.retirement.features,
      color: "bg-gradient-to-r from-green-50 to-emerald-50",
      iconColor: "text-green-500",
      image: (
        <div className="h-64 bg-gradient-to-r from-green-200 to-green-100 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <CurrencyDollarIcon className="w-32 h-32 text-green-400 opacity-50" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-transparent h-16"></div>
          <div className="absolute bottom-2 left-4 text-white font-medium">{t.retirement.title}</div>
        </div>
      )
    },
    {
      id: "professional",
      icon: <AcademicCapIcon className="h-12 w-12 text-purple-500" />,
      title: t.professional.title,
      description: t.professional.description,
      benefits: t.professional.features,
      color: "bg-gradient-to-r from-purple-50 to-pink-50",
      iconColor: "text-purple-500",
      image: (
        <div className="h-64 bg-gradient-to-r from-purple-200 to-purple-100 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <AcademicCapIcon className="w-32 h-32 text-purple-400 opacity-50" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-500 to-transparent h-16"></div>
          <div className="absolute bottom-2 left-4 text-white font-medium">{t.professional.title}</div>
        </div>
      )
    },
    {
      id: "wellness",
      icon: <HeartIcon className="h-12 w-12 text-red-500" />,
      title: t.wellness.title,
      description: t.wellness.description,
      benefits: t.wellness.features,
      color: "bg-gradient-to-r from-red-50 to-orange-50",
      iconColor: "text-red-500",
      image: (
        <div className="h-64 bg-gradient-to-r from-red-200 to-red-100 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <HeartIcon className="w-32 h-32 text-red-400 opacity-50" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-500 to-transparent h-16"></div>
          <div className="absolute bottom-2 left-4 text-white font-medium">{t.wellness.title}</div>
        </div>
      )
    },
  ];

  return (
    <>
      <Navbar dictionary={dictionary} locale={locale} />
      <div className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero section */}
          <div className="text-center mb-16">
            <div className="inline-flex mb-6">
              <BriefcaseIcon className="h-16 w-16 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.pageTitle}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.pageSubtitle}
            </p>
          </div>
          
          {/* Benefits overview image placeholder */}
          <div className="relative w-full h-96 bg-gradient-to-r from-primary-100 to-indigo-100 rounded-xl overflow-hidden mb-20">
            <div className="absolute inset-0 opacity-30">
              <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full h-full p-10">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="bg-white bg-opacity-50 rounded-lg flex items-center justify-center">
                    {i % 4 === 0 && <ShieldCheckIcon className="w-20 h-20 text-blue-300" />}
                    {i % 4 === 1 && <CurrencyDollarIcon className="w-20 h-20 text-green-300" />}
                    {i % 4 === 2 && <AcademicCapIcon className="w-20 h-20 text-purple-300" />}
                    {i % 4 === 3 && <HeartIcon className="w-20 h-20 text-red-300" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.overviewTitle}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {t.overviewDescription}
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                  {t.exploreButton}
                </button>
              </div>
            </div>
          </div>
          
          {/* About Employee Benefits */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.strategicTitle}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {t.strategicDescription1}
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {t.strategicDescription2}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <UserGroupIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium">250,000+</div>
                    <div className="text-sm text-gray-500">{t.employeesCovered}</div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <BriefcaseIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium">500+</div>
                    <div className="text-sm text-gray-500">{t.corporateClients}</div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-primary-100 to-indigo-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
                      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                        <BriefcaseIcon className="h-16 w-16 text-primary-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{t.benefitsManagement}</h3>
                    <p className="mt-2 text-gray-600">{t.tailoredSolutions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t.solutionsTitle}</h2>
            
            <div className="space-y-16">
              {employeeBenefits.map((benefit, index) => (
                <div key={benefit.id} className={`p-8 rounded-xl ${benefit.color}`}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex flex-col justify-center">
                      <div className={`p-3 rounded-full ${benefit.iconColor} bg-white inline-flex mb-4 w-min`}>
                        {benefit.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                      <p className="text-lg text-gray-700 mb-6">{benefit.description}</p>
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">{t.keyFeatures}</h4>
                        <ul className="space-y-2">
                          {benefit.benefits.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="mt-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-colors w-max">
                        {t.learnMore}
                      </button>
                    </div>
                    <div className={index % 2 === 1 ? "lg:order-first" : ""}>
                      {benefit.image}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-primary-600 text-white p-10 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-md transition-colors">
                {t.requestConsultation}
              </button>
              <button className="bg-primary-700 border border-white hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-md transition-colors">
                {t.viewPricing}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer dictionary={dictionary} locale={locale} />
    </>
  );
} 
