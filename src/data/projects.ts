export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge?: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  playStoreCustomerUrl?: string;
  playStoreRestaurantUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  layout?: 'image-left' | 'image-right';
  isMajor?: boolean;
}

export const majorProjects: ProjectItem[] = [
  {
    id: 'skipp',
    title: 'Skipp — Food Pre-Order & Kitchen System',
    tagline: 'Two live Android applications published on Google Play for food pre-ordering, kitchen queue sync, and pickup logistics.',
    category: 'B2B RESTAURANT TECH & MOBILE',
    badge: 'Flagship Project • 2 Live Android Apps on Google Play',
    description:
      'Engineered and published two production Android apps on Google Play — a customer pre-order app and a restaurant partner app — using React, Vite, Capacitor, Node.js, Express, Socket.io, Redis, PostgreSQL/Supabase, Razorpay, Google Maps API, Firebase, and Docker, with MCP-enabled AI development workflows.',
    technologies: [
      'React',
      'Capacitor Android',
      'Node.js',
      'Express',
      'Socket.io',
      'Redis',
      'PostgreSQL',
      'Razorpay',
      'Firebase',
      'Docker',
    ],
    keyFeatures: [
      'Customer app "SKIPP – Skip the Wait": Pre-order and pick up with zero waiting, meal customization, geofenced pickup alerts, UPI/card/wallet payments, and one-tap re-order.',
      'Restaurant Partner app: Live order alerts, real-time menu item control, table/zone queue management, and staff push notifications.',
      'Sub-50ms order status synchronization using Socket.io and Redis pub/sub.',
      'Idempotent Razorpay webhook signature verification for bulletproof payments.',
    ],
    playStoreCustomerUrl: 'https://play.google.com/store/apps/details?id=com.skipp.customer',
    playStoreRestaurantUrl: 'https://play.google.com/store/apps/details?id=com.skipp.restaurantapp',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.skipp.customer',
    image: '/projects/skipp.webp',
    layout: 'image-left',
    isMajor: true,
  },
  {
    id: 'thyroid-diagnosis',
    title: 'Diagnosis of a Thyroid Disease Using CNN & RNN',
    tagline: 'Deep learning diagnostic workflow combining CNN and RNN neural architectures for automated pathology risk assessment.',
    category: 'MACHINE LEARNING & CLINICAL AI',
    badge: 'Clinical Deep Learning Pipeline • 95% Accuracy',
    description:
      'Built an AI-driven thyroid diagnostic pipeline using hybrid CNN and RNN models with TensorFlow/Keras, Flask REST APIs, React, and MongoDB; automated prediction and reporting workflows for clinical risk stratification with 95% classification accuracy.',
    technologies: [
      'Python',
      'TensorFlow/Keras',
      'CNN',
      'RNN',
      'Flask API',
      'React.js',
      'Node.js',
      'MongoDB',
    ],
    keyFeatures: [
      'Hybrid CNN feature extraction with recurrent RNN sequential biomarker analysis.',
      'Automated diagnostic risk report generation with probability distributions.',
      'High-throughput Flask REST API bridging Python inference with React frontend.',
    ],
    demoUrl: 'https://diagnosis-of-a-thyroid-using-cnn-and-rnn-f7ku.onrender.com/',
    githubUrl: 'https://github.com/Allanagari-Renuka/Thyroid-Diagnosis',
    image: '/projects/thyroid-diagnosis.webp',
    layout: 'image-right',
    isMajor: true,
  },
  {
    id: 'sign-language',
    title: 'Real-Time Sign Language Recognition System',
    tagline: 'Real-time 30 FPS computer vision gesture translation pipeline running CNN/LSTM neural networks.',
    category: 'COMPUTER VISION & ACCESSIBILITY',
    badge: 'Real-Time Vision • 30 FPS • 95% Accuracy',
    description:
      'Developed real-time American Sign Language (ASL) gesture recognition using CNN/LSTM neural networks, Python, OpenCV, and image processing, with web integration for live camera inference and accessibility-focused interaction for Deaf communication.',
    technologies: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'CNN',
      'LSTM',
      'Flask / FastAPI',
      'React.js',
      'Tailwind CSS',
    ],
    keyFeatures: [
      'Spatial-temporal sequence modeling combining CNN feature extractors with recurrent LSTM memory cells.',
      'Low-latency video frame preprocessing, skin segmentation, and contour tracking via OpenCV.',
      'Real-time webcam inference operating at 30 FPS with immediate gesture-to-text translation.',
    ],
    demoUrl: 'https://sign-language-recognition-1-ncse.onrender.com',
    githubUrl: 'https://github.com/Allanagari-Renuka/Sign-Language-Recognition',
    image: '/projects/sign-language.webp',
    layout: 'image-left',
    isMajor: true,
  },
];

export const personalProjects: ProjectItem[] = [
  {
    id: 'boundless-horizons',
    title: 'Boundless Horizons — Traveller Blog',
    tagline: 'Interactive travel journal featuring destination guides, cultural stories, and immersive reading UI.',
    category: 'Web App & Content Platform',
    badge: 'Live Deployment',
    description:
      'Built a fully responsive travel blog platform featuring destination guides, cultural immersion stories, and travel experiences with dynamic content rendering, smooth navigation, and an engaging responsive UI.',
    technologies: ['React.js', 'Next.js', 'JavaScript ES6+', 'HTML5', 'Tailwind CSS', 'REST APIs'],
    keyFeatures: [
      'Dynamic article categorization with destination filters and search.',
      'Immersive typography and responsive image gallery layouts.',
      'Optimized performance with fast route transitions and lazy loading.',
    ],
    demoUrl: 'https://traveller-blog-kd3q.vercel.app/',
    image: '/projects/boundless-horizons.webp',
    isMajor: false,
  },
  {
    id: 'user-management',
    title: 'User Management System',
    tagline: 'Full-stack authentication & administrative dashboard with role-based access control.',
    category: 'Full Stack & Security',
    badge: 'Live Deployment',
    description:
      'Production-ready authentication and role-based access management portal featuring secure JWT session handling, full CRUD user administration, password hashing, and MongoDB persistence.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
    keyFeatures: [
      'Role-based permissions (Admin, Moderator, User) with route guards.',
      'Secure token refresh flows with httpOnly cookie storage.',
      'Administrative CRUD tables with instant search, sort, and status toggles.',
    ],
    demoUrl: 'https://user-management-system-3-72hk.onrender.com/',
    image: '/projects/user-management.webp',
    isMajor: false,
  },
  {
    id: 'tiny-short',
    title: 'Tiny-Short URL Generator',
    tagline: 'High-performance URL shortener with custom alias generation and click analytics.',
    category: 'Microservices & Utilities',
    badge: 'Live Deployment',
    description:
      'Lightning-fast URL shortener featuring real-time custom alias creation, QR code generation, redirect speed optimization, and comprehensive click analytics tracking.',
    technologies: ['Next.js', 'React.js', 'Node.js', 'MongoDB / Redis', 'TypeScript', 'Tailwind CSS'],
    keyFeatures: [
      'Custom vanity slugs with collision-free hashing algorithms.',
      'Instant QR code generation for one-tap mobile scanning.',
      'Real-time click telemetry and referral analytics tracking.',
    ],
    demoUrl: 'https://tiny-short-url-m7fb.vercel.app/',
    image: '/projects/tiny-short.webp',
    isMajor: false,
  },
  {
    id: 'pokedex-lite',
    title: 'Pokedex-Lite Encyclopaedia',
    tagline: 'Interactive Pokémon encyclopaedia app with asynchronous PokéAPI querying and stat radar.',
    category: 'Frontend & API Integration',
    badge: 'Live Deployment',
    description:
      'Interactive Pokémon encyclopaedia querying the RESTful PokéAPI with real-time fuzzy search, multi-type filter chips, evolution chain tree rendering, and stat radar visualizations.',
    technologies: ['React.js', 'PokéAPI', 'JavaScript ES6+', 'CSS3 Animations', 'Tailwind CSS'],
    keyFeatures: [
      'Asynchronous pagination and infinite scrolling for 1,000+ Pokémon.',
      'Type-based color theming and animated attack stat bars.',
      'Mobile-optimized touch gestures and crisp card flipping interactions.',
    ],
    demoUrl: 'https://pokedex-lite-livid.vercel.app/',
    image: '/projects/pokedex-lite.webp',
    isMajor: false,
  },
  {
    id: 'recipe-showcase',
    title: 'Restaurant Recipe & Menu Showcase',
    tagline: 'Digital dining culinary showcase with category filters, dietary badges, and cart preview.',
    category: 'E-Commerce & Food Tech',
    badge: 'Live Deployment',
    description:
      'Contemporary restaurant menu and culinary recipe catalog with category filters, interactive dietary preference tags (vegan, gluten-free, chef special), and cart preview.',
    technologies: ['React.js', 'JavaScript', 'CSS3 Modules', 'Tailwind CSS', 'State Engine'],
    keyFeatures: [
      'Dynamic dish categorization (Starters, Mains, Desserts, Beverages).',
      'Interactive spice level and allergen indicator badges.',
      'Quick add-to-order state management with real-time bill calculations.',
    ],
    demoUrl: 'https://recipie-gold.vercel.app/',
    image: '/projects/recipe-showcase.webp',
    isMajor: false,
  },
  {
    id: 'viz-dashboard',
    title: 'Multi-Dimensional Visualization Dashboard',
    tagline: 'Data visualization and business intelligence dashboard with interactive charts and metrics.',
    category: 'Data Engineering & Analytics',
    badge: 'Live Deployment',
    description:
      'Interactive business intelligence dashboard featuring time-series metrics, revenue forecasting, demographic breakdowns, and dynamic filtering powered by Chart.js and React.',
    technologies: ['React.js', 'Chart.js', 'Recharts', 'Node.js', 'Express.js', 'REST APIs'],
    keyFeatures: [
      'Multi-axis line, bar, donut, and scatter chart components.',
      'Date-range picker and metric slice-and-dice data transformations.',
      'Dark/light responsive styling with exportable CSV/PNG reports.',
    ],
    demoUrl: 'https://visualization-dashboard-2-p2tc.onrender.com/',
    image: '/projects/viz-dashboard.webp',
    isMajor: false,
  },
  {
    id: 'core-careers',
    title: 'Core Careers Platform',
    tagline: 'Production recruitment consultancy portal with candidate tracking and hiring workflows.',
    category: 'Production Enterprise SaaS',
    badge: 'Live Production Platform',
    description:
      'Full-scale production career placement and talent consultancy platform supporting candidate intake workflows, client job requisitions, and recruitment management.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Twilio WhatsApp', 'REST APIs'],
    keyFeatures: [
      'Multi-stage candidate application ingestion and document processing.',
      'Employer requisitions board with applicant match scoring.',
      'Integrated communication pipelines with WhatsApp and transactional alerts.',
    ],
    demoUrl: 'https://corecareers.in/',
    image: '/projects/core-careers.webp',
    isMajor: false,
  },
  {
    id: 'landvista',
    title: 'Landvista Spatial Prototype & Design System',
    tagline: 'Real estate and land venture architectural design system and high-fidelity prototype.',
    category: 'UI/UX Design & Architecture',
    badge: 'Live Figma Prototype',
    description:
      'Comprehensive architectural UI/UX system and interactive prototype for prime land development, featuring spatial plot maps, investment calculators, and curated typography.',
    technologies: ['Figma Prototype', 'UI/UX Design', 'Design System', 'Spatial Architecture'],
    keyFeatures: [
      'Interactive spatial land lot selector with pricing breakdowns.',
      'Custom typography scale, color variables, and atomic component library.',
      'Fluid micro-interactions for touch and desktop exploration.',
    ],
    demoUrl: 'https://swirl-false-18170787.figma.site/',
    image: '/projects/landvista.webp',
    isMajor: false,
  },
];

export const projects = [...majorProjects, ...personalProjects];
export const primaryFeaturedProject = majorProjects[0];
