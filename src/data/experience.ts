export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  badge?: string;
  description: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'core-careers',
    company: 'Core Careers Pvt. Ltd.',
    role: 'Junior Product & Growth Associate',
    period: 'Mar 2026 – Sep 2026',
    badge: 'Recruitment & B2B SaaS',
    description: [
      'Built and deployed recruitment and B2B SaaS products including candidate & employer portals, recruitment automation, algorithmic resume-to-job matching, and automated job alerts.',
      'Constructed client and candidate intelligence dashboards for real-time funnel visibility and workflow tracking.',
      'Engineered core commerce modules for the Bursana wholesale marketplace: supplier ingestion & verification, storefront catalog, bulk cart, and order execution.',
    ],
    technologies: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'JWT',
      'Socket.io',
      'Cloudinary',
      'Twilio WhatsApp',
    ],
  },
  {
    id: 'ango-digital',
    company: 'Ango Digital Technologies',
    role: 'Frontend Developer',
    period: 'Jul 2025 – Feb 2026',
    badge: 'Production Web Applications',
    description: [
      'Engineered 3 production React web applications including an AI customer service chatbot with seamless human-agent handoff.',
      'Developed a comprehensive digital services platform and an interactive restaurant customer-service ticketing system.',
      'Implemented advanced code splitting, asset optimization, and lazy loading to achieve high frontend responsiveness.',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'AI Chatbot',
      'REST APIs',
      'Code Splitting',
      'Git',
    ],
  },
  {
    id: 'elfinity',
    company: 'Elfinity Technologies',
    role: 'Full Stack Developer Intern',
    period: 'Nov 2024 – May 2025',
    badge: 'Full Stack Internship',
    description: [
      'Built a fully responsive corporate website implementing modern UI/UX design standards and clean semantic architecture.',
      'Integrated cross-browser compatibility, search engine optimization (SEO) best practices, and high-performance styling using Tailwind CSS.',
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript',
      'SEO',
      'Cross-Browser Testing',
    ],
  },
];
