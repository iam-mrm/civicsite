/**
 * Environment configuration with defaults
 */
export const config = {
  // Site Configuration
  siteUrl: import.meta.env.SITE_URL || 'https://civic-portal.example.com',
  siteTitle: import.meta.env.SITE_TITLE || 'Your Civic Portal - Life Events Made Simple',
  siteDescription: import.meta.env.SITE_DESCRIPTION || 'No forms, no jargon. Just what you need to know, when you need it.',

  // Analytics
  googleAnalyticsId: import.meta.env.GOOGLE_ANALYTICS_ID || '',
  googleTagManagerId: import.meta.env.GOOGLE_TAG_MANAGER_ID || '',
  enableAnalytics: import.meta.env.ENABLE_ANALYTICS === 'true',

  // API Configuration
  apiBaseUrl: import.meta.env.API_BASE_URL || 'https://api.civic-portal.example.com',
  apiKey: import.meta.env.API_KEY || '',

  // Contact Information
  contactEmail: import.meta.env.CONTACT_EMAIL || 'support@civic-portal.example.com',
  contactPhone: import.meta.env.CONTACT_PHONE || '+1-555-123-4567',

  // Social Media Links
  twitterUrl: import.meta.env.TWITTER_URL || 'https://twitter.com/civicportal',
  linkedinUrl: import.meta.env.LINKEDIN_URL || 'https://linkedin.com/company/civicportal',
  githubUrl: import.meta.env.GITHUB_URL || 'https://github.com/civicportal',

  // Feature Flags
  enableContactForm: import.meta.env.ENABLE_CONTACT_FORM !== 'false',
  enableAppointmentBooking: import.meta.env.ENABLE_APPOINTMENT_BOOKING !== 'false',

  // Environment
  isDevelopment: import.meta.env.NODE_ENV === 'development',
  isProduction: import.meta.env.NODE_ENV === 'production',
  isTest: import.meta.env.NODE_ENV === 'test',
};

/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(feature: keyof Pick<typeof config, 'enableAnalytics' | 'enableContactForm' | 'enableAppointmentBooking'>): boolean {
  return config[feature];
}

/**
 * Get public environment variables (safe to expose to client)
 */
export function getPublicConfig() {
  return {
    siteUrl: config.siteUrl,
    siteTitle: config.siteTitle,
    siteDescription: config.siteDescription,
    contactEmail: config.contactEmail,
    contactPhone: config.contactPhone,
    twitterUrl: config.twitterUrl,
    linkedinUrl: config.linkedinUrl,
    githubUrl: config.githubUrl,
    enableContactForm: config.enableContactForm,
    enableAppointmentBooking: config.enableAppointmentBooking,
    isDevelopment: config.isDevelopment,
  };
}
