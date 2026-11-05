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
      {/* 0. Cute Welcome Preloader (Opening Frame of Reference Video) */}
      <WelcomePreloader />

      {/* 1. Modern Top Navigation (Matches Video Header) */}
      <ModernNav />

      <main>
        {/* 2. Signature 3D Hero with Floating Cards & Parallax Profile (Video Frame 1) */}
        <HeroSection />

        {/* 3. Professional Experience (Kept First as Requested — Video Frame 3 "The story so far") */}
        <ExperienceSection />

        {/* 4. Projects (3 Major Flagships + 8 Personal Deployments — Video Frame 2 "Projects I've built") */}
        <ProjectsSection />

        {/* 5. Academic Education (Mentioned After Projects as Requested) */}
        <EducationSection />

        {/* 6. Things I'm Good At with Interactive Shuffle (Video Frame 4 "Things I'm good at") */}
        <SkillsSection />

        {/* 7. Certificate Wall (Mentioned After Education as Requested — Video Frame 5) */}
        <CertificatesSection />

        {/* 8. Bold Orange "Let's be friends!" Contact Details Banner (Video Frame 6) */}
        <ContactSection />
      </main>

      {/* Semantic SEO Profile Data for Search Engines & Screen Readers */}
      <div className="sr-only">
        <h1>{profile.name} — {profile.role}</h1>
        <p>{profile.tagline}</p>
        <p>{profile.summary}</p>
        <p>Education: {profile.degree}</p>
        <h2>Major Projects</h2>
        <ul>
          {majorProjects.map((p) => (
            <li key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.playStoreCustomerUrl && <a href={p.playStoreCustomerUrl}>Skipp Customer App on Google Play</a>}
              {p.playStoreRestaurantUrl && <a href={p.playStoreRestaurantUrl}>Skipp Restaurant App on Google Play</a>}
              {p.demoUrl && <a href={p.demoUrl}>{p.title} Live Demo</a>}
            </li>
          ))}
        </ul>
        <h2>Personal Projects</h2>
        <ul>
          {personalProjects.map((p) => (
            <li key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.demoUrl && <a href={p.demoUrl}>{p.title} Live Demo</a>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
