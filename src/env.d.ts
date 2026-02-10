/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL: string;
  readonly SITE_TITLE: string;
  readonly SITE_DESCRIPTION: string;
  readonly GOOGLE_ANALYTICS_ID: string;
  readonly GOOGLE_TAG_MANAGER_ID: string;
  readonly API_BASE_URL: string;
  readonly API_KEY: string;
  readonly CONTACT_EMAIL: string;
  readonly CONTACT_PHONE: string;
  readonly TWITTER_URL: string;
  readonly LINKEDIN_URL: string;
  readonly GITHUB_URL: string;
  readonly ENABLE_ANALYTICS: string;
  readonly ENABLE_CONTACT_FORM: string;
  readonly ENABLE_APPOINTMENT_BOOKING: string;
  readonly NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
