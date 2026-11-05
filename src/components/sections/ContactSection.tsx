'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, Github, Linkedin, Copy, Check, FileDown, ArrowUp, Send, MapPin, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream border-t border-pale/70 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Distinctive Coral Contact Banner (Matches frame 22 of reference video) */}
        <div className="relative rounded-3xl bg-[#F15A35] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-soft-lg">

          {/* Background subtle radial glow & geometric orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6">

              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold text-white tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get in Touch · Open for Opportunities</span>
              </div>

              {/* Giant Headline */}
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none font-sans">
                Let&apos;s build together!
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-xl">
                Looking for a full-stack engineer, AI developer, or mobile app builder? My inbox and phone are always open — let&apos;s create something remarkable.
              </p>

              {/* Interactive Contact Details Bars (Email + Phone) */}
              <div className="space-y-3 pt-2">
                {/* Email Bar */}
                <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-sm sm:text-base font-semibold text-white">
                  <Mail className="w-4 h-4 text-white/90" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:underline tracking-tight"
                  >
                    {profile.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="ml-2 px-2.5 py-1 rounded-lg bg-white text-coral text-xs font-bold hover:bg-cream-100 transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-coral" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-coral" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone Bar */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white">
                    <Phone className="w-3.5 h-3.5 text-white/90" />
                    <a href={`tel:${profile.phone}`} className="hover:underline">
                      {profile.phone}
                    </a>
                    <button
                      onClick={copyPhone}
                      className="ml-1 px-2 py-0.5 rounded-md bg-white/20 hover:bg-white/30 text-white text-[11px] font-semibold transition-colors cursor-pointer"
                    >
                      {copiedPhone ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/10 text-xs font-medium text-white/80">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Hyderabad / Kurnool, India</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-coral font-bold text-xs uppercase tracking-wider hover:bg-cream-100 transition-all shadow-soft-sm hover:-translate-y-0.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send an Email</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-xs tracking-wide transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub ↗</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-xs tracking-wide transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn ↗</span>
                </a>

                <a
                  href="/resume.pdf"
                  download="Allanagari_Renuka_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-xs tracking-wide transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Resume PDF ↗</span>
                </a>
              </div>

            </div>

            {/* Right Column: Portrait with Speech Bubble "say hi! 👋" (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative pt-8 lg:pt-0">

              {/* Speech Bubble "say hi! 👋" */}
              <div className="absolute -top-3 sm:top-2 left-1/2 -translate-x-1/2 sm:-translate-x-1/4 z-20 px-4 py-1.5 rounded-2xl bg-white text-coral font-handwriting text-lg sm:text-xl font-bold shadow-soft flex items-center gap-1.5 animate-bounce">
                <span>say hi!</span>
                <span className="text-xl">👋</span>
                <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white rotate-45" />
              </div>

              {/* Cut-out Portrait in Warm Curved Arch Frame */}
              <div className="relative w-48 sm:w-56 h-64 sm:h-72 rounded-t-[100px] rounded-b-[30px] overflow-hidden border-4 border-white/40 shadow-soft-lg bg-white/10 group hover:scale-105 transition-transform duration-300">
                <Image
                  src="/professional-portfolio.png"
                  alt={profile.name}
                  fill
                  className="object-cover object-top filter contrast-105"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Clean Footer Underneath */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-charcoal/60 font-medium">
          <div className="flex items-center gap-2">
            <span className="font-bold text-charcoal">renuka.</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} Allanagari Renuka. Designed &amp; Engineered with Passion.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#hero" className="hover:text-coral transition-colors flex items-center gap-1 font-semibold">
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
            <a href="#experience" className="hover:text-coral transition-colors">Experience</a>
            <a href="#projects" className="hover:text-coral transition-colors">Projects</a>
            <a href="#education" className="hover:text-coral transition-colors">Education</a>
            <a href="#certificates" className="hover:text-coral transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-coral transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </section>
  );
}
