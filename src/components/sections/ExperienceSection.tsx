'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import WavyUnderline from '../ui/WavyUnderline';
import { Briefcase, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

const journeyMilestones = [
  {
    year: '2026',
    role: 'Junior Product & Growth Associate',
    company: 'Core Careers Private Limited',
    period: 'March 2026 – Present',
    description:
      'Engineered enterprise B2B recruitment SaaS products, candidate matching algorithms, automated job alerts via Twilio WhatsApp, and the Bursana wholesale marketplace with multi-merchant catalog and bulk checkout.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'Twilio WhatsApp', 'Python'],
    side: 'left',
    polaroid: {
      src: '/professional-portfolio.png',
      caption: 'so proud of this work ✨',
    },
  },
  {
    year: '2025 – 2026',
    role: 'Frontend Developer',
    company: 'Ango Digital Technologies',
    period: 'July 2025 – February 2026',
    description:
      'Engineered three commercial production web applications from architectural blueprints, including an intelligent conversational AI chatbot with dynamic responses and automated human agent handoff.',
    tags: ['React.js', 'JavaScript ES6+', 'Responsive UI', 'Git Workflow', 'REST APIs'],
    side: 'right',
  },
  {
    year: '2024 – 2025',
    role: 'Full Stack Developer Intern',
    company: 'Elfinity Technologies',
    period: '2024 – 2025',
    description:
      'Developed corporate responsive web interfaces, applied mobile-first design, semantic SEO architecture, database schemas with MongoDB, and Git version control practices.',
    tags: ['HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'MongoDB', 'SEO', 'Git'],
    side: 'left',
    polaroid: {
      src: '/professional-portfolio.png',
      caption: 'where it all started 🚀',
    },
  },
];

export default function ExperienceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 sm:py-28 bg-cream border-t border-pale/70 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Pill Eyebrow (Matches video frame 556) */}
        <div className="flex justify-start mb-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-pale text-xs font-semibold text-charcoal/80 shadow-soft-sm">
            My journey
          </span>
        </div>

        {/* Headline: The story so far (Matches video frame 556) */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-black text-charcoal tracking-tight font-sans">
            The story <WavyUnderline>so far</WavyUnderline>
          </h2>
        </div>

        {/* Winding Vertical Coral Path Timeline (Matches video frame 558 & 560) */}
        <div className="relative">

          {/* Central Vertical Coral Timeline Line with organic glow */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-coral via-coral to-coral/70 rounded-full hidden sm:block opacity-75 shadow-sm" />

          {/* Timeline Nodes & Alternating Cards */}
          <div className="space-y-14 sm:space-y-20">
            {journeyMilestones.map((m, index) => {
              const isLeft = m.side === 'left';
              const isHovered = hoveredIdx === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Central Timeline Avatar Dot (Matches video frame 558/560) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white border-2 border-coral shadow-coral flex items-center justify-center overflow-hidden p-0.5 group-hover:scale-110 transition-transform">
                      <Image
                        src="/professional-portfolio.png"
                        alt="Renuka"
                        width={32}
                        height={32}
                        className="object-cover object-top rounded-full filter contrast-105"
                      />
                    </div>
                  </div>

                  {/* Content Card (Half Width on Desktop) */}
                  <div className="w-full md:w-1/2 sm:px-6">
                    <div
                      className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 space-y-3 ${
                        isHovered
                          ? 'border-coral/50 shadow-soft-lg -translate-y-1'
                          : 'border-pale shadow-soft-sm'
                      }`}
                    >
                      {/* Year in Coral Script/Bold (Matches video frame 558) */}
                      <div className="flex items-center justify-between">
                        <span className="text-xl sm:text-2xl font-black text-coral font-sans tracking-tight">
                          {m.year}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cream-200 text-charcoal/70">
                          {m.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-charcoal tracking-tight font-sans">
                          {m.role}
                        </h3>
                        <div className="text-xs sm:text-sm font-semibold text-charcoal/70 mt-0.5">
                          {m.company}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-normal">
                        {m.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {m.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2.5 py-0.5 rounded-full bg-cream border border-pale text-charcoal/80 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Supporting Polaroid Image with Masking Tape (Opposite Side — Matches video frame 558 & 560) */}
                  <div className="w-full md:w-1/2 sm:px-6 flex justify-center">
                    {m.polaroid ? (
                      <div className="relative p-3 bg-white rounded-2xl border border-pale shadow-soft -rotate-2 hover:rotate-0 transition-transform duration-300 group">
                        {/* Masking tape header (Matches video frame 558) */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#F9EBD2]/90 border border-[#E8D4B0] rounded-xs shadow-2xs rotate-1 z-10 pointer-events-none" />

                        {/* Polaroid Photo Frame */}
                        <div className="relative w-44 sm:w-52 h-48 sm:h-56 rounded-xl overflow-hidden bg-cream border border-pale/60">
                          <Image
                            src={m.polaroid.src}
                            alt="Renuka milestone memory"
                            fill
                            className="object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Handwritten Caption Underneath (Matches video frame 558) */}
                        <div className="mt-2 text-center font-handwriting text-base text-coral font-bold">
                          {m.polaroid.caption}
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block w-44 h-48" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
