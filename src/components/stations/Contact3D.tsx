'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

export default function Contact3D() {
  const knotRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 0.35;
      knotRef.current.rotation.y += delta * 0.45;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.2;
    }
  });

  const channels = [
    { label: 'EMAIL', value: 'allanagarirenuka28@gmail.com', color: '#38bdf8', pos: [-1.6, -1.0, 0] as [number, number, number] },
    { label: 'PHONE', value: '+91 9392809600', color: '#10b981', pos: [-0.5, -1.0, 0] as [number, number, number] },
    { label: 'GITHUB', value: '@Allanagari-Renuka', color: '#ffffff', pos: [0.5, -1.0, 0] as [number, number, number] },
    { label: 'LINKEDIN', value: 'allanagari-renuka', color: '#818cf8', pos: [1.6, -1.0, 0] as [number, number, number] },
  ];

  return (
    <group position={[0, -47.6, 0]}>
      {/* Central Rotating Torus Knot Cosmic Core */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh ref={knotRef} position={[0, 0.4, 0]}>
          <torusKnotGeometry args={[0.7, 0.22, 100, 16]} />
          <meshStandardMaterial
            color="#e879f9"
            emissive="#4a044e"
            metalness={0.9}
            roughness={0.15}
            wireframe
          />
        </mesh>
      </Float>

      {/* Orbiting Ring */}
      <group ref={ringRef} position={[0, 0.4, 0]}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.7, 0.015, 8, 48]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* 4 Interactive Channel Nodes in 3D */}
      <group position={[0, 0, 0]}>
        {channels.map((ch) => (
          <group key={ch.label} position={ch.pos}>
            <mesh>
              <boxGeometry args={[0.9, 0.35, 0.05]} />
              <meshStandardMaterial color="#0b1329" metalness={0.8} roughness={0.2} />
            </mesh>
            <lineSegments position={[0, 0, 0.03]}>
              <edgesGeometry args={[new THREE.BoxGeometry(0.91, 0.36, 0.01)]} />
              <lineBasicMaterial color={ch.color} transparent opacity={0.6} />
            </lineSegments>
            <Text
              position={[0, 0.05, 0.04]}
              fontSize={0.055}
              color={ch.color}
              anchorX="center"
              anchorY="middle"
            >
              {ch.label}
            </Text>
            <Text
              position={[0, -0.06, 0.04]}
              fontSize={0.045}
              color="#94a3b8"
              anchorX="center"
              anchorY="middle"
            >
              {ch.value}
            </Text>
          </group>
        ))}
      </group>
    </group>
  );
}
