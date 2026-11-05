'use client';

import React from 'react';
import { useProgress } from '@react-three/drei';

export default function Loader() {
  const { progress, active } = useProgress();

  if (!active && progress >= 100) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05060A] text-white transition-opacity duration-700">
      <div className="w-full max-w-md p-6 space-y-5 text-center">
        {/* Monogram emblem */}
        <div className="w-12 h-12 mx-auto rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg shadow-cyan-500/10">
          <span className="text-sm font-mono font-bold text-accent-cyan tracking-wider">
            AR
          </span>
        </div>

        <div>
          <h2 className="text-base sm:text-lg font-bold text-white tracking-wider uppercase font-mono">
            Allanagari Renuka
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Loading Immersive 3D Engineering Universe...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800/80">
          <div
            className="h-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-violet transition-all duration-300"
            style={{ width: `${Math.round(progress)}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>INITIALIZING SHADERS & MESHES</span>
          <span className="text-accent-cyan font-bold">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
