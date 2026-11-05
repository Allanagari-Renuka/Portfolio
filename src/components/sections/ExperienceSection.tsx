'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WavyUnderline from '../ui/WavyUnderline';
import { Briefcase, Building2, Calendar } from 'lucide-react';

interface JourneyMilestone {
  role: string;
  company: string;
  period: string;
  badge: string;
  highlights: string[];
  tags: string[];
  side: 'left' | 'right';
  initials: string;
  avatarBg: string;
}

const journeyMilestones: JourneyMilestone[] = [
  {
    role: 'Full Stack Developer & AI Engineer',
    company: 'Core Careers',
    period: 'Mar 2026 – September 2026',
    badge: 'Recruitment SaaS & Wholesale Marketplace',
    highlights: [
      'Architected enterprise recruitment workflows: automated candidate ingestion, resume-to-job matching, and instant client funnel analytics.',
      'Constructed automated job alerts and status broadcasts reaching active job seekers via Twilio WhatsApp API.',
      'Engineered core commerce modules for the Bursana wholesale marketplace: verified multi-merchant ingestion, real-time catalog sync, and bulk order checkout.',
    ],
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'Twilio WhatsApp', 'Python'],
    side: 'left',
    initials: 'CC',
    avatarBg: 'bg-charcoal text-white',
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Ango Digital',
    period: 'Jul 2025 – Feb 2026',
    badge: 'Commercial Production Applications',
    highlights: [
      'Engineered 3 commercial production React web applications from architectural blueprints with cross-browser compatibility.',
      'Developed an intelligent conversational AI chatbot with dynamic responses and automated human agent handoff.',
      'Implemented progressive code splitting, asset preloading, and lazy loading, reducing initial bundle weight by over 40%.',
    ],
    tags: ['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'AI Chatbot', 'Git Workflow', 'REST APIs'],
    side: 'right',
    initials: 'AD',
    avatarBg: 'bg-emerald-700 text-white',
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Elfinity',
    period: '2024 – 2025',
    badge: 'Full-Stack Engineering Internship',
    highlights: [
      'Developed responsive corporate web applications following mobile-first design principles and clean semantic SEO architecture.',
      'Integrated MongoDB schemas, RESTful backend endpoints with Node.js/Express, and structured Git collaboration flows.',
    ],
    tags: ['HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'MongoDB', 'SEO', 'Git'],
    side: 'left',
    initials: 'ET',
    avatarBg: 'bg-coral text-white',
  },
];

export default function ExperienceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 sm:py-32 bg-cream border-t border-pale overflow-hidden relative scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Pill Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-start mb-3"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-pale text-xs font-semibold text-charcoal/80 shadow-soft-xs">
            <Briefcase className="w-3.5 h-3.5 text-coral" />
            <span>My journey</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-charcoal tracking-tight font-sans">
            The story <WavyUnderline>so far</WavyUnderline>
          </h2>
          <p className="mt-3 text-base text-charcoal/70 max-w-[65ch]">
            From foundational full-stack engineering internships to commercial SaaS production systems and real-time algorithmic pipelines.
          </p>
        </motion.div>

        {/* Responsive Vertical 3D Timeline */}
        <div className="relative">

          {/* Central Vertical Coral Timeline Line with scaleY animation on scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-5 md:left-1/2 top-4 bottom-4 w-1 md:-translate-x-1/2 bg-gradient-to-b from-coral via-coral to-coral/40 rounded-full opacity-80 shadow-xs origin-top"
            aria-hidden="true"
          />

          {/* Timeline Nodes & Clean Experience Cards */}
          <div className="space-y-12 sm:space-y-16">
            {journeyMilestones.map((m, index) => {
              const isLeft = m.side === 'left';
              const isHovered = hoveredIdx === index;

              return (
                <div
                  key={m.company}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ perspective: '1000px' }}
                >
                  {/* Central Node Avatar with Spring Pop-in */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18, delay: index * 0.12 }}
                    className="absolute left-5 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center top-6 md:top-auto"
                    aria-hidden="true"
                  >
                    <div
                      className={`w-11 h-11 rounded-full border-2 border-white shadow-soft flex items-center justify-center font-bold text-xs tracking-wider transition-all duration-300 ${
                        m.avatarBg
                      } ${isHovered ? 'scale-115 ring-4 ring-coral/30 shadow-coral' : ''}`}
                    >
                      {m.initials}
                    </div>
                  </motion.div>

                  {/* Clean Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotateX: 6 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className="w-full pl-12 md:pl-0 md:w-1/2"
                  >
                    <div
                      className={`p-6 sm:p-8 rounded-card bg-white border transition-all duration-300 space-y-4 ${
                        isHovered
                          ? 'border-coral/50 shadow-soft-lg -translate-y-1.5'
                          : 'border-pale shadow-soft-sm'
                      }`}
                      style={{
                        transform: isHovered
                          ? `rotateX(1deg) rotateY(${isLeft ? '2deg' : '-2deg'}) translateY(-6px)`
                          : 'none',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Period Header (Date shown ONCE) */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-cream-100 border border-pale text-charcoal/80 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-coral" />
                          <span>{m.period}</span>
                        </span>
                        <span className="text-[11px] font-bold text-charcoal/60 uppercase tracking-wider bg-cream-50 px-2.5 py-1 rounded-md border border-pale/60">
                          {m.badge}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <h3 className="text-xl font-bold text-charcoal tracking-tight font-sans">
                          {m.role}
                        </h3>
                        <div className="text-sm font-semibold text-coral mt-1 flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          <span>{m.company}</span>
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 text-xs sm:text-sm text-charcoal/75 leading-relaxed font-normal pt-1">
                        {m.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 shrink-0" aria-hidden="true" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-pale/60">
                        {m.tags.map((t) => (
                          <span key={t} className="tech-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty balancing spacer for desktop 2-column alternation */}
                  <div className="hidden md:block md:w-1/2" aria-hidden="true" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
