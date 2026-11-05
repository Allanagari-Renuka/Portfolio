'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ExternalLink,
  Github,
  Smartphone,
  ArrowUpRight,
  Sparkles,
  Layers,
  Globe,
  Radio,
  CheckCircle,
} from 'lucide-react';
import WavyUnderline from '../ui/WavyUnderline';
import { majorProjects, personalProjects } from '@/data/projects';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'ai' | 'frontend'>('all');

  const filteredPersonalProjects = personalProjects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack')
      return (
        p.category.toLowerCase().includes('full stack') ||
        p.technologies.some((t) => ['Node.js', 'Express', 'MongoDB'].includes(t))
      );
    if (filter === 'ai')
      return (
        p.category.toLowerCase().includes('ai') ||
        p.category.toLowerCase().includes('analytics')
      );
    if (filter === 'frontend')
      return (
        p.category.toLowerCase().includes('frontend') ||
        p.category.toLowerCase().includes('web') ||
        p.category.toLowerCase().includes('design')
      );
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-cream border-t border-pale/70 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Pill Eyebrow */}
        <div className="flex justify-start mb-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-pale text-xs font-semibold text-charcoal/80 shadow-soft-sm">
            <Layers className="w-3.5 h-3.5 text-coral" />
            <span>Featured &amp; Personal Work</span>
          </span>
        </div>

        {/* Headline */}
        <div className="mb-14 sm:mb-18 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-charcoal tracking-tight font-sans">
              Projects I&apos;ve <WavyUnderline>built</WavyUnderline>
            </h2>
            <p className="mt-3 text-base text-charcoal/70 max-w-xl">
              From flagship enterprise systems and published Google Play apps to deep learning medical diagnosis and personal web microservices.
            </p>
          </div>
          <div className="font-handwriting text-xl text-coral font-bold -rotate-1">
            11 live deployed apps ✦
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 1: THE THREE MAIN MAJOR PROJECTS (Highlighted Flagships) */}
        {/* ========================================================================= */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black uppercase tracking-widest text-charcoal/60">
              Primary Flagship Projects
            </span>
            <div className="flex-1 h-px bg-pale/80" />
            <span className="text-xs font-bold text-coral px-2.5 py-0.5 rounded-full bg-coral/10">
              3 Major Applications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorProjects.map((proj, idx) => (
              <div
                key={proj.id}
                className="rounded-3xl bg-white border border-pale overflow-hidden shadow-soft-sm hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                style={{ perspective: '1000px' }}
              >
                {/* Top Illustrated 3D Preview Banner */}
                <div className="relative h-52 w-full bg-gradient-to-br from-[#FDF0EC] via-[#FCEAE2] to-[#F7DDD2] flex items-center justify-center p-4 overflow-hidden border-b border-pale/60">
                  {/* Skipp Phone & Kitchen Mockups */}
                  {proj.id === 'skipp' && (
                    <div className="flex items-center gap-3">
                      {/* Mini Customer Phone Mockup */}
                      <div className="w-24 h-40 rounded-2xl bg-white border-2 border-charcoal/90 shadow-md p-2 space-y-1.5 -rotate-3 group-hover:rotate-0 transition-transform">
                        <div className="flex justify-between items-center text-[7px] font-bold text-coral">
                          <span>SKIPP</span>
                          <span className="text-[6px] text-emerald-600 font-bold">● LIVE</span>
                        </div>
                        <div className="h-12 rounded-lg bg-[#FDF0EC] border border-coral/20 p-1.5 text-[6.5px]">
                          <div className="font-bold text-charcoal">Burger · ₹349</div>
                          <div className="text-coral font-semibold">Cooking · 6m</div>
                        </div>
                        <div className="h-1 bg-coral rounded-full w-4/5" />
                        <div className="text-[6px] text-center font-bold text-charcoal/60 pt-2">
                          Google Play
                        </div>
                      </div>

                      {/* Mini Restaurant KDS Tablet Mockup */}
                      <div className="w-32 h-36 rounded-2xl bg-white border-2 border-charcoal/90 shadow-md p-2.5 space-y-1.5 rotate-3 group-hover:rotate-0 transition-transform">
                        <div className="flex justify-between items-center text-[7px] font-bold text-charcoal">
                          <span>KITCHEN KDS</span>
                          <span className="text-[6px] text-coral font-bold">LIVE SYNC</span>
                        </div>
                        <div className="h-10 rounded-lg bg-cream border border-pale p-1.5 text-[6.5px]">
                          <div className="font-bold text-charcoal">#8492 Table 4</div>
                          <div className="text-emerald-600 font-bold">Ready for Pickup</div>
                        </div>
                        <div className="text-[6px] text-charcoal/50">Sub-50ms Socket.io</div>
                      </div>
                    </div>
                  )}

                  {/* Thyroid AI Scan Image */}
                  {proj.id === 'thyroid-diagnosis' && (
                    <div className="relative w-48 h-40 rounded-xl overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src="/images/thyroid/thyroid-scan.jpg"
                        alt="Thyroid diagnostic scan"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[9px] font-bold text-white bg-coral/95 px-2 py-0.5 rounded-full shadow-2xs">
                          95% Accuracy • CNN + RNN
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ASL Alphabet Image */}
                  {proj.id === 'sign-language' && (
                    <div className="relative w-52 h-40 rounded-xl overflow-hidden bg-white border-2 border-white shadow-md p-1.5">
                      <Image
                        src="/images/asl-alphabet.png"
                        alt="Sign language gesture translation"
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute bottom-2 right-2">
                        <span className="text-[9px] font-bold text-white bg-charcoal/90 px-2 py-0.5 rounded-full shadow-2xs">
                          30 FPS • OpenCV + LSTM
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Category + Number Tag */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-coral tracking-wider uppercase">
                      <span>0{idx + 1} · {proj.category}</span>
                      <span className="w-2 h-2 rounded-full bg-coral" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-charcoal tracking-tight font-sans">
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-normal">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech Pills */}
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.slice(0, 6).map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-0.5 rounded-full bg-cream-200 border border-pale text-charcoal/80 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                      {proj.technologies.length > 6 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-cream border border-pale text-charcoal/60 font-semibold">
                          +{proj.technologies.length - 6}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Links */}
                  <div className="pt-4 border-t border-pale/70 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                    {/* Skipp Google Play Links */}
                    {proj.id === 'skipp' ? (
                      <div className="flex flex-wrap items-center gap-2 w-full justify-between">
                        <a
                          href={proj.playStoreCustomerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coral text-white font-bold hover:bg-coral-hover transition-colors shadow-2xs"
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>Customer App ↗</span>
                        </a>
                        <a
                          href={proj.playStoreRestaurantUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-charcoal/70 hover:text-coral transition-colors"
                        >
                          <span>Partner App ↗</span>
                        </a>
                        <Link
                          href="/projects/skipp"
                          className="text-charcoal/70 hover:text-charcoal underline text-[11px]"
                        >
                          Case Study
                        </Link>
                      </div>
                    ) : (
                      <>
                        {proj.demoUrl && (
                          <a
                            href={proj.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-coral text-white font-bold hover:bg-coral-hover transition-colors shadow-2xs"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-charcoal/70 hover:text-charcoal transition-colors px-2 py-1 rounded-lg hover:bg-cream-200"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: PERSONAL PROJECTS & LIVE DEPLOYMENTS GRID */}
        {/* ========================================================================= */}
        <div className="mt-16 pt-12 border-t border-pale/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-charcoal/60">
                  Personal Projects
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-charcoal font-sans tracking-tight mt-1">
                More Personal Projects &amp; <WavyUnderline>Deployments</WavyUnderline>
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white border border-pale self-start sm:self-auto shadow-2xs">
              {(
                [
                  { id: 'all', label: 'All (8)' },
                  { id: 'fullstack', label: 'Full-Stack' },
                  { id: 'ai', label: 'AI & Data' },
                  { id: 'frontend', label: 'Web & UI' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    filter === tab.id
                      ? 'bg-coral text-white shadow-2xs'
                      : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 8 Personal Projects Grid (Cards with 3D Hover & Live Links) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPersonalProjects.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-2xl bg-white border border-pale shadow-soft-sm hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                {/* Header: Category Badge + Status */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-coral uppercase tracking-wider px-2 py-0.5 rounded-full bg-coral/10">
                    {p.category.split('&')[0]}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <Radio className="w-2.5 h-2.5 animate-pulse" />
                    <span>Live</span>
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-base font-bold text-charcoal font-sans leading-snug group-hover:text-coral transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {p.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-cream border border-pale text-charcoal/70 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  {p.technologies.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cream border border-pale text-charcoal/50">
                      +{p.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Bottom Action: Live Deployment Link */}
                <div className="pt-3 border-t border-pale/60 flex items-center justify-between">
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-coral hover:text-coral-hover transition-colors"
                    >
                      <span>Open Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal/60 hover:text-charcoal transition-colors p-1"
                      title="GitHub Profile"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
