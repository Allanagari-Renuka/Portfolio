'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import WavyUnderline from '../ui/WavyUnderline';
import { profile } from '@/data/profile';

const roles = [
  { prefix: "I'm a", title: 'Full-Stack Developer' },
  { prefix: "I'm an", title: 'AI & Vision Engineer' },
  { prefix: "I'm a", title: 'Mobile App Builder' },
  { prefix: "I'm a", title: 'Problem Solver' },
];

export default function AboutSection() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const cycleRole = () => {
    setActiveRoleIndex((prev) => (prev + 1) % roles.length);
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-cream border-t border-pale/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Pill Eyebrow */}
        <div className="flex justify-start mb-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-pale text-xs font-semibold text-charcoal/80 shadow-soft-sm">
            About me
          </span>
        </div>

        {/* Headline */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-charcoal tracking-tight font-sans">
            A little <WavyUnderline>about me</WavyUnderline>
          </h2>
        </div>

        {/* Two-Column Grid: Stacked Polaroid Cards (Left) + Bio & 4 Stat Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Stacked Polaroid Paper Deck */}
          <div className="lg:col-span-5 flex flex-col items-center">

            {/* Clickable Card Deck */}
            <div
              onClick={cycleRole}
              className="relative w-72 sm:w-80 h-96 cursor-pointer select-none group"
              title="Click to cycle role!"
            >
              {/* Back Card 2 (Bottom layer) */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-pale shadow-soft rotate-6 translate-x-3 translate-y-3 opacity-60" />

              {/* Back Card 1 (Middle layer) */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-pale shadow-soft -rotate-3 -translate-x-2 translate-y-1.5 opacity-80" />

              {/* Front Card (Active) */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-pale shadow-soft-lg p-4 flex flex-col justify-between transition-transform duration-300 group-hover:scale-[1.02] group-active:scale-95">
                {/* Photo in frame */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-cream-200 border border-pale/60">
                  <Image
                    src="/passport.jpg"
                    alt={profile.name}
                    fill
                    className="object-cover object-top filter grayscale contrast-110"
                  />
                </div>

                {/* Caption below photo */}
                <div className="pt-3 pb-1 text-center">
                  <div className="font-handwriting text-lg text-coral font-bold leading-tight">
                    {roles[activeRoleIndex].prefix}
                  </div>
                  <div className="text-xl font-black text-charcoal font-sans tracking-tight">
                    {roles[activeRoleIndex].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Script instruction underneath */}
            <button
              onClick={cycleRole}
              className="mt-6 inline-flex items-center gap-1.5 font-handwriting text-lg text-coral hover:text-coral-hover font-bold transition-colors cursor-pointer"
            >
              <span>click to see my other roles</span>
              <span className="text-xl">↺</span>
            </button>

          </div>

          {/* Right Column: Bio Narrative + 4 Soft Metric Tiles */}
          <div className="lg:col-span-7 space-y-8">

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-charcoal/80 font-normal leading-relaxed">
              <p>
                Hi! I&apos;m <strong className="font-bold text-charcoal">Renuka</strong>, a full-stack developer and B.Tech Computer Science &amp; Engineering (Artificial Intelligence) graduate from G. Pullaiah College of Engineering &amp; Technology.
              </p>
              <p>
                I love building products end to end: React interfaces that feel good, Node.js and Express backends that scale, and applied AI features that actually help people.
              </p>
            </div>

            {/* 4 Metric Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

              {/* Metric 1 */}
              <div className="p-5 rounded-2xl bg-white border border-pale shadow-soft-sm space-y-1 hover:border-coral/40 transition-colors">
                <div className="text-3xl font-black text-coral font-sans tracking-tight">
                  8.8
                </div>
                <div className="text-xs sm:text-sm text-charcoal/70 font-medium">
                  CGPA · First Class with Distinction
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-5 rounded-2xl bg-white border border-pale shadow-soft-sm space-y-1 hover:border-coral/40 transition-colors">
                <div className="text-3xl font-black text-charcoal font-sans tracking-tight">
                  1,230+
                </div>
                <div className="text-xs sm:text-sm text-charcoal/70 font-medium">
                  DSA problems solved
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-5 rounded-2xl bg-white border border-pale shadow-soft-sm space-y-1 hover:border-coral/40 transition-colors">
                <div className="text-3xl font-black text-charcoal font-sans tracking-tight">
                  3
                </div>
                <div className="text-xs sm:text-sm text-charcoal/70 font-medium">
                  AI &amp; production products shipped
                </div>
              </div>

              {/* Metric 4 */}
              <div className="p-5 rounded-2xl bg-white border border-pale shadow-soft-sm space-y-1 hover:border-coral/40 transition-colors">
                <div className="text-3xl font-black text-charcoal font-sans tracking-tight">
                  8
                </div>
                <div className="text-xs sm:text-sm text-charcoal/70 font-medium">
                  Verified credentials &amp; certifications
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
