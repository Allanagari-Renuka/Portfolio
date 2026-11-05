'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// High-end Architectural Kinetic Sculpture — Light Mode Art Direction
function KineticCore() {
  const monolithRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const wireShellRef = useRef<THREE.Mesh>(null);
  const nucleusRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);
  const orbitalPillsRef = useRef<THREE.Group>(null);

  // Smooth kinetic rotation cycles
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Central faceted crystal slow majestic roll
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.22;
      coreRef.current.rotation.x = Math.sin(t * 0.3) * 0.12;
    }

    // Outer architectural wire cage counter-rotates
    if (wireShellRef.current) {
      wireShellRef.current.rotation.y -= delta * 0.16;
      wireShellRef.current.rotation.z += delta * 0.12;
    }

    // Pulsing chartreuse/lime nucleus
    if (nucleusRef.current) {
      nucleusRef.current.rotation.x += delta * 0.4;
      nucleusRef.current.rotation.y += delta * 0.5;
      const s = 1 + Math.sin(t * 2.5) * 0.08;
      nucleusRef.current.scale.set(s, s, s);
    }

    // Concentric Gimbal Rings with variable gear speeds
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.25;
      ring1Ref.current.rotation.y = Math.cos(t * 0.35) * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.2;
      ring2Ref.current.rotation.y = Math.sin(t * 0.25) * 0.25;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y -= delta * 0.15;
      ring3Ref.current.rotation.z = Math.sin(t * 0.3) * 0.2;
    }

    if (orbitalPillsRef.current) {
      orbitalPillsRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={monolithRef}>
      {/* 1. Central Faceted Crystal Gemstone (Clean Warm Pearl Alabaster) */}
      <mesh ref={coreRef}>
        <dodecahedronGeometry args={[1.08, 0]} />
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.12}
          metalness={0.15}
          flatShading={true}
          envMapIntensity={1}
        />
      </mesh>

      {/* 2. Inner Glowing Chartreuse / Lime Energy Nucleus */}
      <mesh ref={nucleusRef}>
        <octahedronGeometry args={[0.52, 0]} />
        <meshStandardMaterial
          color="#C8F31D"
          emissive="#C8F31D"
          emissiveIntensity={2.2}
          roughness={0.05}
          metalness={0.4}
          wireframe={true}
        />
      </mesh>

      {/* 3. Outer Hairline Wireframe Shell (Architectural Charcoal Line) */}
      <mesh ref={wireShellRef}>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshStandardMaterial
          color="#171817"
          wireframe={true}
          transparent={true}
          opacity={0.14}
          roughness={0.5}
        />
      </mesh>

      {/* 4. Gimbal Ring 1 — Matte Obsidian Graphite with Lime Satellite */}
      <group ref={ring1Ref}>
        <mesh>
          <torusGeometry args={[1.9, 0.024, 16, 100]} />
          <meshStandardMaterial
            color="#1C1D1A"
            metalness={0.88}
            roughness={0.2}
          />
        </mesh>
        {/* Pulsing Satellite Node */}
        <mesh position={[1.9, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#C8F31D"
            emissive="#C8F31D"
            emissiveIntensity={2.5}
          />
        </mesh>
      </group>

      {/* 5. Gimbal Ring 2 — Architectural Satin Titanium Steel */}
      <group ref={ring2Ref} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <mesh>
          <torusGeometry args={[2.32, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#7E8077"
            metalness={0.94}
            roughness={0.14}
          />
        </mesh>
        <mesh position={[0, 2.32, 0]}>
          <sphereGeometry args={[0.065, 16, 16]} />
          <meshStandardMaterial
            color="#171817"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* 6. Gimbal Ring 3 — Hairline Pale Outer Orbit */}
      <group ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[2.7, 0.012, 16, 100]} />
          <meshStandardMaterial
            color="#B8BAAF"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        <mesh position={[-2.7, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color="#C8F31D"
            emissive="#C8F31D"
            emissiveIntensity={1.8}
          />
        </mesh>
      </group>

      {/* 7. Constellation Satellites */}
      <group ref={orbitalPillsRef}>
        <mesh position={[2.1, 0.9, -0.6]}>
          <boxGeometry args={[0.09, 0.09, 0.09]} />
          <meshStandardMaterial color="#171817" metalness={0.9} />
        </mesh>
        <mesh position={[-1.9, -1.1, 0.7]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial color="#C8F31D" emissive="#C8F31D" emissiveIntensity={1.6} />
        </mesh>
        <mesh position={[0.8, -2.1, -0.4]}>
          <octahedronGeometry args={[0.06, 0]} />
          <meshStandardMaterial color="#171817" metalness={0.8} />
        </mesh>
      </group>
    </group>
  );
}

// Parallax Stage with Silky Pointer Follow
function InteractiveStage() {
  const stageRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (stageRef.current) {
      const targetX = state.pointer.x * 0.45;
      const targetY = state.pointer.y * 0.35;
      stageRef.current.rotation.y = THREE.MathUtils.lerp(stageRef.current.rotation.y, targetX, 0.06);
      stageRef.current.rotation.x = THREE.MathUtils.lerp(stageRef.current.rotation.x, -targetY, 0.06);
    }
  });

  return (
    <group ref={stageRef}>
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.4} floatingRange={[-0.1, 0.1]}>
        <KineticCore />
      </Float>
      {/* Light-mode particles */}
      <Sparkles count={35} scale={6} size={2.5} speed={0.4} color="#C8F31D" opacity={0.65} />
    </group>
  );
}

export default function HeroFloatingScene() {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] xl:h-[580px] flex items-center justify-center select-none">
      {/* Soft Architectural Ground Plinth Shadow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] sm:w-[420px] lg:w-[480px] h-[80px] rounded-[100%] bg-charcoal/6 blur-2xl translate-y-52" />
        {/* Concentric subtle target rings */}
        <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-pale/60" />
        <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-pale/40 border-dashed" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Studio Lighting Optimized for Light Ivory Aesthetics */}
        <ambientLight intensity={1.4} color="#FFFDF7" />
        <directionalLight position={[6, 9, 6]} intensity={2.4} color="#FFFFFF" />
        <directionalLight position={[-6, -4, -3]} intensity={0.8} color="#E8EAE2" />
        <pointLight position={[0, 0, 0]} intensity={2.0} color="#C8F31D" distance={4.5} />
        <pointLight position={[3, 3, 2]} intensity={1.2} color="#FFFFFF" />

        <InteractiveStage />
      </Canvas>

      {/* Floating 3D Telemetry Tag */}
      <div className="absolute bottom-3 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-pale shadow-sm backdrop-blur-sm text-[10px] font-mono tracking-widest uppercase text-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
        <span className="text-charcoal font-bold">Interactive 3D Engine</span>
        <span className="text-pale">|</span>
        <span>Three.js / WebGL</span>
      </div>
    </div>
  );
}
