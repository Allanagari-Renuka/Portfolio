'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function Hero3D() {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.y += delta * 0.35;
    }
  });

  const techIcons = [
    { label: 'REACT', color: '#38bdf8' },
    { label: 'NEXT.JS', color: '#ffffff' },
    { label: 'NODE.JS', color: '#22c55e' },
    { label: 'PYTHON', color: '#fbbf24' },
    { label: 'POSTGRES', color: '#60a5fa' },
    { label: 'DOCKER', color: '#38bdf8' },
  ];

  return (
    <group position={[0, 0, 0]}>
      {/* 3D Floating Name: RENUKA */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <group position={[0, 0.4, 0]}>
          {/* Main 3D Title Block */}
          <Text
            fontSize={1.1}
            letterSpacing={0.12}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            RENUKA
            <meshStandardMaterial
              color="#f8fafc"
              metalness={0.9}
              roughness={0.15}
            />
          </Text>

          {/* Underline Energy Bar */}
          <mesh position={[0, -0.65, 0]}>
            <boxGeometry args={[3.2, 0.04, 0.1]} />
            <meshBasicMaterial color="#22d3ee" />
          </mesh>
        </group>
      </Float>

      {/* Orbiting Ring of Tech Nodes */}
      <group ref={ringRef} position={[0, 0.3, 0]}>
        {techIcons.map((t, idx) => {
          const angle = (idx / techIcons.length) * Math.PI * 2;
          const radius = 2.8;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return (
            <group key={t.label} position={[x, 0, z]}>
              <mesh>
                <boxGeometry args={[0.55, 0.28, 0.05]} />
                <meshStandardMaterial
                  color="#090d16"
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
              <lineSegments position={[0, 0, 0.03]}>
                <edgesGeometry args={[new THREE.BoxGeometry(0.56, 0.29, 0.01)]} />
                <lineBasicMaterial color={t.color} />
              </lineSegments>
              <Text
                position={[0, 0, 0.04]}
                fontSize={0.065}
                color={t.color}
                anchorX="center"
                anchorY="middle"
              >
                {t.label}
              </Text>
            </group>
          );
        })}
      </group>

      {/* Reflective Grid Floor */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mirror={0.4}
          mixBlur={0.8}
          mixStrength={1.5}
          roughness={0.3}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#05060a"
          metalness={0.7}
        />
      </mesh>
      <gridHelper args={[20, 30, '#22d3ee', '#1e293b']} position={[0, -1.79, 0]} />
    </group>
  );
}
