import type { SiteConfig, QuickAction, TrustMetric } from '@/types';

export const siteConfig: SiteConfig = {
  title: 'Kerala Government Helper - Services Made Simple',
  description: 'Confused about government services? We explain everything in simple language that anyone can understand.',
  url: 'https://kerala-helper.example.com',
  links: {
    twitter: 'https://twitter.com/keralahelper',
    github: 'https://github.com/keralahelper',
    linkedin: 'https://linkedin.com/company/keralahelper'
  }
};

export const quickActions: QuickAction[] = [
  { id: 'documents', emoji: '📄', text: 'Get certificates', href: '/request-documents' },
  { id: 'appointment', emoji: '📅', text: 'Book office visit', href: '/book-appointment' },
  { id: 'question', emoji: '💬', text: 'Ask for help', href: '/ask-question' },
  { id: 'track', emoji: '🔔', text: 'Check application', href: '/track-application' }
];

export const trustMetrics: TrustMetric[] = [
  { id: 'people', value: '250K+', label: 'People helped' },
  { id: 'rating', value: '4.8★', label: 'Average rating' },
  { id: 'support', value: '24/7', label: 'Support available' }
];
