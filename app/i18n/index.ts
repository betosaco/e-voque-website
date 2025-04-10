import enDict from './dictionaries/en.json';
import esDict from './dictionaries/es.json';

export const dictionaries = {
  en: enDict,
  es: esDict,
};

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];

// Define the Dictionary type structure
export interface Dictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    wellness: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    applyNow?: string;
    learnMore?: string;
    carousel?: {
      image1: {
        title: string;
        description: string;
      };
      image2: {
        title: string;
        description: string;
      };
      image3: {
        title: string;
        description: string;
      };
    };
  };
  about: {
    title: string;
    description: string;
    mission: string;
  };
  services: {
    title: string;
    medical: {
      title: string;
      description: string;
    };
    legal: {
      title: string;
      description: string;
    };
    business: {
      title: string;
      description: string;
    };
    emergency: {
      title: string;
      description: string;
    };
  };
  benefits: {
    title: string;
    quality: string;
    speed: string;
    availability: string;
    languages: string;
    security: string;
    technology: string;
  };
  contact: {
    title: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
  // Employee benefits section
  employeeBenefits?: {
    pageTitle?: string;
    pageSubtitle?: string;
    overviewTitle?: string;
    overviewDescription?: string;
    exploreButton?: string;
    strategicTitle?: string;
    strategicDescription1?: string;
    strategicDescription2?: string;
    employeesCovered?: string;
    corporateClients?: string;
    benefitsManagement?: string;
    tailoredSolutions?: string;
    solutionsTitle?: string;
    keyFeatures?: string;
    learnMore?: string;
    ctaTitle?: string;
    ctaDescription?: string;
    requestConsultation?: string;
    viewPricing?: string;
    health?: {
      title?: string;
      description?: string;
      features?: string[];
    };
    retirement?: {
      title?: string;
      description?: string;
      features?: string[];
    };
    professional?: {
      title?: string;
      description?: string;
      features?: string[];
    };
    wellness?: {
      title?: string;
      description?: string;
      features?: string[];
    };
  };
  // Requirements section
  requirements?: {
    pageTitle?: string;
    pageSubtitle?: string;
    overviewTitle?: string;
    overviewDescription?: string;
    requirements?: {
      languageProficiency?: {
        title?: string;
        description?: string;
        details?: string[];
      };
      education?: {
        title?: string;
        description?: string;
        details?: string[];
      };
      experience?: {
        title?: string;
        description?: string;
        details?: string[];
      };
      technical?: {
        title?: string;
        description?: string;
        details?: string[];
      };
      availability?: {
        title?: string;
        description?: string;
        details?: string[];
      };
      legal?: {
        title?: string;
        description?: string;
        details?: string[];
      };
    };
    applicationProcess?: {
      title?: string;
      steps?: {
        submitApplication?: {
          title?: string;
          description?: string;
        };
        initialScreening?: {
          title?: string;
          description?: string;
        };
        languageAssessment?: {
          title?: string;
          description?: string;
        };
        interview?: {
          title?: string;
          description?: string;
        };
        onboarding?: {
          title?: string;
          description?: string;
        };
      };
    };
    ctaTitle?: string;
    ctaDescription?: string;
    applyNow?: string;
  };
  // Apply section
  apply?: {
    pageTitle?: string;
    pageSubtitle?: string;
    videoTitle?: string;
    videoDescription?: string;
    benefitsTitle?: string;
    benefitsPrograms?: {
      compensation?: {
        title?: string;
        description?: string;
        features?: string[];
      };
      health?: {
        title?: string;
        description?: string;
        features?: string[];
      };
      flexibility?: {
        title?: string;
        description?: string;
        features?: string[];
      };
      development?: {
        title?: string;
        description?: string;
        features?: string[];
      };
      office?: {
        title?: string;
        description?: string;
        features?: string[];
      };
    };
    formTitle?: string;
    formDescription?: string;
    personalInfo?: {
      title?: string;
      fullName?: string;
      email?: string;
      phone?: string;
      location?: string;
    };
    professionalInfo?: {
      title?: string;
      languages?: string;
      experience?: string;
      experienceOptions?: {
        select?: string;
        lessThan1?: string;
        "1to3"?: string;
        "3to5"?: string;
        "5to10"?: string;
        "10plus"?: string;
      };
      serviceType?: string;
      serviceOptions?: {
        select?: string;
        interpretation?: string;
        translation?: string;
        both?: string;
      };
      specialization?: string;
      specializationOptions?: {
        medical?: string;
        legal?: string;
        business?: string;
        technical?: string;
      };
    };
    resumeUpload?: {
      title?: string;
      uploadButton?: string;
      dragDrop?: string;
      fileTypes?: string;
    };
    additionalInfo?: string;
    additionalPlaceholder?: string;
    submitButton?: string;
    termsAgreement?: string;
    testimonials?: {
      title?: string;
      testimonial1?: {
        name?: string;
        role?: string;
        quote?: string;
      };
      testimonial2?: {
        name?: string;
        role?: string;
        quote?: string;
      };
      testimonial3?: {
        name?: string;
        role?: string;
        quote?: string;
      };
    };
    faq?: {
      title?: string;
      question1?: {
        title?: string;
        answer?: string;
      };
      question2?: {
        title?: string;
        answer?: string;
      };
      question3?: {
        title?: string;
        answer?: string;
      };
      question4?: {
        title?: string;
        answer?: string;
      };
    };
    finalCta?: {
      title?: string;
      description?: string;
      learnRequirements?: string;
    };
  };
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
} 