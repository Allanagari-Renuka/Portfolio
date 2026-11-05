'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function TorusKnotMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.35;
      meshRef.current.rotation.y += delta * 0.45;
    }
    if (wireRef.current && meshRef.current) {
      wireRef.current.rotation.x = meshRef.current.rotation.x;
      wireRef.current.rotation.y = meshRef.current.rotation.y;
    }
  });

  return (
    <group>
      {/* Inner solid torus knot */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[0.9, 0.28, 128, 32]} />
        <meshStandardMaterial
          color="#1C1D1A"
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>

      {/* Outer wireframe glow */}
      <mesh ref={wireRef}>
        <torusKnotGeometry args={[0.92, 0.29, 64, 16]} />
        <meshStandardMaterial
          color="#C8F31D"
          emissive="#C8F31D"
          emissiveIntensity={1.2}
          wireframe={true}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const targetX = state.pointer.x * 0.35;
      const targetY = state.pointer.y * 0.25;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
        <TorusKnotMesh />
      </Float>
      <Sparkles count={30} scale={5} size={2.2} speed={0.4} color="#C8F31D" opacity={0.6} />
    </group>
  );
}

export default function ContactGeometry3D() {
  return (
    <div className="relative w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden bg-cream/70 border border-pale flex items-center justify-center">
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-pale text-[10px] font-mono text-charcoal shadow-2xs">
        <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
        <span className="font-bold">Topology Node</span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} color="#FFFDF7" />
        <directionalLight position={[4, 5, 4]} intensity={2.2} color="#FFFFFF" />
        <directionalLight position={[-4, -3, -2]} intensity={0.8} color="#E8EAE2" />
        <pointLight position={[2, 2, 2]} intensity={1.8} color="#C8F31D" />

        <Scene />
      </Canvas>
    </div>
  );
}
