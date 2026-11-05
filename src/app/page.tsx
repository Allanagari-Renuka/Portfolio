'use client';

import React from 'react';
import WelcomePreloader from '@/components/ui/WelcomePreloader';
import ModernNav from '@/components/ui/ModernNav';
import HeroSection from '@/components/sections/HeroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ContactSection from '@/components/sections/ContactSection';
import { profile } from '@/data/profile';
import { majorProjects, personalProjects } from '@/data/projects';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cream text-charcoal font-sans selection:bg-coral selection:text-white">
      {/* 0. Cute Welcome Preloader */}
      <WelcomePreloader />

      {/* 1. Modern Top Navigation */}
      <ModernNav />

      {/* Main Landmark with Skip-Target ID */}
      <main id="main-content">
        {/* 2. Signature 3D Hero with Floating Cards & Parallax Profile */}
        <HeroSection />

        {/* 3. Professional Experience */}
        <ExperienceSection />

        {/* 4. Projects (3 Major Flagships + 8 Personal Deployments) */}
        <ProjectsSection />

        {/* 5. Academic Education */}
        <EducationSection />

        {/* 6. Things I'm Good At — Core Tech Stack */}
        <SkillsSection />

        {/* 7. Certificate Wall */}
        <CertificatesSection />

        {/* 8. Contact Details Banner & Footer */}
        <ContactSection />
      </main>

      {/* Semantic Profile Data for Screen Readers (Subordinate to main page h1) */}
      <aside className="sr-only" aria-label="Portfolio Summary">
        <h2>{profile.name} — {profile.role}</h2>
        <p>{profile.tagline}</p>
        <p>{profile.summary}</p>
        <p>Education: {profile.degree}</p>
        <h3>Major Projects</h3>
        <ul>
          {majorProjects.map((p) => (
            <li key={p.id}>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              {p.playStoreCustomerUrl && <a href={p.playStoreCustomerUrl}>Skipp Customer App on Google Play</a>}
              {p.playStoreRestaurantUrl && <a href={p.playStoreRestaurantUrl}>Skipp Restaurant App on Google Play</a>}
              {p.demoUrl && (
                <a href={p.demoUrl}>
                  {p.id === 'skipp' ? `${p.title} Google Play` : `${p.title} Live Demo`}
                </a>
              )}
            </li>
          ))}
        </ul>
        <h3>Personal Projects</h3>
        <ul>
          {personalProjects.map((p) => (
            <li key={p.id}>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              {p.demoUrl && <a href={p.demoUrl}>{p.title} Live Demo</a>}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
