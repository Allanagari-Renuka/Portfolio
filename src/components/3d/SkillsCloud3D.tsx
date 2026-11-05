'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

const techTokens = [
  { name: 'React', pos: [1.8, 0.4, 0.5] as [number, number, number] },
  { name: 'Next.js', pos: [-1.7, 0.7, 0.3] as [number, number, number] },
  { name: 'TypeScript', pos: [0.3, 1.6, -0.6] as [number, number, number] },
  { name: 'Python', pos: [-1.4, -0.8, 0.6] as [number, number, number] },
  { name: 'Node.js', pos: [1.5, -0.9, -0.4] as [number, number, number] },
  { name: 'PostgreSQL', pos: [-0.4, -1.6, -0.5] as [number, number, number] },
  { name: 'TensorFlow', pos: [0.8, -1.5, 0.7] as [number, number, number] },
  { name: 'Docker', pos: [-1.8, 0.1, -0.8] as [number, number, number] },
  { name: 'Tailwind', pos: [1.7, 1.2, -0.5] as [number, number, number] },
  { name: 'Socket.io', pos: [-0.6, 1.5, 0.8] as [number, number, number] },
  { name: 'Capacitor', pos: [0, 0, 1.7] as [number, number, number] },
  { name: 'MongoDB', pos: [0.1, 0, -1.8] as [number, number, number] },
];

function TechOrb({ name, pos }: { name: string; pos: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial
          color="#171817"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <group ref={meshRef} position={[0, 0.28, 0]}>
        <Text
          fontSize={0.18}
          color="#171817"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </group>
  );
}

function CloudGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;

      const targetX = state.pointer.x * 0.4;
      const targetY = state.pointer.y * 0.3;
      groupRef.current.rotation.y += targetX * 0.02;
      groupRef.current.rotation.x -= targetY * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central crystalline core */}
      <mesh>
        <icosahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial
          color="#171817"
          roughness={0.3}
          metalness={0.6}
          wireframe={true}
        />
      </mesh>

      <mesh>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color="#C8F31D"
          emissive="#C8F31D"
          emissiveIntensity={1.8}
          roughness={0.1}
        />
      </mesh>

      {/* Orbiting skill tokens */}
      {techTokens.map((t) => (
        <TechOrb key={t.name} name={t.name} pos={t.pos} />
      ))}
    </group>
  );
}

export default function SkillsCloud3D() {
  return (
    <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden bg-cream/70 border border-pale flex items-center justify-center">
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-pale text-[10px] font-mono text-charcoal shadow-2xs">
        <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
        <span className="font-bold">Interactive 3D Tech Orbit</span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} color="#FFFDF7" />
        <directionalLight position={[4, 5, 4]} intensity={2.0} color="#FFFFFF" />
        <directionalLight position={[-4, -3, -2]} intensity={0.8} color="#E8EAE2" />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#C8F31D" distance={4} />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <CloudGroup />
        </Float>
      </Canvas>

      <div className="absolute bottom-3 right-3 z-10 text-[10px] font-mono text-muted bg-white/80 px-2.5 py-0.5 rounded border border-pale">
        Cursor Parallax Enabled
      </div>
    </div>
  );
}
