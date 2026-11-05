'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';

export default function ModernNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'experience', 'projects', 'education', 'toolbox', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Toolbox', href: '#toolbox', id: 'toolbox' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-pale/80 py-3 shadow-soft-sm'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Left: Avatar + Wordmark (Matches video top left) */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="Allanagari Renuka — Home"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-pale shadow-2xs group-hover:scale-105 transition-transform bg-white">
              <Image
                src="/professional-portfolio.png"
                alt="Renuka"
                fill
                priority
                className="object-cover object-top filter contrast-105"
              />
            </div>
            <span className="text-lg font-bold text-charcoal tracking-tight font-sans">
              renuka<span className="text-coral">.</span>
            </span>
          </a>

          {/* Right: Desktop Navigation Links + Coral Action Button (Matches video top right) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-coral ${
                      isActive ? 'text-charcoal font-bold' : 'text-charcoal/70'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Coral Action Button: Let's chat ✦ */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-coral hover:bg-coral-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-coral hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let&apos;s chat</span>
              <span className="text-white/80">✦</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-full bg-coral text-white text-[11px] font-bold uppercase tracking-wider"
            >
              Let&apos;s chat ✦
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-charcoal hover:bg-cream-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-pale bg-cream/98 px-5 pt-3 pb-6 mt-3 space-y-3 shadow-soft">
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold py-1.5 text-charcoal hover:text-coral"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-pale flex items-center justify-between text-xs text-charcoal/70">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-coral">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-coral">
              LinkedIn ↗
            </a>
            <a href="/resume.pdf" download="Allanagari_Renuka_Resume.pdf" className="hover:text-coral font-bold">
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
