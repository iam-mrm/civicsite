import type { LifeEvent } from '@/types';

export const lifeEvents: LifeEvent[] = [
  {
    id: 'new-baby',
    emoji: '👶',
    title: 'Having a baby',
    description: 'Birth certificates, healthcare, parental leave, and everything you need for your growing family.',
    slug: 'having-a-baby',
    category: 'family',
    services: [
      {
        id: 'birth-certificate',
        name: 'Birth Certificate Registration',
        description: 'Register your newborn and obtain an official birth certificate.',
        department: 'Vital Records Office',
        estimatedTime: '2-3 weeks',
        requiredDocuments: ['Proof of birth', 'Parent identification', 'Hospital paperwork'],
        steps: [
          {
            id: 'step-1',
            title: 'Gather Required Documents',
            description: 'Collect proof of birth from hospital, parent IDs, and any additional paperwork.',
            estimatedTime: '1-2 days'
          },
          {
            id: 'step-2',
            title: 'Complete Application Form',
            description: 'Fill out the birth certificate application form with accurate information.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-3',
            title: 'Submit Application',
            description: 'Submit your application in person or online with all required documents.',
            estimatedTime: '1-2 hours'
          },
          {
            id: 'step-4',
            title: 'Receive Certificate',
            description: 'Receive your official birth certificate by mail or in-person pickup.',
            estimatedTime: '2-3 weeks'
          }
        ]
      },
      {
        id: 'parental-leave',
        name: 'Parental Leave Benefits',
        description: 'Apply for parental leave benefits and understand your entitlements.',
        department: 'Social Security Administration',
        estimatedTime: '1-2 weeks',
        requiredDocuments: ['Birth certificate', 'Employment verification', 'Leave application'],
        steps: [
          {
            id: 'step-1',
            title: 'Review Eligibility',
            description: 'Check your eligibility for parental leave benefits.',
            estimatedTime: '15 minutes'
          },
          {
            id: 'step-2',
            title: 'Notify Employer',
            description: 'Inform your employer about your parental leave plans.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-3',
            title: 'Submit Application',
            description: 'Complete and submit the parental leave application.',
            estimatedTime: '1 hour'
          }
        ]
      }
    ]
  },
  {
    id: 'moving',
    emoji: '🏠',
    title: 'Moving',
    description: 'Update your address, transfer utilities, register to vote, and settle into your new neighborhood.',
    slug: 'moving',
    category: 'housing',
    services: [
      {
        id: 'address-change',
        name: 'Address Change Service',
        description: 'Update your address with USPS and government agencies.',
        department: 'Postal Service',
        estimatedTime: '1-2 days',
        requiredDocuments: ['New address proof', 'Old address', 'Photo ID'],
        steps: [
          {
            id: 'step-1',
            title: 'Complete Change of Address Form',
            description: 'Fill out the official USPS change of address form.',
            estimatedTime: '15 minutes'
          },
          {
            id: 'step-2',
            title: 'Verify Identity',
            description: 'Provide proof of identity and new address.',
            estimatedTime: '10 minutes'
          },
          {
            id: 'step-3',
            title: 'Confirm Changes',
            description: 'Review and confirm your address change details.',
            estimatedTime: '5 minutes'
          }
        ]
      },
      {
        id: 'utility-transfer',
        name: 'Utility Transfer Service',
        description: 'Transfer or setup utilities at your new address.',
        department: 'Utility Companies',
        estimatedTime: '3-5 days',
        requiredDocuments: ['New address', 'Move-in date', 'Account information'],
        steps: [
          {
            id: 'step-1',
            title: 'Contact Current Providers',
            description: 'Notify current utility providers of your move-out date.',
            estimatedTime: '1 hour'
          },
          {
            id: 'step-2',
            title: 'Setup New Services',
            description: 'Arrange utility setup at your new address.',
            estimatedTime: '2-3 hours'
          },
          {
            id: 'step-3',
            title: 'Schedule Installation',
            description: 'Schedule installation appointments if needed.',
            estimatedTime: '30 minutes'
          }
        ]
      }
    ]
  },
  {
    id: 'starting-business',
    emoji: '💼',
    title: 'Starting a business',
    description: 'Register your business, understand taxes, get permits, and launch with confidence.',
    slug: 'starting-business',
    category: 'business',
    services: [
      {
        id: 'business-registration',
        name: 'Business Registration',
        description: 'Register your business entity with the state.',
        department: 'Secretary of State',
        estimatedTime: '1-2 weeks',
        requiredDocuments: ['Business name', 'Owner information', 'Articles of incorporation'],
        steps: [
          {
            id: 'step-1',
            title: 'Choose Business Structure',
            description: 'Select the right business structure (LLC, Corporation, etc.).',
            estimatedTime: '1-2 hours'
          },
          {
            id: 'step-2',
            title: 'Register Business Name',
            description: 'Register your business name with the appropriate authorities.',
            estimatedTime: '1 hour'
          },
          {
            id: 'step-3',
            title: 'File Formation Documents',
            description: 'Submit articles of incorporation or organization.',
            estimatedTime: '2-3 hours'
          },
          {
            id: 'step-4',
            title: 'Obtain EIN',
            description: 'Get your Employer Identification Number from the IRS.',
            estimatedTime: '30 minutes'
          }
        ]
      },
      {
        id: 'business-licenses',
        name: 'Business Licenses & Permits',
        description: 'Obtain necessary licenses and permits for your business.',
        department: 'Business Licensing Department',
        estimatedTime: '2-4 weeks',
        requiredDocuments: ['Business registration', 'Proof of address', 'Professional certifications'],
        steps: [
          {
            id: 'step-1',
            title: 'Identify Required Licenses',
            description: 'Research which licenses and permits your business needs.',
            estimatedTime: '2-4 hours'
          },
          {
            id: 'step-2',
            title: 'Complete Applications',
            description: 'Fill out applications for each required license.',
            estimatedTime: '3-5 hours'
          },
          {
            id: 'step-3',
            title: 'Submit Applications',
            description: 'Submit applications with required documentation.',
            estimatedTime: '2-3 hours'
          },
          {
            id: 'step-4',
            title: 'Await Approval',
            description: 'Wait for processing and approval of your applications.',
            estimatedTime: '2-4 weeks'
          }
        ]
      }
    ]
  },
  {
    id: 'getting-married',
    emoji: '💍',
    title: 'Getting married',
    description: 'Marriage licenses, name changes, updating documents, and planning your future together.',
    slug: 'getting-married',
    category: 'family',
    services: [
      {
        id: 'marriage-license',
        name: 'Marriage License',
        description: 'Obtain your marriage license before the ceremony.',
        department: 'County Clerk Office',
        estimatedTime: '1-3 days',
        requiredDocuments: ['Photo ID', 'Birth certificate', 'Social Security card'],
        steps: [
          {
            id: 'step-1',
            title: 'Schedule Appointment',
            description: 'Book an appointment at the County Clerk office.',
            estimatedTime: '15 minutes'
          },
          {
            id: 'step-2',
            title: 'Gather Documents',
            description: 'Collect all required identification documents.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-3',
            title: 'Apply in Person',
            description: 'Both partners must apply in person with documents.',
            estimatedTime: '1-2 hours'
          },
          {
            id: 'step-4',
            title: 'Receive License',
            description: 'Receive your marriage license (valid for 90 days).',
            estimatedTime: '1-3 days'
          }
        ]
      },
      {
        id: 'name-change',
        name: 'Name Change Service',
        description: 'Update your name on all official documents after marriage.',
        department: 'Social Security Administration',
        estimatedTime: '2-4 weeks',
        requiredDocuments: ['Marriage certificate', 'Photo ID', 'Social Security card'],
        steps: [
          {
            id: 'step-1',
            title: 'Update Social Security',
            description: 'Update your name with the Social Security Administration.',
            estimatedTime: '2-3 hours'
          },
          {
            id: 'step-2',
            title: 'Update Driver License',
            description: 'Get a new driver license with your married name.',
            estimatedTime: '1-2 hours'
          },
          {
            id: 'step-3',
            title: 'Update Passport',
            description: 'Apply for a passport name change.',
            estimatedTime: '2-3 hours'
          },
          {
            id: 'step-4',
            title: 'Update Other Records',
            description: 'Update banks, employers, and other institutions.',
            estimatedTime: '4-6 hours'
          }
        ]
      }
    ]
  },
  {
    id: 'buying-home',
    emoji: '🔑',
    title: 'Buying a home',
    description: 'First-time buyer programs, property records, inspections, and making your homeownership dream real.',
    slug: 'buying-home',
    category: 'housing',
    services: [
      {
        id: 'first-time-buyer',
        name: 'First-Time Buyer Programs',
        description: 'Access special programs and assistance for first-time homebuyers.',
        department: 'Housing Authority',
        estimatedTime: '2-4 weeks',
        requiredDocuments: ['Income verification', 'Tax returns', 'Bank statements'],
        steps: [
          {
            id: 'step-1',
            title: 'Attend Homebuyer Education',
            description: 'Complete required homebuyer education courses.',
            estimatedTime: '8 hours'
          },
          {
            id: 'step-2',
            title: 'Get Pre-Approved',
            description: 'Obtain mortgage pre-approval.',
            estimatedTime: '1-2 days'
          },
          {
            id: 'step-3',
            title: 'Apply for Assistance',
            description: 'Apply for first-time buyer assistance programs.',
            estimatedTime: '2-4 hours'
          },
          {
            id: 'step-4',
            title: 'Receive Approval',
            description: 'Get approved for assistance programs.',
            estimatedTime: '1-2 weeks'
          }
        ]
      },
      {
        id: 'property-search',
        name: 'Property Records Search',
        description: 'Access property records and history for potential homes.',
        department: 'County Recorder',
        estimatedTime: '1-2 days',
        requiredDocuments: ['Property address', 'Parcel number'],
        steps: [
          {
            id: 'step-1',
            title: 'Search Online Database',
            description: 'Search property records through the county database.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-2',
            title: 'Review Property History',
            description: 'Review ownership history and tax records.',
            estimatedTime: '1 hour'
          },
          {
            id: 'step-3',
            title: 'Order Official Records',
            description: 'Order official copies of important documents.',
            estimatedTime: '15 minutes'
          }
        ]
      }
    ]
  },
  {
    id: 'job-change',
    emoji: '📋',
    title: 'Changing jobs',
    description: 'Unemployment benefits, job training programs, healthcare transitions, and career resources.',
    slug: 'changing-jobs',
    category: 'career',
    services: [
      {
        id: 'unemployment-benefits',
        name: 'Unemployment Benefits',
        description: 'Apply for unemployment benefits if you\'ve lost your job.',
        department: 'Department of Labor',
        estimatedTime: '2-3 weeks',
        requiredDocuments: ['Employment history', 'Reason for separation', 'Personal identification'],
        steps: [
          {
            id: 'step-1',
            title: 'Check Eligibility',
            description: 'Verify your eligibility for unemployment benefits.',
            estimatedTime: '15 minutes'
          },
          {
            id: 'step-2',
            title: 'Gather Employment Records',
            description: 'Collect recent employment information and documents.',
            estimatedTime: '1 hour'
          },
          {
            id: 'step-3',
            title: 'File Claim',
            description: 'Submit your unemployment benefits claim.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-4',
            title: 'Weekly Certifications',
            description: 'Complete weekly job search certifications.',
            estimatedTime: '15 minutes per week'
          }
        ]
      },
      {
        id: 'job-training',
        name: 'Job Training Programs',
        description: 'Access free job training and skill development programs.',
        department: 'Workforce Development',
        estimatedTime: '2-6 weeks',
        requiredDocuments: ['Resume', 'Career goals', 'Assessment results'],
        steps: [
          {
            id: 'step-1',
            title: 'Career Assessment',
            description: 'Complete career skills assessment.',
            estimatedTime: '2 hours'
          },
          {
            id: 'step-2',
            title: 'Choose Training Program',
            description: 'Select appropriate training programs.',
            estimatedTime: '1-2 hours'
          },
          {
            id: 'step-3',
            title: 'Enroll in Program',
            description: 'Complete enrollment for selected programs.',
            estimatedTime: '1 hour'
          },
          {
            id: 'step-4',
            title: 'Complete Training',
            description: 'Attend and complete your training program.',
            estimatedTime: '2-6 weeks'
          }
        ]
      }
    ]
  },
  {
    id: 'retirement',
    emoji: '🌅',
    title: 'Planning retirement',
    description: 'Social security, Medicare, pension benefits, and enjoying the next chapter of life.',
    slug: 'planning-retirement',
    category: 'retirement',
    services: [
      {
        id: 'social-security',
        name: 'Social Security Benefits',
        description: 'Apply for and manage your Social Security retirement benefits.',
        department: 'Social Security Administration',
        estimatedTime: '1-3 months',
        requiredDocuments: ['Birth certificate', 'Tax returns', 'Work history'],
        steps: [
          {
            id: 'step-1',
            title: 'Review Benefits',
            description: 'Review your estimated Social Security benefits.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-2',
            title: 'Decide on Timing',
            description: 'Choose when to start receiving benefits.',
            estimatedTime: '1 hour'
          },
          {
            id: 'step-3',
            title: 'Submit Application',
            description: 'Complete and submit your benefits application.',
            estimatedTime: '1-2 hours'
          },
          {
            id: 'step-4',
            title: 'Receive First Payment',
            description: 'Receive your first Social Security payment.',
            estimatedTime: '1-3 months'
          }
        ]
      },
      {
        id: 'medicare',
        name: 'Medicare Enrollment',
        description: 'Enroll in Medicare and choose your coverage options.',
        department: 'Medicare Services',
        estimatedTime: '2-4 weeks',
        requiredDocuments: ['Social Security card', 'Proof of age', 'Residency documentation'],
        steps: [
          {
            id: 'step-1',
            title: 'Check Eligibility',
            description: 'Verify your Medicare eligibility.',
            estimatedTime: '15 minutes'
          },
          {
            id: 'step-2',
            title: 'Choose Coverage',
            description: 'Select Original Medicare or Medicare Advantage.',
            estimatedTime: '2-3 hours'
          },
          {
            id: 'step-3',
            title: 'Enroll in Plan',
            description: 'Complete enrollment in your chosen plan.',
            estimatedTime: '1 hour'
          },
          {
            id: 'step-4',
            title: 'Receive Coverage Card',
            description: 'Get your Medicare coverage card.',
            estimatedTime: '2-4 weeks'
          }
        ]
      }
    ]
  },
  {
    id: 'health-concerns',
    emoji: '🏥',
    title: 'Health concerns',
    description: 'Healthcare coverage, medical assistance programs, disability support, and wellness resources.',
    slug: 'health-concerns',
    category: 'health',
    services: [
      {
        id: 'health-insurance',
        name: 'Health Insurance Marketplace',
        description: 'Find and enroll in affordable health insurance coverage.',
        department: 'Health Insurance Marketplace',
        estimatedTime: '1-2 weeks',
        requiredDocuments: ['Income information', 'Household details', 'Current coverage'],
        steps: [
          {
            id: 'step-1',
            title: 'Create Account',
            description: 'Create your Health Insurance Marketplace account.',
            estimatedTime: '15 minutes'
          },
          {
            id: 'step-2',
            title: 'Compare Plans',
            description: 'Compare available health insurance plans.',
            estimatedTime: '1-2 hours'
          },
          {
            id: 'step-3',
            title: 'Check Subsidies',
            description: 'See if you qualify for premium subsidies.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-4',
            title: 'Enroll in Plan',
            description: 'Complete enrollment in your chosen plan.',
            estimatedTime: '1 hour'
          }
        ]
      },
      {
        id: 'disability-benefits',
        name: 'Disability Benefits',
        description: 'Apply for disability benefits if you cannot work due to health conditions.',
        department: 'Social Security Administration',
        estimatedTime: '3-6 months',
        requiredDocuments: ['Medical records', 'Work history', 'Doctor statements'],
        steps: [
          {
            id: 'step-1',
            title: 'Gather Medical Evidence',
            description: 'Collect comprehensive medical documentation.',
            estimatedTime: '2-4 hours'
          },
          {
            id: 'step-2',
            title: 'Complete Application',
            description: 'Fill out the disability benefits application.',
            estimatedTime: '2-3 hours'
          },
          {
            id: 'step-3',
            title: 'Submit Application',
            description: 'Submit your complete application package.',
            estimatedTime: '1 hour'
          },
          {
            id: 'step-4',
            title: 'Attend Medical Exam',
            description: 'Attend required medical evaluation.',
            estimatedTime: '2-3 hours'
          }
        ]
      }
    ]
  },
  {
    id: 'loss-of-loved-one',
    emoji: '🕊️',
    title: 'Loss of a loved one',
    description: 'Death certificates, estate matters, grief support, and compassionate guidance during difficult times.',
    slug: 'loss-of-loved-one',
    category: 'family',
    services: [
      {
        id: 'death-certificate',
        name: 'Death Certificate',
        description: 'Obtain official death certificates for the deceased.',
        department: 'Vital Records Office',
        estimatedTime: '1-2 weeks',
        requiredDocuments: ['Proof of relationship', 'Photo ID', 'Death notification'],
        steps: [
          {
            id: 'step-1',
            title: 'Verify Death Registration',
            description: 'Confirm the death has been properly registered.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-2',
            title: 'Complete Request Form',
            description: 'Fill out the death certificate request form.',
            estimatedTime: '15 minutes'
          },
          {
            id: 'step-3',
            title: 'Provide Documentation',
            description: 'Submit proof of relationship and identification.',
            estimatedTime: '1 hour'
          },
          {
            id: 'step-4',
            title: 'Receive Certificates',
            description: 'Receive official death certificates.',
            estimatedTime: '1-2 weeks'
          }
        ]
      },
      {
        id: 'estate-settlement',
        name: 'Estate Settlement Assistance',
        description: 'Guidance on settling the deceased person\'s estate.',
        department: 'Probate Court',
        estimatedTime: '6-12 months',
        requiredDocuments: ['Death certificate', 'Will', 'Asset documentation'],
        steps: [
          {
            id: 'step-1',
            title: 'Locate Will',
            description: 'Find and review the deceased person\'s will.',
            estimatedTime: '2-4 hours'
          },
          {
            id: 'step-2',
            title: 'Inventory Assets',
            description: 'Create a comprehensive inventory of all assets.',
            estimatedTime: '8-12 hours'
          },
          {
            id: 'step-3',
            title: 'File Probate',
            description: 'File the will with probate court if necessary.',
            estimatedTime: '2-3 hours'
          },
          {
            id: 'step-4',
            title: 'Distribute Assets',
            description: 'Distribute assets according to the will or law.',
            estimatedTime: '4-6 months'
          }
        ]
      }
    ]
  }
];

export const getLifeEventBySlug = (slug: string): LifeEvent | undefined => {
  return lifeEvents.find(event => event.slug === slug);
};

export const getLifeEventsByCategory = (category: string): LifeEvent[] => {
  return lifeEvents.filter(event => event.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(lifeEvents.map(event => event.category).filter((category): category is string => Boolean(category)))];
};
