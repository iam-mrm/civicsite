export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  outcome: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: string;
  beforeMetrics?: {
    lighthouse?: number;
    discoverability?: string;
  };
  afterMetrics?: {
    lighthouse?: number;
    discoverability?: string;
  };
}

export interface ContactForm {
  businessType: 'homestay' | 'clinic' | 'restaurant' | 'retail' | 'other';
  websiteStatus: 'none' | 'outdated' | 'working' | 'broken';
  primaryPain: string;
  budget: 'under-25k' | '25k-50k' | '50k-75k' | '75k+';
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}
