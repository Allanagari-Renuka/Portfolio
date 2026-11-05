'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import Lights from './Lights';
import Effects from './Effects';
import CameraRig from './CameraRig';
import Hero3D from '../stations/Hero3D';
import About3D from '../stations/About3D';
import Skills3D from '../stations/Skills3D';
import Skipp3D from '../stations/Skipp3D';
import Projects3D from '../stations/Projects3D';
import Experience3D from '../stations/Experience3D';
import Contact3D from '../stations/Contact3D';

import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import ContactForm from '../ui/ContactForm';
import {
  FileDown,
  ArrowRight,
  ExternalLink,
  Smartphone,
  Store,
  CheckCircle2,
  Calendar,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from 'lucide-react';

export default function World() {
  const [skipp, thyroid, signLang] = projects;

  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-[#05060A]">
      <Canvas
        camera={{ position: [0, 0.8, 6.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        aria-hidden="true"
      >
        <ScrollControls pages={5} damping={0.25}>
          {/* 3D Scene Architecture */}
          <CameraRig />
          <Lights />
          <Effects />

          {/* 7 Spatially Positioned 3D Stations */}
          <About3D />
          <Experience3D />
          <Projects3D />
          <Skills3D />
          <Contact3D />

          {/* Accessible HTML Overlays Aligned With Each 3D Station */}
          <Scroll html style={{ width: '100%' }}>
            {/* 1. HERO STATION OVERLAY (Page 0) */}
            <div className="w-screen h-screen flex flex-col justify-end pb-20 sm:pb-24 px-6 sm:px-12 lg:px-20 max-w-4xl pointer-events-auto">
              <div className="space-y-4 bg-charcoal-950/75 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-accent-cyan">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{profile.role.toUpperCase()}</span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                    {profile.name}
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                    {profile.tagline}
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    {profile.degree} • {profile.experienceYears}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download="Allanagari_Renuka_Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-blue hover:bg-blue-600 text-white text-xs font-semibold shadow-md transition-all"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Resume (PDF)</span>
                  </a>

                  <a
                    href="#station-contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
                  >
                    <Mail className="w-4 h-4 text-accent-cyan" />
                    <span>Contact Me</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-charcoal-900 border border-slate-800 text-slate-300 hover:text-white"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-charcoal-900 border border-slate-800 text-slate-300 hover:text-accent-blue-light"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. ABOUT STATION OVERLAY (Page 1) */}
            <div className="w-screen h-screen flex items-center justify-end px-6 sm:px-12 lg:px-20 pointer-events-auto">
              <div className="max-w-xl bg-charcoal-950/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl space-y-4">
                <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
                  02 // Engineering Philosophy & Background
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  About Allanagari Renuka
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  <p className="text-white font-medium text-sm sm:text-base">
                    {profile.summary}
                  </p>
                  <p>
                    Approximately 2 years of hands-on experience delivering production web, mobile, and AI solutions. Shipped two live Android applications to Google Play (Skipp), and built enterprise recruitment automation products and B2B marketplaces at Core Careers.
                  </p>
                  <div className="p-3.5 rounded-xl bg-charcoal-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
                    <div className="text-emerald-400 font-bold">
                      G. Pullaiah College of Engineering & Technology
                    </div>
                    <div className="text-slate-400">
                      B.Tech in Computer Science & Engineering (Artificial Intelligence) • 88%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. SKILLS STATION OVERLAY (Page 2) */}
            <div className="w-screen h-screen flex items-center justify-start px-6 sm:px-12 lg:px-20 pointer-events-auto">
              <div className="max-w-2xl bg-charcoal-950/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl space-y-4">
                <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
                  03 // Technical Toolkit & Constellation
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Systems Architecture & Skills
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Hover or rotate the 3D tokens in space. Below is the full categorized index:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {skillGroups.map((g) => (
                    <div key={g.category} className="p-3 rounded-xl bg-charcoal-900 border border-slate-800 space-y-1">
                      <div className="text-[11px] font-mono font-bold" style={{ color: g.color }}>
                        {g.category}
                      </div>
                      <div className="text-[10px] text-slate-300 leading-relaxed">
                        {g.skills.slice(0, 4).join(', ')}
                        {g.skills.length > 4 && '...'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. SKIPP HERO PROJECT OVERLAY (Page 3) */}
            <div className="w-screen h-screen flex flex-col justify-end pb-16 sm:pb-20 px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto pointer-events-auto">
              <div className="bg-charcoal-950/85 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider font-semibold">
                    04 // Flagship Mobile Ecosystem
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    2 Live Android Apps on Google Play
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {skipp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                    {skipp.description}
                  </p>
                </div>

                {/* Direct Google Play Download Links */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-charcoal-900 border border-slate-800 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-accent-blue-light font-semibold">
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>CUSTOMER APP</span>
                      </div>
                      <div className="text-xs font-bold text-white mt-1">
                        SKIPP – Skip the Wait
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Pre-order and pick up with zero waiting, meal customization, geofenced alerts, and payments.
                      </div>
                    </div>
                    <a
                      href={skipp.playStoreCustomerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-accent-blue hover:bg-blue-600 text-white text-xs font-semibold transition-all"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Download on Google Play</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-charcoal-900 border border-slate-800 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-accent-cyan font-semibold">
                        <Store className="w-3.5 h-3.5" />
                        <span>RESTAURANT APP</span>
                      </div>
                      <div className="text-xs font-bold text-white mt-1">
                        Skipp Restaurant Partner Terminal
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Live order alerts, real-time menu control, table/zone queue management, and staff push notifications.
                      </div>
                    </div>
                    <a
                      href={skipp.playStoreRestaurantUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all"
                    >
                      <Store className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>Download on Google Play</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-800">
                  {skipp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-charcoal-950 border border-slate-800 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. PROJECTS GALLERY OVERLAY (Page 4) */}
            <div className="w-screen h-screen flex items-center justify-end px-6 sm:px-12 lg:px-20 pointer-events-auto">
              <div className="max-w-xl bg-charcoal-950/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl space-y-4">
                <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
                  05 // Applied AI & Deep Learning Gallery
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Clinical Diagnostics & Computer Vision
                </h2>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-charcoal-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{thyroid.title}</h4>
                      <a
                        href={thyroid.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-cyan hover:underline"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {thyroid.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-charcoal-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{signLang.title}</h4>
                      <a
                        href={signLang.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-violet-light hover:underline"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {signLang.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. EXPERIENCE TIMELINE OVERLAY (Page 5) */}
            <div className="w-screen h-screen flex items-center justify-start px-6 sm:px-12 lg:px-20 pointer-events-auto">
              <div className="max-w-2xl bg-charcoal-950/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl space-y-4">
                <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
                  06 // Production Timeline
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Professional Experience
                </h2>

                <div className="space-y-3">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="p-3.5 rounded-xl bg-charcoal-900 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{exp.role}</span>
                        <span className="text-[10px] font-mono text-slate-400">{exp.period}</span>
                      </div>
                      <div className="text-xs font-semibold text-accent-cyan font-mono">
                        {exp.company}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        {exp.description[0]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 7. CONTACT STATION OVERLAY (Page 6) */}
            <div className="w-screen h-screen flex items-center justify-center px-6 sm:px-12 max-w-3xl mx-auto pointer-events-auto">
              <div className="w-full bg-charcoal-950/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl space-y-5">
                <div className="text-center space-y-1">
                  <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
                    07 // Direct Communication
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Let’s Build Together
                  </h2>
                  <p className="text-xs text-slate-400">
                    Email {profile.email} • Phone {profile.phone}
                  </p>
                </div>

                <ContactForm />

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono border-t border-slate-850">
                  <span className="text-slate-400">Allanagari Renuka • Kurnool, AP, India</span>
                  <a
                    href="/resume.pdf"
                    download="Allanagari_Renuka_Resume.pdf"
                    className="text-accent-cyan hover:underline font-bold"
                  >
                    Download Resume (PDF) →
                  </a>
                </div>
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
