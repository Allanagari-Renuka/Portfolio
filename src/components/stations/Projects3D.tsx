'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

function GalleryCard({
  position,
  rotation,
  title,
  subtitle,
  badge,
  color,
  demoUrl,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  demoUrl?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const { pointer } = state;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      rotation[0] + (hovered ? -pointer.y * 0.2 : 0),
      0.08
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      rotation[1] + (hovered ? pointer.x * 0.2 : 0),
      0.08
    );
  });

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.08 : 1.0}
      onClick={() => {
        if (demoUrl) window.open(demoUrl, '_blank');
      }}
    >
      {/* 3D Curved Gallery Card Chassis */}
      <mesh>
        <boxGeometry args={[1.6, 2.1, 0.08]} />
        <meshStandardMaterial
          color={hovered ? '#0f172a' : '#080d19'}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <lineSegments position={[0, 0, 0.045]}>
        <edgesGeometry args={[new THREE.BoxGeometry(1.61, 2.11, 0.01)]} />
        <lineBasicMaterial color={color} transparent opacity={hovered ? 1.0 : 0.6} />
      </lineSegments>

      {/* Badge */}
      <mesh position={[0, 0.8, 0.05]}>
        <planeGeometry args={[1.3, 0.22]} />
        <meshBasicMaterial color="#020617" />
      </mesh>
      <Text
        position={[0, 0.8, 0.06]}
        fontSize={0.065}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {badge}
      </Text>

      {/* Screen / Vis Center */}
      <mesh position={[0, 0.15, 0.05]}>
        <planeGeometry args={[1.35, 0.9]} />
        <meshBasicMaterial color="#070c18" />
      </mesh>
      <Text
        position={[0, 0.25, 0.06]}
        fontSize={0.085}
        color="#ffffff"
        maxWidth={1.25}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
      <Text
        position={[0, -0.05, 0.06]}
        fontSize={0.058}
        color="#94a3b8"
        maxWidth={1.25}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {subtitle}
      </Text>

      {/* Interactive Action Pill */}
      <mesh position={[0, -0.7, 0.05]}>
        <planeGeometry args={[1.2, 0.28]} />
        <meshBasicMaterial color={hovered ? color : '#0f172a'} />
      </mesh>
      <Text
        position={[0, -0.7, 0.06]}
        fontSize={0.062}
        color={hovered ? '#020617' : '#ffffff'}
        anchorX="center"
        anchorY="middle"
      >
        {demoUrl ? 'Launch Live Demo ↗' : 'View Architecture'}
      </Text>
    </group>
  );
}

export default function Projects3D() {
  const cards = [
    {
      title: 'Thyroid Disease Diagnosis',
      subtitle: 'CNN/RNN Hybrid Clinical AI Pipeline',
      badge: 'DEEP LEARNING MODEL',
      color: '#06b6d4',
      demoUrl: 'https://diagnosis-of-a-thyroid-using-cnn-and-rnn-f7ku.onrender.com/',
      pos: [-1.9, 0, 0] as [number, number, number],
      rot: [0, 0.22, 0] as [number, number, number],
    },
    {
      title: 'Sign Language Recognition',
      subtitle: 'CNN/LSTM 30 FPS Computer Vision',
      badge: 'REAL-TIME VISION',
      color: '#e879f9',
      demoUrl: 'https://sign-language-recognition-1-ncse.onrender.com/',
      pos: [0, 0.1, 0.2] as [number, number, number],
      rot: [0, 0, 0] as [number, number, number],
    },
    {
      title: 'Bursana & Core Careers',
      subtitle: 'Wholesale B2B & Recruitment SaaS',
      badge: 'ENTERPRISE PRODUCTION',
      color: '#34d399',
      pos: [1.9, 0, 0] as [number, number, number],
      rot: [0, -0.22, 0] as [number, number, number],
    },
  ];

  return (
    <group position={[0, -31.6, 0]}>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.25}>
        <group>
          {cards.map((c) => (
            <GalleryCard
              key={c.title}
              position={c.pos}
              rotation={c.rot}
              title={c.title}
              subtitle={c.subtitle}
              badge={c.badge}
              color={c.color}
              demoUrl={c.demoUrl}
            />
          ))}
        </group>
      </Float>
    </group>
  );
}
