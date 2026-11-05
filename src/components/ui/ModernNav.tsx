'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { profile } from '@/data/profile';

export default function ModernNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();

  // Track scroll state for sticky backdrop blur and border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'experience', 'projects', 'education', 'toolbox', 'certificates', 'contact'];
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Pick the section with highest visibility ratio
        let bestSection = '';
        let highestRatio = -1;
        visibleSections.forEach((ratio, id) => {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            bestSection = id;
          }
        });

        if (bestSection) {
          setActiveSection(bestSection);
        }
      },
      {
        rootMargin: '-15% 0px -35% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#toolbox', id: 'toolbox' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
  ];

  return (
    <>
      {/* Sleek Coral Scroll-Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-coral via-peach to-coral z-[100] origin-left pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2.5 rounded-xl bg-charcoal text-white font-sans text-xs font-bold uppercase tracking-wider shadow-soft-lg focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md border-b border-pale/80 py-3 shadow-soft-sm'
            : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Left: Avatar + Wordmark */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 p-1 -m-1"
              aria-label="Allanagari Renuka — Return to top"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-pale shadow-soft-xs group-hover:scale-105 transition-transform bg-white">
                <Image
                  src="/professional-portfolio.png"
                  alt="Allanagari Renuka profile thumbnail"
                  fill
                  sizes="32px"
                  className="object-cover object-top filter contrast-105"
                />
              </div>
              <span className="text-lg font-bold text-charcoal tracking-tight font-sans">
                Renuka
              </span>
            </a>

            {/* Right: Desktop Navigation Links + Coral Action Button */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <nav className="flex items-center gap-6" aria-label="Main Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`relative py-1 text-sm font-semibold transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
                        isActive
                          ? 'text-charcoal font-bold'
                          : 'text-charcoal/70 hover:text-charcoal'
                      }`}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-coral rounded-full" />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Coral Action Button: Let's chat ✦ */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[44px] gap-1.5 px-5 py-2.5 rounded-full bg-coral hover:bg-coral-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-coral hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
              >
                <span>Let&apos;s chat</span>
                <span className="text-white/80" aria-hidden="true">✦</span>
              </a>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[44px] px-3.5 py-2 rounded-full bg-coral text-white text-[11px] font-bold uppercase tracking-wider shadow-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                <span>Let&apos;s chat ✦</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-charcoal hover:bg-cream-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-pale/80 bg-cream/98 backdrop-blur-md px-5 pt-3 pb-6 mt-3 space-y-4 shadow-soft">
            <nav className="space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between min-h-[44px] px-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-white text-coral font-bold shadow-soft-xs'
                        : 'text-charcoal hover:bg-white/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="text-coral">✦</span>}
                  </a>
                );
              })}
            </nav>
            <div className="pt-3 border-t border-pale flex items-center justify-between text-xs text-charcoal/70">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center hover:text-coral transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center hover:text-coral transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="/resume.pdf"
                download="Allanagari_Renuka_Resume.pdf"
                className="min-h-[44px] inline-flex items-center hover:text-coral font-bold transition-colors"
              >
                Resume ↗
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
