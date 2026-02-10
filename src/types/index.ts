export interface KeralaService {
  id: string;
  emoji: string;
  title: string;
  description: string;
  slug: string;
  category?: string;
  websiteUrl?: string;
  services?: Service[];
}

export interface LifeEvent {
  id: string;
  emoji: string;
  title: string;
  description: string;
  slug: string;
  category?: string;
  services?: Service[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  department: string;
  websiteUrl?: string;
  estimatedTime: string;
  requiredDocuments?: string[];
  steps?: Step[];
}

export interface Step {
  id: string;
  title: string;
  description: string;
  estimatedTime?: string;
  cost?: string;
  actionUrl?: string;
}

export interface QuickAction {
  id: string;
  emoji: string;
  text: string;
  href?: string;
}

export interface TrustMetric {
  id: string;
  value: string;
  label: string;
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
