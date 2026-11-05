'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import WavyUnderline from '../ui/WavyUnderline';

interface SkillPill {
  name: string;
  variant: 'coral' | 'white' | 'charcoal' | 'cream';
  rot: number;
}

const initialSkills: SkillPill[] = [
  { name: 'React', variant: 'coral', rot: -2 },
  { name: 'Node.js', variant: 'white', rot: 3 },
  { name: 'TypeScript', variant: 'cream', rot: -1 },
  { name: 'JavaScript', variant: 'charcoal', rot: 2 },
  { name: 'Python', variant: 'white', rot: -3 },
  { name: 'Java', variant: 'cream', rot: 1 },
  { name: 'C++', variant: 'coral', rot: -2 },
  { name: 'SQL', variant: 'white', rot: 2 },
  { name: 'Express', variant: 'cream', rot: -1 },
  { name: 'FastAPI', variant: 'charcoal', rot: 3 },
  { name: 'Next.js', variant: 'white', rot: -2 },
  { name: 'React Native', variant: 'cream', rot: 2 },
  { name: 'Tailwind CSS', variant: 'coral', rot: 1 },
  { name: 'MongoDB', variant: 'white', rot: -3 },
  { name: 'PostgreSQL', variant: 'cream', rot: 2 },
  { name: 'MySQL', variant: 'charcoal', rot: -1 },
  { name: 'Redis', variant: 'white', rot: 3 },
  { name: 'Docker', variant: 'cream', rot: -2 },
  { name: 'Git', variant: 'coral', rot: 2 },
  { name: 'Postman', variant: 'white', rot: -1 },
  { name: 'Capacitor', variant: 'cream', rot: 3 },
  { name: 'JWT', variant: 'charcoal', rot: -2 },
  { name: 'OpenAI API', variant: 'white', rot: 1 },
  { name: 'TensorFlow', variant: 'cream', rot: -3 },
  { name: 'OpenCV', variant: 'white', rot: 2 },
  { name: 'scikit-learn', variant: 'cream', rot: -1 },
];

export default function SkillsSection() {
  const [skills, setSkills] = useState<SkillPill[]>(initialSkills);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleSkills = () => {
    setIsShuffling(true);
    // Shuffle array and assign randomized playful rotations between -4 and +4 degrees
    const shuffled = [...skills]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({
        ...item,
        rot: Math.floor(Math.random() * 9) - 4,
      }));
    setSkills(shuffled);
    setTimeout(() => setIsShuffling(false), 300);
  };

  const getVariantClasses = (variant: SkillPill['variant']) => {
    switch (variant) {
      case 'coral':
        return 'bg-coral text-white border-coral shadow-coral hover:bg-coral-hover';
      case 'charcoal':
        return 'bg-charcoal text-white border-charcoal shadow-soft-sm hover:bg-black';
      case 'white':
        return 'bg-white text-charcoal border-pale shadow-soft-sm hover:border-coral/50';
      case 'cream':
      default:
        return 'bg-[#EFEAE0] text-charcoal border-pale/80 shadow-soft-sm hover:bg-white';
    }
  };

  return (
    <section id="toolbox" className="py-20 sm:py-28 bg-cream border-t border-pale/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Pill Eyebrow */}
        <div className="flex justify-start mb-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-pale text-xs font-semibold text-charcoal/80 shadow-soft-sm">
            Toolbox
          </span>
        </div>

        {/* Section Header with Shuffle Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-charcoal tracking-tight font-sans">
              Things I&apos;m <WavyUnderline>good at</WavyUnderline>
            </h2>
          </div>

          {/* Shuffle Button (Matches frame 16/18) */}
          <button
            onClick={shuffleSkills}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-cream-200 border border-charcoal/20 text-charcoal text-xs font-bold uppercase tracking-wider transition-all shadow-soft-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Shuffle</span>
            <Sparkles className="w-3.5 h-3.5 text-coral" />
          </button>
        </div>

        {/* Large Rounded Container with Playful Floating Badges */}
        <div className="rounded-3xl bg-[#F6F2E9] border border-pale p-8 sm:p-14 shadow-soft-sm">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight border transition-all duration-300 select-none cursor-default hover:scale-105 active:scale-95 ${getVariantClasses(
                  skill.variant
                )} ${isShuffling ? 'scale-90 opacity-70' : 'scale-100 opacity-100'}`}
                style={{
                  transform: `rotate(${skill.rot}deg)`,
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
