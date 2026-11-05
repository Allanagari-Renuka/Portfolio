'use client';

import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with mouse
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', mouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', mouseOver);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Central Cursor Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-cyan pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
      {/* Trailing Spring Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-accent-cyan/60 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          hovered ? 'w-10 h-10 bg-cyan-500/10 scale-110' : 'w-7 h-7 scale-100'
        }`}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
    </>
  );
}
