'use client';

import React from 'react';
import Image from 'next/image';
import {
  FileDown,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Smartphone,
  Store,
  CheckCircle2,
  Calendar,
  Award,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import ContactForm from '@/components/ui/ContactForm';

export default function SimpleVersion() {
  const [skipp, thyroid, signLang] = projects;

  return (
    <div className="min-h-screen bg-[#05060A] text-slate-100 py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-24">
      {/* 1. Hero / Arrival */}
      <section id="station-hero" className="space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-charcoal-900 border border-slate-800 text-xs font-mono text-accent-cyan">
          <span>CLEAN 2D RECRUITER VERSION</span>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-mono text-accent-cyan tracking-wider uppercase">
            {profile.role}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {profile.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {profile.tagline}
          </p>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            {profile.degree} • {profile.experienceYears}
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="/resume.pdf"
            download="Allanagari_Renuka_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-blue hover:bg-blue-600 text-white text-xs font-semibold shadow-md transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href="#station-contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal-900 hover:bg-slate-800 text-white border border-slate-700 text-xs font-semibold transition-all"
          >
            <Mail className="w-4 h-4 text-accent-cyan" />
            <span>Contact Me</span>
          </a>

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
      </section>

      {/* 2. About Section */}
      <section id="station-about" className="space-y-6 pt-12 border-t border-slate-800">
        <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
          01 // About Me
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Engineering Philosophy & Technical Focus
        </h2>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-800 aspect-[4/5] relative bg-charcoal-900">
            <Image
              src="/passport.jpg"
              alt="Allanagari Renuka"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-8 space-y-4 text-sm text-slate-300 leading-relaxed">
            <p className="text-white font-medium text-base">
              {profile.summary}
            </p>
            <p>
              My full-stack work emphasizes end-to-end delivery: from crafting responsive component systems in React and Next.js, to compiling cross-platform native Android applications via Capacitor (including publishing Skipp’s customer and restaurant applications to Google Play), to structuring real-time WebSocket pipelines with Socket.io and Redis.
            </p>
            <p>
              In AI/ML, I have engineered diagnostic pipelines combining CNN and RNN deep learning architectures for clinical risk stratification and built 30 FPS American Sign Language gesture translation workflows with OpenCV and CNN/LSTM networks.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Skipp Flagship Project */}
      <section id="station-skipp" className="space-y-6 pt-12 border-t border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
            02 // Flagship Project
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            2 Live Android Apps on Google Play
          </span>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-slate-800 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {skipp.title}
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {skipp.description}
            </p>
          </div>

          {/* Dual Google Play Download Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-charcoal-950 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-accent-blue-light font-semibold">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Customer App</span>
                </div>
                <div className="text-xs font-bold text-white mt-1">
                  SKIPP – Skip the Wait
                </div>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Pre-order and pick up with zero waiting, meal customization, geofenced pickup alerts, and UPI/card/wallet payments.
                </p>
              </div>
              <a
                href={skipp.playStoreCustomerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-accent-blue hover:bg-blue-600 text-white text-xs font-semibold transition-all"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Customer Google Play</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-charcoal-950 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-accent-cyan font-semibold">
                  <Store className="w-3.5 h-3.5" />
                  <span>Restaurant App</span>
                </div>
                <div className="text-xs font-bold text-white mt-1">
                  Skipp Restaurant Partner Terminal
                </div>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Live order alerts, real-time menu item control, table/zone queue management, and staff push notifications.
                </p>
              </div>
              <a
                href={skipp.playStoreRestaurantUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all"
              >
                <Store className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Restaurant Google Play</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>
          </div>

          {/* Tech stack */}
          <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
            {skipp.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded text-xs font-mono bg-charcoal-950 border border-slate-800 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Other Projects */}
      <section id="station-projects" className="space-y-6 pt-12 border-t border-slate-800">
        <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
          03 // Applied AI & Computer Vision Projects
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Deep Learning Diagnostics & Real-Time Computer Vision
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Thyroid */}
          <div className="p-6 rounded-2xl bg-charcoal-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 text-accent-cyan border border-cyan-500/30">
                {thyroid.badge}
              </span>
              <h4 className="text-lg font-bold text-white">{thyroid.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {thyroid.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
              <a
                href={thyroid.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-accent-blue text-white text-xs font-semibold"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Live Demo</span>
              </a>
              <a
                href={thyroid.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-charcoal-950 border border-slate-800 text-xs text-slate-300"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Sign Language */}
          <div className="p-6 rounded-2xl bg-charcoal-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-accent-violet-light border border-purple-500/30">
                {signLang.badge}
              </span>
              <h4 className="text-lg font-bold text-white">{signLang.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {signLang.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
              <a
                href={signLang.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-accent-violet text-white text-xs font-semibold"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Live Demo</span>
              </a>
              <a
                href={signLang.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-charcoal-950 border border-slate-800 text-xs text-slate-300"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Experience Timeline */}
      <section id="station-experience" className="space-y-6 pt-12 border-t border-slate-800">
        <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
          04 // Professional Experience
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Chronological Production Record
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="p-6 rounded-2xl bg-charcoal-900 border border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2 border-b border-slate-800">
                <div>
                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <div className="text-sm font-semibold text-accent-cyan font-mono">
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-accent-blue-light" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-charcoal-950 border border-slate-800 text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Skills Matrix */}
      <section id="station-skills" className="space-y-6 pt-12 border-t border-slate-800">
        <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
          05 // Technical Toolkit
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Skills & Architecture Stack
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((g) => (
            <div key={g.category} className="p-4 rounded-xl bg-charcoal-900 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold" style={{ color: g.color }}>
                {g.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-charcoal-950 border border-slate-800 text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Education & Certifications */}
      <section className="space-y-6 pt-12 border-t border-slate-800">
        <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
          06 // Academics & Verified Credentials
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Education & Certifications
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-charcoal-900 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC DEGREE</span>
            </div>
            <h4 className="text-sm font-bold text-white">
              B.Tech in Computer Science & Engineering (Artificial Intelligence)
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              G. Pullaiah College of Engineering & Technology • 88% Distinction
            </p>
          </div>

          <div className="p-5 rounded-xl bg-charcoal-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-accent-cyan text-xs font-mono font-semibold">
              <Award className="w-4 h-4" />
              <span>CERTIFICATIONS</span>
            </div>
            <ul className="space-y-1 text-xs text-slate-300">
              {profile.certifications.map((c) => (
                <li key={c.title} className="flex items-center justify-between">
                  <span>{c.title} ({c.issuer})</span>
                  {c.fileUrl && (
                    <a
                      href={c.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-accent-cyan hover:underline"
                    >
                      PDF
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="station-contact" className="space-y-6 pt-12 border-t border-slate-800 pb-16">
        <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
          07 // Direct Communication
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Let’s Discuss Opportunities
        </h2>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-sm text-slate-300 leading-relaxed">
              Available for Full Stack Developer, Software Engineer, Backend Developer, and AI Engineer roles.
            </p>
            <div className="space-y-2 text-xs font-mono pt-2">
              <div className="p-3 rounded-lg bg-charcoal-900 border border-slate-800 text-slate-300">
                Email: {profile.email}
              </div>
              <div className="p-3 rounded-lg bg-charcoal-900 border border-slate-800 text-slate-300">
                Phone: {profile.phone}
              </div>
              <div className="p-3 rounded-lg bg-charcoal-900 border border-slate-800 text-slate-300">
                Kurnool, Andhra Pradesh, India
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 rounded-2xl bg-charcoal-900 border border-slate-800">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
