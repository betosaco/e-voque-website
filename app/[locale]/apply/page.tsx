import { getDictionary, Locale, locales, Dictionary } from '../../i18n';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  DocumentTextIcon,
  UserIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  HeartIcon,
  ClockIcon,
  AcademicCapIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import React from 'react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface ApplyContentProps {
  locale: string;
  dictionary: Dictionary;
}

export default async function ApplyPage(props: PageProps) {
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
  
  return <ApplyContent locale={safeLocale} dictionary={dictionary} />;
}

function ApplyContent({ locale, dictionary }: ApplyContentProps) {
  // Get the apply dictionary
  const applyDict = dictionary.apply || {};
  
  // Benefits programs information
  const benefitsPrograms = [
    {
      icon: <CurrencyDollarIcon className="h-8 w-8 text-green-500" />,
      title: applyDict.benefitsPrograms?.compensation?.title || "Competitive Compensation",
      description: applyDict.benefitsPrograms?.compensation?.description || "Earn top rates based on your skills and experience. We offer some of the most competitive pay in the industry.",
      features: applyDict.benefitsPrograms?.compensation?.features || [
        "Transparent pay structure",
        "Performance bonuses",
        "Timely payments",
        "Referral incentives"
      ]
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-red-500" />,
      title: applyDict.benefitsPrograms?.health?.title || "Health & Wellness",
      description: applyDict.benefitsPrograms?.health?.description || "We care about your wellbeing. Take advantage of our health benefits designed for remote professionals.",
      features: applyDict.benefitsPrograms?.health?.features || [
        "Health insurance options",
        "Mental health resources",
        "Wellness stipends",
        "Virtual fitness classes"
      ]
    },
    {
      icon: <ClockIcon className="h-8 w-8 text-blue-500" />,
      title: applyDict.benefitsPrograms?.flexibility?.title || "Flexible Scheduling",
      description: applyDict.benefitsPrograms?.flexibility?.description || "Work when it suits you. Our platform allows you to set your availability and take control of your work-life balance.",
      features: applyDict.benefitsPrograms?.flexibility?.features || [
        "Set your own hours",
        "No minimum requirements",
        "Advance scheduling available",
        "Seamless time tracking"
      ]
    },
    {
      icon: <AcademicCapIcon className="h-8 w-8 text-purple-500" />,
      title: applyDict.benefitsPrograms?.development?.title || "Professional Development",
      description: applyDict.benefitsPrograms?.development?.description || "Grow your skills and advance your career with our training and certification opportunities.",
      features: applyDict.benefitsPrograms?.development?.features || [
        "Certification reimbursements",
        "Skill development workshops",
        "Language proficiency testing",
        "Professional mentoring"
      ]
    },
    {
      icon: <BuildingOfficeIcon className="h-8 w-8 text-teal-500" />,
      title: applyDict.benefitsPrograms?.office?.title || "Remote Office Access",
      description: applyDict.benefitsPrograms?.office?.description || "Access to our premium coworking space at MatMax Cowork in Miraflores when you want a change of scenery.",
      features: applyDict.benefitsPrograms?.office?.features || [
        "Located at Alcanfores 410, Miraflores",
        "Full office amenities",
        "Meeting rooms for client calls",
        "Networking opportunities"
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
              {applyDict.pageTitle || "Join Our Team of Experts"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {applyDict.pageSubtitle || "Apply today to become part of our global network of professional interpreters and translators."}
            </p>
          </div>
          
          {/* Main content with video, tabs and form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left column - Video and Benefits */}
            <div>
              {/* Video placeholder */}
              <div className="mb-8 bg-gray-100 rounded-xl overflow-hidden aspect-video relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-md w-full">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{applyDict.videoTitle || "Why Join E-Voque"}</h3>
                    <p className="text-gray-700 mb-4">{applyDict.videoDescription || "Hear from our interpreters about their experience working with us"}</p>
                    <p className="text-gray-500 text-sm mt-2">Future video content</p>
                  </div>
                </div>
              </div>
              
              {/* Benefits tabs */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{applyDict.benefitsTitle || "Our Benefits Programs"}</h2>
                  
                  <Tabs defaultValue="compensation" className="w-full">
                    <TabsList className="grid grid-cols-3 lg:grid-cols-5 mb-6">
                      <TabsTrigger value="compensation">{applyDict.benefitsPrograms?.compensation?.title?.split(' ')[0] || "Compensation"}</TabsTrigger>
                      <TabsTrigger value="health">{applyDict.benefitsPrograms?.health?.title?.split(' ')[0] || "Health"}</TabsTrigger>
                      <TabsTrigger value="flexibility">{applyDict.benefitsPrograms?.flexibility?.title?.split(' ')[0] || "Flexibility"}</TabsTrigger>
                      <TabsTrigger value="development">{applyDict.benefitsPrograms?.development?.title?.split(' ')[0] || "Development"}</TabsTrigger>
                      <TabsTrigger value="office">{applyDict.benefitsPrograms?.office?.title?.split(' ')[0] || "Office"}</TabsTrigger>
                    </TabsList>
                    
                    {benefitsPrograms.map((program, index) => (
                      <TabsContent key={index} value={Object.keys({compensation: 1, health: 1, flexibility: 1, development: 1, office: 1})[index]}>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            {program.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                            <p className="text-gray-600 mb-4">{program.description}</p>
                            <ul className="space-y-2">
                              {program.features.map((feature: string, i: number) => (
                                <li key={i} className="flex items-center">
                                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </div>
            </div>
            
            {/* Right column - Application Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{applyDict.formTitle || "Application Form"}</h2>
              <p className="text-gray-600 mb-6">{applyDict.formDescription || "Complete the form below to apply for a position as an interpreter or translator with E-Voque."}</p>
              
              <form className="space-y-6">
                {/* Personal Information Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <UserIcon className="h-5 w-5 mr-2 text-primary-600" />
                    {applyDict.personalInfo?.title || "Personal Information"}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {applyDict.personalInfo?.fullName || "Full Name *"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          {applyDict.personalInfo?.email || "Email Address *"}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          {applyDict.personalInfo?.phone || "Phone Number *"}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        {applyDict.personalInfo?.location || "Location"}
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="City, Country"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Professional Information Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BriefcaseIcon className="h-5 w-5 mr-2 text-primary-600" />
                    {applyDict.professionalInfo?.title || "Professional Information"}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-1">
                        {applyDict.professionalInfo?.languages || "Languages (fluent in) *"}
                      </label>
                      <input
                        type="text"
                        id="languages"
                        name="languages"
                        placeholder="e.g., English, Spanish, Mandarin"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                          {applyDict.professionalInfo?.experience || "Years of Experience *"}
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                          required
                        >
                          <option value="">{applyDict.professionalInfo?.experienceOptions?.select || "Select experience"}</option>
                          <option value="0-1">{applyDict.professionalInfo?.experienceOptions?.lessThan1 || "Less than 1 year"}</option>
                          <option value="1-3">{applyDict.professionalInfo?.experienceOptions?.["1to3"] || "1-3 years"}</option>
                          <option value="3-5">{applyDict.professionalInfo?.experienceOptions?.["3to5"] || "3-5 years"}</option>
                          <option value="5-10">{applyDict.professionalInfo?.experienceOptions?.["5to10"] || "5-10 years"}</option>
                          <option value="10+">{applyDict.professionalInfo?.experienceOptions?.["10plus"] || "10+ years"}</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-1">
                          {applyDict.professionalInfo?.serviceType || "Service Type *"}
                        </label>
                        <select
                          id="service-type"
                          name="service-type"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                          required
                        >
                          <option value="">{applyDict.professionalInfo?.serviceOptions?.select || "Select service type"}</option>
                          <option value="interpretation">{applyDict.professionalInfo?.serviceOptions?.interpretation || "Interpretation"}</option>
                          <option value="translation">{applyDict.professionalInfo?.serviceOptions?.translation || "Translation"}</option>
                          <option value="both">{applyDict.professionalInfo?.serviceOptions?.both || "Both"}</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-700 mb-1">{applyDict.professionalInfo?.specialization || "Specialization Areas *"}</legend>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center">
                            <input type="checkbox" id="medical" name="specialization[]" value="medical" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                            <label htmlFor="medical" className="ml-2 text-sm text-gray-700">{applyDict.professionalInfo?.specializationOptions?.medical || "Medical"}</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="legal" name="specialization[]" value="legal" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                            <label htmlFor="legal" className="ml-2 text-sm text-gray-700">{applyDict.professionalInfo?.specializationOptions?.legal || "Legal"}</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="business" name="specialization[]" value="business" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                            <label htmlFor="business" className="ml-2 text-sm text-gray-700">{applyDict.professionalInfo?.specializationOptions?.business || "Business"}</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="technical" name="specialization[]" value="technical" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                            <label htmlFor="technical" className="ml-2 text-sm text-gray-700">{applyDict.professionalInfo?.specializationOptions?.technical || "Technical"}</label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                
                {/* Resume Upload Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-primary-600" />
                    {applyDict.resumeUpload?.title || "Resume Upload"}
                  </h3>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        <span className="font-medium text-primary-600 hover:text-primary-500">
                          {applyDict.resumeUpload?.uploadButton || "Click to upload"}
                        </span> {applyDict.resumeUpload?.dragDrop || "or drag and drop"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {applyDict.resumeUpload?.fileTypes || "PDF, DOC, or DOCX up to 5MB"}
                      </p>
                    </label>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {applyDict.additionalInfo || "Additional Information"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={applyDict.additionalPlaceholder || "Tell us a bit more about yourself and why you'd like to join our team..."}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-md transition-colors mb-3"
                  >
                    {applyDict.submitButton || "Submit Application"}
                  </button>
                  <a 
                    href={`/${locale}/requirements`}
                    className="w-full block text-center bg-white border border-primary-500 text-primary-500 hover:bg-primary-50 font-medium py-3 px-4 rounded-md transition-colors"
                  >
                    {dictionary.requirements?.pageTitle || "Learn About Requirements"}
                  </a>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {applyDict.termsAgreement || "By submitting this form, you agree to our terms and privacy policy."}
                  </p>
                </div>
              </form>
            </div>
          </div>
          
          {/* Testimonials section */}
          <div className="bg-primary-50 rounded-xl p-10 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{applyDict.testimonials?.title || "What Our Interpreters Say"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <span className="text-primary-700 font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{applyDict.testimonials?.testimonial1?.name || "Juan Sanchez"}</h4>
                    <p className="text-sm text-gray-600">{applyDict.testimonials?.testimonial1?.role || "Spanish Interpreter"}</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  &ldquo;{applyDict.testimonials?.testimonial1?.quote || "Working with E-Voque has been a game-changer for my career. The flexible scheduling allows me to maintain work-life balance while earning a great income."}&rdquo;
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <span className="text-primary-700 font-bold">MW</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{applyDict.testimonials?.testimonial2?.name || "Mei Wang"}</h4>
                    <p className="text-sm text-gray-600">{applyDict.testimonials?.testimonial2?.role || "Mandarin Translator"}</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  &ldquo;{applyDict.testimonials?.testimonial2?.quote || "The professional development opportunities at E-Voque have helped me specialize in medical translation and significantly grow my skills and client base."}&rdquo;
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <span className="text-primary-700 font-bold">AK</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{applyDict.testimonials?.testimonial3?.name || "Ahmed Khalid"}</h4>
                    <p className="text-sm text-gray-600">{applyDict.testimonials?.testimonial3?.role || "Arabic Interpreter"}</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  &ldquo;{applyDict.testimonials?.testimonial3?.quote || "I appreciate the transparent pay structure and on-time payments. The remote office option in Miraflores is perfect when I need a professional setting for client meetings."}&rdquo;
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{applyDict.faq?.title || "Frequently Asked Questions"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{applyDict.faq?.question1?.title || "What qualifications do I need?"}</h3>
                <p className="text-gray-700">
                  {applyDict.faq?.question1?.answer || "We look for fluency in at least two languages, professional experience in interpretation or translation, and strong communication skills. Specialized knowledge in fields like medical, legal, or technical is a plus."}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{applyDict.faq?.question2?.title || "How does the application process work?"}</h3>
                <p className="text-gray-700">
                  {applyDict.faq?.question2?.answer || "After submitting your application, our team will review your qualifications. If selected, you'll be invited for a language assessment and interview. The entire process typically takes 1-2 weeks."}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{applyDict.faq?.question3?.title || "Can I work part-time or full-time?"}</h3>
                <p className="text-gray-700">
                  {applyDict.faq?.question3?.answer || "Yes, we offer both part-time and full-time opportunities. Our platform allows you to set your own availability, making it perfect for those seeking flexible work arrangements."}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{applyDict.faq?.question4?.title || "What equipment do I need?"}</h3>
                <p className="text-gray-700">
                  {applyDict.faq?.question4?.answer || "You'll need a reliable computer, high-speed internet connection, a quality microphone/headset, and a quiet workspace. For some specialized assignments, additional equipment may be required."}
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-primary-600 text-white p-10 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">{applyDict.finalCta?.title || "Ready to Start Your Journey?"}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {applyDict.finalCta?.description || "Submit your application today and join our network of professional interpreters making a difference around the world."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`/${locale}/requirements`} className="bg-white text-primary-500 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors">
                {applyDict.finalCta?.learnRequirements || "Learn About Requirements"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer dictionary={dictionary} locale={locale} />
    </>
  );
} 