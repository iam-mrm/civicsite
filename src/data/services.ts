import type { Service, CaseStudy } from '@/types';

export const services: Service[] = [
  {
    id: 'technical-foundation',
    title: 'Technical Foundation',
    description: 'A fast, clean website built in Astro that passes every technical check Google uses to evaluate sites for ranking.',
    icon: 'heroicons:lightning-bolt',
    features: [
      'Speed optimization (sub-2 second load times)',
      'Mobile compatibility across all devices',
      'Security with HTTPS and proper headers',
      'Accessibility compliance (WCAG standards)',
      'AI crawler access optimization',
      'Perfect Lighthouse scores'
    ],
    outcome: 'Your website works correctly on every technical dimension that Google measures for ranking.'
  },
  {
    id: 'single-source-truth',
    title: 'Single Source of Truth',
    description: 'Sanity CMS configured as the central nervous system of your entire digital presence.',
    icon: 'heroicons:arrow-path',
    features: [
      'All business information stored in one place',
      'Instant updates across your entire site',
      'No developer dependency for routine changes',
      'Consistent NAP (Name, Address, Phone) everywhere',
      'Centralized content management',
      'Version control and rollback capability'
    ],
    outcome: 'Update your business information once and see it reflected everywhere instantly.'
  },
  {
    id: 'google-ai-presence',
    title: 'Google & AI Presence',
    description: 'Schema markup and structured data that makes Google read your business as machine-readable information.',
    icon: 'heroicons:cpu-chip',
    features: [
      'Comprehensive Schema markup implementation',
      'Google Business Profile optimization',
      'Local SEO structured data',
      'Rich search results preparation',
      'AI search inclusion optimization',
      'NAP consistency across all platforms'
    ],
    outcome: 'Google understands your business correctly and shows you to the right customers.'
  },
  {
    id: 'lead-management',
    title: 'Lead Management Layer',
    description: 'A simple, clean lead capture and tracking system built inside the same Sanity dashboard.',
    icon: 'heroicons:chart-bar',
    features: [
      'Integrated contact forms',
      'Structured lead data capture',
      'Lead status tracking',
      'No separate CRM subscription needed',
      'Unified dashboard for business and leads',
      'Simple follow-up management'
    ],
    outcome: 'Manage your incoming business from the same place you manage your business information.'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'munnar-homestay',
    client: 'Munnar Valley Homestay',
    industry: 'Tourism & Hospitality',
    challenge: 'Beautiful property but invisible on Google Maps and search results. Losing direct bookings to aggregators.',
    solution: 'Complete digital infrastructure rebuild with focus on local search visibility and direct booking capability.',
    results: [
      'First page ranking for "Munnar homestay"',
      'Google Maps 3-pack inclusion',
      '300% increase in direct booking inquiries',
      'Perfect Lighthouse scores (100+ across all categories)'
    ],
    testimonial: 'We went from being invisible to fully booked within 2 months. The technical foundation changed everything.',
    beforeMetrics: {
      lighthouse: 45,
      discoverability: 'Not found on Google Maps'
    },
    afterMetrics: {
      lighthouse: 100,
      discoverability: 'Page 1, Maps 3-pack'
    }
  },
  {
    id: 'kochi-clinic',
    client: 'Kochi Family Health Clinic',
    industry: 'Healthcare',
    challenge: 'Outdated website with no mobile optimization, losing patients to competitors with better online presence.',
    solution: 'Mobile-first rebuild with healthcare-specific Schema markup and local SEO optimization.',
    results: [
      'Mobile traffic increased by 400%',
      'Top 3 ranking for "family doctor Kochi"',
      'Patient appointment requests doubled',
      'Zero accessibility issues'
    ],
    testimonial: 'Patients now find us easily and book directly. Our online presence finally matches our quality of care.',
    beforeMetrics: {
      lighthouse: 38,
      discoverability: 'Page 5+ search results'
    },
    afterMetrics: {
      lighthouse: 98,
      discoverability: 'Top 3 local search'
    }
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};

export const getCaseStudiesByIndustry = (industry: string): CaseStudy[] => {
  return caseStudies.filter(study => study.industry === industry);
};
