// src/data/jobs.ts

import { Job } from '@/types';

export const jobs: Job[] = [
  {
    id: '1',
    company: 'Google',
    location: 'Amsterdam, Netherlands',
    title: 'Client Solutions Manager, Disruptos',
    tags: ['NEW', 'Hot', 'Remote'],
    categories: ['Sales & Marketing', 'Sales'],
    isNew: true,
    isHot: true,
    isRemote: true,
    description:
      'Manage client solutions for Disruptos, ensuring seamless integration of sales and marketing strategies with client needs.',
    minimumQualification: [
      'Bachelor’s degree in Business or Marketing',
      '3+ years of experience in sales and client relations',
      'Excellent communication and problem-solving skills',
    ],
    preferredQualification: [
      'Master’s degree in Business Administration',
      'Experience working with global clients',
    ],
    note: 'This role involves working with cross-functional teams to deliver exceptional client service.',
  },
  {
    id: '2',
    company: 'Facebook',
    location: 'New York, USA',
    title: 'Product Designer',
    tags: ['Remote'],
    categories: ['Design', 'UI/UX'],
    isNew: false,
    isHot: false,
    isRemote: true,
    description:
      'Lead design efforts for Facebook’s product development teams. Collaborate closely with engineers and product managers to create impactful designs.',
    minimumQualification: [
      'Bachelor’s degree in Design or related field',
      'Strong portfolio of UI/UX designs',
      'Proficient in design tools like Figma and Adobe XD',
    ],
    preferredQualification: [
      '5+ years of experience in product design',
      'Experience with design systems and prototyping tools',
    ],
    note: 'This is a remote role with opportunities to work with cross-functional teams across the globe.',
  },
  {
    id: '3',
    company: 'Apple',
    location: 'Cupertino, CA, USA',
    title: 'Software Engineer',
    tags: ['NEW'],
    categories: ['Engineering', 'Software Development'],
    isNew: true,
    isHot: false,
    isRemote: false,
    description:
      'Develop cutting-edge software solutions for Apple’s flagship products. Work with a team of engineers to create reliable, scalable software.',
    minimumQualification: [
      'Bachelor’s degree in Computer Science or equivalent',
      'Proficiency in Swift and Objective-C',
      'Strong understanding of iOS frameworks and tools',
    ],
    preferredQualification: [
      'Experience with macOS and cross-platform development',
      'Experience working in an Agile environment',
    ],
    note: 'You’ll work on innovative projects and contribute to the development of Apple’s ecosystem.',
  },
  {
    id: '4',
    company: 'Amazon',
    location: 'Seattle, WA, USA',
    title: 'Data Scientist',
    tags: ['Hot', 'Remote'],
    categories: ['Data Science', 'Machine Learning'],
    isNew: false,
    isHot: true,
    isRemote: true,
    description:
      'Analyze and model large datasets to optimize Amazon’s customer-facing operations and improve decision-making across the company.',
    minimumQualification: [
      'Bachelor’s degree in Data Science or a related field',
      '3+ years of experience in data analysis and machine learning',
      'Proficiency in Python, R, and SQL',
    ],
    preferredQualification: [
      'Master’s or PhD in Data Science or a related field',
      'Experience working with AWS and cloud-based data tools',
    ],
    note: 'This is a remote role with significant responsibility for driving data-informed decisions at scale.',
  },
  {
    id: '5',
    company: 'Netflix',
    location: 'Los Gatos, CA, USA',
    title: 'Senior Marketing Manager',
    tags: ['NEW', 'Remote'],
    categories: ['Marketing', 'Management'],
    isNew: true,
    isHot: false,
    isRemote: true,
    description:
      'Lead Netflix’s marketing strategy for new product launches. Collaborate with internal and external teams to drive engagement and brand awareness.',
    minimumQualification: [
      'Bachelor’s degree in Marketing or Communications',
      '7+ years of experience in marketing and brand management',
      'Proven track record of successful marketing campaigns',
    ],
    preferredQualification: [
      'Experience in digital marketing and content creation',
      'Master’s degree in Marketing',
    ],
    note: 'You will play a pivotal role in expanding Netflix’s global reach through creative and data-driven marketing strategies.',
  },
  {
    id: '6',
    company: 'Tesla',
    location: 'Palo Alto, CA, USA',
    title: 'Mechanical Engineer',
    tags: [],
    categories: ['Engineering', 'Mechanical'],
    isNew: false,
    isHot: false,
    isRemote: false,
    description:
      'Design, develop, and improve Tesla’s mechanical systems for electric vehicles. Work with teams to ensure safety, efficiency, and innovation in every design.',
    minimumQualification: [
      'Bachelor’s degree in Mechanical Engineering or related field',
      'Proficiency in CAD software',
      '2+ years of experience in mechanical system design',
    ],
    preferredQualification: [
      'Experience with automotive engineering',
      'Experience with electric vehicle systems',
    ],
    note: 'This is an on-site role with opportunities to work on cutting-edge technology in the electric vehicle industry.',
  },
  {
    id: '7',
    company: 'Spotify',
    location: 'Stockholm, Sweden',
    title: 'Global Sales Strategist',
    tags: ['NEW', 'Hot'],
    categories: ['Sales', 'Strategy'],
    isNew: true,
    isHot: true,
    isRemote: false,
    description:
      'Develop and implement sales strategies for Spotify’s global markets. Collaborate with cross-functional teams to optimize sales processes and drive growth.',
    minimumQualification: [
      'Bachelor’s degree in Business Administration or equivalent',
      '5+ years of experience in sales strategy development',
      'Strong analytical and communication skills',
    ],
    preferredQualification: [
      'Experience working in international markets',
      'MBA or advanced degree in business or a related field',
    ],
    note: 'This role requires frequent travel to manage global accounts and develop business relationships.',
  },
  {
    id: '8',
    company: 'Microsoft',
    location: 'Redmond, WA, USA',
    title: 'Cloud Infrastructure Architect',
    tags: ['Remote'],
    categories: ['Cloud Computing', 'Architecture'],
    isNew: false,
    isHot: false,
    isRemote: true,
    description:
      'Design and implement cloud infrastructure solutions for Microsoft’s enterprise clients. Ensure scalability, security, and efficiency in every project.',
    minimumQualification: [
      'Bachelor’s degree in Computer Science or related field',
      'Experience with Azure, AWS, or Google Cloud',
      '3+ years of experience in cloud architecture',
    ],
    preferredQualification: [
      'Certification in cloud architecture (Azure, AWS, or GCP)',
      'Experience with Kubernetes and Docker',
    ],
    note: 'This is a remote role with opportunities to work on high-impact cloud projects across multiple industries.',
  },
];
