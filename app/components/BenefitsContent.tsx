'use client';

import React, { useState } from 'react';
import { Dictionary } from '../i18n';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  HeartIcon,
  UserGroupIcon,
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
          <div className="text-center mb-16">
            <div className="inline-flex mb-6">
              <BriefcaseIcon className="h-16 w-16 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t?.pageTitle || "Comprehensive Employee Benefits"}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t?.pageSubtitle || "Attract and retain top talent with competitive benefits packages that include health, retirement, and wellness solutions."}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t?.overviewTitle || "Enhance Your Employee Experience"}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {t?.overviewDescription || "Our customizable benefits packages help you create a workplace where employees feel valued, supported, and motivated to perform at their best."}
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                  {t?.exploreButton || "Explore Benefits Solutions"}
                </button>
              </div>
            </div>
          </div>
          
          {/* About Employee Benefits */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t?.strategicTitle || "Strategic Benefits Solutions"}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {t?.strategicDescription1 || "In today's competitive job market, a comprehensive benefits package is more than just a perk—it's a strategic necessity for attracting and retaining top talent."}
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {t?.strategicDescription2 || "Our customizable employee benefits solutions help you create a workplace where your team feels valued, supported, and motivated to perform at their best."}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <UserGroupIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium">250,000+</div>
                    <div className="text-sm text-gray-500">{t?.employeesCovered || "Employees covered"}</div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <BriefcaseIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium">500+</div>
                    <div className="text-sm text-gray-500">{t?.corporateClients || "Corporate clients"}</div>
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
          
          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t?.solutionsTitle || "Our Benefits Solutions"}</h2>
            
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
                        <h4 className="font-medium text-gray-900 mb-2">{t?.keyFeatures || "Key Features:"}</h4>
                        <ul className="space-y-2">
                          {benefit.benefits.map((item: string, i: number) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button 
                        onClick={() => toggleSection(benefit.id)}
                        className="mt-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-colors w-max flex items-center"
                      >
                        {expandedSection === benefit.id ? "Show Less" : (t?.learnMore || "Learn More")}
                        <svg 
                          className={`ml-2 w-5 h-5 transition-transform ${expandedSection === benefit.id ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                    </div>
                    <div className={index % 2 === 1 ? "lg:order-first" : ""}>
                      {benefit.image}
                    </div>
                  </div>
                  
                  {/* Expanded content section */}
                  {expandedSection === benefit.id && (
                    <div className="mt-8 p-6 bg-white rounded-lg shadow-md animate-fadeIn">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{detailedContent[benefit.id as keyof typeof detailedContent].title}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {detailedContent[benefit.id as keyof typeof detailedContent].sections.map((section, idx) => (
                          <div key={idx} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                            <h4 className="text-lg font-semibold text-primary-600 mb-2">{section.subtitle}</h4>
                            <p className="text-gray-700">{section.content}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Case Study */}
                      <div className="bg-primary-50 p-6 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 bg-primary-100 rounded-full p-3 mr-4">
                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {detailedContent[benefit.id as keyof typeof detailedContent].caseStudy.title}
                            </h4>
                            <p className="text-gray-700">
                              {detailedContent[benefit.id as keyof typeof detailedContent].caseStudy.content}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Contact link */}
                      <div className="mt-6 text-center">
                        <a 
                          href={`/${locale}/contact`}
                          className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                        >
                          Contact us to discuss your custom {benefit.title.toLowerCase()} solution
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
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