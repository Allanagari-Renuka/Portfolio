'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

export default function Effects() {
  // Dust particles floating through the 3D space
  const particles = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * -55 + 5; // Spans from top to bottom station
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return positions;
  }, []);

  return (
    <>
      <color attach="background" args={['#05060A']} />
      <fog attach="fog" args={['#05060A', 5, 26]} />

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#38bdf8"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </>
  );
}
