import type { KeralaService } from '@/types';

export const keralaServices: KeralaService[] = [
  {
    id: 'esevanam',
    emoji: '🏛️',
    title: 'e-Sevanam - Your Certificate Hub',
    description: 'Need birth certificates, death certificates, or other important documents? We will show you how to get them online without confusion.',
    slug: 'esevanam',
    category: 'citizen-services',
    websiteUrl: 'https://esevanam.kerala.gov.in',
    services: [
      {
        id: 'birth-certificate',
        name: 'Birth Certificate',
        description: 'Get your baby birth certificate online - we will guide you step by step',
        department: 'Local Self Government',
        websiteUrl: 'https://esevanam.kerala.gov.in',
        estimatedTime: '7-15 days',
        requiredDocuments: ['Hospital birth record', 'Parent ID proofs', 'Address proof'],
        steps: [
          {
            id: 'step-1',
            title: 'Create Your Account',
            description: 'First, make your account on e-Sevanam website. It is easy!',
            actionUrl: 'https://esevanam.kerala.gov.in/registration',
            estimatedTime: '15 minutes'
          },
          {
            id: 'step-2',
            title: 'Fill Form',
            description: 'Fill in birth certificate form with baby and parent details.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-3',
            title: 'Upload Papers',
            description: 'Take photos of your documents and upload them.',
            estimatedTime: '20 minutes'
          },
          {
            id: 'step-4',
            title: 'Get Your Certificate',
            description: 'Wait for approval and download your certificate online.',
            estimatedTime: '7-15 days'
          }
        ]
      },
      {
        id: 'death-certificate',
        name: 'Death Certificate',
        description: 'Need a death certificate? We will help you get it online with simple steps',
        department: 'Local Self Government',
        websiteUrl: 'https://esevanam.kerala.gov.in',
        estimatedTime: '5-10 days',
        requiredDocuments: ['Hospital death record', 'Applicant ID proof', 'Relationship proof'],
        steps: [
          {
            id: 'step-1',
            title: 'Login to e-Sevanam',
            description: 'Access your e-Sevanam account.',
            actionUrl: 'https://esevanam.kerala.gov.in/login',
            estimatedTime: '5 minutes'
          },
          {
            id: 'step-2',
            title: 'Complete Death Registration',
            description: 'Fill death registration form with accurate details.',
            estimatedTime: '25 minutes'
          },
          {
            id: 'step-3',
            title: 'Submit Supporting Documents',
            description: 'Upload hospital records and identity proofs.',
            estimatedTime: '15 minutes'
          },
          {
            id: 'step-4',
            title: 'Receive Certificate',
            description: 'Download approved death certificate.',
            estimatedTime: '5-10 days'
          }
        ]
      }
    ]
  },
  {
    id: 'ksmart',
    emoji: '📱',
    title: 'K-Smart - City Services Made Easy',
    description: 'Pay property tax, water bills and other city services online without standing in long queues.',
    slug: 'ksmart',
    category: 'urban-services',
    websiteUrl: 'https://ksmart.kerala.gov.in',
    services: [
      {
        id: 'property-tax',
        name: 'Property Tax Payment',
        description: 'Pay your property tax online from home - no need to go to office',
        department: 'Municipal Corporation',
        websiteUrl: 'https://ksmart.kerala.gov.in/property-tax',
        estimatedTime: '5 minutes',
        requiredDocuments: ['Property ID', 'Assessment number'],
        steps: [
          {
            id: 'step-1',
            title: 'Go to K-Smart Website',
            description: 'Login to K-Smart with your username and password.',
            actionUrl: 'https://ksmart.kerala.gov.in/login',
            estimatedTime: '2 minutes'
          },
          {
            id: 'step-2',
            title: 'Find Your Property',
            description: 'Enter your property ID and see how much tax you need to pay.',
            estimatedTime: '3 minutes'
          },
          {
            id: 'step-3',
            title: 'Pay Online',
            description: 'Use your debit card, credit card or online banking to pay.',
            estimatedTime: '2 minutes'
          },
          {
            id: 'step-4',
            title: 'Save Receipt',
            description: 'Download and save your payment receipt for future use.',
            estimatedTime: '1 minute'
          }
        ]
      },
      {
        id: 'water-bill',
        name: 'Water Bill Payment',
        description: 'Pay your water bill online and avoid last minute rushes',
        department: 'Water Authority',
        websiteUrl: 'https://ksmart.kerala.gov.in/water-bill',
        estimatedTime: '5 minutes',
        requiredDocuments: ['Consumer number', 'Connection details'],
        steps: [
          {
            id: 'step-1',
            title: 'Login to K-Smart',
            description: 'Open K-Smart website and login to your account.',
            actionUrl: 'https://ksmart.kerala.gov.in/login',
            estimatedTime: '2 minutes'
          },
          {
            id: 'step-2',
            title: 'Check Your Bill',
            description: 'See your current water bill amount and due date.',
            estimatedTime: '2 minutes'
          },
          {
            id: 'step-3',
            title: 'Make Payment',
            description: 'Pay using any online payment method you prefer.',
            estimatedTime: '3 minutes'
          }
        ]
      }
    ]
  },
  {
    id: 'edistrict',
    emoji: '📋',
    title: 'e-District - District Services Online',
    description: 'Get income certificates, caste certificates and other district services without visiting government offices.',
    slug: 'edistrict',
    category: 'district-services',
    websiteUrl: 'https://edistrict.kerala.gov.in',
    services: [
      {
        id: 'income-certificate',
        name: 'Income Certificate',
        description: 'Need income certificate for loans or admissions? Apply online easily',
        department: 'District Administration',
        websiteUrl: 'https://edistrict.kerala.gov.in/income-certificate',
        estimatedTime: '10-15 days',
        requiredDocuments: ['Aadhaar card', 'Ration card', 'Income proof'],
        steps: [
          {
            id: 'step-1',
            title: 'Register on e-District',
            description: 'Create your account on e-District portal with basic details.',
            actionUrl: 'https://edistrict.kerala.gov.in/registration',
            estimatedTime: '20 minutes'
          },
          {
            id: 'step-2',
            title: 'Fill Application',
            description: 'Complete income certificate application form carefully.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-3',
            title: 'Upload Documents',
            description: 'Upload clear photos of all required documents.',
            estimatedTime: '25 minutes'
          },
          {
            id: 'step-4',
            title: 'Get Certificate',
            description: 'Receive your digitally signed certificate online.',
            estimatedTime: '10-15 days'
          }
        ]
      },
      {
        id: 'caste-certificate',
        name: 'Caste Certificate',
        description: 'Apply for caste certificate to get reservation benefits in education and jobs',
        department: 'District Administration',
        websiteUrl: 'https://edistrict.kerala.gov.in/caste-certificate',
        estimatedTime: '15-20 days',
        requiredDocuments: ['Aadhaar card', 'Parent caste certificate', 'Address proof'],
        steps: [
          {
            id: 'step-1',
            title: 'Login to e-District',
            description: 'Access your e-District account with username and password.',
            actionUrl: 'https://edistrict.kerala.gov.in/login',
            estimatedTime: '5 minutes'
          },
          {
            id: 'step-2',
            title: 'Apply for Caste Certificate',
            description: 'Fill caste certificate application form with correct details.',
            estimatedTime: '35 minutes'
          },
          {
            id: 'step-3',
            title: 'Submit for Verification',
            description: 'Submit all documents for government verification.',
            estimatedTime: '30 minutes'
          },
          {
            id: 'step-4',
            title: 'Field Visit and Approval',
            description: 'Wait for officials to visit and verify your details.',
            estimatedTime: '15-20 days'
          }
        ]
      }
    ]
  },
  {
    id: 'emergency-services',
    emoji: '🚨',
    title: 'Emergency Help - 24/7 Available',
    description: 'In emergency situations, these numbers can save lives. Keep them saved on your phone.',
    slug: 'emergency-services',
    category: 'emergency',
    websiteUrl: undefined,
    services: [
      {
        id: 'police-helpline',
        name: 'Police Emergency',
        description: 'Call police when you are in danger or need help with any crime',
        department: 'Kerala Police',
        websiteUrl: undefined,
        estimatedTime: 'Immediate',
        requiredDocuments: [],
        steps: [
          {
            id: 'step-1',
            title: 'Call 112',
            description: 'Dial 112 from your phone for police help.',
            actionUrl: 'tel:112',
            estimatedTime: 'Immediate'
          },
          {
            id: 'step-2',
            title: 'Tell Your Location',
            description: 'Clearly tell police where you are right now.',
            estimatedTime: '1 minute'
          },
          {
            id: 'step-3',
            title: 'Explain Emergency',
            description: 'Briefly explain what emergency help you need.',
            estimatedTime: '2 minutes'
          }
        ]
      },
      {
        id: 'ambulance',
        name: 'Ambulance Service',
        description: 'When someone needs urgent medical help, call for ambulance immediately',
        department: 'Health Department',
        websiteUrl: undefined,
        estimatedTime: 'Immediate',
        requiredDocuments: [],
        steps: [
          {
            id: 'step-1',
            title: 'Call 108',
            description: 'Dial 108 for ambulance service in medical emergency.',
            actionUrl: 'tel:108',
            estimatedTime: 'Immediate'
          },
          {
            id: 'step-2',
            title: 'Share Patient Details',
            description: 'Tell them about patient condition and your location.',
            estimatedTime: '2 minutes'
          },
          {
            id: 'step-3',
            title: 'Follow Instructions',
            description: 'Listen carefully to medical advice given on phone.',
            estimatedTime: 'Until ambulance arrives'
          }
        ]
      },
      {
        id: 'fire-force',
        name: 'Fire & Rescue',
        description: 'Call fire force when there is fire or someone needs to be rescued',
        department: 'Fire and Rescue Services',
        websiteUrl: undefined,
        estimatedTime: 'Immediate',
        requiredDocuments: [],
        steps: [
          {
            id: 'step-1',
            title: 'Call 101',
            description: 'Dial 101 immediately when you see fire or need rescue.',
            actionUrl: 'tel:101',
            estimatedTime: 'Immediate'
          },
          {
            id: 'step-2',
            title: 'Report Fire Location',
            description: 'Tell exactly where fire is and what is burning.',
            estimatedTime: '1 minute'
          },
          {
            id: 'step-3',
            title: 'Stay Safe',
            description: 'Move to safe place and follow safety instructions.',
            estimatedTime: 'Until help arrives'
          }
        ]
      }
    ]
  }
];

export const getKeralaServiceBySlug = (slug: string): KeralaService | undefined => {
  return keralaServices.find(service => service.slug === slug);
};

export const getKeralaServicesByCategory = (category: string): KeralaService[] => {
  return keralaServices.filter(service => service.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(keralaServices.map(service => service.category).filter((category): category is string => Boolean(category)))];
};
