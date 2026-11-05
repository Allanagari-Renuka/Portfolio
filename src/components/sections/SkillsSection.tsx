'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  Sparkles,
} from 'lucide-react';
import WavyUnderline from '../ui/WavyUnderline';
import TiltCard from '../ui/TiltCard';

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'aiml' | 'mobile_cloud' | 'tools';

export interface TechSkill {
  name: string;
  category: SkillCategory;
  descriptor: string;
  icon: (props: { className?: string }) => React.JSX.Element;
  color: string;
}

// Crisp inline SVG tech logos
const ReactIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 180 180" fill="none">
    <mask height="180" id="mask-next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
      <circle cx="90" cy="90" fill="black" r="90" />
    </mask>
    <g mask="url(#mask-next)">
      <circle cx="90" cy="90" fill="black" r="90" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
      <rect fill="white" height="72" width="12" x="115" y="54" />
    </g>
  </svg>
);

const TypeScriptIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#3178C6" />
    <path d="M72.2 78.4c2.8 5 6.5 8.9 13.8 8.9 6.2 0 10.3-3.1 10.3-7.5 0-5.2-4.2-7.1-11.4-10.2-10.6-4.5-17.7-10.3-17.7-22.1 0-11 8.5-19.5 21.6-19.5 9.4 0 16.3 3.6 20.9 11.9l-10 6.4c-2.4-4.2-5-6-10.9-6-5 0-8.3 3.1-8.3 6.9 0 4.6 3.4 6.5 10.7 9.6 11.4 4.9 18.5 10.2 18.5 22.8 0 12.8-9.9 20.3-23.8 20.3-13.4 0-21.8-6.9-26.1-15.5l12.5-5.9zM24 40h42v12H48v56H34V52H24V40z" fill="#FFF" />
  </svg>
);

const JavaScriptIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#F7DF1E" />
    <path d="M72.8 77.2c2.4 4 5.3 7.3 11.5 7.3 5 0 8.3-2.5 8.3-5.9 0-4.1-3.3-5.6-8.9-8.1-8.3-3.5-13.9-8.1-13.9-17.4 0-8.6 6.7-15.4 17-15.4 7.4 0 12.8 2.8 16.4 9.3l-7.9 5c-1.9-3.3-3.9-4.8-8.5-4.8-3.9 0-6.5 2.5-6.5 5.4 0 3.6 2.7 5.1 8.4 7.5 9 3.8 14.6 8 14.6 17.9 0 10.1-7.8 16-18.7 16-10.5 0-17.2-5.4-20.6-12.2l8.8-4.6zM29.8 81.3c1.7 3 3.5 5.5 7.5 5.5 3.9 0 6.3-1.6 6.3-7.7V39.6h11.2v39.8c0 12.2-7.1 17.6-17.3 17.6-8.7 0-14-4.6-16.7-11.4l9-4.3z" fill="#000" />
  </svg>
);

const TailwindIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <path d="M24 10C16 10 11 15 9 25C13 20 18 18 22 20C25 21.5 27 24 30 26.5C34.5 30.2 40 33 48 30C40 38 35 33 33 23C29 28 24 30 20 28C17 26.5 15 24 12 21.5C7.5 17.8 2 15 0 23C3 15 8 10 16 10C20 10 23 11.5 26 13C30 15 33 16 38 10Z" fill="#38BDF8" />
  </svg>
);

const NodeIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path d="M64 8.7L11.5 39v60.7L64 120.1l52.5-30.3V39L64 8.7z" fill="#539E43" />
    <path d="M64 25.5l38.2 22.1v44.2L64 113.9 25.8 91.8V47.6L64 25.5z" fill="#333" />
    <path d="M64 42.4L45.4 53.1v21.4L64 85.2l18.6-10.7V53.1L64 42.4z" fill="#539E43" />
  </svg>
);

const ExpressIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#222" />
    <text x="64" y="78" fill="#FFF" fontFamily="system-ui, sans-serif" fontSize="40" fontWeight="900" textAnchor="middle">EX</text>
  </svg>
);

const FastAPIIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <circle cx="64" cy="64" r="56" fill="#009688" />
    <path d="M69.8 28.5L38.4 69h24.8l-5 30.5L89.6 59H64.8l5-30.5z" fill="#FFF" />
  </svg>
);

const PythonIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path d="M63.2 8C35.2 8 36.8 20.1 36.8 20.1l.1 12.6h26.7v3.8H21.2S8 35 8 63.2c0 28.2 11.5 27.2 11.5 27.2h6.9v-9.6s-.4-11.5 11.3-11.5h27.3s10.9.2 10.9-10.6V30.8S78 8 63.2 8zm-14 8.7a4.3 4.3 0 1 1 0 8.6 4.3 4.3 0 0 1 0-8.6z" fill="#387EB8" />
    <path d="M64.8 120c28 0 26.4-12.1 26.4-12.1l-.1-12.6H64.4v-3.8h42.4S120 93 120 64.8c0-28.2-11.5-27.2-11.5-27.2h-6.9v9.6s.4 11.5-11.3 11.5H62.9s-10.9-.2-10.9 10.6v27.9s-.8 22.8 12.8 22.8zm14-8.7a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6z" fill="#FFE052" />
  </svg>
);

const SocketIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <circle cx="64" cy="64" r="56" fill="#010101" />
    <path d="M64 24L34 76h26l-6 28 36-52H64l6-28z" fill="#FFF" />
  </svg>
);

const RedisIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path d="M12 40l52-20 52 20-52 20z" fill="#DC382D" />
    <path d="M12 64l52 20 52-20-52-20z" fill="#B3241C" />
    <path d="M12 88l52 20 52-20-52-20z" fill="#8C1C16" />
  </svg>
);

const PostgresIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <circle cx="64" cy="64" r="56" fill="#336791" />
    <path d="M64 24c-16 0-26 12-26 26 0 18 14 26 26 38 12-12 26-20 26-38 0-14-10-26-26-26z" fill="#FFF" opacity="0.9" />
  </svg>
);

const MongoIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path d="M64 12c-2 0-38 34-38 68 0 24 16 36 38 44 22-8 38-20 38-44 0-34-36-68-38-68z" fill="#47A248" />
    <path d="M64 12v112c22-8 38-20 38-44 0-34-36-68-38-68z" fill="#499D4A" opacity="0.8" />
  </svg>
);

const MySQLIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#00758F" />
    <path d="M30 64c0-18 15-32 34-32s34 14 34 32c0 14-8 26-20 30l8 14H72l-6-12h-4v12H50V64h14v16c6 0 10-4 10-10s-4-10-10-10-10 4-10 10v20H30V64z" fill="#F29111" />
  </svg>
);

const TFIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path d="M64 10L14 39v50l50 29 50-29V39L64 10z" fill="#FF6F00" />
    <path d="M64 10L14 39l50 29 50-29-50-29z" fill="#FFA000" />
    <path d="M64 68v50l50-29V39L64 68z" fill="#FF8F00" />
  </svg>
);

const KerasIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#D00000" />
    <path d="M38 32v64h16V70l24 26h22L72 64l24-32H75L54 58V32H38z" fill="#FFF" />
  </svg>
);

const OpenCVIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <circle cx="64" cy="40" r="22" fill="#EA3824" />
    <circle cx="42" cy="84" r="22" fill="#4B96E6" />
    <circle cx="86" cy="84" r="22" fill="#43B02A" />
    <circle cx="64" cy="40" r="10" fill="#FFF" />
    <circle cx="42" cy="84" r="10" fill="#FFF" />
    <circle cx="86" cy="84" r="10" fill="#FFF" />
  </svg>
);

const CNNIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#2563EB" />
    <rect x="28" y="28" width="32" height="32" rx="4" fill="#93C5FD" />
    <rect x="68" y="28" width="32" height="32" rx="4" fill="#60A5FA" />
    <rect x="48" y="68" width="32" height="32" rx="4" fill="#1D4ED8" />
  </svg>
);

const RNNIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#7C3AED" />
    <circle cx="64" cy="64" r="28" fill="none" stroke="#DDD6FE" strokeWidth="8" strokeDasharray="120" />
    <path d="M88 40l10 14-16 4" fill="#DDD6FE" />
  </svg>
);

const ScikitIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <circle cx="46" cy="64" r="30" fill="#3499CD" />
    <circle cx="82" cy="64" r="30" fill="#F89939" opacity="0.9" />
  </svg>
);

const CapacitorIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#119EFF" />
    <path d="M40 38h48v12H40V38zm0 40h48v12H40V78zm12-20h24v12H52V58z" fill="#FFF" />
  </svg>
);

const ReactNativeIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#20232A" />
    <circle cx="64" cy="64" r="8" fill="#61DAFB" />
    <ellipse cx="64" cy="64" rx="36" ry="14" fill="none" stroke="#61DAFB" strokeWidth="4" />
    <ellipse cx="64" cy="64" rx="36" ry="14" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 64 64)" />
    <ellipse cx="64" cy="64" rx="36" ry="14" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 64 64)" />
  </svg>
);

const FirebaseIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path d="M26 96L44 18l18 34-36 44z" fill="#FFA000" />
    <path d="M68 60l12-22 22 58-34-36z" fill="#F57C00" />
    <path d="M26 96l38 22 38-22L68 60 26 96z" fill="#FFCA28" />
  </svg>
);

const AWSIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#232F3E" />
    <text x="64" y="62" fill="#FFF" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="bold" textAnchor="middle">AWS</text>
    <path d="M34 82c20 14 44 14 60 0" fill="none" stroke="#FF9900" strokeWidth="6" strokeLinecap="round" />
    <path d="M96 80l4 8-8 0" fill="#FF9900" />
  </svg>
);

const DockerIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path d="M120 62c-3-2-8-2-12 0-3-8-10-12-18-12-1 0-2 0-3 .2C83 38 68 44 64 54H16c-4 0-8 3-8 8 0 18 10 38 34 38 28 0 48-16 54-32 8 .5 18-2 24-6z" fill="#2496ED" />
    <rect x="36" y="38" width="10" height="10" rx="1" fill="#2496ED" />
    <rect x="50" y="38" width="10" height="10" rx="1" fill="#2496ED" />
    <rect x="64" y="38" width="10" height="10" rx="1" fill="#2496ED" />
    <rect x="50" y="24" width="10" height="10" rx="1" fill="#2496ED" />
  </svg>
);

const GitIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path d="M124.7 56.6L71.4 3.3c-4.4-4.4-11.5-4.4-15.9 0L3.3 55.5c-4.4 4.4-4.4 11.5 0 15.9l53.3 53.3c4.4 4.4 11.5 4.4 15.9 0l52.2-52.2c4.4-4.4 4.4-11.5 0-15.9z" fill="#F05032" />
    <circle cx="48" cy="76" r="8" fill="#FFF" />
    <circle cx="80" cy="52" r="8" fill="#FFF" />
    <circle cx="80" cy="76" r="8" fill="#FFF" />
    <path d="M48 76l32-24v24" stroke="#FFF" strokeWidth="6" fill="none" />
  </svg>
);

// Exactly 26 verified skills from data file
const SKILLS: TechSkill[] = [
  // Frontend (5)
  { name: 'React', category: 'frontend', descriptor: 'Production web core & hooks', icon: ReactIcon, color: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', descriptor: 'App Router & SSR performance', icon: NextIcon, color: '#000000' },
  { name: 'TypeScript', category: 'frontend', descriptor: 'Strict typing & interfaces', icon: TypeScriptIcon, color: '#3178C6' },
  { name: 'JavaScript ES6+', category: 'frontend', descriptor: 'Modern ES modules & async', icon: JavaScriptIcon, color: '#F7DF1E' },
  { name: 'Tailwind CSS', category: 'frontend', descriptor: 'Utility-first design tokens', icon: TailwindIcon, color: '#38BDF8' },

  // Backend (9)
  { name: 'Node.js', category: 'backend', descriptor: 'High-concurrency microservices', icon: NodeIcon, color: '#539E43' },
  { name: 'Express.js', category: 'backend', descriptor: 'REST APIs & middleware', icon: ExpressIcon, color: '#222222' },
  { name: 'FastAPI', category: 'backend', descriptor: 'Async Python REST endpoints', icon: FastAPIIcon, color: '#009688' },
  { name: 'Python', category: 'backend', descriptor: 'Data science & AI pipelines', icon: PythonIcon, color: '#3776AB' },
  { name: 'Socket.io', category: 'backend', descriptor: 'Sub-50ms event sync', icon: SocketIcon, color: '#010101' },
  { name: 'Redis', category: 'backend', descriptor: 'Pub/sub & memory caching', icon: RedisIcon, color: '#DC382D' },
  { name: 'PostgreSQL', category: 'backend', descriptor: 'Relational schemas & Supabase', icon: PostgresIcon, color: '#336791' },
  { name: 'MongoDB', category: 'backend', descriptor: 'NoSQL document persistence', icon: MongoIcon, color: '#47A248' },
  { name: 'MySQL', category: 'backend', descriptor: 'Relational models & indexing', icon: MySQLIcon, color: '#00758F' },

  // AI & ML (6)
  { name: 'TensorFlow', category: 'aiml', descriptor: 'Deep learning model training', icon: TFIcon, color: '#FF6F00' },
  { name: 'Keras', category: 'aiml', descriptor: 'High-level neural architectures', icon: KerasIcon, color: '#D00000' },
  { name: 'OpenCV', category: 'aiml', descriptor: 'Computer vision & 30 FPS inference', icon: OpenCVIcon, color: '#5C3EE8' },
  { name: 'CNN Architectures', category: 'aiml', descriptor: 'Spatial feature extraction', icon: CNNIcon, color: '#2563EB' },
  { name: 'RNN / LSTM', category: 'aiml', descriptor: 'Sequential biomarker models', icon: RNNIcon, color: '#7C3AED' },
  { name: 'scikit-learn', category: 'aiml', descriptor: 'Supervised & unsupervised ML', icon: ScikitIcon, color: '#F89939' },

  // Mobile & Cloud (4)
  { name: 'Capacitor Android', category: 'mobile_cloud', descriptor: 'Native bridge on Google Play', icon: CapacitorIcon, color: '#119EFF' },
  { name: 'React Native', category: 'mobile_cloud', descriptor: 'Cross-platform mobile apps', icon: ReactNativeIcon, color: '#61DAFB' },
  { name: 'Firebase', category: 'mobile_cloud', descriptor: 'Auth, messaging & cloud storage', icon: FirebaseIcon, color: '#FFCA28' },
  { name: 'AWS', category: 'mobile_cloud', descriptor: 'Cloud Practitioner essentials', icon: AWSIcon, color: '#FF9900' },

  // Tools (2)
  { name: 'Docker', category: 'tools', descriptor: 'Containerization & environments', icon: DockerIcon, color: '#2496ED' },
  { name: 'Git & GitHub', category: 'tools', descriptor: 'Version control & workflows', icon: GitIcon, color: '#F05032' },
];

const CATEGORIES = [
  { id: 'all' as SkillCategory, label: 'All', count: 26 },
  { id: 'frontend' as SkillCategory, label: 'Frontend', count: 5 },
  { id: 'backend' as SkillCategory, label: 'Backend', count: 9 },
  { id: 'aiml' as SkillCategory, label: 'AI & ML', count: 6 },
  { id: 'mobile_cloud' as SkillCategory, label: 'Mobile & Cloud', count: 4 },
  { id: 'tools' as SkillCategory, label: 'Tools', count: 2 },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = SKILLS.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="toolbox" className="py-24 sm:py-32 bg-cream border-t border-pale overflow-hidden relative scroll-mt-24">
      {/* 3D background glowing orb */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-start mb-3"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-pale text-xs font-semibold text-charcoal/80 shadow-soft-xs">
            <Wrench className="w-3.5 h-3.5 text-coral" />
            <span>Tech Stack &amp; Tools</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-charcoal tracking-tight font-sans">
              What I <WavyUnderline>work with</WavyUnderline>
            </h2>
            <p className="mt-3 text-base text-charcoal/70 max-w-[65ch]">
              Production technologies, neural frameworks, and engineering tools I use to deliver scalable web platforms and AI systems.
            </p>
          </div>
        </motion.div>

        {/* Category Tabs: Clean pill bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl bg-white/70 border border-pale shadow-soft-xs backdrop-blur-xs">
          {CATEGORIES.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
                  isActive
                    ? 'bg-coral text-white shadow-soft-xs'
                    : 'text-charcoal/70 hover:text-charcoal hover:bg-cream-100'
                }`}
                aria-pressed={isActive}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-white/25 text-white' : 'bg-pale/70 text-charcoal/60'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean, Flat, Aligned Grid with 3D TiltCard Physics & Spring Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.035,
                },
              },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch"
          >
            {filteredSkills.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full flex"
                >
                  <TiltCard maxTilt={5} className="w-full">
                    <div className="portfolio-card flex flex-col justify-between p-4 rounded-xl bg-white border border-pale shadow-soft-xs hover:shadow-soft-md hover:border-coral/50 transition-all duration-300 group h-[124px]">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-lg bg-cream-50 border border-pale flex items-center justify-center group-hover:scale-110 group-hover:shadow-soft-xs transition-transform duration-200">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="w-2 h-2 rounded-full bg-coral/30 group-hover:bg-coral group-hover:scale-125 transition-all duration-200" />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-charcoal font-sans group-hover:text-coral transition-colors line-clamp-1">
                          {skill.name}
                        </h3>
                        <p className="text-[11px] text-charcoal/60 font-medium truncate mt-0.5">
                          {skill.descriptor}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
