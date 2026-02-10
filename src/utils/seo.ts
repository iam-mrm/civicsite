import type { SEOProps } from '@/types';

/**
 * Generate structured data for SEO
 */
export function generateStructuredData(type: string, data: Record<string, any>) {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return JSON.stringify(baseStructure);
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbData(breadcrumbs: Array<{ name: string; url: string }>) {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  });
}

/**
 * Generate organization structured data
 */
export function generateOrganizationData() {
  return generateStructuredData('Organization', {
    name: 'Civic Portal',
    url: 'https://civic-portal.example.com',
    logo: 'https://civic-portal.example.com/logo.png',
    description: 'Your trusted partner for navigating civic services and life events.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      availableLanguage: ['English']
    }
  });
}

/**
 * Generate default SEO props
 */
export function generateSEOProps(overrides: Partial<SEOProps> = {}): SEOProps {
  return {
    title: 'Your Civic Portal - Life Events Made Simple',
    description: 'No forms, no jargon. Just what you need to know, when you need it.',
    image: '/og-image.jpg',
    url: 'https://civic-portal.example.com',
    type: 'website',
    ...overrides
  };
}
