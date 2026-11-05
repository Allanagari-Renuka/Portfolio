'use client';

import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { skillGroups } from '@/data/skills';

function SkillToken({
  name,
  color,
  position,
  index,
}: {
  name: string;
  color: string;
  position: [number, number, number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() + index * 0.3;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.08;
    if (hovered) {
      meshRef.current.rotation.y += 0.03;
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.15 : 1.0}
    >
      {/* Chunky token chassis */}
      <mesh>
        <boxGeometry args={[0.75, 0.3, 0.08]} />
        <meshStandardMaterial
          color={hovered ? '#1e293b' : '#090d16'}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <lineSegments position={[0, 0, 0.045]}>
        <edgesGeometry args={[new THREE.BoxGeometry(0.76, 0.31, 0.01)]} />
        <lineBasicMaterial color={color} transparent opacity={hovered ? 1.0 : 0.6} />
      </lineSegments>
      <Text
        position={[0, 0, 0.05]}
        fontSize={0.062}
        color={hovered ? '#ffffff' : color}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}

export default function Skills3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  // Calculate Fibonacci / spherical distribution for skills tokens
  const tokenList = useMemo(() => {
    const list: Array<{ name: string; color: string; pos: [number, number, number] }> = [];
    let count = 0;
    const total = skillGroups.reduce((acc, g) => acc + g.skills.length, 0);

    skillGroups.forEach((group) => {
      group.skills.forEach((skill) => {
        const phi = Math.acos(-1 + (2 * count) / total);
        const theta = Math.sqrt(total * Math.PI) * phi;
        const radius = 2.4;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.cos(phi) * 0.75;
        const z = radius * Math.sin(theta) * Math.sin(phi);
        list.push({
          name: skill,
          color: group.color,
          pos: [x, y, z],
        });
        count++;
      });
    });
    return list;
  }, []);

  return (
    <group position={[0, -15.8, 0]}>
      {/* Central Gravitational Core */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.55, 1]} />
          <meshStandardMaterial color="#22d3ee" wireframe metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>

      {/* Rotating Spherical Constellation of Skills Tokens */}
      <group ref={groupRef}>
        {tokenList.map((t, idx) => (
          <SkillToken
            key={t.name}
            name={t.name}
            color={t.color}
            position={t.pos}
            index={idx}
          />
        ))}
      </group>
    </group>
  );
}
