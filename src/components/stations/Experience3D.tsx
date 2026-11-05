'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

function PortalGate({
  position,
  company,
  role,
  period,
  color,
}: {
  position: [number, number, number];
  company: string;
  role: string;
  period: string;
  color: string;
}) {
  return (
    <group position={position}>
      {/* Portal Arch Structure */}
      <mesh position={[-0.8, 0.9, 0]}>
        <boxGeometry args={[0.08, 1.8, 0.08]} />
        <meshStandardMaterial color="#0b1329" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.8, 0.9, 0]}>
        <boxGeometry args={[0.08, 1.8, 0.08]} />
        <meshStandardMaterial color="#0b1329" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[1.68, 0.08, 0.08]} />
        <meshStandardMaterial color="#0b1329" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Glowing Neon Gate Rim */}
      <lineSegments position={[0, 0.9, 0.045]}>
        <edgesGeometry args={[new THREE.BoxGeometry(1.65, 1.8, 0.01)]} />
        <lineBasicMaterial color={color} transparent opacity={0.8} />
      </lineSegments>

      {/* Floating Milestone Plaque */}
      <mesh position={[0, 1.0, 0]}>
        <planeGeometry args={[1.4, 0.8]} />
        <meshBasicMaterial color="#030712" transparent opacity={0.85} />
      </mesh>
      <Text
        position={[0, 1.25, 0.02]}
        fontSize={0.075}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {company}
      </Text>
      <Text
        position={[0, 1.05, 0.02]}
        fontSize={0.062}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {role}
      </Text>
      <Text
        position={[0, 0.85, 0.02]}
        fontSize={0.052}
        color="#94a3b8"
        anchorX="center"
        anchorY="middle"
      >
        {period}
      </Text>
    </group>
  );
}

export default function Experience3D() {
  const roadRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!roadRef.current) return;
    const t = state.clock.getElapsedTime();
    roadRef.current.position.y = Math.sin(t * 0.8) * 0.02;
  });

  const gates = [
    {
      company: 'CORE CAREERS PVT. LTD.',
      role: 'Junior Product & Growth Associate',
      period: 'Mar 2026 – Sep 2026',
      color: '#818cf8',
      pos: [-1.9, 0, 0] as [number, number, number],
    },
    {
      company: 'ANGO DIGITAL TECHNOLOGIES',
      role: 'Frontend Developer',
      period: 'Jul 2025 – Feb 2026',
      color: '#22d3ee',
      pos: [0, 0, 0.2] as [number, number, number],
    },
    {
      company: 'ELFINITY TECHNOLOGIES',
      role: 'Full Stack Developer Intern',
      period: 'Nov 2024 – May 2025',
      color: '#f59e0b',
      pos: [1.9, 0, 0] as [number, number, number],
    },
  ];

  return (
    <group position={[0, -39.6, 0]}>
      {/* 3D Glowing Timeline Road */}
      <group ref={roadRef}>
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[5.4, 0.08, 0.8]} />
          <meshStandardMaterial color="#070b16" metalness={0.9} roughness={0.2} />
        </mesh>
        <lineSegments position={[0, 0, 0.41]}>
          <edgesGeometry args={[new THREE.BoxGeometry(5.4, 0.02, 0.02)]} />
          <lineBasicMaterial color="#38bdf8" />
        </lineSegments>

        {/* 3 Experience Milestone Portal Gates */}
        {gates.map((g) => (
          <PortalGate
            key={g.company}
            position={g.pos}
            company={g.company}
            role={g.role}
            period={g.period}
            color={g.color}
          />
        ))}
      </group>
    </group>
  );
}
