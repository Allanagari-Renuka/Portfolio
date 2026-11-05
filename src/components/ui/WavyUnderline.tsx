'use client';

import React from 'react';

export default function WavyUnderline({
  children,
  className = '',
  color = 'currentColor',
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <span className={`relative inline-block text-coral ${className}`}>
      {children}
      <svg
        className="absolute left-0 -bottom-2 sm:-bottom-2.5 w-full h-2.5 sm:h-3 text-coral pointer-events-none overflow-visible"
        viewBox="0 0 100 12"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 6 Q 12.5 0, 25 6 T 50 6 T 75 6 T 100 6"
          stroke={color === 'currentColor' ? 'currentColor' : color}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
