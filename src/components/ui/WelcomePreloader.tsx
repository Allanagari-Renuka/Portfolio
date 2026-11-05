'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function WelcomePreloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 1100);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-opacity duration-400 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        {/* Cute Speech Bubble (Matches frame 548) */}
        <div className="relative px-4 py-1.5 rounded-2xl bg-white border border-pale shadow-soft-sm text-sm font-handwriting text-coral font-bold tracking-wide animate-bounce">
          hi, it&apos;s Renuka!
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-pale rotate-45" />
        </div>

        {/* Circular Avatar (Matches frame 548) */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-soft bg-white">
          <Image
            src="/professional-portfolio.png"
            alt="Renuka"
            fill
            priority
            className="object-cover object-top filter contrast-105"
          />
        </div>

        {/* Coral Loading Line (Matches frame 548) */}
        <div className="w-24 h-1 bg-pale/70 rounded-full overflow-hidden mt-1">
          <div className="h-full bg-coral rounded-full animate-[pulse_1s_ease-in-out_infinite] w-full" />
        </div>
      </div>
    </div>
  );
}
