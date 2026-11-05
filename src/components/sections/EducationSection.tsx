'use client';

import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import WavyUnderline from '../ui/WavyUnderline';
import { educationList } from '@/data/education';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-cream border-t border-pale/70 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Pill Eyebrow */}
        <div className="flex justify-start mb-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-pale text-xs font-semibold text-charcoal/80 shadow-soft-sm">
            <GraduationCap className="w-3.5 h-3.5 text-coral" />
            <span>Academic Background</span>
          </span>
        </div>

        {/* Headline */}
        <div className="mb-14 sm:mb-18 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-charcoal tracking-tight font-sans">
              My <WavyUnderline>Education</WavyUnderline>
            </h2>
            <p className="mt-3 text-base text-charcoal/70 max-w-xl">
              Specialized computer science and engineering coursework with continuous first-class distinction and academic excellence.
            </p>
          </div>
          <div className="font-handwriting text-xl text-coral font-bold -rotate-1">
            First class with distinction ✦
          </div>
        </div>

        {/* Academic Degree Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {educationList.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-pale shadow-soft-sm hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              style={{ perspective: '1000px' }}
            >
              {/* Card Top: Year + Score Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-coral/10 text-coral">
                  {item.period}
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-charcoal bg-cream-200 px-3 py-1 rounded-full border border-pale">
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

              {/* Card Bottom: Key Focus Highlights */}
              <div className="pt-4 border-t border-pale/70 flex items-center justify-between text-xs text-charcoal/60">
                <span className="font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-coral" />
                  <span>Verified Degree</span>
                </span>
                <span className="font-bold text-coral text-[11px] uppercase tracking-wider">
                  Distinction
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
