'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Mail, Briefcase, Smartphone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WavyUnderline from '../ui/WavyUnderline';
import TiltCard from '../ui/TiltCard';
import { profile } from '@/data/profile';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, normX: 0, normY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll-linked parallax
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, 40]);
  const glowY = useTransform(scrollY, [0, 600], [0, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates from -1 to 1 based on center of hero
      const normX = Math.max(-1, Math.min(1, (x / rect.width) * 2 - 1));
      const normY = Math.max(-1, Math.min(1, (y / rect.height) * 2 - 1));

      setMousePos({ x, y, normX, normY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth subtle tilt values
  const tiltX = -mousePos.normY * 4;
  const tiltY = mousePos.normX * 5;
  const shiftX = mousePos.normX * 8;
  const shiftY = mousePos.normY * 6;

  const skillChips = ['React', 'Node.js', 'Python', 'TensorFlow'];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col justify-center pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-28 bg-cream overflow-hidden scroll-mt-28"
      aria-label="Hero Introduction"
    >
      {/* Dynamic ambient radial background aura */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-coral/10 via-peach-100/25 to-transparent rounded-full blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          y: glowY,
          transform: `translate(calc(-50% + ${mousePos.normX * 25}px), calc(-50% + ${mousePos.normY * 15}px))`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:items-start">

          {/* ============================================================== */}
          {/* Left Column: Greeting, Name, Role Tag, Intro, Skills, Stats & CTAs */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">

            {/* Handwritten Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2"
            >
              <span className="font-handwriting text-2xl sm:text-3xl text-charcoal/90">
                Hi there, I&apos;m
              </span>
              <span className="text-2xl animate-waving-hand inline-block origin-[70%_70%]" aria-hidden="true">
                👋
              </span>
            </motion.div>

            {/* Full Name with "Renuka" as the primary featured heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-charcoal tracking-tight leading-[1.1] font-sans">
                <span className="text-charcoal/80 font-bold block sm:inline text-3xl sm:text-5xl lg:text-6xl sm:mr-3">
                  Allanagari
                </span>
                <WavyUnderline>Renuka</WavyUnderline>
              </h1>
            </motion.div>

            {/* Professional Title & Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center flex-wrap gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pale shadow-soft-xs text-xs sm:text-sm font-bold text-charcoal"
            >
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              <span className="text-coral font-black tracking-wide">Full-Stack Developer</span>
              <span className="text-charcoal/30 hidden sm:inline">|</span>
              <span className="text-charcoal/80 font-semibold">Building Real-World Products</span>
            </motion.div>

            {/* Professional Introduction Paragraph with Subtle Coral-Orange Emphasis */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-charcoal/85 font-normal leading-relaxed max-w-[65ch] text-pretty"
            >
              With <span className="font-semibold text-charcoal">1+ year of hands-on development experience</span>, I specialise in building <span className="font-medium text-coral">full-stack web applications</span>, <span className="font-medium text-coral">Android applications</span>, and <span className="font-medium text-coral">AI-powered solutions</span>. From shipping <span className="font-semibold text-charcoal">two apps on Google Play</span> to developing recruitment SaaS platforms, wholesale marketplaces, and real-time kitchen management systems, I enjoy building products that solve real business problems. My core technologies include <span className="font-semibold text-coral">React</span>, <span className="font-semibold text-coral">Node.js</span>, <span className="font-semibold text-coral">Python</span>, and <span className="font-semibold text-coral">TensorFlow</span>.
            </motion.p>

            {/* 4 Skill Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2 pt-0.5"
            >
              {skillChips.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-lg bg-white border border-pale text-xs font-semibold text-charcoal shadow-soft-xs hover:border-coral/40 hover:text-coral transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-coral mr-1.5" />
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Animated Verified Achievement Cards with 3D Tilt, Hover Glow & Pulse */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl pt-1"
            >
              {/* Experience Indicator Card */}
              <TiltCard maxTilt={8} className="w-full">
                <div className="group relative flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-white border border-pale shadow-soft-xs hover:border-coral/50 hover:shadow-soft-md transition-all duration-300 cursor-default overflow-hidden">
                  {/* Subtle hover gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-r from-coral/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Animated Icon Container */}
                  <div className="relative w-11 h-11 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center text-coral shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-coral group-hover:text-white transition-all duration-300 shadow-soft-xs">
                    <Briefcase className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <div className="relative z-10 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-base lg:text-lg font-black text-charcoal tracking-tight font-sans whitespace-nowrap group-hover:text-coral transition-colors duration-200">
                        1+ Year Experience
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" title="Active Experience" />
                    </div>
                    <div className="text-xs text-charcoal/65 font-medium mt-0.5 truncate">
                      Web, Android &amp; AI Solutions
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Secondary Achievement Indicator: Google Play Card */}
              <TiltCard maxTilt={8} className="w-full">
                <div className="group relative flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-white border border-pale shadow-soft-xs hover:border-coral/50 hover:shadow-soft-md transition-all duration-300 cursor-default overflow-hidden">
                  {/* Subtle hover gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-r from-coral/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Animated Icon Container */}
                  <div className="relative w-11 h-11 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center text-coral shrink-0 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-coral group-hover:text-white transition-all duration-300 shadow-soft-xs">
                    <Smartphone className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <div className="relative z-10 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-base lg:text-lg font-black text-coral tracking-tight font-sans whitespace-nowrap group-hover:brightness-110 transition-all duration-200">
                        2 Apps Published
                      </span>
                      <span className="w-2 h-2 rounded-full bg-coral animate-pulse shrink-0" title="Published Apps" />
                    </div>
                    <div className="text-xs text-charcoal/65 font-medium mt-0.5 truncate">
                      On Google Play Store
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>See my work</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                <Mail className="w-4 h-4 mr-2 text-charcoal/70" />
                <span>Message me</span>
              </a>
            </motion.div>

          </div>

          {/* ============================================================== */}
          {/* Right Column: Clean, Crisp, Professional Portrait Cutout */}
          {/* Positioned at the top, aligned equally with "Allanagari Renuka" */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col items-center justify-start lg:pt-12"
          >
            {/* 3D Perspective Stage Container */}
            <div
              className="relative w-80 sm:w-96 lg:w-[410px] h-[460px] sm:h-[500px] lg:h-[530px] flex items-start justify-center select-none"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Soft warm aura centered behind the head/shoulders */}
              <div
                className="absolute top-0 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-gradient-to-tr from-coral/15 via-peach-100/20 to-transparent blur-3xl pointer-events-none transition-transform duration-300"
                style={{
                  transform: `scale(${isHovered ? 1.05 : 1}) translate3d(${shiftX * 0.3}px, ${shiftY * 0.3}px, 0)`,
                }}
              />

              {/* Crisp, Professional Cutout Portrait (Solid blazer, top-aligned) */}
              <motion.div
                className="relative z-10 w-72 sm:w-84 lg:w-92 h-[440px] sm:h-[480px] lg:h-[510px] transition-transform duration-150 ease-out cursor-default"
                style={{
                  y: portraitY,
                  transform: `translate3d(${shiftX}px, ${shiftY}px, 0px) rotateY(${tiltY}deg) rotateX(${tiltX}deg) ${
                    isHovered ? 'scale(1.02)' : 'scale(1)'
                  }`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <Image
                  src="/renuka-cutout.png"
                  alt={`${profile.name} — Full-Stack Developer`}
                  fill
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 336px, 368px"
                  className="object-contain object-top filter contrast-[1.02]"
                />
              </motion.div>

              {/* Clean Grounding Line beneath the blazer */}
              <div
                className="absolute bottom-4 w-64 sm:w-72 h-px bg-gradient-to-r from-transparent via-pale/80 to-transparent pointer-events-none"
              />

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
