'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Mail, Smartphone, Brain, Code2, Award, Terminal, Sparkles } from 'lucide-react';
import WavyUnderline from '../ui/WavyUnderline';
import { profile } from '@/data/profile';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, normX: 0, normY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates from -1 to 1 based on center of hero
      const normX = Math.max(-1, Math.min(1, ((x / rect.width) * 2) - 1));
      const normY = Math.max(-1, Math.min(1, ((y / rect.height) * 2) - 1));

      setMousePos({ x, y, normX, normY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3D rotation values
  const tiltX = -mousePos.normY * 12;
  const tiltY = mousePos.normX * 16;
  const eyeShiftX = mousePos.normX * 14;
  const eyeShiftY = mousePos.normY * 10;

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 bg-cream overflow-hidden"
    >
      {/* Soft ambient background radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-coral/10 via-peach/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ============================================================== */}
          {/* Left Column: Greeting, Name, Stats & CTAs (Exact match to video) */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">

            {/* Handwritten Greeting (Matches frame 550) */}
            <div className="flex items-center gap-2">
              <span className="font-handwriting text-2xl sm:text-3xl text-charcoal/85">
                Hi there, I&apos;m
              </span>
              <span className="text-2xl animate-waving-hand inline-block origin-[70%_70%]">
                👋
              </span>
            </div>

            {/* Giant Name with Coral Curved Brush Underline (Matches frame 550) */}
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-charcoal tracking-tight leading-none font-sans">
                <WavyUnderline>Renuka</WavyUnderline>
              </h1>
            </div>

            {/* Subtitle / Description (Matches frame 550) */}
            <p className="text-base sm:text-lg md:text-xl text-charcoal/80 font-normal leading-relaxed max-w-xl">
              <strong className="font-semibold text-charcoal">Full-stack developer</strong>{' '}
              <span className="text-coral">✦</span> I build friendly, AI-powered web apps with React, Node.js and Python, from the first pixel to the last API call.
            </p>

            {/* 3 Stat Counters in a Row (Matches frame 550) */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 pt-2 border-y border-pale/80 py-4 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-charcoal tracking-tight font-sans">
                  3
                </div>
                <div className="text-xs sm:text-sm text-charcoal/70 font-medium mt-0.5">
                  AI products
                </div>
              </div>

              <div className="w-px h-8 bg-pale hidden sm:block" />

              <div>
                <div className="text-2xl sm:text-3xl font-black text-charcoal tracking-tight font-sans">
                  1,230+
                </div>
                <div className="text-xs sm:text-sm text-charcoal/70 font-medium mt-0.5">
                  problems solved
                </div>
              </div>

              <div className="w-px h-8 bg-pale hidden sm:block" />

              <div>
                <div className="text-2xl sm:text-3xl font-black text-coral tracking-tight font-sans">
                  8.8
                </div>
                <div className="text-xs sm:text-sm text-charcoal/70 font-medium mt-0.5">
                  CGPA · Distinction
                </div>
              </div>
            </div>

            {/* Two Action Buttons (Matches frame 550) */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-coral hover:bg-coral-hover text-white font-sans text-sm font-bold tracking-wide transition-all shadow-coral hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>See my work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-cream-200 border border-charcoal/20 text-charcoal font-sans text-sm font-semibold tracking-wide transition-all shadow-soft-sm hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-charcoal/70" />
                <span>Message me</span>
              </a>
            </div>

          </div>

          {/* ============================================================== */}
          {/* Right Column: 3D Portrait + Cursor Parallax + 3D Floating Cards */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">

            {/* Handwritten Note with Curvy Arrow (Matches frame 550) */}
            <div className="absolute -top-10 sm:-top-12 right-6 sm:right-12 z-30 pointer-events-none flex flex-col items-end">
              <span className="font-handwriting text-lg sm:text-xl text-coral font-bold -rotate-6">
                move your cursor,
                <br />
                I&apos;ll look at it!
              </span>
              <svg
                className="w-8 h-8 text-coral -rotate-12 mt-0.5"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 5 C 18 12, 26 22, 28 32 M 28 32 L 20 30 M 28 32 L 30 22" />
              </svg>
            </div>

            {/* 3D Perspective Stage Container */}
            <div
              className="relative w-72 sm:w-84 h-88 sm:h-[420px] flex items-end justify-center select-none"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Organic Warm Peach Arch & Coral Blob Backdrop (Matches frame 550) */}
              <div className="absolute inset-x-6 bottom-0 top-12 rounded-t-[140px] rounded-b-[40px] bg-gradient-to-b from-[#FCEAE3] via-[#FCE4DC] to-[#F7D8CE] border border-coral/10 shadow-soft" />

              {/* Red/Coral Organic Accent Shape Behind Arch (Matches frame 550) */}
              <div className="absolute top-16 -right-3 w-28 h-28 rounded-full bg-coral/20 blur-xl pointer-events-none" />

              {/* Central 3D Portrait with Interactive Head/Eye Tilt Tracking */}
              <div
                className="relative z-10 w-60 sm:w-72 h-80 sm:h-[380px] transition-transform duration-150 ease-out"
                style={{
                  transform: `translate3d(${eyeShiftX}px, ${eyeShiftY}px, 0px) rotateY(${tiltY}deg) rotateX(${tiltX}deg) ${
                    isHovered ? 'scale(1.02)' : 'scale(1)'
                  }`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <Image
                  src="/professional-portfolio.png"
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-top rounded-t-[130px] rounded-b-[36px] filter contrast-105 shadow-soft-lg"
                />

                {/* Subtle Glassmorphic Name Tag at Portrait Base */}
                <div
                  className="absolute bottom-3 inset-x-4 py-1.5 px-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-soft-sm flex items-center justify-between"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  <div>
                    <div className="text-xs font-black text-charcoal font-sans leading-tight">
                      Allanagari Renuka
                    </div>
                    <div className="text-[10px] font-bold text-coral uppercase tracking-wider">
                      Full Stack &amp; AI
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>

              {/* ============================================================== */}
              {/* 3D FLOATING CARDS ORBITING IN SPATIAL DEPTH (Requested by user) */}
              {/* ============================================================== */}

              {/* Floating Card 1 (Top Left): Full-Stack Dev */}
              <div
                className="absolute -top-3 -left-6 sm:-left-10 z-20 pointer-events-auto transition-transform duration-200"
                style={{
                  transform: `translate3d(${mousePos.normX * -14}px, ${mousePos.normY * -12}px, 50px)`,
                  animation: 'float-slow 6s ease-in-out infinite',
                }}
              >
                <div className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-pale shadow-soft flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center text-coral">
                    <Code2 className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-charcoal font-sans leading-tight">
                      Full-Stack Dev
                    </div>
                    <div className="text-[9px] font-semibold text-charcoal/60">
                      React · Node · Python
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 (Top Right): AI & Deep Learning */}
              <div
                className="absolute top-10 -right-6 sm:-right-10 z-20 pointer-events-auto transition-transform duration-200"
                style={{
                  transform: `translate3d(${mousePos.normX * -18}px, ${mousePos.normY * -15}px, 65px)`,
                  animation: 'float-slow 5s ease-in-out infinite 1s',
                }}
              >
                <div className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-pale shadow-soft flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600">
                    <Brain className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-charcoal font-sans leading-tight">
                      AI &amp; Deep Learning
                    </div>
                    <div className="text-[9px] font-semibold text-charcoal/60">
                      CNN · RNN · Vision
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 3 (Bottom Left): Skipp Live on Google Play */}
              <div
                className="absolute bottom-10 -left-8 sm:-left-12 z-20 pointer-events-auto transition-transform duration-200"
                style={{
                  transform: `translate3d(${mousePos.normX * -16}px, ${mousePos.normY * -14}px, 55px)`,
                  animation: 'float-slow 7s ease-in-out infinite 0.5s',
                }}
              >
                <div className="px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-coral/30 shadow-coral flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-7 h-7 rounded-lg bg-coral flex items-center justify-center text-white">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] font-black text-charcoal font-sans leading-tight">
                        Skipp Apps
                      </span>
                      <span className="text-[8px] font-bold px-1.5 py-0.2 rounded-full bg-coral/10 text-coral">
                        LIVE
                      </span>
                    </div>
                    <div className="text-[9px] font-semibold text-charcoal/60">
                      Google Play Store
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 4 (Bottom Right): 1,230+ DSA Solved */}
              <div
                className="absolute -bottom-3 -right-4 sm:-right-8 z-20 pointer-events-auto transition-transform duration-200"
                style={{
                  transform: `translate3d(${mousePos.normX * -12}px, ${mousePos.normY * -10}px, 45px)`,
                  animation: 'float-slow 6.5s ease-in-out infinite 1.5s',
                }}
              >
                <div className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-pale shadow-soft flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                    <Terminal className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-charcoal font-sans leading-tight">
                      1,230+ DSA Solved
                    </div>
                    <div className="text-[9px] font-semibold text-charcoal/60">
                      Smart Coder Certified
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
