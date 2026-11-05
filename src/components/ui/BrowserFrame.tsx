'use client';

import React from 'react';
import Image from 'next/image';

interface BrowserFrameProps {
  src: string;
  alt: string;
  domain?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export default function BrowserFrame({
  src,
  alt,
  domain,
  priority = false,
}: BrowserFrameProps) {
  // Extract a clean display domain if provided or from URL
  const cleanDomain = domain
    ? domain.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : 'live-app.vercel.app';

  return (
    <div className="w-full overflow-hidden rounded-t-card bg-[#1A1E26] border-b border-pale/60 select-none">
      {/* Subtle Browser Chrome Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#12151C]/90 border-b border-white/5 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/90 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/90 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/90 inline-block" />
        </div>

        <div className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-300 max-w-[200px] truncate">
          {cleanDomain}
        </div>

        <div className="w-9" aria-hidden="true" />
      </div>

      {/* 16:10 Aspect Ratio Screenshot Container */}
      <div className="relative aspect-[16/10] w-full bg-[#0F1115] overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top"
        />
        {/* Subtle glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
