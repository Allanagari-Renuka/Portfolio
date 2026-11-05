'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Smartphone,
  ArrowUpRight,
  Layers,
  Radio,
  Sparkles,
  Github,
} from 'lucide-react';
import WavyUnderline from '../ui/WavyUnderline';
import BrowserFrame from '../ui/BrowserFrame';
import TiltCard from '../ui/TiltCard';
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
    <section id="projects" className="py-24 sm:py-32 bg-cream border-t border-pale overflow-hidden relative scroll-mt-24">
      {/* 3D ambient background lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <Layers className="w-3.5 h-3.5 text-coral" />
            <span>Featured &amp; Personal Work</span>
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
              Projects I&apos;ve <WavyUnderline>built</WavyUnderline>
            </h2>
            <p className="mt-3 text-base text-charcoal/70 max-w-[68ch]">
              From dual published Google Play Android applications to real-time clinical AI diagnostics and production web platforms.
            </p>
          </div>
        </motion.div>

        {/* PART 1: THE THREE MAIN MAJOR PROJECTS (Flagship 3D Cards) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black uppercase tracking-widest text-charcoal/60">
              Primary Flagship Projects
            </span>
            <div className="flex-1 h-px bg-pale/80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {majorProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 35, rotateX: 6 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="h-full"
              >
                <TiltCard maxTilt={5}>
                  <div className="portfolio-card h-full flex flex-col justify-between overflow-hidden group bg-white border border-pale rounded-card shadow-soft-sm hover:shadow-soft-lg hover:border-coral/40 transition-all duration-300">
                    {/* Real 16:10 Screenshot in Browser Frame */}
                    <BrowserFrame
                      src={`/projects/${proj.id}.webp`}
                      alt={proj.title}
                      domain={proj.demoUrl}
                      priority={idx === 0}
                    />

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        {/* Category + Number Tag */}
                        <div className="flex items-center justify-between text-[11px] font-bold text-coral tracking-wider uppercase">
                          <span>0{idx + 1} · {proj.category}</span>
                          <span className="w-2 h-2 rounded-full bg-coral" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-charcoal tracking-tight font-sans group-hover:text-coral transition-colors">
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
                          {proj.technologies.slice(0, 4).map((t) => (
                            <span key={t} className="tech-pill">
                              {t}
                            </span>
                          ))}
                          {proj.technologies.length > 4 && (
                            <span className="tech-pill bg-cream font-semibold text-charcoal/60">
                              +{proj.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom Action Links pinned to bottom */}
                      <div className="pt-4 mt-auto border-t border-pale/70 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                        {proj.id === 'skipp' ? (
                          <div className="flex flex-wrap items-center gap-2 w-full justify-between">
                            <a
                              href={proj.playStoreCustomerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center min-h-[44px] gap-1.5 px-4 py-2 rounded-full bg-coral text-white font-bold hover:bg-coral-hover transition-colors shadow-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                              aria-label="Skipp Customer App on Google Play"
                            >
                              <Smartphone className="w-3.5 h-3.5" />
                              <span>Customer App ↗</span>
                            </a>
                            <a
                              href={proj.playStoreRestaurantUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center min-h-[44px] px-3 py-2 text-charcoal/70 hover:text-coral transition-colors font-semibold"
                              aria-label="Skipp Restaurant Partner App on Google Play"
                            >
                              <span>Partner App ↗</span>
                            </a>
                            <Link
                              href="/projects/skipp"
                              className="inline-flex items-center justify-center min-h-[44px] px-2 text-charcoal/70 hover:text-charcoal underline text-[11px]"
                            >
                              Case Study
                            </Link>
                          </div>
                        ) : (
                          <div className="flex flex-wrap items-center justify-between w-full gap-2">
                            {proj.demoUrl && (
                              <a
                                href={proj.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center min-h-[44px] gap-1.5 px-4 py-2 rounded-full bg-coral text-white font-bold hover:bg-coral-hover transition-colors shadow-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                                aria-label={`${proj.title} Live Demo`}
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
                                className="inline-flex items-center justify-center min-h-[44px] gap-1.5 px-3 py-2 rounded-lg text-charcoal/70 hover:text-charcoal hover:bg-cream-100 transition-colors"
                                aria-label={`${proj.title} Source Code`}
                              >
                                <Github className="w-3.5 h-3.5" />
                                <span>Source Code</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: PERSONAL PROJECTS & LIVE DEPLOYMENTS GRID (Equal Heights) */}
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
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white border border-pale self-start sm:self-auto shadow-soft-xs">
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
                  className={`inline-flex items-center justify-center min-h-[38px] px-3.5 py-1.5 rounded-full text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral cursor-pointer ${
                    filter === tab.id
                      ? 'bg-coral text-white shadow-soft-xs'
                      : 'text-charcoal/70 hover:text-charcoal hover:bg-cream-50'
                  }`}
                  aria-pressed={filter === tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 8 Personal Projects Grid with Real Screenshots & Uniform Heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filteredPersonalProjects.map((p, idx) => {
              const hasSpecificRepo =
                p.githubUrl &&
                p.githubUrl !== 'https://github.com/Allanagari-Renuka' &&
                !p.githubUrl.endsWith('/Allanagari-Renuka');

              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="h-full flex"
                >
                  <TiltCard maxTilt={4} className="w-full">
                    <div className="portfolio-card flex flex-col justify-between overflow-hidden h-full group bg-white border border-pale rounded-card shadow-soft-sm hover:shadow-soft-lg hover:border-coral/40 transition-all duration-300">
                      {/* Real 16:10 Screenshot in Browser Frame */}
                      <BrowserFrame
                        src={`/projects/${p.id}.webp`}
                        alt={p.title}
                        domain={p.demoUrl}
                      />

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
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

                        {/* Title & Description with line-clamp-3 */}
                        <div className="space-y-1.5">
                          <h4 className="text-base font-bold text-charcoal font-sans leading-snug group-hover:text-coral transition-colors line-clamp-1">
                            {p.title}
                          </h4>
                          <p className="text-xs text-charcoal/70 leading-relaxed font-normal line-clamp-3">
                            {p.description}
                          </p>
                        </div>

                        {/* Tech Pills capped at 3 + "+N" */}
                        <div className="flex flex-wrap gap-1 pt-1 mt-auto">
                          {p.technologies.slice(0, 3).map((t) => (
                            <span key={t} className="tech-pill text-[11px] py-0.5 px-2">
                              {t}
                            </span>
                          ))}
                          {p.technologies.length > 3 && (
                            <span className="tech-pill text-[11px] py-0.5 px-1.5 bg-cream font-semibold text-charcoal/50">
                              +{p.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Bottom Action: Live Deployment Link & Source Code pinned with mt-auto */}
                        <div className="pt-3 border-t border-pale/60 flex items-center justify-between gap-2 mt-auto">
                          {p.demoUrl && (
                            <a
                              href={p.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-bold text-coral hover:text-coral-hover transition-colors min-h-[44px] py-2"
                              aria-label={`Open ${p.title} Live Site`}
                            >
                              <span>Open Live Site</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {hasSpecificRepo && (
                            <a
                              href={p.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-charcoal/70 hover:text-charcoal transition-colors px-2 py-1 rounded-md min-h-[44px]"
                              aria-label={`${p.title} Source Code on GitHub`}
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>Source</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
