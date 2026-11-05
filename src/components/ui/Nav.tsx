'use client';

import React, { useState } from 'react';
import {
  FileDown,
  Github,
  Linkedin,
  Menu,
  X,
  Layers,
  Sparkles,
  Smartphone,
  Eye,
  Rotate3d,
} from 'lucide-react';
import { profile } from '@/data/profile';

interface NavProps {
  isSimpleMode: boolean;
  onToggleSimpleMode: () => void;
}

export default function Nav({ isSimpleMode, onToggleSimpleMode }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: 'About', href: '#station-about' },
    { name: 'Skipp (Google Play)', href: '#station-skipp', highlight: true },
    { name: 'Projects', href: '#station-projects' },
    { name: 'Experience', href: '#station-experience' },
    { name: 'Skills', href: '#station-skills' },
    { name: 'Contact', href: '#station-contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-charcoal-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-charcoal-900 border border-slate-700 flex items-center justify-center">
              <span className="text-xs font-mono font-bold text-accent-cyan">AR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                {profile.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono hidden sm:inline-block">
                Full Stack & AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  link.highlight
                    ? 'text-accent-cyan bg-cyan-500/10 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Skip 3D toggle & Resume Download */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Recruiter Safety Net: "Skip 3D / View simple version" toggle */}
            <button
              onClick={onToggleSimpleMode}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                isSimpleMode
                  ? 'bg-accent-cyan text-charcoal-950 shadow-sm'
                  : 'bg-charcoal-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
              }`}
              title="Toggle between 3D WebGL experience and high-speed 2D recruiter layout"
            >
              {isSimpleMode ? (
                <>
                  <Rotate3d className="w-3.5 h-3.5" />
                  <span>Switch to 3D World</span>
                </>
              ) : (
                <>
                  <Layers className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>View Simple Version</span>
                </>
              )}
            </button>

            {/* Social Links */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-slate-300 hover:text-white bg-charcoal-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-slate-300 hover:text-accent-blue-light bg-charcoal-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Canonical Resume Download Button */}
            <a
              href="/resume.pdf"
              download="Allanagari_Renuka_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-blue hover:bg-blue-600 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleSimpleMode}
              className="px-2.5 py-1.5 rounded-lg bg-charcoal-900 border border-slate-800 text-[11px] font-mono text-accent-cyan"
            >
              {isSimpleMode ? '3D' : '2D'}
            </button>
            <a
              href="/resume.pdf"
              download="Allanagari_Renuka_Resume.pdf"
              className="p-1.5 rounded-lg bg-accent-blue text-white"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-charcoal-900 border border-slate-800"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden bg-charcoal-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-lg text-xs font-medium ${
                link.highlight
                  ? 'text-accent-cyan bg-cyan-500/10 border border-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-charcoal-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-850 flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center rounded-lg bg-charcoal-900 border border-slate-800 text-xs text-slate-300"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center rounded-lg bg-charcoal-900 border border-slate-800 text-xs text-accent-blue-light"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
