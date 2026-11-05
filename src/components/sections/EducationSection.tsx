'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, Sparkles } from 'lucide-react';
import WavyUnderline from '../ui/WavyUnderline';
import TiltCard from '../ui/TiltCard';
import { educationList } from '@/data/education';

export default function EducationSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="education" className="py-24 sm:py-32 bg-cream border-t border-pale overflow-hidden relative scroll-mt-24">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Pill Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-start mb-3"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-pale text-xs font-semibold text-charcoal/80 shadow-soft-xs">
            <GraduationCap className="w-3.5 h-3.5 text-coral" />
            <span>Academic Background</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 sm:mb-18 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-charcoal tracking-tight font-sans">
              My <WavyUnderline>Education</WavyUnderline>
            </h2>
            <p className="mt-3 text-base text-charcoal/70 max-w-[65ch]">
              Specialized computer science and engineering coursework with continuous first-class distinction and academic excellence.
            </p>
          </div>
        </motion.div>

        {/* Academic Degree Cards Grid with TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {educationList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="h-full"
            >
              <TiltCard maxTilt={5}>
                <div
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="portfolio-card p-6 sm:p-7 flex flex-col justify-between space-y-6 h-full group bg-white border border-pale rounded-card shadow-soft-sm hover:shadow-soft-lg hover:border-coral/40 transition-all duration-300"
                >
                  {/* Card Top: Year + Score Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-coral/10 text-coral">
                      {item.period}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-charcoal bg-cream-100 px-3 py-1 rounded-full border border-pale">
                      <Award className="w-3.5 h-3.5 text-coral" />
                      <span>{item.score} {item.scoreLabel}</span>
                    </div>
                  </div>

                  {/* Card Middle: Degree & Institution */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-charcoal font-sans tracking-tight group-hover:text-coral transition-colors">
                      {item.degree}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-charcoal/75">
                      {item.institution}
                    </div>
                    <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal pt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom: Verified Distinction Highlight */}
                  <div className="pt-4 border-t border-pale/70 flex items-center justify-between text-xs text-charcoal/60 mt-auto">
                    <span className="font-semibold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-coral" />
                      <span>Verified Degree</span>
                    </span>
                    <span className="font-bold text-coral text-[11px] uppercase tracking-wider">
                      Distinction
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
