'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// 1. Customer Smartphone Mesh
function CustomerPhone({ position = [-0.75, 0, 0] }: { position?: [number, number, number] }) {
  const phoneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y = -0.15 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }
  });

  return (
    <group ref={phoneRef} position={position}>
      {/* Phone chassis */}
      <RoundedBox args={[1.05, 1.95, 0.08]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color="#1C1D1A" metalness={0.9} roughness={0.2} />
      </RoundedBox>

      {/* Screen glass */}
      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[0.96, 1.82]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
      </mesh>

      {/* Notch */}
      <mesh position={[0, 0.84, 0.046]}>
        <planeGeometry args={[0.26, 0.05]} />
        <meshBasicMaterial color="#171817" />
      </mesh>

      {/* Screen UI Elements (Simulated Skipp Customer App) */}
      {/* Top Banner */}
      <mesh position={[0, 0.65, 0.047]}>
        <planeGeometry args={[0.78, 0.16]} />
        <meshBasicMaterial color="#171817" />
      </mesh>

      {/* Menu & Order Cards */}
      {[-0.2, 0.12, 0.44].map((y, i) => (
        <mesh key={i} position={[0, y, 0.047]}>
          <planeGeometry args={[0.82, 0.22]} />
          <meshBasicMaterial color={i === 1 ? '#C8F31D' : '#F7F7F2'} />
        </mesh>
      ))}

      {/* Order Status Button */}
      <mesh position={[0, -0.65, 0.047]}>
        <planeGeometry args={[0.82, 0.18]} />
        <meshBasicMaterial color="#C8F31D" />
      </mesh>
    </group>
  );
}

// 2. Restaurant Kitchen Tablet Mesh
function RestaurantTablet({ position = [0.8, 0, -0.15] }: { position?: [number, number, number] }) {
  const tabletRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (tabletRef.current) {
      tabletRef.current.rotation.y = 0.2 + Math.cos(state.clock.elapsedTime * 0.8) * 0.08;
    }
  });

  return (
    <group ref={tabletRef} position={position}>
      {/* Tablet chassis */}
      <RoundedBox args={[1.5, 1.1, 0.08]} radius={0.06} smoothness={4}>
        <meshStandardMaterial color="#2E302C" metalness={0.9} roughness={0.2} />
      </RoundedBox>

      {/* Screen glass */}
      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[1.4, 1.0]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.15} />
      </mesh>

      {/* Top status bar */}
      <mesh position={[0, 0.42, 0.046]}>
        <planeGeometry args={[1.36, 0.09]} />
        <meshBasicMaterial color="#171817" />
      </mesh>

      {/* Live Kitchen Order Cards (columns) */}
      {[-0.45, 0, 0.45].map((x, idx) => (
        <group key={idx} position={[x, -0.06, 0.047]}>
          <mesh>
            <planeGeometry args={[0.4, 0.7]} />
            <meshBasicMaterial color={idx === 1 ? '#F7F7F2' : '#ECEEE6'} />
          </mesh>
          {/* Card inner strip */}
          <mesh position={[0, 0.22, 0.001]}>
            <planeGeometry args={[0.34, 0.08]} />
            <meshBasicMaterial color={idx === 1 ? '#C8F31D' : '#171817'} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// 3. Socket.io Real-Time Synchronization Pulse Wave
function SyncPulse() {
  const waveRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (waveRef.current) {
      const progress = (state.clock.elapsedTime * 0.8) % 1;
      waveRef.current.position.x = -0.75 + progress * 1.55;
      waveRef.current.position.y = Math.sin(progress * Math.PI) * 0.35;
      const mat = waveRef.current.material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.opacity = Math.sin(progress * Math.PI);
      }
    }
  });

  return (
    <mesh ref={waveRef}>
      <sphereGeometry args={[0.075, 16, 16]} />
      <meshBasicMaterial color="#C8F31D" transparent={true} opacity={0.9} />
    </mesh>
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
      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.4}>
        <CustomerPhone position={[-0.75, 0, 0]} />
        <RestaurantTablet position={[0.75, 0, -0.15]} />
        <SyncPulse />
      </Float>
    </group>
  );
}

export default function SkippDevice3D() {
  return (
    <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden bg-cream/70 border border-pale shadow-inner">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 bg-lime/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating telemetry pills */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-pale text-[10px] font-mono text-charcoal shadow-2xs">
        <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
        <span className="font-bold">Socket.io Event Telemetry</span>
      </div>

      <div className="absolute top-3 right-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-pale text-[10px] font-mono text-charcoal shadow-2xs">
        <span className="w-2 h-2 rounded-full bg-lime" />
        <span className="font-semibold">Play Store Verified</span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 44 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.4} color="#FFFBF5" />
        <directionalLight position={[4, 5, 4]} intensity={2.2} color="#FFFFFF" />
        <directionalLight position={[-4, -3, -2]} intensity={0.8} color="#E8E9E2" />
        <pointLight position={[0, 0, 1.5]} intensity={1.5} color="#C8F31D" />

        <Scene />
      </Canvas>

      {/* Bottom Labels */}
      <div className="absolute bottom-3 inset-x-4 z-10 flex justify-between items-center text-[11px] font-mono text-muted">
        <span className="px-2.5 py-1 rounded bg-white border border-pale text-charcoal font-medium shadow-2xs">
          📱 Customer Pre-Order App
        </span>
        <span className="px-2.5 py-1 rounded bg-white border border-pale text-charcoal font-medium shadow-2xs">
          🖥️ Kitchen KDS Terminal
        </span>
      </div>
    </div>
  );
}
