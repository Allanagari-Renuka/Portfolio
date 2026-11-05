'use client';

import React, { useState, useEffect } from 'react';

interface StationItem {
  id: string;
  name: string;
}

const stations: StationItem[] = [
  { id: 'station-hero', name: '01 // Hero' },
  { id: 'station-about', name: '02 // About' },
  { id: 'station-skills', name: '03 // Skills' },
  { id: 'station-skipp', name: '04 // Skipp' },
  { id: 'station-projects', name: '05 // Projects' },
  { id: 'station-experience', name: '06 // Experience' },
  { id: 'station-contact', name: '07 // Contact' },
];

export default function StationDots() {
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollToStation = (index: number) => {
    setActiveIdx(index);
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = (index / (stations.length - 1)) * scrollHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const progress = window.scrollY / scrollHeight;
      const idx = Math.min(stations.length - 1, Math.max(0, Math.round(progress * (stations.length - 1))));
      setActiveIdx(idx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3">
      {stations.map((st, i) => {
        const isSelected = activeIdx === i;
        return (
          <button
            key={st.id}
            onClick={() => scrollToStation(i)}
            className="group relative flex items-center justify-end p-1.5 focus:outline-none"
            aria-label={`Jump to ${st.name}`}
          >
            {/* Tooltip on hover */}
            <span className="absolute right-7 px-2 py-0.5 rounded text-[10px] font-mono text-white bg-charcoal-900 border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {st.name}
            </span>

            {/* Dot Indicator */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isSelected
                  ? 'w-2.5 h-6 bg-accent-cyan shadow-sm shadow-cyan-500/50'
                  : 'w-2 h-2 bg-slate-600 hover:bg-slate-300'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
