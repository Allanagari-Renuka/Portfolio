'use client';

import React from 'react';

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} color="#1e1b4b" />
      <directionalLight
        position={[6, 12, 8]}
        intensity={1.6}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-6, -4, -6]} intensity={0.4} color="#0f172a" />

      {/* Hero Station Point Lights */}
      <pointLight position={[3, 3, 2]} intensity={2.0} color="#22d3ee" distance={15} />
      <pointLight position={[-3, 1, 2]} intensity={1.8} color="#6366f1" distance={15} />

      {/* About Station */}
      <pointLight position={[2, -6, 2]} intensity={1.5} color="#38bdf8" distance={12} />
      <pointLight position={[-2, -7, 1]} intensity={1.2} color="#10b981" distance={12} />

      {/* Skills Station */}
      <pointLight position={[0, -14, 2]} intensity={2.2} color="#e879f9" distance={14} />
      <pointLight position={[3, -15, 1]} intensity={1.4} color="#22d3ee" distance={12} />

      {/* Skipp Hero Station */}
      <pointLight position={[2, -22, 3]} intensity={2.5} color="#3b82f6" distance={15} />
      <pointLight position={[-2, -22, 2]} intensity={2.0} color="#06b6d4" distance={15} />

      {/* Projects Station */}
      <pointLight position={[0, -30, 2]} intensity={1.8} color="#a855f7" distance={14} />

      {/* Experience Station */}
      <pointLight position={[0, -38, 2]} intensity={1.8} color="#f59e0b" distance={14} />

      {/* Contact Station */}
      <pointLight position={[0, -46, 2]} intensity={2.4} color="#e879f9" distance={16} />
      <pointLight position={[0, -47, 1]} intensity={1.6} color="#22d3ee" distance={14} />
    </>
  );
}
