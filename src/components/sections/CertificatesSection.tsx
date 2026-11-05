'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Check, Award, Cloud, Database, Code, Terminal, Cpu, Sparkles } from 'lucide-react';
import WavyUnderline from '../ui/WavyUnderline';
import TiltCard from '../ui/TiltCard';

const certificateWall = [
  {
    title: 'Smart Coder — Advanced DSA & Algorithms',
    issuer: 'SMART INTERVIEWS',
    fileUrl: '/smartinterviews.pdf',
    icon: Code,
    color: '#F15A35',
    tag: '1,230+ Problems Solved',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AMAZON WEB SERVICES (AWS)',
    fileUrl: '/Aws_cloud_practitioner_essentials.pdf',
    icon: Cloud,
    color: '#FF9900',
    tag: 'Cloud Architecture',
  },
  {
    title: 'Full Stack Web Development Internship',
    issuer: 'MAKE SKILLED',
    fileUrl: '/Makeskilled.pdf',
    icon: Award,
    color: '#F15A35',
    tag: 'Full Stack Engineering',
  },
  {
    title: 'Data Science & Machine Learning',
    issuer: 'GEEKSFORGEEKS',
    icon: Cpu,
    color: '#2F8D46',
    tag: 'AI & Data Analysis',
  },
  {
    title: 'MongoDB Certified Associate Developer',
    issuer: 'MONGODB UNIVERSITY',
    icon: Database,
    color: '#00ED64',
    tag: 'NoSQL Database Systems',
  },
  {
    title: 'GitHub Foundations Certification',
    issuer: 'MICROSOFT · GITHUB',
    icon: Terminal,
    color: '#24292F',
    tag: 'DevOps & Git Workflows',
  },
  {
    title: 'Python & Data Structures Essentials',
    issuer: 'CISCO NETWORKING ACADEMY',
    icon: Code,
    color: '#00BCEB',
    tag: 'Core Python & Structures',
  },
  {
    title: 'B.Tech CSE (AI) — Academic Distinction',
    issuer: 'G. PULLAIAH COLLEGE OF ENGINEERING',
    icon: Award,
    color: '#F15A35',
    tag: 'First Class with Distinction',
  },
];

export default function CertificatesSection() {
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-24 sm:py-32 bg-cream border-t border-pale overflow-hidden relative scroll-mt-24">
      {/* 3D background glowing orb */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <Award className="w-3.5 h-3.5 text-coral" />
            <span>Verified Credentials</span>
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
              Certificate <WavyUnderline>wall</WavyUnderline>
            </h2>
            <p className="mt-3 text-base text-charcoal/70 max-w-[65ch]">
              Industry credentials and verified certifications across cloud computing, full-stack development, algorithms, and applied machine learning.
            </p>
          </div>
        </motion.div>

        {/* Certificate Wall Grid with 3D Depth & Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {certificateWall.map((cert, idx) => {
            const Icon = cert.icon;
            const isHovered = hoveredCert === cert.title;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="h-full flex"
              >
                <TiltCard maxTilt={4} className="w-full">
                  <div
                    onMouseEnter={() => setHoveredCert(cert.title)}
                    onMouseLeave={() => setHoveredCert(null)}
                    className="portfolio-card p-6 flex flex-col justify-between space-y-4 h-full group bg-white border border-pale rounded-card shadow-soft-sm hover:shadow-soft-lg hover:border-coral/40 transition-all duration-300"
                  >
                    {/* Top: Icon Logo + Verified Checkmark Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-xl bg-cream-50 flex items-center justify-center border border-pale transition-transform duration-300 ${
                          isHovered ? 'scale-110 shadow-soft-xs' : ''
                        }`}
                      >
                        <Icon className="w-5 h-5" style={{ color: cert.color }} />
                      </div>

                      {/* Orange Verified Checkmark Badge */}
                      <div className="w-6 h-6 rounded-full bg-coral/15 flex items-center justify-center text-coral" title="Verified Credential">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    {/* Middle: Title & Issuer */}
                    <div className="space-y-1.5 flex-1">
                      <div className="text-[10px] font-bold text-coral uppercase tracking-wider">
                        {cert.tag}
                      </div>
                      <h3 className="text-sm font-bold text-charcoal font-sans leading-snug group-hover:text-coral transition-colors">
                        {cert.title}
                      </h3>
                      <div className="text-[11px] font-semibold text-charcoal/60 uppercase tracking-wider pt-0.5">
                        {cert.issuer}
                      </div>
                    </div>

                    {/* Bottom: Verified Link */}
                    <div className="pt-2 border-t border-pale/60 mt-auto">
                      {cert.fileUrl ? (
                        <a
                          href={cert.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-coral hover:text-coral-hover transition-colors min-h-[44px] py-1"
                          aria-label={`View PDF credential for ${cert.title}`}
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>View credential (PDF)</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-charcoal/60 min-h-[44px] py-1">
                          <Check className="w-3 h-3 text-coral" />
                          <span>Verified credential</span>
                        </span>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
