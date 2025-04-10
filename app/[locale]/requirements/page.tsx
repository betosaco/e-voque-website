import { getDictionary, Locale, locales, Dictionary } from '../../i18n';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  AcademicCapIcon,
  LanguageIcon,
  ComputerDesktopIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  BriefcaseIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface RequirementsContentProps {
  locale: string;
  dictionary: Dictionary;
}

export default async function RequirementsPage(props: PageProps) {
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
  
  return <RequirementsContent locale={safeLocale} dictionary={dictionary} />;
}

function RequirementsContent({ locale, dictionary }: RequirementsContentProps) {
  const requirements = [
    {
      icon: <LanguageIcon className="h-8 w-8 text-primary-600" />,
      title: "Language Proficiency",
      description: "Fluency in at least two languages is required. You must be able to speak, read, and write with native or near-native proficiency in your working languages.",
      details: [
        "Native or near-native fluency in your primary languages",
        "Strong comprehension of dialects and idioms",
        "Excellent accent and pronunciation",
        "Ability to switch between languages smoothly"
      ]
    },
    {
      icon: <AcademicCapIcon className="h-8 w-8 text-primary-600" />,
      title: "Education & Certification",
      description: "Formal education or certification in interpretation/translation is highly preferred, but equivalent experience may be considered.",
      details: [
        "Degree in translation, interpretation, or linguistics (preferred)",
        "Professional certification from recognized bodies",
        "Specialized training in medical, legal, or technical fields",
        "Continuing education in language skills"
      ]
    },
    {
      icon: <BriefcaseIcon className="h-8 w-8 text-primary-600" />,
      title: "Professional Experience",
      description: "Prior experience in interpretation or translation services is required, with preference given to those with specialized industry experience.",
      details: [
        "Minimum 1-2 years of professional interpretation experience",
        "Experience in over-the-phone or video interpretation",
        "Industry-specific experience (medical, legal, business)",
        "Client-facing communication skills"
      ]
    },
    {
      icon: <ComputerDesktopIcon className="h-8 w-8 text-primary-600" />,
      title: "Technical Requirements",
      description: "Our remote interpreters need reliable equipment and a suitable work environment to deliver quality service.",
      details: [
        "Reliable computer with updated operating system",
        "High-speed internet connection (minimum 25 Mbps)",
        "Professional headset with noise-cancellation",
        "Quiet, private workspace free from distractions"
      ]
    },
    {
      icon: <ClockIcon className="h-8 w-8 text-primary-600" />,
      title: "Availability & Flexibility",
      description: "We serve clients 24/7 and value interpreters who can offer flexible scheduling options.",
      details: [
        "Ability to commit to regular weekly hours",
        "Preference for those available during high-demand times",
        "Reliability in adhering to scheduled shifts",
        "Responsiveness to urgent interpretation needs"
      ]
    },
    {
      icon: <DocumentCheckIcon className="h-8 w-8 text-primary-600" />,
      title: "Legal Requirements",
      description: "All interpreters must meet specific legal requirements to work with our platform.",
      details: [
        "Legal authorization to work in your country of residence",
        "Ability to pass background checks where required",
        "Willingness to sign confidentiality agreements",
        "Compliance with data protection regulations"
      ]
    }
  ];

  return (
    <>
      <Navbar dictionary={dictionary} locale={locale} />
      <div className="pt-44 pb-16 sm:pt-46 md:pt-48 lg:pt-52 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interpreter Requirements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about what it takes to become a part of our global network of professional interpreters and translators.
            </p>
          </div>
          
          {/* Requirements overview */}
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <UserGroupIcon className="h-12 w-12 text-primary-600 md:mr-6 mb-4 md:mb-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Our Elite Team of Interpreters</h2>
                <p className="text-lg text-gray-700">
                  E-Voque is always looking for talented language professionals to join our network. We maintain high standards to ensure quality service for our clients. Review the requirements below to see if you qualify.
                </p>
              </div>
            </div>
          </div>
          
          {/* Main requirements list */}
          <div className="space-y-8 mb-16">
            {requirements.map((requirement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {requirement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{requirement.title}</h3>
                      <p className="text-gray-700 mb-4">{requirement.description}</p>
                      
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                        <ul className="space-y-2">
                          {requirement.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Application process section */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-primary-600">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Submit Your Application</h3>
                  <p className="text-gray-700">
                    Complete our online application form with your personal information, language skills, education, and professional experience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-primary-600">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Initial Screening</h3>
                  <p className="text-gray-700">
                    Our recruitment team will review your application and contact you for an initial phone screening if your qualifications match our needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-primary-600">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Language Assessment</h3>
                  <p className="text-gray-700">
                    Qualified candidates will complete a comprehensive language assessment to evaluate fluency, accuracy, and interpretation skills.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-primary-600">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Interview & Background Check</h3>
                  <p className="text-gray-700">
                    Successful candidates will have an interview with our team and complete a background check as required for the position.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-primary-600">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Onboarding & Training</h3>
                  <p className="text-gray-700">
                    Once accepted, you&apos;ll complete our onboarding process and training to familiarize yourself with our platform and procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-primary-500 text-white p-10 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              If you meet our requirements and are passionate about connecting people across languages, we want to hear from you!
            </p>
            <a 
              href={`/${locale}/apply`} 
              className="inline-block bg-white text-primary-500 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <Footer dictionary={dictionary} locale={locale} />
    </>
  );
}
