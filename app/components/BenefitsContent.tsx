'use client';

import React, { useState } from 'react';
import { Dictionary } from '../i18n';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  HeartIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

interface BenefitsContentProps {
  locale: string;
  dictionary: Dictionary;
}

export default function BenefitsContent({ locale, dictionary }: BenefitsContentProps) {
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

  // State for expanded sections
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  // Toggle expanded section
  const toggleSection = (id: string) => {
    if (expandedSection === id) {
      setExpandedSection(null);
    } else {
      setExpandedSection(id);
    }
  };

  // Additional detailed content for each benefit
  const detailedContent = {
    health: {
      title: "Health Benefits Details",
      sections: [
        {
          subtitle: "Medical Coverage",
          content: "Comprehensive medical plans including preventive care, specialist visits, hospital stays, emergency services, and more. Options for PPO, HMO, and High-Deductible plans with HSA compatibility."
        },
        {
          subtitle: "Dental Benefits",
          content: "Coverage for routine cleanings, fillings, major procedures, and orthodontic care. Our plans encourage preventative care with covered semi-annual check-ups."
        },
        {
          subtitle: "Vision Care",
          content: "Regular eye exams, prescription eyewear allowances, and discounts on procedures like LASIK and PRK. Coverage includes frames, lenses, and contact lenses."
        },
        {
          subtitle: "Telemedicine",
          content: "24/7 access to medical professionals through video consultations, reducing time away from work and providing immediate care for non-emergency conditions."
        }
      ],
      caseStudy: {
        title: "Success Story: Tech Company Reduces Healthcare Costs",
        content: "A mid-sized tech company implemented our comprehensive health plan and saw a 23% reduction in healthcare costs while improving employee satisfaction scores by 31% in the first year."
      }
    },
    retirement: {
      title: "Retirement Planning Details",
      sections: [
        {
          subtitle: "401(k) Plans",
          content: "Employer-matching 401(k) plans with diverse investment options. We provide automatic enrollment features, Roth options, and customizable employer contribution strategies."
        },
        {
          subtitle: "Financial Education",
          content: "Workshops, webinars, and one-on-one counseling to help employees understand investments, debt management, and long-term financial planning."
        },
        {
          subtitle: "Retirement Calculators",
          content: "Interactive tools that help employees visualize their retirement needs and adjust contributions accordingly to meet their retirement goals."
        },
        {
          subtitle: "Transition Planning",
          content: "Resources for employees approaching retirement age, including Social Security optimization, healthcare transitions, and lifestyle planning."
        }
      ],
      caseStudy: {
        title: "Success Story: Manufacturing Company Increases Participation",
        content: "After implementing our retirement program with automatic enrollment, a manufacturing client saw 401(k) participation increase from 62% to 94%, with average contribution rates rising 3.5%."
      }
    },
    professional: {
      title: "Professional Development Details",
      sections: [
        {
          subtitle: "Educational Assistance",
          content: "Tuition reimbursement for degree programs related to the employee's current role or potential future positions within the company."
        },
        {
          subtitle: "Certification Programs",
          content: "Funding for industry-specific certifications that enhance employee skills and credentials, making them more valuable to your organization."
        },
        {
          subtitle: "Mentorship Opportunities",
          content: "Structured mentorship programs pairing junior employees with experienced professionals to accelerate skill development and career advancement."
        },
        {
          subtitle: "Conference & Training Budget",
          content: "Annual stipends for attending industry conferences, workshops, and specialized training sessions to stay current with industry trends."
        }
      ],
      caseStudy: {
        title: "Success Story: Financial Services Firm Reduces Turnover",
        content: "A financial services company implemented our professional development benefits and reduced turnover of high-performing employees by 35% while improving internal promotion rates by 28%."
      }
    },
    wellness: {
      title: "Wellness Program Details",
      sections: [
        {
          subtitle: "Physical Wellness",
          content: "Fitness challenges, gym reimbursements, and nutrition counseling to promote physical health and reduce lifestyle-related health conditions."
        },
        {
          subtitle: "Mental Health Services",
          content: "Employee assistance programs, therapy sessions, and stress management resources to support mental and emotional wellbeing."
        },
        {
          subtitle: "Work-Life Balance",
          content: "Flexible scheduling options, parental leave, and remote work policies that acknowledge and support employees' lives outside of work."
        },
        {
          subtitle: "Financial Wellness",
          content: "Debt counseling, emergency savings programs, and financial literacy resources to reduce financial stress and improve overall wellbeing."
        }
      ],
      caseStudy: {
        title: "Success Story: Healthcare Provider Improves Productivity",
        content: "A healthcare organization implementing our comprehensive wellness program saw a 19% reduction in sick days and a measurable 12% increase in self-reported productivity scores."
      }
    },
    remote: {
      title: "Remote Office Details",
      sections: [
        {
          subtitle: "MatMax Cowork Location",
          content: "Premium coworking space located in the heart of Miraflores at Alcanfores 410, providing a professional environment with all amenities needed for productive work."
        },
        {
          subtitle: "Flexible Scheduling",
          content: "Choose when you want to use the remote office location with no minimum requirements. Work remotely when it suits your schedule and productivity needs."
        },
        {
          subtitle: "Full Office Amenities",
          content: "Enjoy high-speed internet, meeting rooms, printing services, kitchen facilities, and comfortable ergonomic workspaces designed for focus and collaboration."
        },
        {
          subtitle: "Central Location Benefits",
          content: "Located near restaurants, cafes, shopping, and public transportation for easy access and convenient lunch or after-work options."
        }
      ],
      caseStudy: {
        title: "Success Story: Improved Work-Life Balance",
        content: "Employees utilizing our Miraflores remote office option reported 38% higher job satisfaction and 27% improved productivity by reducing commute times and having access to a professional workspace close to home."
      }
    }
  };

  // Employee benefits
  const employeeBenefits = [
    {
      id: "health",
      icon: <ShieldCheckIcon className="h-12 w-12 text-blue-500" />,
      title: t?.health?.title || "Comprehensive Health Insurance",
      description: t?.health?.description || "Top-tier health plans that keep your employees and their families protected with minimal out-of-pocket expenses.",
      benefits: t?.health?.features || [
        "Medical, dental, and vision coverage",
        "Low deductibles and copays",
        "Prescription drug benefits",
        "Telehealth services included"
      ],
      color: "bg-gradient-to-r from-blue-50 to-indigo-50",
      iconColor: "text-blue-500",
      image: (
        <div className="h-64 bg-gradient-to-r from-blue-200 to-blue-100 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <ShieldCheckIcon className="w-32 h-32 text-blue-400 opacity-50" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-transparent h-16"></div>
          <div className="absolute bottom-2 left-4 text-white font-medium">{t?.health?.title || "Comprehensive Health Insurance"}</div>
        </div>
      )
    },
    {
      id: "retirement",
      icon: <CurrencyDollarIcon className="h-12 w-12 text-green-500" />,
      title: t?.retirement?.title || "Retirement & Financial Planning",
      description: t?.retirement?.description || "Help employees secure their future with competitive retirement plans and financial wellness resources.",
      benefits: t?.retirement?.features || [
        "401(k) with employer matching",
        "Financial planning resources",
        "Investment education",
        "Retirement readiness workshops"
      ],
      color: "bg-gradient-to-r from-green-50 to-emerald-50",
      iconColor: "text-green-500",
      image: (
        <div className="h-64 bg-gradient-to-r from-green-200 to-green-100 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <CurrencyDollarIcon className="w-32 h-32 text-green-400 opacity-50" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-transparent h-16"></div>
          <div className="absolute bottom-2 left-4 text-white font-medium">{t?.retirement?.title || "Retirement & Financial Planning"}</div>
        </div>
      )
    },
    {
      id: "professional",
      icon: <AcademicCapIcon className="h-12 w-12 text-purple-500" />,
      title: t?.professional?.title || "Professional Development",
      description: t?.professional?.description || "Invest in your employees' growth with education benefits and career advancement opportunities.",
      benefits: t?.professional?.features || [
        "Tuition reimbursement",
        "Professional certification support",
        "Mentorship programs",
        "Conference and workshop stipends"
      ],
      color: "bg-gradient-to-r from-purple-50 to-pink-50",
      iconColor: "text-purple-500",
      image: (
        <div className="h-64 bg-gradient-to-r from-purple-200 to-purple-100 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <AcademicCapIcon className="w-32 h-32 text-purple-400 opacity-50" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-500 to-transparent h-16"></div>
          <div className="absolute bottom-2 left-4 text-white font-medium">{t?.professional?.title || "Professional Development"}</div>
        </div>
      )
    },
    {
      id: "wellness",
      icon: <HeartIcon className="h-12 w-12 text-red-500" />,
      title: t?.wellness?.title || "Wellness Programs",
      description: t?.wellness?.description || "Empower employees to lead healthier lives with our comprehensive wellness platform.",
      benefits: t?.wellness?.features || [
        "Guided meditation and yoga sessions",
        "Fitness and flexibility training",
        "Mental health resources",
        "Stress management techniques"
      ],
      color: "bg-gradient-to-r from-red-50 to-orange-50",
      iconColor: "text-red-500",
      image: (
        <div className="h-64 bg-gradient-to-r from-red-200 to-red-100 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <HeartIcon className="w-32 h-32 text-red-400 opacity-50" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-500 to-transparent h-16"></div>
          <div className="absolute bottom-2 left-4 text-white font-medium">{t?.wellness?.title || "Wellness Programs"}</div>
        </div>
      )
    },
    {
      id: "remote",
      icon: <svg className="h-12 w-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>,
      title: "Remote Office in Miraflores",
      description: "Access our premium coworking space at MatMax Cowork in Miraflores when you want to work outside the main office.",
      benefits: [
        "Alcanfores 410, Miraflores location",
        "Flexible access with no minimum hours",
        "Full office amenities and services",
        "Central location near restaurants and shops"
      ],
      color: "bg-gradient-to-r from-teal-50 to-emerald-50",
      iconColor: "text-teal-500",
      image: (
        <div className="h-64 bg-gradient-to-r from-teal-200 to-teal-100 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-32 h-32 text-teal-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-500 to-transparent h-16"></div>
          <div className="absolute bottom-2 left-4 text-white font-medium">Remote Office in Miraflores</div>
        </div>
      )
    },
  ];

  return (
    <>
      <Navbar dictionary={dictionary} locale={locale} />
      <div className="pt-44 pb-16 sm:pt-46 md:pt-48 lg:pt-52 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero section */}
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-flex mb-4 sm:mb-6">
              <BriefcaseIcon className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">{t?.pageTitle || "Comprehensive Employee Benefits"}</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              {t?.pageSubtitle || "Attract and retain top talent with competitive benefits packages that include health, retirement, and wellness solutions."}
            </p>
          </div>
          
          {/* Benefits overview image placeholder */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gradient-to-r from-primary-100 to-indigo-100 rounded-xl overflow-hidden mb-10 sm:mb-20">
            <div className="absolute inset-0 opacity-30">
              <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-2 sm:gap-4 w-full h-full p-4 sm:p-10">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="bg-white bg-opacity-50 rounded-lg flex items-center justify-center">
                    {i % 4 === 0 && <ShieldCheckIcon className="w-10 h-10 sm:w-20 sm:h-20 text-blue-300" />}
                    {i % 4 === 1 && <CurrencyDollarIcon className="w-10 h-10 sm:w-20 sm:h-20 text-green-300" />}
                    {i % 4 === 2 && <AcademicCapIcon className="w-10 h-10 sm:w-20 sm:h-20 text-purple-300" />}
                    {i % 4 === 3 && <HeartIcon className="w-10 h-10 sm:w-20 sm:h-20 text-red-300" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 text-center">
              <div className="bg-white bg-opacity-90 p-4 sm:p-8 rounded-lg shadow-lg max-w-2xl w-[90%] sm:w-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">{t?.overviewTitle || "Enhance Your Employee Experience"}</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  {t?.overviewDescription || "Our customizable benefits packages help you create a workplace where employees feel valued, supported, and motivated to perform at their best."}
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors text-sm sm:text-base">
                  {t?.exploreButton || "Explore Benefits Solutions"}
                </button>
              </div>
            </div>
          </div>
          
          {/* About Employee Benefits */}
          <div className="mb-10 sm:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="px-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{t?.strategicTitle || "Strategic Benefits Solutions"}</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  {t?.strategicDescription1 || "In today's competitive job market, a comprehensive benefits package is more than just a perk—it's a strategic necessity for attracting and retaining top talent."}
                </p>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  {t?.strategicDescription2 || "Our customizable employee benefits solutions help you create a workplace where your team feels valued, supported, and motivated to perform at their best."}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-8 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">50K+</div>
                    <div className="text-gray-600 text-sm sm:text-base">{t?.employeesCovered || "Employees covered"}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">100+</div>
                    <div className="text-gray-600 text-sm sm:text-base">{t?.corporateClients || "Corporate clients"}</div>
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
                    <h3 className="text-xl font-bold text-gray-900">{t?.benefitsManagement || "Benefits Management"}</h3>
                    <p className="mt-2 text-gray-600">{t?.tailoredSolutions || "Tailored solutions for businesses of all sizes"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Employee benefits grid with details */}
          <div className="mb-10 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">{t?.solutionsTitle || "Our Benefits Solutions"}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {employeeBenefits.map((benefit) => (
                <div 
                  key={benefit.id} 
                  className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 border border-gray-100 hover:shadow-lg ${
                    expandedSection === benefit.id ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
                  }`}
                >
                  {/* Card image header */}
                  {benefit.image}
                  
                  {/* Card content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 mr-4">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4">{benefit.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm sm:text-base font-medium text-gray-800 mb-2">{t?.keyFeatures || "Key Features:"}</div>
                      <ul className="space-y-2">
                        {benefit.benefits.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-primary-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-sm sm:text-base text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => toggleSection(benefit.id)}
                      className="w-full bg-white border border-primary-500 text-primary-500 hover:bg-primary-50 transition-colors py-2 px-4 rounded-md text-sm sm:text-base font-medium flex items-center justify-center"
                    >
                      {expandedSection === benefit.id ? 'Show Less' : t?.learnMore || "Learn More"}
                      <svg 
                        className={`ml-2 w-4 h-4 transition-transform ${expandedSection === benefit.id ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Expanded section */}
                  {expandedSection === benefit.id && detailedContent[benefit.id as keyof typeof detailedContent] && (
                    <div className="bg-gray-50 p-4 sm:p-6 border-t border-gray-200">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                        {detailedContent[benefit.id as keyof typeof detailedContent].title}
                      </h4>
                      
                      <div className="space-y-4 mb-6">
                        {detailedContent[benefit.id as keyof typeof detailedContent].sections.map((section, index) => (
                          <div key={index}>
                            <h5 className="text-sm sm:text-base font-medium text-gray-900 mb-1">{section.subtitle}</h5>
                            <p className="text-xs sm:text-sm text-gray-700">{section.content}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Case study */}
                      <div className="bg-white p-3 sm:p-4 rounded-lg border border-primary-100">
                        <h5 className="text-sm sm:text-base font-semibold text-primary-600 mb-2">
                          {detailedContent[benefit.id as keyof typeof detailedContent].caseStudy.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-700">
                          {detailedContent[benefit.id as keyof typeof detailedContent].caseStudy.content}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer dictionary={dictionary} locale={locale} />
    </>
  );
} 