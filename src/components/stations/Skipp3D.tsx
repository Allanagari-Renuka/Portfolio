'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

function PhoneModel({
  position,
  rotation,
  title,
  screenColor,
  accentColor,
  statusText,
  etaText,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  screenColor: string;
  accentColor: string;
  statusText: string;
  etaText: string;
}) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const { pointer } = state;
    // Interactive tilt to follow cursor
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      rotation[0] + (hovered ? -pointer.y * 0.25 : 0),
      0.08
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      rotation[1] + (hovered ? pointer.x * 0.3 : 0),
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
      scale={hovered ? 1.05 : 1.0}
    >
      {/* Phone chassis with metallic chamfers */}
      <RoundedBox args={[1.5, 2.7, 0.12]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color="#0b1329" metalness={0.9} roughness={0.2} />
      </RoundedBox>

      {/* Outer chamfer edge glow */}
      <lineSegments position={[0, 0, 0.06]}>
        <edgesGeometry args={[new THREE.BoxGeometry(1.51, 2.71, 0.02)]} />
        <lineBasicMaterial color={accentColor} transparent opacity={hovered ? 1.0 : 0.6} />
      </lineSegments>

      {/* Screen glass */}
      <mesh position={[0, 0, 0.065]}>
        <planeGeometry args={[1.36, 2.5]} />
        <meshBasicMaterial color={screenColor} />
      </mesh>

      {/* Speaker / camera pill */}
      <mesh position={[0, 1.15, 0.07]}>
        <capsuleGeometry args={[0.025, 0.18, 4, 8]} />
        <meshBasicMaterial color="#020617" />
      </mesh>

      {/* 3D App UI Header */}
      <mesh position={[0, 0.95, 0.07]}>
        <planeGeometry args={[1.2, 0.22]} />
        <meshBasicMaterial color="#020617" />
      </mesh>
      <Text
        position={[-0.5, 0.95, 0.08]}
        fontSize={0.075}
        color={accentColor}
        anchorX="left"
        anchorY="middle"
      >
        SKIPP // {title.toUpperCase()}
      </Text>

      {/* 3D Order Status Card */}
      <mesh position={[0, 0.45, 0.07]}>
        <planeGeometry args={[1.2, 0.55]} />
        <meshBasicMaterial color="#030712" />
      </mesh>
      <Text
        position={[-0.5, 0.56, 0.08]}
        fontSize={0.065}
        color="#94a3b8"
        anchorX="left"
        anchorY="middle"
      >
        ACTIVE TICKET #SK-8041
      </Text>
      <Text
        position={[-0.5, 0.42, 0.08]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="left"
        anchorY="middle"
      >
        {statusText}
      </Text>
      <Text
        position={[0.5, 0.42, 0.08]}
        fontSize={0.08}
        color={accentColor}
        anchorX="right"
        anchorY="middle"
      >
        {etaText}
      </Text>

      {/* Telemetry Route Track */}
      <mesh position={[0, -0.2, 0.07]}>
        <planeGeometry args={[1.2, 0.55]} />
        <meshBasicMaterial color="#020617" />
      </mesh>
      <Text
        position={[-0.5, -0.2, 0.08]}
        fontSize={0.06}
        color="#64748b"
        anchorX="left"
        anchorY="middle"
      >
        Live Geofenced GPS Checkpoints
      </Text>

      {/* Payment / Verification Pill */}
      <mesh position={[0, -0.8, 0.07]}>
        <planeGeometry args={[1.2, 0.3]} />
        <meshBasicMaterial color="#0b1120" />
      </mesh>
      <Text
        position={[-0.5, -0.8, 0.08]}
        fontSize={0.068}
        color="#10b981"
        anchorX="left"
        anchorY="middle"
      >
        ✓ Razorpay Verified • Instant Pass
      </Text>
    </group>
  );
}

export default function Skipp3D() {
  const trailRef = useRef<THREE.Group>(null);
  const particleRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!particleRef.current) return;
    const t = (state.clock.getElapsedTime() * 0.8) % 1;
    // Moving energy pulse sphere between customer and restaurant
    particleRef.current.position.x = -1.1 + t * 2.2;
    particleRef.current.position.y = Math.sin(t * Math.PI) * 0.4;
  });

  return (
    <group position={[0, -23.6, 0]}>
      {/* Floating Dual Device Showcase */}
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.3}>
        <group position={[0, 0, 0]}>
          {/* Customer Pre-Order Phone (Angled Left) */}
          <PhoneModel
            position={[-1.1, 0.1, 0.2]}
            rotation={[0.08, 0.22, -0.05]}
            title="Customer App"
            screenColor="#070d1a"
            accentColor="#38bdf8"
            statusText="Kitchen Preparing Meal"
            etaText="~7 MIN ETA"
          />

          {/* Central Server Sync Energy Node */}
          <group position={[0, 0, -0.2]}>
            <mesh>
              <sphereGeometry args={[0.18, 16, 16]} />
              <meshStandardMaterial color="#22d3ee" wireframe />
            </mesh>
            <Text
              position={[0, -0.35, 0]}
              fontSize={0.06}
              color="#38bdf8"
              anchorX="center"
              anchorY="middle"
            >
              REDIS PUB/SUB • &lt;50MS
            </Text>
          </group>

          {/* Animated Connecting Pulse Sphere */}
          <group ref={trailRef} position={[0, 0.1, 0]}>
            {/* Guide curve line */}
            <mesh position={[0, 0.1, 0]}>
              <boxGeometry args={[2.2, 0.015, 0.015]} />
              <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
            </mesh>
            {/* Pulsing energy packet */}
            <mesh ref={particleRef} position={[-1.1, 0.1, 0]}>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshBasicMaterial color="#22d3ee" />
            </mesh>
          </group>

          {/* Restaurant Partner App Phone (Angled Right) */}
          <PhoneModel
            position={[1.1, -0.1, -0.1]}
            rotation={[0.06, -0.2, 0.04]}
            title="Restaurant Terminal"
            screenColor="#080e18"
            accentColor="#22d3ee"
            statusText="Incoming Ticket #104"
            etaText="ACCEPTED"
          />
        </group>
      </Float>
    </group>
  );
}
